import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const explore = [
  { to: '/photography', label: 'Photography' },
  { to: '/films', label: 'Films' },
  { to: '/about', label: 'About' },
  { to: '/faqs', label: 'FAQs' },
]

const connect = [
  { to: '/enquire', label: 'Enquire' },
  { href: 'https://instagram.com', label: 'Instagram' },
  { href: 'mailto:hello@reclipse.studio', label: 'Email' },
]

export function Footer() {
  return (
    <motion.footer
      className="relative w-full border-t border-border bg-bg px-6 pb-10 pt-20 md:px-16 md:pt-28"
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-16 md:gap-20">
        {/* Top: wordmark + tagline + CTA */}
        <div className="flex flex-col items-start justify-between gap-10 md:flex-row md:items-end">
          <div className="flex flex-col gap-4">
            <Link to="/" className="font-display text-3xl italic text-ink md:text-4xl">
              Reclipse
            </Link>
            <p className="max-w-sm text-sm leading-relaxed text-muted">
              Cinematic elopements and weddings, told slowly, on location —
              currently shooting from the Isle of Skye and beyond.
            </p>
          </div>

          <Link
            to="/contact"
            data-cursor="view"
            data-cursor-label="Write"
            className="font-mono-cap w-fit border-b border-accent/60 pb-1 text-xs uppercase text-accent transition-colors duration-300 hover:border-accent hover:text-ink"
          >
            Start the Conversation →
          </Link>
        </div>

        {/* Middle: link columns */}
        <div className="grid grid-cols-2 gap-10 md:grid-cols-4">
          <div className="flex flex-col gap-4">
            <span className="font-mono-cap text-[10px] uppercase text-muted">
              Explore
            </span>
            <nav className="flex flex-col gap-3">
              {explore.map((l) => (
                <Link
                  key={l.to}
                  to={l.to}
                  className="font-mono-cap text-[11px] uppercase text-ink/80 transition-colors duration-300 hover:text-accent"
                >
                  {l.label}
                </Link>
              ))}
            </nav>
          </div>

          <div className="flex flex-col gap-4">
            <span className="font-mono-cap text-[10px] uppercase text-muted">
              Connect
            </span>
            <nav className="flex flex-col gap-3">
              {connect.map((l) =>
                l.to ? (
                  <Link
                    key={l.label}
                    to={l.to}
                    className="font-mono-cap text-[11px] uppercase text-ink/80 transition-colors duration-300 hover:text-accent"
                  >
                    {l.label}
                  </Link>
                ) : (
                  <a
                    key={l.label}
                    href={l.href}
                    target={l.href?.startsWith('http') ? '_blank' : undefined}
                    rel={l.href?.startsWith('http') ? 'noreferrer' : undefined}
                    className="font-mono-cap text-[11px] uppercase text-ink/80 transition-colors duration-300 hover:text-accent"
                  >
                    {l.label}
                  </a>
                )
              )}
            </nav>
          </div>

          <div className="col-span-2 flex flex-col gap-4 md:col-span-2">
            <span className="font-mono-cap text-[10px] uppercase text-muted">
              Currently Booking
            </span>
            <p className="font-display text-xl italic text-ink/90 md:text-2xl">
              2027 season, worldwide.
            </p>
          </div>
        </div>

        {/* Bottom: legal row */}
        <div className="flex flex-col items-start justify-between gap-4 border-t border-border pt-8 md:flex-row md:items-center">
          <span className="font-mono-cap text-[10px] uppercase text-muted">
            © {new Date().getFullYear()} Reclipse. All rights reserved.
          </span>
          <span className="font-mono-cap text-[10px] uppercase text-muted">
            Isle of Skye, Scotland
          </span>
        </div>
      </div>
    </motion.footer>
  )
}