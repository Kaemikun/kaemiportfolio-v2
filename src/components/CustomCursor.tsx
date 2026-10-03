import { useEffect, useState } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

export default function CustomCursor() {
  const [isHovering, setIsHovering] = useState(false)
  const [isTouch, setIsTouch] = useState(false)
  const [isDown, setIsDown] = useState(false)

  const x = useMotionValue(-100)
  const y = useMotionValue(-100)
  const ringX = useSpring(x, { damping: 25, stiffness: 300, mass: 0.5 })
  const ringY = useSpring(y, { damping: 25, stiffness: 300, mass: 0.5 })

  useEffect(() => {
    const isCoarse = window.matchMedia('(pointer: coarse)').matches
    setIsTouch(isCoarse)
    if (isCoarse) return

    const move = (e: MouseEvent) => {
      x.set(e.clientX)
      y.set(e.clientY)
      const target = e.target as HTMLElement
      setIsHovering(!!target.closest('[data-cursor-hover]'))
    }
    const down = () => setIsDown(true)
    const up = () => setIsDown(false)

    window.addEventListener('mousemove', move)
    window.addEventListener('mousedown', down)
    window.addEventListener('mouseup', up)
    return () => {
      window.removeEventListener('mousemove', move)
      window.removeEventListener('mousedown', down)
      window.removeEventListener('mouseup', up)
    }
  }, [x, y])

  if (isTouch) return null

  return (
    <>
      <motion.div
        className="pointer-events-none fixed left-0 top-0 z-[9999] h-2 w-2 rounded-full bg-accent"
        style={{ x, y, translateX: '-50%', translateY: '-50%' }}
      />
      <motion.div
        className="pointer-events-none fixed left-0 top-0 z-[9998] rounded-full border border-accent/60"
        style={{ x: ringX, y: ringY, translateX: '-50%', translateY: '-50%' }}
        animate={{
          width: isHovering ? 56 : 32,
          height: isHovering ? 56 : 32,
          scale: isDown ? 0.8 : 1,
          opacity: isHovering ? 0.9 : 0.5,
        }}
        transition={{ duration: 0.2 }}
      />
    </>
  )
}
