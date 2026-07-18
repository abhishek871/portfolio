import { motion } from 'framer-motion'
import { skillGroups } from '../data/content.js'
import './skills.css'

export default function Skills() {
  return (
    <section className="section" id="skills">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">the toolbox</span>
          <h2>Things I'm handy with 🧰</h2>
        </div>

        <div className="skill-groups">
          {skillGroups.map((g, gi) => (
            <div className="skill-group" key={g.title}>
              <h3 className="skill-group-title">{g.title}</h3>
              <div className="skill-chips">
                {g.items.map((item, i) => (
                  <motion.span
                    key={item}
                    className="skill-chip"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ type: 'spring', stiffness: 260, damping: 18, delay: (gi * 4 + i) * 0.02 }}
                    whileHover={{ y: -3, rotate: i % 2 ? 2 : -2 }}
                  >
                    {item}
                  </motion.span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
