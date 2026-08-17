import { useEffect } from 'react'
import Lenis from 'lenis'

/**
 * Sets up buttery, film-paced smooth scrolling.
 * Slower duration + gentle easing so fast scrolling still feels
 * controlled, and slow scrolling reveals motion deliberately.
 *
 * Exposes the instance on window.lenis so other parts of the app
 * (e.g. a route-change scroll reset) can control it directly instead
 * of fighting it with a plain window.scrollTo.
 */
export function useLenis() {
  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReduced) return

    const lenis = new Lenis({
      duration: 1.4,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      wheelMultiplier: 0.9,
      touchMultiplier: 1.1,
    })

    ;(window as any).lenis = lenis

    let rafId: number
    function raf(time: number) {
      lenis.raf(time)
      rafId = requestAnimationFrame(raf)
    }
    rafId = requestAnimationFrame(raf)

    return () => {
      cancelAnimationFrame(rafId)
      lenis.destroy()
      delete (window as any).lenis
    }
  }, [])
}