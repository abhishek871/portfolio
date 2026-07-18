import { motion } from 'framer-motion'
import { projects } from '../data/content.js'
import './playground.css'

const accentShadow = {
  pink: 'var(--shadow-pink)',
  teal: 'var(--shadow-teal)',
  yellow: 'var(--shadow-yellow)',
}

export default function Playground() {
  return (
    <section className="section" id="work">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">the playground</span>
          <h2>Stuff I've built &amp; shipped 🛠️</h2>
          <p>A few things I'm proud of. Hover them — they're alive.</p>
        </div>

        <div className="project-grid">
          {projects.map((p, i) => (
            <motion.article
              key={p.title}
              className="project-card sticker"
              style={{ boxShadow: accentShadow[p.accent] || 'var(--shadow)' }}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ type: 'spring', stiffness: 90, damping: 14, delay: i * 0.06 }}
              whileHover={{ y: -6, rotate: i % 2 ? 1.5 : -1.5 }}
            >
              <div className="project-top">
                <span className="project-emoji" aria-hidden="true">{p.emoji}</span>
                {p.highlight && <span className="project-badge">{p.highlight}</span>}
              </div>
              <h3>{p.title}</h3>
              <p className="project-blurb">{p.blurb}</p>
              <div className="project-tags">
                {p.tags.map((t) => (
                  <span className="tag-chip" key={t}>{t}</span>
                ))}
              </div>
              {p.link && (
                <a className="project-link" href={p.link} target="_blank" rel="noreferrer">
                  Check it out ↗
                </a>
              )}
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
