import { useEffect, useRef, useState } from 'react'
import { Volume2, VolumeX } from 'lucide-react'

export default function Soundtrack({ src = 'https://cdn.pixabay.com/download/audio/2022/03/15/audio_6e87f1f4a2.mp3?filename=low-fidelity-ambient-11157.mp3' }) {
  const audioRef = useRef(null)
  const [on, setOn] = useState(false)

  useEffect(() => {
    const audio = audioRef.current
    if (!audio) return
    audio.loop = true
    audio.volume = 0.35
  }, [])

  const toggle = () => {
    const audio = audioRef.current
    if (!audio) return
    if (on) {
      audio.pause()
      setOn(false)
    } else {
      audio.play().then(() => setOn(true)).catch(() => {})
    }
  }

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <audio ref={audioRef} src={src} preload="auto" />
      <button onClick={toggle} className="rounded-full border border-white/20 bg-black/40 backdrop-blur px-3 py-2 text-xs flex items-center gap-2 hover:bg-white hover:text-black transition">
        {on ? <Volume2 size={16} /> : <VolumeX size={16} />}
        <span className="hidden sm:inline">{on ? 'Sound on' : 'Sound off'}</span>
      </button>
    </div>
  )
}
