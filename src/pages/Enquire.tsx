import { useState } from 'react'
import { motion } from 'framer-motion'

export function Enquire() {
  const [sent, setSent] = useState(false)

  return (
    <section className="relative flex min-h-screen w-full items-center justify-center overflow-hidden">
      <img
        src="https://images.unsplash.com/photo-1499244571948-7ccddb3583f1?q=80&w=2600&auto=format&fit=crop"
        alt=""
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-bg/75" />

      <div className="relative z-10 flex w-full max-w-md flex-col items-center px-6 py-32 text-center">
        <motion.p
          className="font-display text-3xl italic leading-snug text-ink md:text-5xl"
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: 'easeOut' }}
        >
          If our stories
          <br />
          feel alike,
          <br />
          let&rsquo;s create one together.
        </motion.p>

        {sent ? (
          <p className="mt-14 font-mono-cap text-xs uppercase text-accent">
            Received. I&rsquo;ll reply within a few days.
          </p>
        ) : (
          <motion.form
            className="mt-14 flex w-full flex-col gap-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.3 }}
            onSubmit={(e) => {
              e.preventDefault()
              setSent(true)
            }}
          >
            <input
              required
              type="text"
              placeholder="Name"
              className="border-b border-border bg-transparent pb-3 text-center font-body text-sm text-ink placeholder:text-muted focus:border-accent focus:outline-none"
            />
            <input
              required
              type="email"
              placeholder="Email"
              className="border-b border-border bg-transparent pb-3 text-center font-body text-sm text-ink placeholder:text-muted focus:border-accent focus:outline-none"
            />
            <textarea
              required
              rows={3}
              placeholder="Tell me about the story"
              className="resize-none border-b border-border bg-transparent pb-3 text-center font-body text-sm text-ink placeholder:text-muted focus:border-accent focus:outline-none"
            />
            <button
              type="submit"
              className="font-mono-cap mt-4 self-center border-b border-accent/60 pb-1 text-xs uppercase text-accent transition-colors duration-300 hover:border-accent hover:text-ink"
            >
              Send
            </button>
          </motion.form>
        )}
      </div>
    </section>
  )
}
