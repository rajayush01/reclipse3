import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Scene } from '../components/Scene'
import { projects } from '../data/projects'
import { films } from '../data/films'
import img from "../assets/img3.webp"

const testimonials = [
  {
    quote:
      'Kaia doesn\u2019t document a wedding. She excavates it \u2014 and hands you back the parts you didn\u2019t know you\u2019d remember.',
    name: 'Elena & Marcus',
    context: 'Faro Elopement, 2024',
  },
  {
    quote:
      'We\u2019ve worked with a dozen photographers. Only one made us forget the camera was there.',
    name: 'Aiko Tanaka',
    context: 'Editorial Client, Kyoto',
  },
  {
    quote:
      'The film she cut from our day still makes my mother cry. That\u2019s the whole review.',
    name: 'Priya Raman',
    context: 'Turin Ceremony, 2022',
  },
]

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

      {/* Scene 04.5 — testimonials, stacked and unhurried */}
      <Scene className="bg-bg">
        <div className="flex h-screen w-full flex-col md:flex-row">
          <Link
            to="/photography"
            data-cursor="view"
            data-cursor-label="Stills"
            className="group relative flex h-1/2 w-full items-center justify-center overflow-hidden border-b border-ink/10 md:h-full md:w-1/2 md:border-b-0 md:border-r"
          >
            <img
              src={projects[1]?.cover ?? projects[0].cover}
              alt=""
              className="absolute inset-0 h-full w-full object-cover opacity-40 transition-all duration-[1200ms] ease-out group-hover:scale-[1.05] group-hover:opacity-60"
            />
            <div className="absolute inset-0 bg-bg/40 transition-colors duration-700 group-hover:bg-bg/20" />
            <div className="relative z-10 flex flex-col items-center gap-3 px-6 text-center">
              <span className="font-mono-cap text-[10px] uppercase text-accent">01 — Stills</span>
              <h3 className="font-display text-3xl italic text-ink md:text-5xl">Photography</h3>
              <span className="font-mono-cap mt-2 text-[10px] uppercase text-muted transition-colors duration-300 group-hover:text-ink">
                Enter the Archive →
              </span>
            </div>
          </Link>

          <Link
            to="/films"
            data-cursor="view"
            data-cursor-label="Motion"
            className="group relative flex h-1/2 w-full items-center justify-center overflow-hidden md:h-full md:w-1/2"
          >
            <img
              src={films[0]?.poster ?? projects[0].cover}
              alt=""
              className="absolute inset-0 h-full w-full object-cover opacity-40 transition-all duration-[1200ms] ease-out group-hover:scale-[1.05] group-hover:opacity-60"
            />
            <div className="absolute inset-0 bg-bg/40 transition-colors duration-700 group-hover:bg-bg/20" />
            <div className="relative z-10 flex flex-col items-center gap-3 px-6 text-center">
              <span className="font-mono-cap text-[10px] uppercase text-accent">02 — Motion</span>
              <h3 className="font-display text-3xl italic text-ink md:text-5xl">Films</h3>
              <span className="font-mono-cap mt-2 text-[10px] uppercase text-muted transition-colors duration-300 group-hover:text-ink">
                Watch the Reels →
              </span>
            </div>
          </Link>
        </div>
      </Scene>

      {/* Scene 05 — invitation into the full archive */}
      <Scene className="flex flex-col items-center justify-center gap-16 bg-surface px-6 py-24 md:gap-24">
        <motion.p
          className="font-mono-cap text-[11px] uppercase text-accent"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
        >
          Words, kept
        </motion.p>

        <div className="flex w-full max-w-4xl flex-col gap-16 md:gap-20">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              className={`flex flex-col gap-4 ${
                i % 2 === 1 ? 'items-end text-right md:pl-16' : 'items-start text-left md:pr-16'
              }`}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            >
              <p className="max-w-2xl font-display text-xl italic leading-relaxed text-ink/90 md:text-2xl">
                “{t.quote}”
              </p>
              <p className="font-mono-cap text-[10px] uppercase text-muted">
                {t.name} <span className="text-accent">—</span> {t.context}
              </p>
            </motion.div>
          ))}
        </div>
      </Scene>

      {/* Scene 06 — dual gateway: stills or motion, choose your world */}
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