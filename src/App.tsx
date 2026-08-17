import { useEffect, useState } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { useLenis } from './lib/useLenis'
import { Navigation } from './components/Navigation'
import { CinematicCursor } from './components/CinematicCursor'
import { Loader } from './components/Loader'
import { Home } from './pages/Home'
import { Photography } from './pages/Photography'
import { ProjectDetail } from './pages/ProjectDetail'
import { Films } from './pages/Films'
import { FAQs } from './pages/FAQs'
import { Enquire } from './pages/Enquire'
import { Footer } from './components/Footer'

/**
 * Forces every route change to start at the top of the page.
 * Plain window.scrollTo isn't enough once Lenis is driving scroll —
 * it keeps its own internal position, so we reset both: Lenis first
 * (if present on window), then the native scroll as a fallback for
 * anything Lenis doesn't intercept (e.g. before it's mounted).
 */
function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    const lenis = (window as any).lenis

    if (lenis) {
      lenis.scrollTo(0, { immediate: true })
    } else {
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' as ScrollBehavior })
    }
  }, [pathname])

  return null
}

function PageFade() {
  const location = useLocation()
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.8, ease: [0.65, 0, 0.35, 1] }}
      >
        <Routes location={location}>
          <Route path="/" element={<Home />} />
          <Route path="/photography" element={<Photography />} />
          <Route path="/photography/:slug" element={<ProjectDetail />} />
          <Route path="/films" element={<Films />} />
          <Route path="/faqs" element={<FAQs />} />
          <Route path="/enquire" element={<Enquire />} />
        </Routes>
      </motion.div>
    </AnimatePresence>
  )
}

export default function App() {
  const [loading, setLoading] = useState(true)
  useLenis()

  // Lock scroll while the loader's iris hasn't opened yet, so the
  // hero underneath is revealed rather than scrolled past.
  useEffect(() => {
    document.body.style.overflow = loading ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [loading])

  return (
    <>
      {/* Real content mounts immediately so the loader's iris wipe has
          something to open onto, but stays visually/interactively inert
          until the loader clears. */}
      <div
        className={loading ? 'pointer-events-none' : ''}
        aria-hidden={loading}
      >
        <CinematicCursor />
        <Navigation />
        <ScrollToTop />
        <PageFade />
        <Footer />
      </div>
      {loading && <Loader onDone={() => setLoading(false)} />}
    </>
  )
}