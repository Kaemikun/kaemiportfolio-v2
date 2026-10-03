import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, Twitter } from 'lucide-react'
import { profile } from '../../data/profile'
import { fadeUp, revealViewport, staggerContainer } from '../../lib/scrollReveal'

export default function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-3xl px-4 py-20 sm:px-6 sm:py-28 text-center">
      <motion.div initial="hidden" whileInView="visible" viewport={revealViewport} variants={staggerContainer}>
        <motion.p variants={fadeUp} className="font-mono text-sm text-accent">
          06 / contact
        </motion.p>
        <motion.h2 variants={fadeUp} className="mt-2 text-3xl font-bold text-white sm:text-4xl">
          Let's build something
        </motion.h2>
        <motion.p variants={fadeUp} className="mx-auto mt-4 max-w-md text-muted">
          Have a role, a project, or just want to talk shop? My inbox is open.
        </motion.p>

        <motion.a
          variants={fadeUp}
          href={profile.social.email}
          data-cursor-hover
          className="mt-8 inline-block rounded-full bg-accent px-8 py-3 text-sm font-semibold text-black transition-transform hover:scale-105"
        >
          Say hello
        </motion.a>

        <motion.div variants={fadeUp} className="mt-10 flex justify-center gap-6 text-muted">
          <a href={profile.social.github} data-cursor-hover className="hover:text-accent" aria-label="GitHub">
            <Github size={22} />
          </a>
          <a href={profile.social.linkedin} data-cursor-hover className="hover:text-accent" aria-label="LinkedIn">
            <Linkedin size={22} />
          </a>
          <a href={profile.social.twitter} data-cursor-hover className="hover:text-accent" aria-label="Twitter">
            <Twitter size={22} />
          </a>
          <a href={profile.social.email} data-cursor-hover className="hover:text-accent" aria-label="Email">
            <Mail size={22} />
          </a>
        </motion.div>

        <motion.p variants={fadeUp} className="mt-16 font-mono text-xs text-muted">
          built with react, three.js, and an unreasonable amount of care.
        </motion.p>
      </motion.div>
    </section>
  )
}
