import { motion } from 'framer-motion'
import type { ReactNode } from 'react'

/**
 * Every scene enters like a film cut: a still fade, a breath of
 * vertical drift, never a slide or bounce. Triggered once as it
 * enters the viewport so fast scrolling still feels smooth.
 */
export function Scene({
  children,
  className = '',
  id,
}: {
  children: ReactNode
  className?: string
  id?: string
}) {
  return (
    <motion.section
      id={id}
      className={`relative w-full ${className}`}
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.35 }}
      transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.section>
  )
}
