import { profile } from '../../data/profile'

export interface CommandContext {
  print: (lines: string | string[]) => void
  clear: () => void
  close: () => void
  navigate: (hash: string) => void
}

type CommandFn = (args: string[], ctx: CommandContext) => void

const COMMAND_NAMES = [
  'help',
  'whoami',
  'about',
  'skills',
  'experience',
  'projects',
  'contact',
  'github',
  'social',
  'sudo',
  'clear',
  'exit',
] as const

export const commands: Record<string, CommandFn> = {
  help: (_args, ctx) => {
    ctx.print([
      'Available commands:',
      '',
      ...COMMAND_NAMES.map((name) => `  ${name.padEnd(12)} ${describe(name)}`),
    ])
  },

  whoami: (_args, ctx) => {
    ctx.print([`${profile.name}`, `${profile.role}`, `${profile.location}`])
  },

  about: (_args, ctx) => {
    ctx.print(profile.bio)
    ctx.navigate('#about')
  },

  skills: (_args, ctx) => {
    const lines = profile.skills.flatMap((group) => [`${group.category}:`, `  ${group.items.join(', ')}`, ''])
    ctx.print(lines)
    ctx.navigate('#skills')
  },

  experience: (_args, ctx) => {
    const lines = profile.experience.flatMap((job) => [
      `${job.role} @ ${job.company} (${job.period})`,
      `  ${job.description}`,
      '',
    ])
    ctx.print(lines)
    ctx.navigate('#experience')
  },

  projects: (_args, ctx) => {
    const lines = profile.projects.flatMap((p) => [`${p.name} — ${p.stack.join(', ')}`, `  ${p.description}`, ''])
    ctx.print(lines)
    ctx.navigate('#projects')
  },

  contact: (_args, ctx) => {
    ctx.print([`email: ${profile.email}`, `github: ${profile.social.github}`, `linkedin: ${profile.social.linkedin}`])
    ctx.navigate('#contact')
  },

  github: (_args, ctx) => {
    ctx.print(`Opening ${profile.social.github} ...`)
    window.open(profile.social.github, '_blank', 'noopener,noreferrer')
  },

  social: (_args, ctx) => {
    ctx.print([
      `github    ${profile.social.github}`,
      `linkedin  ${profile.social.linkedin}`,
      `twitter   ${profile.social.twitter}`,
    ])
  },

  sudo: (args, ctx) => {
    if (args.join(' ') === 'hire-me') {
      ctx.print(['Permission granted.', `Email ${profile.email} to make it official.`])
      return
    }
    ctx.print(`sudo: ${args.join(' ') || '(nothing)'}: nice try. Permission denied.`)
  },

  clear: (_args, ctx) => ctx.clear(),

  exit: (_args, ctx) => ctx.close(),
}

function describe(name: string): string {
  switch (name) {
    case 'help':
      return 'show this list'
    case 'whoami':
      return 'who you are talking to'
    case 'about':
      return 'read the bio'
    case 'skills':
      return 'list technical skills'
    case 'experience':
      return 'work & education history'
    case 'projects':
      return 'list projects'
    case 'contact':
      return 'ways to reach me'
    case 'github':
      return 'open my GitHub profile'
    case 'social':
      return 'list social links'
    case 'sudo':
      return 'try it'
    case 'clear':
      return 'clear the screen'
    case 'exit':
      return 'close this terminal'
    default:
      return ''
  }
}

export function runCommand(input: string, ctx: CommandContext) {
  const trimmed = input.trim()
  if (!trimmed) return
  const [name, ...args] = trimmed.split(/\s+/)
  const fn = commands[name.toLowerCase()]
  if (!fn) {
    ctx.print(`command not found: ${name} (try "help")`)
    return
  }
  fn(args, ctx)
}
