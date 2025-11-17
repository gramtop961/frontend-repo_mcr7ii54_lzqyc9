import { useEffect } from 'react'

// Adds a vertical rhythm grid overlay to help tune spacing (toggle with G)
export default function Rhythm() {
  useEffect(() => {
    const el = document.createElement('div')
    el.setAttribute('id', 'rhythm-grid')
    el.style.pointerEvents = 'none'
    el.style.position = 'fixed'
    el.style.inset = '0'
    el.style.zIndex = '40'
    el.style.backgroundImage = 'linear-gradient(to bottom, rgba(255,255,255,0.05) 1px, transparent 1px)'
    el.style.backgroundSize = '100% 32px'
    el.style.opacity = '0'
    el.style.transition = 'opacity 200ms'

    document.body.appendChild(el)

    const onKey = (e) => {
      if ((e.key === 'g' || e.key === 'G') && (e.metaKey || e.ctrlKey)) {
        el.style.opacity = el.style.opacity === '1' ? '0' : '1'
      }
    }

    window.addEventListener('keydown', onKey)
    return () => {
      window.removeEventListener('keydown', onKey)
      el.remove()
    }
  }, [])

  return null
}
