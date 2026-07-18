import { useEffect, useState } from 'react'
import Nav from './components/Nav.jsx'
import Hero from './components/Hero.jsx'
import Playground from './components/Playground.jsx'
import About from './components/About.jsx'
import Skills from './components/Skills.jsx'
import Timeline from './components/Timeline.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'
import ChatBot from './components/ChatBot.jsx'
import Presence from './components/Presence.jsx'
import './styles/app.css'

function getInitialTheme() {
  const saved = typeof localStorage !== 'undefined' && localStorage.getItem('theme')
  if (saved === 'light' || saved === 'dark') return saved
  return null // follow the OS
}

export default function App() {
  const [theme, setTheme] = useState(getInitialTheme)

  useEffect(() => {
    const root = document.documentElement
    if (theme) {
      root.setAttribute('data-theme', theme)
      localStorage.setItem('theme', theme)
    } else {
      root.removeAttribute('data-theme')
    }
  }, [theme])

  const toggleTheme = () => {
    setTheme((t) => {
      const isDark = t
        ? t === 'dark'
        : window.matchMedia('(prefers-color-scheme: dark)').matches
      return isDark ? 'light' : 'dark'
    })
  }

  return (
    <>
      <a href="#main" className="sr-only">Skip to content</a>
      <Presence />
      <Nav onToggleTheme={toggleTheme} />
      <main id="main">
        <Hero />
        <Playground />
        <About />
        <Skills />
        <Timeline />
        <Contact />
      </main>
      <Footer />
      <ChatBot />
    </>
  )
}
