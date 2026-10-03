import { useState } from 'react'
import CustomCursor from './components/CustomCursor'
import Navbar from './components/Navbar'
import Terminal from './components/Terminal/Terminal'
import Hero from './components/sections/Hero'
import About from './components/sections/About'
import Skills from './components/sections/Skills'
import Experience from './components/sections/Experience'
import Projects from './components/sections/Projects'
import GithubStats from './components/sections/GithubStats'
import Contact from './components/sections/Contact'

export default function App() {
  const [terminalOpen, setTerminalOpen] = useState(false)

  return (
    <div className="relative min-h-screen bg-bg text-slate-100">
      <CustomCursor />
      <Navbar onOpenTerminal={() => setTerminalOpen(true)} />
      <Terminal open={terminalOpen} onClose={() => setTerminalOpen(false)} />

      <main>
        <Hero onOpenTerminal={() => setTerminalOpen(true)} />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <GithubStats />
        <Contact />
      </main>
    </div>
  )
}
