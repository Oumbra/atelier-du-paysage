import { useState } from 'react'
import './Testimonials.css'


const testimonials = [
  {
    text: 'Cette entreprise travaille chez moi depuis 1977, je m\'en félicite tous les jours pour leur travail, leur créativité, leur écoute et surtout leur professionnalisme. Je conseille vivement cette entreprise pour tous travaux, création, embellissement, entretien. Merci au patron et à toute l\'équipe.',
    author: 'Ginette P.',
  },
  {
    text: 'J\'ai fait appel à cette entreprise qui vient de terminer mon jardin paysager et je suis complètement ravie du résultat. Personnel compétent et professionnel. Responsable très à l\'écoute et toujours agréable. Vraiment du très beau travail. Merci à vous tous pour cet excellent ouvrage.',
    author: 'Marlau MP',
  },
  {
    text: 'Nous sommes satisfaits de la réalisation du travail de cette entreprise. Le patron et ses employés sont très sérieux.',
    author: 'Muriel D.',
  },
  {
    text: 'Travail sérieux et soigné, personnel très sympa et disponible.',
    author: 'Valmi 45',
  },
]

export default function Testimonials() {
  const [active, setActive] = useState(0)

  return (
    <section className="testimonials">
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
          <h2 style={{ color: 'white' }}>Ce que disent nos clients</h2>
        </div>
        <div className="testimonials__inner">
          {testimonials.map((t, i) => (
            <div key={i} className={`testimonial-slide${i === active ? ' active' : ''}`}>
              <p className="testimonial-quote">{t.text}</p>
              <p className="testimonial-author">— {t.author}</p>
            </div>
          ))}

          <div className="testimonials__dots">
            {testimonials.map((_, i) => (
              <button
                key={i}
                className={`slider__dot${i === active ? ' active' : ''}`}
                onClick={() => setActive(i)}
                aria-label={`Avis ${i + 1}`}
              />
            ))}
          </div>

          <a
            href="https://g.page/r/Ccj3DMR6OXOjEAE/review"
            target="_blank"
            rel="noopener noreferrer"
            className="testimonials__review-link"
          >
            Laissez-nous un avis →
          </a>
        </div>
      </div>
    </section>
  )
}
