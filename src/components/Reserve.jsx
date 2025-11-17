import { useState } from 'react'
import { motion } from 'framer-motion'

export default function Reserve() {
  const [name, setName] = useState('')
  const [size, setSize] = useState('2')
  const [date, setDate] = useState('')
  const [submitted, setSubmitted] = useState(false)

  function submit(e) {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section id="reserve" className="bg-black text-white">
      <div className="mx-auto max-w-7xl px-5 py-24">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
          <div className="md:col-span-5">
            <h2 className="text-4xl md:text-5xl tracking-tight font-light">Reserve</h2>
            <p className="mt-3 text-white/60 max-w-sm">We hold a limited number of seats each evening. Add your details and we’ll confirm shortly.</p>
          </div>
          <div className="md:col-span-7">
            {!submitted ? (
              <form onSubmit={submit} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input value={name} onChange={e=>setName(e.target.value)} placeholder="Name" className="bg-transparent border border-white/15 rounded px-4 py-3 focus:outline-none focus:border-white/40" />
                <select value={size} onChange={e=>setSize(e.target.value)} className="bg-transparent border border-white/15 rounded px-4 py-3 focus:outline-none focus:border-white/40">
                  {[1,2,3,4,5,6].map(n=> <option key={n} value={n} className="bg-black">{n} guests</option>)}
                </select>
                <input type="datetime-local" value={date} onChange={e=>setDate(e.target.value)} className="bg-transparent border border-white/15 rounded px-4 py-3 focus:outline-none focus:border-white/40 col-span-full" />
                <button className="col-span-full border border-white/20 rounded-full px-6 py-3 hover:bg-white hover:text-black transition">Request booking</button>
              </form>
            ) : (
              <motion.div initial={{opacity:0}} animate={{opacity:1}} className="text-white/80">
                Request received. We’ll reach out soon.
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
