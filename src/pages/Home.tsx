import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Scene } from '../components/Scene'
import { projects } from '../data/projects'
import img from "../assets/img3.webp"

export function Home() {
  return (
    <>
      {/* Scene 01 — Hero: almost empty, one huge photograph, tiny text */}
      <section className="relative flex h-screen w-full items-center justify-center overflow-hidden">
        <motion.img
          src={img}
          alt=""
          className="absolute inset-0 h-full w-full object-cover"
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 2.4, ease: [0.22, 1, 0.36, 1] }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-bg/50 via-bg/10 to-bg" />

        <motion.p
          className="relative z-10 max-w-sm px-6 text-center font-display text-2xl italic leading-snug text-ink md:text-3xl"
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.4, delay: 0.6, ease: 'easeOut' }}
        >
          Every photograph
          <br />
          remembers
          <br />
          what time forgets.
        </motion.p>

        <motion.div
          className="absolute bottom-10 flex flex-col items-center gap-3"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.6 }}
        >
          <span className="font-mono-cap text-[10px] uppercase text-muted">Scroll</span>
          <motion.span
            className="h-10 w-px bg-muted/60"
            animate={{ scaleY: [1, 0.4, 1], opacity: [0.6, 1, 0.6] }}
            transition={{ duration: 2.4, repeat: Infinity, ease: 'easeInOut' }}
          />
        </motion.div>
      </section>

      {/* Scene 02 — a single sentence of intent */}
      <Scene className="flex items-center justify-center bg-bg px-6">
        <p className="max-w-2xl text-center font-display text-xl italic leading-relaxed text-ink/90 md:text-3xl">
          Kaia Lindgren is a photographer and director working in the space
          between documentary and daydream — where a place stops being a
          location and becomes a mood.
        </p>
      </Scene>

      {/* Scene 03 — first story, full-bleed */}
      <Scene className="flex items-end bg-surface">
        <Link
          to={`/photography/${projects[0].slug}`}
          data-cursor="view"
          data-cursor-label="Enter"
          className="group relative flex h-screen w-full items-end overflow-hidden"
        >
          <img
            src={projects[0].cover}
            alt={projects[0].title}
            className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-[1.03]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-bg/80 via-transparent to-transparent" />
          <div className="relative z-10 flex w-full items-end justify-between px-8 pb-14 md:px-16 md:pb-20">
            <div>
              <p className="font-mono-cap text-[11px] uppercase text-accent">
                {projects[0].location} — {projects[0].year}
              </p>
              <h2 className="mt-2 font-display text-4xl italic text-ink md:text-6xl">
                {projects[0].title}
              </h2>
            </div>
          </div>
        </Link>
      </Scene>

      {/* Scene 04 — a quote, alone in the dark */}
      <Scene className="flex items-center justify-center bg-bg px-6">
        <p className="max-w-xl text-center font-display text-2xl italic text-ink/80 md:text-4xl">
          {projects[0].quote}
        </p>
      </Scene>

      {/* Scene 05 — invitation into the full archive */}
      <Scene className="flex flex-col items-center justify-center gap-10 bg-bg px-6 text-center">
        <p className="font-display text-xl italic text-ink/90 md:text-2xl">
          Every story lives in the archive.
        </p>
        <Link
          to="/photography"
          className="font-mono-cap border-b border-accent/60 pb-1 text-xs uppercase text-accent transition-colors duration-300 hover:border-accent hover:text-ink"
        >
          View the Photography Archive
        </Link>
      </Scene>
    </>
  )
}
