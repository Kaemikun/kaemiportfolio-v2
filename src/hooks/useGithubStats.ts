import { useEffect, useState } from 'react'

export interface GithubStats {
  publicRepos: number
  followers: number
  following: number
  totalStars: number
  topLanguages: { name: string; count: number }[]
  avatarUrl: string
  profileUrl: string
}

type Status = 'loading' | 'success' | 'error'

interface GithubRepo {
  stargazers_count: number
  language: string | null
  fork: boolean
}

interface GithubUser {
  public_repos: number
  followers: number
  following: number
  avatar_url: string
  html_url: string
}

export function useGithubStats(username: string) {
  const [status, setStatus] = useState<Status>('loading')
  const [stats, setStats] = useState<GithubStats | null>(null)

  useEffect(() => {
    let cancelled = false

    async function load() {
      setStatus('loading')
      try {
        const [userRes, reposRes] = await Promise.all([
          fetch(`https://api.github.com/users/${username}`),
          fetch(`https://api.github.com/users/${username}/repos?per_page=100&sort=updated`),
        ])

        if (!userRes.ok || !reposRes.ok) {
          throw new Error('GitHub API request failed')
        }

        const user: GithubUser = await userRes.json()
        const repos: GithubRepo[] = await reposRes.json()

        const totalStars = repos.reduce((sum, r) => sum + (r.stargazers_count ?? 0), 0)

        const langCounts = new Map<string, number>()
        for (const r of repos) {
          if (r.fork || !r.language) continue
          langCounts.set(r.language, (langCounts.get(r.language) ?? 0) + 1)
        }
        const topLanguages = [...langCounts.entries()]
          .sort((a, b) => b[1] - a[1])
          .slice(0, 5)
          .map(([name, count]) => ({ name, count }))

        if (cancelled) return
        setStats({
          publicRepos: user.public_repos,
          followers: user.followers,
          following: user.following,
          totalStars,
          topLanguages,
          avatarUrl: user.avatar_url,
          profileUrl: user.html_url,
        })
        setStatus('success')
      } catch {
        if (!cancelled) setStatus('error')
      }
    }

    load()
    return () => {
      cancelled = true
    }
  }, [username])

  return { stats, status }
}
