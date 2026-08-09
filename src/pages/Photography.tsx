import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { projects } from '../data/projects'

export function Photography() {
  return (
    <div className="pt-24">
      {projects.map((p, i) => (
        <Link
          to={`/photography/${p.slug}`}
          key={p.slug}
          data-cursor="view"
          data-cursor-label="Enter"
          className="group relative flex h-[92vh] w-full items-end overflow-hidden border-b border-border"
        >
          <motion.img
            src={p.cover}
            alt={p.title}
            className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-[1.03]"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 1.2, ease: 'easeOut' }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-bg/85 via-bg/10 to-transparent" />

          <div className="relative z-10 flex w-full items-end justify-between px-8 pb-12 md:px-16 md:pb-16">
            <div>
              <p className="font-mono-cap text-[11px] uppercase text-accent">
                {String(i + 1).padStart(2, '0')} — {p.location}
              </p>
              <h2 className="mt-2 font-display text-3xl italic text-ink md:text-5xl">
                {p.title}
              </h2>
            </div>
            <span className="hidden font-mono-cap text-[11px] uppercase text-muted md:block">
              {p.year}
            </span>
          </div>
        </Link>
      ))}
    </div>
  )
}
