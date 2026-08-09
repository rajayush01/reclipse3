import { motion } from 'framer-motion'
import { faqs } from '../data/faqs'

export function FAQs() {
  return (
    <div className="mx-auto flex min-h-screen max-w-2xl flex-col justify-center gap-16 px-6 py-40">
      {faqs.map((item, i) => (
        <motion.div
          key={item.q}
          className="text-center"
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.9, delay: i * 0.05, ease: 'easeOut' }}
        >
          <p className="font-display text-xl italic text-ink md:text-2xl">{item.q}</p>
          <motion.p
            className="subtitle-fade mt-4 font-mono-cap text-[13px] uppercase leading-relaxed text-muted"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.9, delay: i * 0.05 + 0.35, ease: 'easeOut' }}
          >
            {item.a}
          </motion.p>
        </motion.div>
      ))}
    </div>
  )
}
