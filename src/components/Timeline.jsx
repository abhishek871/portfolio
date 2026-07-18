import { motion } from 'framer-motion'
import { timeline } from '../data/content.js'
import './timeline.css'

export default function Timeline() {
  return (
    <section className="section" id="journey">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">the journey</span>
          <h2>How I got here 🧭</h2>
        </div>

        <ol className="timeline">
          {timeline.map((t, i) => (
            <motion.li
              key={t.when + t.what}
              className="timeline-item"
              initial={{ opacity: 0, x: -18 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ type: 'spring', stiffness: 90, damping: 15, delay: i * 0.05 }}
            >
              <span className="timeline-dot" aria-hidden="true" />
              <div className="timeline-when">{t.when}</div>
              <div className="timeline-card sticker">
                <h3>{t.what} <span className="timeline-where">@ {t.where}</span></h3>
                <p>{t.detail}</p>
              </div>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  )
}
