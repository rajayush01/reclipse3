import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'

/**
 * Signature loading scene: a line of copy, then a lens-iris wipe
 * that opens onto the hero already sitting beneath it. This is the
 * one moment GSAP drives a precise multi-stage timeline (text in →
 * hold → iris open → cut) rather than Framer Motion's simpler
 * enter/exit transitions.
 */
export function Loader({ onDone }: { onDone: () => void }) {
  const overlayRef = useRef<HTMLDivElement>(null)
  const textRef = useRef<HTMLParagraphElement>(null)
  const lineRef = useRef<HTMLDivElement>(null)
  const [removed, setRemoved] = useState(false)

  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    if (prefersReduced) {
      const t = setTimeout(() => {
        setRemoved(true)
        onDone()
      }, 400)
      return () => clearTimeout(t)
    }

    const tl = gsap.timeline({
      onComplete: () => {
        setRemoved(true)
        onDone()
      },
    })

    tl.set(overlayRef.current, { clipPath: 'circle(150% at 50% 50%)' })
      .fromTo(
        textRef.current,
        { opacity: 0, y: 8 },
        { opacity: 1, y: 0, duration: 1, ease: 'power2.out' },
      )
      .fromTo(
        lineRef.current,
        { scaleX: 0 },
        { scaleX: 1, duration: 1.1, ease: 'power1.inOut', transformOrigin: 'left center' },
        '+=0.1',
      )
      .to(textRef.current, { opacity: 0, duration: 0.4, ease: 'power1.in' }, '+=0.15')
      .to(lineRef.current, { opacity: 0, duration: 0.3, ease: 'power1.in' }, '<')
      // The "shutter": the black overlay's visible circle shrinks to nothing,
      // opening onto the hero photograph already mounted beneath it.
      .to(
        overlayRef.current,
        { clipPath: 'circle(0% at 50% 50%)', duration: 1.1, ease: 'power3.inOut' },
        '+=0.1',
      )

    return () => {
      tl.kill()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  if (removed) return null

  return (
    <div
      ref={overlayRef}
      className="fixed inset-0 z-[200] flex flex-col items-center justify-center bg-bg"
    >
      <p ref={textRef} className="font-display text-xl italic text-ink/90 md:text-2xl">
        Developing the negatives&hellip;
      </p>
      <div className="mt-8 h-px w-40 overflow-hidden bg-white/10">
        <div ref={lineRef} className="h-full w-full bg-accent" />
      </div>
    </div>
  )
}
