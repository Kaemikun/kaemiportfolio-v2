import { motion } from 'framer-motion'
import { profile } from '../../data/profile'
import { fadeUp, revealViewport, staggerContainer } from '../../lib/scrollReveal'

export default function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-5xl px-4 py-16 sm:px-6 sm:py-20">
      <motion.div initial="hidden" whileInView="visible" viewport={revealViewport} variants={staggerContainer}>
        <motion.p variants={fadeUp} className="font-mono text-sm text-accent">
          02 / skills
        </motion.p>
        <motion.h2 variants={fadeUp} className="mt-2 text-3xl font-bold text-white sm:text-4xl">
          What I work with
        </motion.h2>

        <div className="mt-10 grid gap-5 sm:grid-cols-2">
          {profile.skills.map((group) => (
            <motion.div
              key={group.category}
              variants={fadeUp}
              data-cursor-hover
              className="rounded-2xl border border-white/10 bg-surface/60 p-6 transition-colors hover:border-accent/40"
            >
              <h3 className="font-mono text-sm text-accent2">{group.category}</h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm text-slate-200"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
