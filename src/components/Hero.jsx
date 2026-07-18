import { motion } from 'framer-motion'
import { profile } from '../data/content.js'
import './hero.css'

const spring = { type: 'spring', stiffness: 120, damping: 14 }

export default function Hero() {
  return (
    <header className="hero section" id="top">
      {/* decorative blobs */}
      <div className="blob blob-yellow" aria-hidden="true" />
      <div className="blob blob-teal" aria-hidden="true" />

      <div className="container hero-grid">
        <div className="hero-copy">
          <motion.span
            className="eyebrow"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...spring, delay: 0.05 }}
          >
            {profile.role}
          </motion.span>

          <motion.div
            className="wave"
            aria-hidden="true"
            initial={{ rotate: -20 }}
            animate={{ rotate: [0, 18, -8, 14, 0] }}
            transition={{ duration: 1.4, delay: 0.2 }}
          >
            👋
          </motion.div>

          <motion.h1
            className="hero-title"
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...spring, delay: 0.12 }}
          >
            Hey, I'm {profile.firstName} — I make the web{' '}
            <span className="tone-fun">fun</span> &amp; <span className="tone-fast">fast</span>.
          </motion.h1>

          <motion.p
            className="hero-sub"
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...spring, delay: 0.2 }}
          >
            {profile.blurb}
          </motion.p>

          <motion.div
            className="hero-cta"
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...spring, delay: 0.28 }}
          >
            <a href="#work" className="btn">See my playground →</a>
            <button
              className="btn btn-ghost"
              onClick={() => window.dispatchEvent(new CustomEvent('open-chat'))}
            >
              🤖 Ask my AI anything
            </button>
          </motion.div>
        </div>

        <motion.aside
          className="hero-card sticker"
          initial={{ opacity: 0, y: 20, rotate: 6 }}
          animate={{ opacity: 1, y: 0, rotate: 2 }}
          transition={{ ...spring, delay: 0.24 }}
          whileHover={{ rotate: 0, y: -4 }}
        >
          <div className="hero-card-emoji" aria-hidden="true">🚀</div>
          <div className="hero-card-label">Latest ship</div>
          <p className="hero-card-text">Rebuilt 99acres search — <b>40% faster</b>.</p>
          <div className="hero-stats">
            {profile.stats.map((s) => (
              <div key={s.label}>
                <b>{s.value}</b>
                <span>{s.label}</span>
              </div>
            ))}
          </div>
        </motion.aside>
      </div>
    </header>
  )
}
