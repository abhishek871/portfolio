import { useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { supabase } from '../lib/supabase.js'
import './presence.css'

const REACTIONS = ['❤️', '🔥', '🎉', '🚀', '👏']
const REACTION_COOLDOWN_MS = 400

let idSeed = 0
// a stable-ish per-tab id for presence tracking
const clientId = `u_${Math.random().toString(36).slice(2)}_${Date.now().toString(36)}`

export default function Presence() {
  const [count, setCount] = useState(1)
  const [online, setOnline] = useState(false)
  const [floaters, setFloaters] = useState([])
  const [pickerOpen, setPickerOpen] = useState(false)
  const channelRef = useRef(null)
  const lastReactionAt = useRef(0)

  useEffect(() => {
    if (!supabase) return // realtime not configured yet → graceful "just you" mode

    const channel = supabase.channel('presence-main', {
      config: { presence: { key: clientId } },
    })
    channelRef.current = channel

    // Presence → live "X viewing now"
    channel.on('presence', { event: 'sync' }, () => {
      const state = channel.presenceState()
      setCount(Math.max(1, Object.keys(state).length))
    })

    // Broadcast → shared floating reactions
    channel.on('broadcast', { event: 'reaction' }, ({ payload }) => {
      spawnFloater(payload?.emoji || '🎉', typeof payload?.x === 'number' ? payload.x : 0.5)
    })

    channel.subscribe(async (status) => {
      if (status === 'SUBSCRIBED') {
        setOnline(true)
        await channel.track({ online_at: new Date().toISOString() })
      } else if (status === 'CHANNEL_ERROR' || status === 'TIMED_OUT' || status === 'CLOSED') {
        setOnline(false)
      }
    })

    return () => {
      supabase.removeChannel(channel)
      channelRef.current = null
    }
  }, [])

  function spawnFloater(emoji, x = 0.5) {
    const id = ++idSeed
    setFloaters((f) => [...f, { id, emoji, x }])
    setTimeout(() => setFloaters((f) => f.filter((it) => it.id !== id)), 2600)
  }

  function react(emoji) {
    const now = Date.now()
    if (now - lastReactionAt.current < REACTION_COOLDOWN_MS) return
    lastReactionAt.current = now

    const x = 0.5 + (Math.random() - 0.5) * 0.5 // jitter so they don't stack
    spawnFloater(emoji, x) // show my own instantly
    if (channelRef.current && online) {
      channelRef.current.send({ type: 'broadcast', event: 'reaction', payload: { emoji, x } })
    }
    setPickerOpen(false)
  }

  return (
    <>
      {/* Floating reactions rising up the screen */}
      <div className="floaters" aria-hidden="true">
        <AnimatePresence>
          {floaters.map((f) => (
            <motion.span
              key={f.id}
              className="floater"
              style={{ left: `${f.x * 100}%` }}
              initial={{ y: 0, opacity: 0, scale: 0.5 }}
              animate={{ y: -220, opacity: [0, 1, 1, 0], scale: 1, x: (Math.random() - 0.5) * 60 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 2.4, ease: 'easeOut' }}
            >
              {f.emoji}
            </motion.span>
          ))}
        </AnimatePresence>
      </div>

      {/* Presence badge + reaction launcher */}
      <div className="presence">
        <div className="presence-badge" title={online ? 'Live' : 'Just you (realtime offline)'}>
          <span className={`presence-dot ${online ? 'is-live' : ''}`} aria-hidden="true" />
          <span className="presence-count" aria-live="polite">
            {count === 1 ? "it's just you" : `${count} viewing now`}
          </span>
        </div>

        <div className="reaction-launcher">
          <AnimatePresence>
            {pickerOpen && (
              <motion.div
                className="reaction-picker"
                initial={{ opacity: 0, y: 8, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 8, scale: 0.9 }}
              >
                {REACTIONS.map((e) => (
                  <button key={e} className="reaction-opt" onClick={() => react(e)} aria-label={`React ${e}`}>
                    {e}
                  </button>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
          <button
            className="reaction-toggle"
            onClick={() => setPickerOpen((o) => !o)}
            aria-label="Send a reaction"
            aria-expanded={pickerOpen}
          >
            😍
          </button>
        </div>
      </div>
    </>
  )
}
