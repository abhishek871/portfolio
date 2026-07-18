import { profile } from '../data/content.js'
import './contact.css'

const icons = {
  github: 'GitHub',
  linkedin: 'LinkedIn',
  leetcode: 'LeetCode',
  mail: 'Email',
}

export default function Contact() {
  return (
    <section className="section" id="contact">
      <div className="container">
        <div className="contact-card">
          <div className="blob blob-yellow" aria-hidden="true" style={{ opacity: 0.35 }} />
          <span className="eyebrow">let's talk</span>
          <h2 className="contact-title">Got a role, a project, or just a hello? 👋</h2>
          <p className="contact-sub">
            I'm {profile.availability.toLowerCase()}. The fastest way to get a sense
            of me — <button className="link-btn" onClick={() => window.dispatchEvent(new CustomEvent('open-chat'))}>ask my AI assistant</button> anything, or reach out directly.
          </p>

          <div className="contact-actions">
            <a className="btn" href={`mailto:${profile.email}`}>✉️ Say hello</a>
            <a className="btn btn-ghost" href={profile.resumeUrl} target="_blank" rel="noreferrer">📄 Resume</a>
          </div>

          <div className="socials">
            {profile.socials.map((s) => (
              <a key={s.label} href={s.url} target="_blank" rel="noreferrer" className="social-link">
                {icons[s.icon] || s.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
