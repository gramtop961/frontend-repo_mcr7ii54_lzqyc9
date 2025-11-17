import { motion } from 'framer-motion'

const items = [
  { name: 'Charred Leek | Kombu | Citrus', price: 18 },
  { name: 'Sea Bream Crudo | Yuzu | Nori', price: 24 },
  { name: 'Coal Roasted Lamb | Black Garlic', price: 34 },
  { name: 'Miso Caramel Parfait | Sesame', price: 14 },
]

export default function MenuPreview() {
  return (
    <section id="menu" className="bg-black text-white">
      <div className="mx-auto max-w-7xl px-5 py-24">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-12">
          <div>
            <h2 className="text-4xl md:text-5xl tracking-tight font-light">Menu</h2>
            <p className="mt-3 text-white/60 max-w-md">Seasonal plates crafted with restraint. Ingredients speak. We listen.</p>
          </div>
          <a href="#reserve" className="self-start md:self-end border border-white/20 px-5 py-2 rounded-full hover:bg-white hover:text-black transition-colors">Book a table</a>
        </div>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-y-6">
          {items.map((it, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="flex items-center justify-between border-b border-white/10 py-4"
            >
              <span className="text-white/90">{it.name}</span>
              <span className="text-white/50">${it.price}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
