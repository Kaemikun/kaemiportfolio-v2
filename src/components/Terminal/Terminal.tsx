import { useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { X } from 'lucide-react'
import { profile } from '../../data/profile'
import { runCommand } from './commands'

interface TerminalProps {
  open: boolean
  onClose: () => void
}

interface Line {
  id: number
  text: string
  kind: 'input' | 'output'
}

let lineId = 0

const WELCOME = [
  `${profile.name.toLowerCase().replace(/\s+/g, '-')}@portfolio:~$`,
  `Welcome. Type "help" to see what's available.`,
]

export default function Terminal({ open, onClose }: TerminalProps) {
  const [lines, setLines] = useState<Line[]>(() =>
    WELCOME.map((text) => ({ id: lineId++, text, kind: 'output' as const })),
  )
  const [value, setValue] = useState('')
  const [history, setHistory] = useState<string[]>([])
  const [historyIndex, setHistoryIndex] = useState<number | null>(null)
  const inputRef = useRef<HTMLInputElement>(null)
  const scrollRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (open) {
      requestAnimationFrame(() => inputRef.current?.focus())
    }
  }, [open])

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight })
  }, [lines])

  const print = (text: string | string[]) => {
    const arr = Array.isArray(text) ? text : [text]
    setLines((prev) => [...prev, ...arr.map((t) => ({ id: lineId++, text: t, kind: 'output' as const }))])
  }

  const clear = () => setLines([])

  const navigate = (hash: string) => {
    const el = document.querySelector(hash)
    el?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  const submit = (raw: string) => {
    setLines((prev) => [...prev, { id: lineId++, text: raw, kind: 'input' }])
    if (raw.trim()) {
      setHistory((prev) => [...prev, raw])
    }
    setHistoryIndex(null)
    runCommand(raw, { print, clear, close: onClose, navigate })
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      submit(value)
      setValue('')
    } else if (e.key === 'ArrowUp') {
      e.preventDefault()
      if (history.length === 0) return
      const nextIndex = historyIndex === null ? history.length - 1 : Math.max(0, historyIndex - 1)
      setHistoryIndex(nextIndex)
      setValue(history[nextIndex])
    } else if (e.key === 'ArrowDown') {
      e.preventDefault()
      if (historyIndex === null) return
      const nextIndex = historyIndex + 1
      if (nextIndex >= history.length) {
        setHistoryIndex(null)
        setValue('')
      } else {
        setHistoryIndex(nextIndex)
        setValue(history[nextIndex])
      }
    } else if (e.key === 'Escape') {
      onClose()
    }
  }

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[200] flex items-center justify-center bg-black/60 px-4 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            drag
            dragMomentum={false}
            onClick={(e) => e.stopPropagation()}
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.2 }}
            className="flex h-[70vh] w-full max-w-2xl flex-col overflow-hidden rounded-xl border border-white/10 bg-[#0a0e17] shadow-2xl shadow-black/50"
          >
            <div className="flex cursor-grab items-center justify-between border-b border-white/10 bg-white/5 px-4 py-2.5 active:cursor-grabbing">
              <div className="flex items-center gap-2">
                <span className="h-3 w-3 rounded-full bg-red-500/70" />
                <span className="h-3 w-3 rounded-full bg-yellow-500/70" />
                <span className="h-3 w-3 rounded-full bg-green-500/70" />
                <span className="ml-3 font-mono text-xs text-muted">terminal — portfolio</span>
              </div>
              <button onClick={onClose} data-cursor-hover className="text-muted hover:text-white">
                <X size={16} />
              </button>
            </div>

            <div
              ref={scrollRef}
              onClick={() => inputRef.current?.focus()}
              className="flex-1 overflow-y-auto px-4 py-3 font-mono text-sm leading-relaxed"
            >
              {lines.map((line) => (
                <div
                  key={line.id}
                  className={line.kind === 'input' ? 'text-accent' : 'whitespace-pre-wrap text-slate-300'}
                >
                  {line.kind === 'input' ? `$ ${line.text}` : line.text}
                </div>
              ))}

              <div className="flex items-center gap-2 pt-1">
                <span className="text-accent">$</span>
                <input
                  ref={inputRef}
                  value={value}
                  onChange={(e) => setValue(e.target.value)}
                  onKeyDown={handleKeyDown}
                  autoFocus
                  spellCheck={false}
                  autoComplete="off"
                  className="flex-1 bg-transparent text-slate-100 outline-none"
                />
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
