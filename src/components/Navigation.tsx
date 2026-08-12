import { useEffect, useRef, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'

const links = [
  { to: '/photography', label: 'Photography' },
  { to: '/films', label: 'Films' },
  { to: '/faqs', label: 'FAQs' },
  { to: '/enquire', label: 'Enquire' },
]

export function Navigation() {
  const [hidden, setHidden] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const lastY = useRef(0)

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY
      const goingDown = y > lastY.current
      // Only react past a small threshold so we don't flicker near the top
      setHidden(goingDown && y > 120 && !menuOpen)
      lastY.current = y
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [menuOpen])

  return (
    <>
      <motion.header
        className="fixed inset-x-0 top-0 z-50 flex justify-center"
        animate={{ y: hidden ? -96 : 0, opacity: hidden ? 0 : 1 }}
        transition={{ duration: 0.6, ease: [0.65, 0, 0.35, 1] }}
      >
        {/* Desktop / tablet: full floating pill */}
        <nav className="mt-6 hidden items-center gap-8 rounded-full border border-border bg-bg/50 px-7 py-3 backdrop-blur-md sm:flex">
          <NavLink to="/" className="font-display text-sm italic tracking-wide text-ink/90">
            RECLIPSE
          </NavLink>
          <span className="h-4 w-px bg-border" />
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              className={({ isActive }) =>
                `font-mono-cap text-[11px] uppercase transition-colors duration-300 ${
                  isActive ? 'text-accent' : 'text-muted hover:text-ink'
                }`
              }
            >
              {l.label}
            </NavLink>
          ))}
        </nav>

        {/* Mobile: wordmark + menu toggle only */}
        <nav className="mt-6 flex w-[calc(100%-2rem)] items-center justify-between rounded-full border border-border bg-bg/50 px-5 py-3 backdrop-blur-md sm:hidden">
          <NavLink to="/" className="font-display text-sm italic tracking-wide text-ink/90">
            Kaia Lindgren
          </NavLink>
          <button
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((v) => !v)}
            className="font-mono-cap text-[11px] uppercase text-muted"
          >
            {menuOpen ? 'Close' : 'Menu'}
          </button>
        </nav>
      </motion.header>

      {/* Mobile full-screen scene of links */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="fixed inset-0 z-40 flex flex-col items-center justify-center gap-8 bg-bg/98 sm:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: [0.65, 0, 0.35, 1] }}
          >
            {links.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                onClick={() => setMenuOpen(false)}
                className={({ isActive }) =>
                  `font-display text-2xl italic ${isActive ? 'text-accent' : 'text-ink/90'}`
                }
              >
                {l.label}
              </NavLink>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
