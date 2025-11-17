export default function Footer() {
  return (
    <footer id="contact" className="bg-black text-white border-t border-white/10">
      <div className="mx-auto max-w-7xl px-5 py-16 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
        <div>
          <div className="tracking-[0.2em] uppercase">Divines</div>
          <p className="text-white/60 mt-2">48 Rue Silencieuse, 1000 Brussels</p>
        </div>
        <div className="flex gap-6 text-white/60">
          <a href="#" className="hover:text-white transition-colors">Instagram</a>
          <a href="#" className="hover:text-white transition-colors">Reservations</a>
          <a href="#" className="hover:text-white transition-colors">Newsletter</a>
        </div>
      </div>
      <div className="text-center text-xs text-white/40 pb-10">© {new Date().getFullYear()} Divines. All rights reserved.</div>
    </footer>
  )
}
