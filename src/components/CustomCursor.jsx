import { useEffect, useRef, useState } from 'react'

export default function CustomCursor() {
  const dotRef = useRef(null)
  const ringRef = useRef(null)
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    const dot = dotRef.current
    const ring = ringRef.current
    if (!dot || !ring) return

    let raf
    let mouseX = 0, mouseY = 0
    let ringX = 0, ringY = 0

    const isTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0
    if (isTouch) {
      setVisible(false)
      return
    }

    const move = (e) => {
      mouseX = e.clientX
      mouseY = e.clientY
      dot.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`
    }

    const animate = () => {
      ringX += (mouseX - ringX) * 0.15
      ringY += (mouseY - ringY) * 0.15
      ring.style.transform = `translate3d(${ringX}px, ${ringY}px, 0)`
      raf = requestAnimationFrame(animate)
    }

    const hide = () => setVisible(false)
    const show = () => setVisible(true)

    window.addEventListener('mousemove', move)
    window.addEventListener('mousedown', () => ring.style.scale = 0.9)
    window.addEventListener('mouseup', () => ring.style.scale = 1)
    window.addEventListener('mouseenter', show)
    window.addEventListener('mouseleave', hide)
    raf = requestAnimationFrame(animate)

    return () => {
      window.removeEventListener('mousemove', move)
      window.removeEventListener('mouseenter', show)
      window.removeEventListener('mouseleave', hide)
      cancelAnimationFrame(raf)
    }
  }, [])

  if (!visible) return null

  return (
    <>
      <div ref={dotRef} className="pointer-events-none fixed left-0 top-0 z-[100]" style={{ translate: '-50% -50%' }}>
        <div className="h-1.5 w-1.5 rounded-full bg-white/90" />
      </div>
      <div ref={ringRef} className="pointer-events-none fixed left-0 top-0 z-[99]" style={{ translate: '-50% -50%' }}>
        <div className="h-8 w-8 rounded-full border border-white/25 backdrop-blur-sm" />
      </div>
    </>
  )
}
