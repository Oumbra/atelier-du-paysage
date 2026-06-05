import './BeforeAfterPair.css'

interface BeforeAfterPairProps {
  beforeSrc: string
  afterSrc: string
  alt?: string
}

export default function BeforeAfterPair({ beforeSrc, afterSrc, alt = '' }: BeforeAfterPairProps) {
  return (
    <div className="before-after-pair">
      <div className="before-after-img">
        <img src={beforeSrc} alt={`Avant - ${alt}`} loading="lazy" />
        <span className="before-after-label">Avant</span>
      </div>
      <div className="before-after-img">
        <img src={afterSrc} alt={`Après - ${alt}`} loading="lazy" />
        <span className="before-after-label">Après</span>
      </div>
    </div>
  )
}
