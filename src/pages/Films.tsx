import { lazy, Suspense, useState } from 'react'
import { films } from '../data/films'

// react-player pulls in dash.js/hls.js (~1.3MB) for adaptive-stream
// support. Nothing else in the app needs that, so it's split into
// its own chunk and only fetched once someone actually presses play.
const ReactPlayer = lazy(() => import('react-player'))

export function Films() {
  const [playing, setPlaying] = useState<string | null>(null)

  return (
    <div className="min-h-screen px-6 pb-24 pt-32 md:px-16">
      <p className="mb-12 font-mono-cap text-[11px] uppercase text-muted">
        Archive — {films.length} films
      </p>

      <div className="flex flex-col gap-10">
        {films.map((f) => (
          <div
            key={f.slug}
            data-cursor="view"
            data-cursor-label="Play"
            onClick={() => setPlaying(f.slug)}
            className="group relative flex aspect-video w-full cursor-pointer items-end overflow-hidden bg-surface"
          >
            {playing === f.slug ? (
              <Suspense
                fallback={
                  <div className="absolute inset-0 flex items-center justify-center bg-surface">
                    <span className="font-mono-cap text-[11px] uppercase text-muted">
                      Loading&hellip;
                    </span>
                  </div>
                }
              >
                <ReactPlayer
                  src={f.url}
                  playing
                  controls
                  width="100%"
                  height="100%"
                  style={{ position: 'absolute', inset: 0 }}
                />
              </Suspense>
            ) : (
              <>
                <img
                  src={f.poster}
                  alt={f.title}
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.02]"
                />
                <div className="absolute inset-0 bg-bg/20 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                <div className="relative z-10 flex w-full items-end justify-between p-6 opacity-0 transition-opacity duration-500 group-hover:opacity-100 md:p-10">
                  <h2 className="font-display text-2xl italic text-ink md:text-4xl">
                    {f.title}
                  </h2>
                  <div className="text-right font-mono-cap text-[11px] uppercase text-muted">
                    <p>{f.duration}</p>
                    <p>{f.location}</p>
                  </div>
                </div>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
