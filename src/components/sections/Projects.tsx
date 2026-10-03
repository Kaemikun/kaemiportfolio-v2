import { useRef } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'
import { Github, ExternalLink } from 'lucide-react'
import { profile } from '../../data/profile'
import { fadeUp, revealViewport, staggerContainer } from '../../lib/scrollReveal'

interface Project {
  name: string
  description: string
  stack: string[]
  github: string
  live: string
  highlight: boolean
}

function ProjectCard({ project }: { project: Project }) {
  const ref = useRef<HTMLDivElement>(null)
  const rotateX = useSpring(useMotionValue(0), { stiffness: 150, damping: 15 })
  const rotateY = useSpring(useMotionValue(0), { stiffness: 150, damping: 15 })

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const px = (e.clientX - rect.left) / rect.width - 0.5
    const py = (e.clientY - rect.top) / rect.height - 0.5
    rotateY.set(px * 10)
    rotateX.set(py * -10)
  }

  const handleMouseLeave = () => {
    rotateX.set(0)
    rotateY.set(0)
  }

  return (
    <motion.div
      ref={ref}
      variants={fadeUp}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY, transformPerspective: 800 }}
      data-cursor-hover
      className={`group relative rounded-2xl border p-6 transition-colors ${
        project.highlight
          ? 'border-accent/30 bg-gradient-to-br from-surface2 to-surface'
          : 'border-white/10 bg-surface/60'
      } hover:border-accent/50`}
    >
      <div className="flex items-start justify-between">
        <h3 className="text-xl font-semibold text-white">{project.name}</h3>
        <div className="flex gap-3 text-muted">
          <a href={project.github} target="_blank" rel="noreferrer" data-cursor-hover className="hover:text-accent">
            <Github size={18} />
          </a>
          <a href={project.live} target="_blank" rel="noreferrer" data-cursor-hover className="hover:text-accent">
            <ExternalLink size={18} />
          </a>
        </div>
      </div>

      <p className="mt-3 text-muted">{project.description}</p>

      <div className="mt-5 flex flex-wrap gap-2">
        {project.stack.map((tech) => (
          <span key={tech} className="rounded-full bg-white/5 px-2.5 py-1 text-xs text-accent2">
            {tech}
          </span>
        ))}
      </div>
    </motion.div>
  )
}

export default function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-5xl px-4 py-16 sm:px-6 sm:py-20">
      <motion.div initial="hidden" whileInView="visible" viewport={revealViewport} variants={staggerContainer}>
        <motion.p variants={fadeUp} className="font-mono text-sm text-accent">
          04 / projects
        </motion.p>
        <motion.h2 variants={fadeUp} className="mt-2 text-3xl font-bold text-white sm:text-4xl">
          Things I've built
        </motion.h2>

        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          {profile.projects.map((project) => (
            <ProjectCard key={project.name} project={project} />
          ))}
        </div>
      </motion.div>
    </section>
  )
}
