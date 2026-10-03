import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Menu, TerminalSquare, X } from 'lucide-react'
import { profile } from '../data/profile'

const links = [
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#experience', label: 'Experience' },
  { href: '#projects', label: 'Projects' },
  { href: '#contact', label: 'Contact' },
]

interface NavbarProps {
  onOpenTerminal: () => void
}

export default function Navbar({ onOpenTerminal }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={`fixed inset-x-0 top-0 z-50 transition-colors ${
        scrolled || menuOpen ? 'bg-bg/80 backdrop-blur-md border-b border-white/5' : 'bg-transparent'
      }`}
    >
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-4 py-4 sm:px-6">
        <a href="#home" data-cursor-hover className="font-mono text-sm font-semibold text-white">
          {profile.initials}<span className="text-accent">.</span>
        </a>

        <div className="hidden items-center gap-7 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              data-cursor-hover
              className="text-sm text-muted transition-colors hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={onOpenTerminal}
            data-cursor-hover
            className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-mono text-accent transition-colors hover:border-accent/50 hover:bg-accent/10"
          >
            <TerminalSquare size={14} />
            <span className="hidden sm:inline">open terminal</span>
          </button>

          <button
            onClick={() => setMenuOpen((v) => !v)}
            data-cursor-hover
            aria-label="Toggle menu"
            className="flex items-center justify-center rounded-full border border-white/10 bg-white/5 p-2 text-white md:hidden"
          >
            {menuOpen ? <X size={16} /> : <Menu size={16} />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden border-t border-white/5 bg-bg/95 backdrop-blur-md md:hidden"
          >
            <div className="flex flex-col gap-1 px-4 py-4">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  data-cursor-hover
                  onClick={() => setMenuOpen(false)}
                  className="rounded-lg px-3 py-2.5 text-sm text-muted transition-colors hover:bg-white/5 hover:text-white"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
