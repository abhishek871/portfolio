import { profile } from '../data/content.js'

export default function Nav({ onToggleTheme }) {
  return (
    <nav className="nav">
      <a href="#top" className="brand">{profile.firstName} ✦</a>
      <div className="nav-links">
        <a href="#work" className="hide-sm">work</a>
        <a href="#about" className="hide-sm">about</a>
        <a href="#skills" className="hide-sm">skills</a>
        <a href="#contact">hire me</a>
        <button className="theme-toggle" onClick={onToggleTheme} aria-label="Toggle light/dark theme" title="Toggle theme">
          <span aria-hidden="true">◐</span>
        </button>
      </div>
    </nav>
  )
}
