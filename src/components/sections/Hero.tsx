import { motion } from 'framer-motion'
import { ArrowDown, TerminalSquare } from 'lucide-react'
import { profile } from '../../data/profile'
import Hero3DScene from '../Hero3D/Scene'

interface HeroProps {
  onOpenTerminal: () => void
}

export default function Hero({ onOpenTerminal }: HeroProps) {
  return (
    <section id="home" className="relative flex min-h-screen items-center overflow-hidden">
      <Hero3DScene />

      <div className="relative z-10 mx-auto w-full max-w-5xl px-4 sm:px-6">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.5 }}
          className="font-mono text-sm text-accent"
        >
          hi, I&apos;m
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="mt-2 text-4xl font-extrabold tracking-tight text-white sm:text-6xl md:text-7xl"
        >
          {profile.name}
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="mt-3 text-2xl font-semibold text-muted sm:text-3xl"
        >
          {profile.role}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="mt-6 max-w-xl text-lg text-muted"
        >
          {profile.tagline}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <a
            href="#projects"
            data-cursor-hover
            className="rounded-full bg-accent px-6 py-3 text-sm font-semibold text-black transition-transform hover:scale-105"
          >
            View my work
          </a>
          <button
            onClick={onOpenTerminal}
            data-cursor-hover
            className="flex items-center gap-2 rounded-full border border-white/15 px-6 py-3 text-sm font-semibold text-white transition-colors hover:border-accent/60 hover:text-accent"
          >
            <TerminalSquare size={16} />
            Try the terminal
          </button>
        </motion.div>
      </div>

      <motion.a
        href="#about"
        data-cursor-hover
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute bottom-10 left-1/2 z-10 -translate-x-1/2 text-muted hover:text-white"
      >
        <ArrowDown size={20} />
      </motion.a>
    </section>
  )
}
