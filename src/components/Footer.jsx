import { profile } from '../data/content.js'
import './footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <p className="footer-legend">
          <span className="cursor-chip" aria-hidden="true">➤ you</span>
          that little cursor following others around? that's the live crowd. 👀
        </p>
        <p className="footer-credit">
          Built with React, a sprinkle of AI (Groq), and WebSockets by{' '}
          <b>{profile.name}</b>. No templates were harmed. ✦
        </p>
      </div>
    </footer>
  )
}
