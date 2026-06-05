import { useEffect, useState, useCallback } from 'react'
import './Lightbox.css'


interface LightboxProps {
  /** Tableau de toutes les images de la galerie courante */
  images: string[]
  /** Index de l'image initialement ouverte */
  initialIndex: number
  /** Texte alternatif optionnel */
  alt?: string
  onClose: () => void
}

export default function Lightbox({ images, initialIndex, alt = '', onClose }: LightboxProps) {
  const [index, setIndex] = useState(initialIndex)
  const [fading, setFading] = useState(false)

  const goTo = useCallback((next: number) => {
    setFading(true)
    setTimeout(() => {
      setIndex((next + images.length) % images.length)
      setFading(false)
    }, 180)
  }, [images.length])

  const goPrev = useCallback(() => goTo(index - 1), [goTo, index])
  const goNext = useCallback(() => goTo(index + 1), [goTo, index])

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowLeft') goPrev()
      if (e.key === 'ArrowRight') goNext()
    }
    document.addEventListener('keydown', handleKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', handleKey)
      document.body.style.overflow = ''
    }
  }, [onClose, goPrev, goNext])

  return (
    <div
      className="lightbox open"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="Visionneuse d'images"
    >
      {/* Fermer */}
      <button
        className="lightbox__close"
        onClick={onClose}
        aria-label="Fermer"
      >
        <i className="fa-solid fa-xmark" aria-hidden="true" />
      </button>

      {/* Précédent */}
      {images.length > 1 && (
        <button
          className="lightbox__nav lightbox__nav--prev"
          onClick={e => { e.stopPropagation(); goPrev() }}
          aria-label="Image précédente"
        >
          <i className="fa-solid fa-chevron-left" aria-hidden="true" />
        </button>
      )}

      {/* Image */}
      <div className="lightbox__img-wrap" onClick={e => e.stopPropagation()}>
        <img
          src={images[index]}
          alt={alt || `Image ${index + 1}`}
          style={{ opacity: fading ? 0 : 1 }}
        />
      </div>

      {/* Suivant */}
      {images.length > 1 && (
        <button
          className="lightbox__nav lightbox__nav--next"
          onClick={e => { e.stopPropagation(); goNext() }}
          aria-label="Image suivante"
        >
          <i className="fa-solid fa-chevron-right" aria-hidden="true" />
        </button>
      )}

      {/* Compteur */}
      {images.length > 1 && (
        <div className="lightbox__counter" onClick={e => e.stopPropagation()}>
          {index + 1} / {images.length}
        </div>
      )}
    </div>
  )
}
