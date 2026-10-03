import { motion } from 'framer-motion'
import { profile } from '../../data/profile'
import { fadeUp, revealViewport, staggerContainer } from '../../lib/scrollReveal'

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-3xl px-6 py-28">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={revealViewport}
        variants={staggerContainer}
      >
        <motion.p variants={fadeUp} className="font-mono text-sm text-accent">
          01 / about
        </motion.p>
        <motion.h2 variants={fadeUp} className="mt-2 text-3xl font-bold text-white sm:text-4xl">
          A little about me
        </motion.h2>

        <div className="mt-8 space-y-5">
          {profile.bio.map((paragraph, i) => (
            <motion.p key={i} variants={fadeUp} className="text-lg leading-relaxed text-muted">
              {paragraph}
            </motion.p>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
