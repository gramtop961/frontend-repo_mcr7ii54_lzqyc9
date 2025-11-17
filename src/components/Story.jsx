import { motion } from 'framer-motion'

export default function Story() {
  return (
    <section id="story" className="bg-black text-white">
      <div className="mx-auto max-w-7xl px-5 py-24">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="md:col-span-5"
          >
            <h2 className="text-4xl md:text-5xl tracking-tight font-light">A quiet manifesto</h2>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.05 }}
            className="md:col-span-7 text-white/70 leading-relaxed"
          >
            <p>
              Divines began as a sketch: a single line, a held note, a devotion to less. We cook the way
              we listen—patiently, precisely, letting silence frame each detail.
            </p>
            <p className="mt-5">
              Our room is dim, our plates restrained, our service soft-spoken. The energy moves like
              a camera pan: slow, cinematic, inevitable.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
