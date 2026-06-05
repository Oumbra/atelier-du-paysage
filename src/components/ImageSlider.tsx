import { useState, useEffect } from 'react'
import './ImageSlider.css'


interface SlideImage {
  src: string
  alt: string
}

interface ImageSliderProps {
  images: SlideImage[]
  autoPlay?: boolean
  interval?: number
  /** Si true, le slider s'étire pour occuper toute la hauteur de son conteneur */
  fillHeight?: boolean
}

export default function ImageSlider({
  images,
  autoPlay = true,
  interval = 4000,
  fillHeight = false,
}: ImageSliderProps) {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    if (!autoPlay) return
    const timer = setInterval(() => {
      setCurrent(prev => (prev + 1) % images.length)
    }, interval)
    return () => clearInterval(timer)
  }, [autoPlay, interval, images.length])

  const prev = () => setCurrent(c => (c - 1 + images.length) % images.length)
  const next = () => setCurrent(c => (c + 1) % images.length)

  return (
    <div className={`slider${fillHeight ? ' slider--fill-height' : ''}`}>
      <div
        className="slider__track"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {images.map((img, i) => (
          <div key={i} className="slider__slide">
            <img
              src={img.src}
              alt={img.alt}
              loading={i === 0 ? 'eager' : 'lazy'}
            />
          </div>
        ))}
      </div>

      {images.length > 1 && (
        <>
          <button className="slider__btn slider__btn--prev" onClick={prev} aria-label="Précédent">
            <i className="fa-solid fa-chevron-left" aria-hidden="true" />
          </button>
          <button className="slider__btn slider__btn--next" onClick={next} aria-label="Suivant">
            <i className="fa-solid fa-chevron-right" aria-hidden="true" />
          </button>
          <div className="slider__controls">
            {images.map((_, i) => (
              <button
                key={i}
                className={`slider__dot${i === current ? ' active' : ''}`}
                onClick={() => setCurrent(i)}
                aria-label={`Image ${i + 1}`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  )
}
