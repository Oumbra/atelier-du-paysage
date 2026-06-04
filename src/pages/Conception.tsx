import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import Testimonials from '../components/Testimonials'
import CTABanner from '../components/CTABanner'
import Lightbox from '../components/Lightbox'

const sliderImages = [
  { src: 'https://atelierdupaysage17.fr/wp-content/uploads/2024/07/asset-14-2.webp', alt: 'Conception espace vert 1' },
  { src: 'https://atelierdupaysage17.fr/wp-content/uploads/2024/07/asset-15-1.webp', alt: 'Conception espace vert 2' },
  { src: 'https://atelierdupaysage17.fr/wp-content/uploads/2024/07/asset-16-1.webp', alt: 'Conception espace vert 3' },
]

const galleryImages = [
  { src: 'https://atelierdupaysage17.fr/wp-content/uploads/2024/07/asset-13.webp', alt: 'Réalisation 1' },
  { src: 'https://atelierdupaysage17.fr/wp-content/uploads/2024/07/asset-5-1.webp', alt: 'Réalisation 2' },
  { src: 'https://atelierdupaysage17.fr/wp-content/uploads/2024/07/asset-15.webp', alt: 'Réalisation 3' },
  { src: 'https://atelierdupaysage17.fr/wp-content/uploads/2024/07/asset-16.webp', alt: 'Réalisation 4' },
  { src: 'https://atelierdupaysage17.fr/wp-content/uploads/2024/07/asset-17.webp', alt: 'Réalisation 5' },
  { src: 'https://atelierdupaysage17.fr/wp-content/uploads/2024/07/asset-18.webp', alt: 'Réalisation 6' },
]

export default function Conception() {
  const [lightboxSrc, setLightboxSrc] = useState<string | null>(null)
  const [currentSlide, setCurrentSlide] = useState(0)

  return (
    <>
      {/* PAGE HERO */}
      <section className="page-hero">
        <div className="container">
          <h1>Conception d'espaces verts Oléron</h1>
        </div>
      </section>

      {/* SLIDER */}
      <section className="section section--light">
        <div className="container" style={{ maxWidth: '900px' }}>
          <div className="slider">
            <div
              className="slider__track"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {sliderImages.map((img, i) => (
                <div key={i} className="slider__slide">
                  <img src={img.src} alt={img.alt} />
                </div>
              ))}
            </div>
            <button
              className="slider__btn slider__btn--prev"
              onClick={() => setCurrentSlide(c => (c - 1 + sliderImages.length) % sliderImages.length)}
            >
              ‹
            </button>
            <button
              className="slider__btn slider__btn--next"
              onClick={() => setCurrentSlide(c => (c + 1) % sliderImages.length)}
            >
              ›
            </button>
            <div className="slider__controls">
              {sliderImages.map((_, i) => (
                <button
                  key={i}
                  className={`slider__dot${i === currentSlide ? ' active' : ''}`}
                  onClick={() => setCurrentSlide(i)}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="section">
        <div className="container">
          <div className="two-col">
            <div>
              <h2>Conception d'espaces verts à Oléron, votre projet de A à Z</h2>
              <h3 style={{ fontFamily: 'var(--font-body)', fontWeight: 500, color: 'var(--color-primary)', fontSize: '1.15rem', marginBottom: '1.5rem' }}>
                Pourquoi créer un jardin ?
              </h3>
              <p>
                Nous aménageons votre extérieur en fonction de l'ambiance que vous souhaitez, des exigences exprimées ainsi que des contraintes du terrain. Nous vous apportons notre connaissance et notre expérience pour{' '}
                <NavLink to="/contact-paysagiste-17" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>réaliser le projet qui vous correspond</NavLink>
                {' '}:  jardin autour de la maison (différentes expositions), patio, abords de piscine… que votre terrain soit déjà arboré ou non.
              </p>
              <NavLink to="/amenagement-paysager-oleron" className="btn btn-outline" style={{ marginTop: '1rem' }}>
                Découvrez nos réalisations
              </NavLink>
            </div>
            <div className="two-col__img">
              <img
                src="https://atelierdupaysage17.fr/wp-content/uploads/2024/07/Sans-titre-600x849-1-e1720704718242.jpg"
                alt="Paysagiste à Oléron – croquis"
              />
            </div>
          </div>
        </div>
      </section>

      {/* SKETCH + STEPS */}
      <section className="section section--light">
        <div className="container">
          <div className="two-col two-col--reverse">
            <div>
              <h2>Les différentes étapes du projet</h2>
              <p style={{ marginBottom: '2rem' }}>
                Pour donner vie à votre projet extérieur, Alexandre conceptualise un croquis en suivant différentes étapes :
              </p>
              <div className="steps">
                <div className="step">
                  <div className="step__number">1</div>
                  <div className="step__content">
                    <h4>Recueil de la demande du client</h4>
                    <p>Type de plantations, ambiance, entretien souhaité (régulier ou non, arrosage fréquent ou non…), plantes non allergènes… et des contraintes physiques du terrain (volume de terre, typologie du sol, structures existantes, réseaux…)</p>
                  </div>
                </div>
                <div className="step">
                  <div className="step__number">2</div>
                  <div className="step__content">
                    <h4>Étude topographique, planimétrique et altimétrique</h4>
                    <p>Analyse détaillée du terrain pour une conception précise et adaptée.</p>
                  </div>
                </div>
                <div className="step">
                  <div className="step__number">3</div>
                  <div className="step__content">
                    <h4>Création d'une base de croquis</h4>
                    <p>Sur papier calque avec plan du terrain, en prenant en compte les bâtis et structures existantes et une échelle adaptée pour que le plan soit le plus lisible possible.</p>
                  </div>
                </div>
              </div>
              <p style={{ marginTop: '1.5rem', fontStyle: 'italic', color: 'var(--color-text-light)', fontSize: '0.95rem' }}>
                À la suite de ces étapes, nous envoyons le croquis en impression afin de présenter le projet au client.
              </p>
              <NavLink to="/contact-paysagiste-17" className="btn btn-primary" style={{ marginTop: '1.5rem' }}>
                Demandez un devis
              </NavLink>
            </div>
            <div className="two-col__img">
              <img
                src="https://atelierdupaysage17.fr/wp-content/uploads/2024/07/asset-17-1-1024x703.webp"
                alt="Conception d'espaces verts 17"
                style={{ cursor: 'pointer' }}
                onClick={() => setLightboxSrc('https://atelierdupaysage17.fr/wp-content/uploads/2024/07/asset-17-1.webp')}
              />
            </div>
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <h2>Nos réalisations</h2>
          </div>
          <div className="gallery-grid">
            {galleryImages.map((img, i) => (
              <div
                key={i}
                className="gallery-item"
                onClick={() => setLightboxSrc(img.src)}
              >
                <img src={img.src} alt={img.alt} loading="lazy" />
              </div>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: '2.5rem' }}>
            <NavLink to="/amenagement-paysager-oleron" className="btn btn-outline">
              Voir plus de réalisations
            </NavLink>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <Testimonials />

      {/* CTA */}
      <CTABanner
        text="Vous avez un projet d'aménagement de jardin, une demande d'entretien ? Demandez votre devis gratuit. Nous vous proposons également un devis pour la conception de vos espaces extérieurs sur-mesure."
      />

      {lightboxSrc && (
        <Lightbox src={lightboxSrc} onClose={() => setLightboxSrc(null)} />
      )}
    </>
  )
}
