import { useState } from 'react'
import { Menu, X } from 'lucide-react'

export default function Header() {
  const [open, setOpen] = useState(false)

  const nav = (
    <nav className="flex flex-col md:flex-row md:items-center gap-6 text-sm tracking-wide">
      <a href="#menu" className="hover:opacity-60 transition-opacity">Menu</a>
      <a href="#story" className="hover:opacity-60 transition-opacity">Story</a>
      <a href="#reserve" className="hover:opacity-60 transition-opacity">Reserve</a>
      <a href="#contact" className="hover:opacity-60 transition-opacity">Contact</a>
    </nav>
  )

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-auto max-w-7xl px-5">
        <div className="flex items-center justify-between py-5">
          <a href="#top" className="font-semibold tracking-[0.2em] uppercase">Divines</a>
          <div className="hidden md:block">{nav}</div>
          <button
            className="md:hidden p-2 rounded border border-white/15"
            aria-label="Toggle menu"
            onClick={() => setOpen(!open)}
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>
      {open && (
        <div className="md:hidden border-t border-white/10 bg-black/70 backdrop-blur-sm">
          <div className="mx-auto max-w-7xl px-5 py-6">
            {nav}
          </div>
        </div>
      )}
    </header>
  )
}
