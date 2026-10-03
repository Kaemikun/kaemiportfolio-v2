import { motion } from 'framer-motion'
import { Github, Star, Users, GitFork } from 'lucide-react'
import { profile } from '../../data/profile'
import { useGithubStats } from '../../hooks/useGithubStats'
import { fadeUp, revealViewport, staggerContainer } from '../../lib/scrollReveal'

const LANG_COLORS: Record<string, string> = {
  TypeScript: '#5eead4',
  JavaScript: '#facc15',
  Python: '#60a5fa',
  Go: '#38bdf8',
  Java: '#f97316',
  HTML: '#fb7185',
  CSS: '#a78bfa',
  Shell: '#34d399',
}

function StatTile({ icon, label, value }: { icon: React.ReactNode; label: string; value: number | string }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-surface/60 p-5">
      <div className="flex items-center gap-2 text-muted">
        {icon}
        <span className="text-xs uppercase tracking-wide">{label}</span>
      </div>
      <p className="mt-2 text-3xl font-bold text-white">{value}</p>
    </div>
  )
}

export default function GithubStats() {
  const { stats, status } = useGithubStats(profile.githubUsername)
  const maxCount = stats?.topLanguages[0]?.count ?? 1

  return (
    <section id="github" className="mx-auto max-w-5xl px-6 py-20">
      <motion.div initial="hidden" whileInView="visible" viewport={revealViewport} variants={staggerContainer}>
        <motion.p variants={fadeUp} className="font-mono text-sm text-accent">
          05 / live from github
        </motion.p>
        <motion.h2 variants={fadeUp} className="mt-2 flex items-center gap-3 text-3xl font-bold text-white sm:text-4xl">
          <Github size={28} />
          Pulled straight from the source
        </motion.h2>

        {status === 'error' && (
          <motion.p variants={fadeUp} className="mt-6 text-muted">
            Couldn&apos;t reach the GitHub API right now — check back later, or visit{' '}
            <a href={profile.social.github} data-cursor-hover className="text-accent underline">
              the profile directly
            </a>
            .
          </motion.p>
        )}

        {status === 'loading' && (
          <motion.p variants={fadeUp} className="mt-6 font-mono text-sm text-muted">
            fetching live stats...
          </motion.p>
        )}

        {status === 'success' && stats && (
          <>
            <motion.div variants={fadeUp} className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
              <StatTile icon={<GitFork size={16} />} label="Repos" value={stats.publicRepos} />
              <StatTile icon={<Star size={16} />} label="Total stars" value={stats.totalStars} />
              <StatTile icon={<Users size={16} />} label="Followers" value={stats.followers} />
              <StatTile icon={<Users size={16} />} label="Following" value={stats.following} />
            </motion.div>

            {stats.topLanguages.length > 0 && (
              <motion.div variants={fadeUp} className="mt-6 rounded-2xl border border-white/10 bg-surface/60 p-6">
                <h3 className="font-mono text-sm text-accent2">Top languages (by repo count)</h3>
                <div className="mt-4 space-y-3">
                  {stats.topLanguages.map((lang) => (
                    <div key={lang.name}>
                      <div className="flex justify-between text-sm text-slate-300">
                        <span>{lang.name}</span>
                        <span className="text-muted">{lang.count}</span>
                      </div>
                      <div className="mt-1 h-1.5 w-full overflow-hidden rounded-full bg-white/5">
                        <motion.div
                          className="h-full rounded-full"
                          style={{ backgroundColor: LANG_COLORS[lang.name] ?? '#8b93a7' }}
                          initial={{ width: 0 }}
                          whileInView={{ width: `${(lang.count / maxCount) * 100}%` }}
                          viewport={revealViewport}
                          transition={{ duration: 0.8, ease: 'easeOut' }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}
          </>
        )}
      </motion.div>
    </section>
  )
}
