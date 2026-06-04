import { useEffect } from 'react'

interface LightboxProps {
  src: string
  alt?: string
  onClose: () => void
}

export default function Lightbox({ src, alt = '', onClose }: LightboxProps) {
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', handleKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', handleKey)
      document.body.style.overflow = ''
    }
  }, [onClose])

  return (
    <div className="lightbox open" onClick={onClose}>
      <button className="lightbox__close" onClick={onClose} aria-label="Fermer">×</button>
      <img
        src={src}
        alt={alt}
        onClick={e => e.stopPropagation()}
      />
    </div>
  )
}
