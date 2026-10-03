import { motion } from 'framer-motion'
import { profile } from '../../data/profile'
import { fadeUp, revealViewport, staggerContainer } from '../../lib/scrollReveal'

export default function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-20">
      <motion.div initial="hidden" whileInView="visible" viewport={revealViewport} variants={staggerContainer}>
        <motion.p variants={fadeUp} className="font-mono text-sm text-accent">
          03 / experience
        </motion.p>
        <motion.h2 variants={fadeUp} className="mt-2 text-3xl font-bold text-white sm:text-4xl">
          Where I've been
        </motion.h2>

        <div className="mt-10 space-y-10 border-l border-white/10 pl-8">
          {profile.experience.map((job, i) => (
            <motion.div key={i} variants={fadeUp} className="relative">
              <span className="absolute -left-[37px] top-1.5 h-3 w-3 rounded-full border-2 border-accent bg-bg" />
              <p className="font-mono text-xs text-muted">{job.period}</p>
              <h3 className="mt-1 text-xl font-semibold text-white">
                {job.role} <span className="text-muted">@ {job.company}</span>
              </h3>
              <p className="mt-2 text-muted">{job.description}</p>
              {job.stack.length > 0 && (
                <div className="mt-3 flex flex-wrap gap-2">
                  {job.stack.map((tech) => (
                    <span key={tech} className="rounded-full bg-white/5 px-2.5 py-1 text-xs text-slate-300">
                      {tech}
                    </span>
                  ))}
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
