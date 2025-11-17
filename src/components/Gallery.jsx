import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const images = [
  'https://images.unsplash.com/photo-1541542684-4a84925325c1?q=80&w=1600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1526312426976-593c242cce87?q=80&w=1600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1498654200943-1088dd4438ae?q=80&w=1600&auto=format&fit=crop',
]

export default function Gallery() {
  const [index, setIndex] = useState(0)

  const next = () => setIndex((i) => (i + 1) % images.length)
  const prev = () => setIndex((i) => (i - 1 + images.length) % images.length)

  return (
    <section className="bg-black text-white">
      <div className="mx-auto max-w-7xl px-5 py-24">
        <div className="flex items-end justify-between">
          <div>
            <h2 className="text-4xl md:text-5xl tracking-tight font-light">Gallery</h2>
            <p className="mt-3 text-white/60 max-w-md">Quiet frames, dim light, and texture. The room breathes.</p>
          </div>
          <div className="flex gap-2">
            <button onClick={prev} className="border border-white/20 px-3 py-1.5 rounded-full hover:bg-white hover:text-black transition">Prev</button>
            <button onClick={next} className="border border-white/20 px-3 py-1.5 rounded-full hover:bg-white hover:text-black transition">Next</button>
          </div>
        </div>

        <div className="relative mt-10 aspect-[16/9] overflow-hidden rounded-xl border border-white/10">
          <AnimatePresence initial={false}>
            <motion.img
              key={index}
              src={images[index]}
              alt="Divines gallery"
              className="absolute inset-0 h-full w-full object-cover"
              initial={{ opacity: 0, scale: 1.02 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            />
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}
