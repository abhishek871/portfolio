import { motion } from 'framer-motion'
import { profile, funFacts } from '../data/content.js'
import './about.css'

export default function About() {
  return (
    <section className="section about" id="about">
      <div className="container about-grid">
        <div>
          <span className="eyebrow">the human</span>
          <h2 className="about-title">A bit about me 🙋</h2>
          <p className="about-lead">{profile.blurb}</p>
          <p className="about-lead">
            When I'm not shipping, I'm probably tweaking a hover state, reading a
            spec, or chasing a few milliseconds off a render. I care about the
            craft — and about making things people actually enjoy using.
          </p>
        </div>

        <motion.ul
          className="fun-facts"
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ type: 'spring', stiffness: 90, damping: 15 }}
        >
          <li className="fun-facts-title">✨ fun facts</li>
          {funFacts.map((f) => (
            <li key={f} className="fun-fact">{f}</li>
          ))}
        </motion.ul>
      </div>
    </section>
  )
}
