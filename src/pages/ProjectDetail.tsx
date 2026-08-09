import { Link, Navigate, useParams } from 'react-router-dom'
import { Scene } from '../components/Scene'
import { projects } from '../data/projects'

export function ProjectDetail() {
  const { slug } = useParams()
  const index = projects.findIndex((p) => p.slug === slug)
  const project = projects[index]
  const next = projects[(index + 1) % projects.length]

  if (!project) return <Navigate to="/photography" replace />

  return (
    <>
      {/* Opening still */}
      <section className="relative flex h-screen w-full items-end overflow-hidden">
        <img
          src={project.cover}
          alt={project.title}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-bg/85 via-bg/10 to-transparent" />
        <div className="relative z-10 px-8 pb-16 md:px-16">
          <p className="font-mono-cap text-[11px] uppercase text-accent">
            {project.location} — {project.year}
          </p>
          <h1 className="mt-2 font-display text-5xl italic text-ink md:text-7xl">
            {project.title}
          </h1>
        </div>
      </section>

      {/* Behind the story */}
      <Scene className="flex items-center justify-center bg-bg px-6">
        <p className="max-w-2xl text-center font-display text-xl italic leading-relaxed text-ink/90 md:text-2xl">
          {project.synopsis}
        </p>
      </Scene>

      {/* Gallery */}
      {project.gallery.map((src, i) => (
        <Scene key={src} className="flex items-center justify-center bg-surface p-4 md:p-10">
          <img
            src={src}
            alt={`${project.title} frame ${i + 1}`}
            className="max-h-[85vh] w-full rounded-sm object-cover"
          />
        </Scene>
      ))}

      {/* Quote */}
      <Scene className="flex items-center justify-center bg-bg px-6">
        <p className="max-w-xl text-center font-display text-2xl italic text-ink/80 md:text-4xl">
          {project.quote}
        </p>
      </Scene>

      {/* Final frame → next story */}
      <Link
        to={`/photography/${next.slug}`}
        data-cursor="view"
        data-cursor-label="Next"
        className="group relative flex h-screen w-full items-end overflow-hidden"
      >
        <img
          src={next.cover}
          alt={next.title}
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-[1.03]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-bg/85 via-bg/15 to-transparent" />
        <div className="relative z-10 w-full px-8 pb-16 md:px-16">
          <p className="font-mono-cap text-[11px] uppercase text-muted">Next story</p>
          <h2 className="mt-2 font-display text-4xl italic text-ink md:text-6xl">
            {next.title}
          </h2>
        </div>
      </Link>
    </>
  )
}
