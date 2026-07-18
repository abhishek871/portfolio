import { useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { profile } from '../data/content.js'
import './chatbot.css'

const SUGGESTIONS = [
  'What are you best at?',
  'Tell me about the 99acres work',
  'Why should we hire you?',
  'What tech do you love?',
]

const greeting = {
  role: 'assistant',
  content: `Hey! 👋 I'm ${profile.firstName}'s AI twin. Ask me anything about my work, skills, or what I'm looking for.`,
}

export default function ChatBot() {
  const [open, setOpen] = useState(false)
  const [messages, setMessages] = useState([greeting])
  const [input, setInput] = useState('')
  const [busy, setBusy] = useState(false)
  const scrollRef = useRef(null)
  const inputRef = useRef(null)

  // Let other components (hero/contact buttons) open the chat
  useEffect(() => {
    const openChat = () => setOpen(true)
    window.addEventListener('open-chat', openChat)
    return () => window.removeEventListener('open-chat', openChat)
  }, [])

  useEffect(() => {
    if (open) inputRef.current?.focus()
  }, [open])

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: 'smooth' })
  }, [messages, busy])

  async function send(text) {
    const content = (text ?? input).trim()
    if (!content || busy) return
    setInput('')

    const nextMessages = [...messages, { role: 'user', content }]
    setMessages([...nextMessages, { role: 'assistant', content: '' }])
    setBusy(true)

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        // send only user/assistant turns (drop the local greeting)
        body: JSON.stringify({ messages: nextMessages.filter((m, i) => !(i === 0 && m === greeting)) }),
      })

      if (!res.ok || !res.body) {
        const msg = res.status === 503
          ? "My AI brain isn't switched on yet (the key's missing) — but you can email me directly!"
          : 'Hmm, my circuits hiccuped. Mind trying again in a sec?'
        setMessages((m) => setLast(m, msg))
        setBusy(false)
        return
      }

      const reader = res.body.getReader()
      const decoder = new TextDecoder()
      let acc = ''
      while (true) {
        const { done, value } = await reader.read()
        if (done) break
        acc += decoder.decode(value, { stream: true })
        setMessages((m) => setLast(m, acc))
      }
    } catch {
      setMessages((m) => setLast(m, 'Network gremlins! Try again, or just email me. 📧'))
    } finally {
      setBusy(false)
    }
  }

  return (
    <>
      <motion.button
        className="chat-fab"
        onClick={() => setOpen((o) => !o)}
        aria-label={open ? 'Close AI assistant' : 'Open AI assistant'}
        whileHover={{ scale: 1.06, rotate: -4 }}
        whileTap={{ scale: 0.94 }}
        initial={{ scale: 0, rotate: -30 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ type: 'spring', stiffness: 200, damping: 14, delay: 0.6 }}
      >
        <span aria-hidden="true">{open ? '✕' : '🤖'}</span>
        {!open && <span className="chat-fab-ping" aria-hidden="true" />}
      </motion.button>

      <AnimatePresence>
        {open && (
          <motion.div
            className="chat-panel sticker"
            role="dialog"
            aria-label="AI assistant"
            initial={{ opacity: 0, y: 24, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 24, scale: 0.96 }}
            transition={{ type: 'spring', stiffness: 220, damping: 22 }}
          >
            <div className="chat-head">
              <span className="chat-avatar" aria-hidden="true">🤖</span>
              <div>
                <strong>Ask my AI</strong>
                <span className="chat-status">{busy ? 'thinking…' : 'powered by Groq · ask away'}</span>
              </div>
              <button className="chat-close" onClick={() => setOpen(false)} aria-label="Close">✕</button>
            </div>

            <div className="chat-log" ref={scrollRef}>
              {messages.map((m, i) => (
                <div key={i} className={`bubble bubble-${m.role}`}>
                  {m.content || (busy && i === messages.length - 1 ? <TypingDots /> : '')}
                </div>
              ))}
            </div>

            {messages.length <= 1 && (
              <div className="chat-suggestions">
                {SUGGESTIONS.map((s) => (
                  <button key={s} onClick={() => send(s)} className="suggestion">{s}</button>
                ))}
              </div>
            )}

            <form
              className="chat-input"
              onSubmit={(e) => { e.preventDefault(); send() }}
            >
              <input
                ref={inputRef}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask me anything…"
                aria-label="Message"
                maxLength={1500}
              />
              <button type="submit" disabled={busy || !input.trim()} aria-label="Send">↑</button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

function setLast(messages, content) {
  const copy = messages.slice()
  copy[copy.length - 1] = { role: 'assistant', content }
  return copy
}

function TypingDots() {
  return (
    <span className="typing" aria-label="thinking">
      <span /><span /><span />
    </span>
  )
}
