import { useState, useEffect } from 'react'

interface SlideImage {
  src: string
  alt: string
}

interface ImageSliderProps {
  images: SlideImage[]
  autoPlay?: boolean
  interval?: number
}

export default function ImageSlider({ images, autoPlay = true, interval = 4000 }: ImageSliderProps) {
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
    <div className="slider">
      <div
        className="slider__track"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {images.map((img, i) => (
          <div key={i} className="slider__slide">
            <img src={img.src} alt={img.alt} loading="lazy" />
          </div>
        ))}
      </div>

      {images.length > 1 && (
        <>
          <button className="slider__btn slider__btn--prev" onClick={prev} aria-label="Précédent">
            ‹
          </button>
          <button className="slider__btn slider__btn--next" onClick={next} aria-label="Suivant">
            ›
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
