import { useEffect, useRef, useState } from 'react'

/**
 * A very quiet custom cursor. It stays invisible over normal content
 * and only reveals itself — a small ringed dot with a "View" label —
 * when hovering an element marked data-cursor="view".
 */
export function CinematicCursor() {
  const dotRef = useRef<HTMLDivElement>(null)
  const [active, setActive] = useState(false)
  const [label, setLabel] = useState('View')
  const [isTouch, setIsTouch] = useState(false)

  useEffect(() => {
    const fine = window.matchMedia('(pointer: fine)').matches
    setIsTouch(!fine)
    if (!fine) return

    const move = (e: MouseEvent) => {
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`
      }
      const target = e.target as HTMLElement
      const trigger = target.closest('[data-cursor="view"]') as HTMLElement | null
      setActive(!!trigger)
      if (trigger?.dataset.cursorLabel) setLabel(trigger.dataset.cursorLabel)
    }
    window.addEventListener('mousemove', move)
    document.documentElement.classList.add('cinematic-cursor-active')
    return () => {
      window.removeEventListener('mousemove', move)
      document.documentElement.classList.remove('cinematic-cursor-active')
    }
  }, [])

  if (isTouch) return null

  return (
    <div
      ref={dotRef}
      className="pointer-events-none fixed left-0 top-0 z-[100] -translate-x-1/2 -translate-y-1/2"
      style={{ willChange: 'transform' }}
    >
      <div
        className={`flex items-center justify-center rounded-full border transition-all duration-300 ease-out ${
          active
            ? 'h-16 w-16 border-accent/70 bg-bg/40 backdrop-blur-[1px]'
            : 'h-2 w-2 border-transparent bg-ink/70'
        }`}
      >
        {active && (
          <span className="font-mono-cap text-[10px] uppercase text-ink/90">{label}</span>
        )}
      </div>
    </div>
  )
}
