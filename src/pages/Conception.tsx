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

const allImages = galleryImages.map(g => g.src)

export default function Conception() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)
  const [currentSlide, setCurrentSlide] = useState(0)

  return (
    <>
      {/* PAGE HERO */}
      <section className="page-hero">
        <div className="max-w-site mx-auto px-8">
          <h1>Conception d'espaces verts Oléron</h1>
        </div>
      </section>

      {/* SLIDER */}
      <section className="py-20 bg-warm">
        <div className="max-w-[900px] mx-auto px-8">
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
              aria-label="Précédent"
            >
              <i className="fa-solid fa-chevron-left" aria-hidden="true" />
            </button>
            <button
              className="slider__btn slider__btn--next"
              onClick={() => setCurrentSlide(c => (c + 1) % sliderImages.length)}
              aria-label="Suivant"
            >
              <i className="fa-solid fa-chevron-right" aria-hidden="true" />
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
      <section className="py-20">
        <div className="max-w-site mx-auto px-8">
          <div className="grid grid-cols-2 gap-16 items-center md:grid-cols-1 md:gap-10">
            <div>
              <h2>Conception d'espaces verts à Oléron, votre projet de A à Z</h2>
              <h3 className="font-body font-medium text-primary text-[1.15rem] mb-6">
                Pourquoi créer un jardin ?
              </h3>
              <p>
                Nous aménageons votre extérieur en fonction de l'ambiance que vous souhaitez, des exigences exprimées ainsi que des contraintes du terrain. Nous vous apportons notre connaissance et notre expérience pour{' '}
                <NavLink to="/contact-paysagiste-17" className="text-primary font-semibold">réaliser le projet qui vous correspond</NavLink>
                {' '}: jardin autour de la maison (différentes expositions), patio, abords de piscine… que votre terrain soit déjà arboré ou non.
              </p>
              <NavLink to="/amenagement-paysager-oleron" className="btn btn-outline mt-4 inline-block">
                Découvrez nos réalisations
              </NavLink>
            </div>
            <div className="rounded-lg overflow-hidden shadow-md [&:hover_img]:scale-[1.03]">
              <img
                src="https://atelierdupaysage17.fr/wp-content/uploads/2024/07/Sans-titre-600x849-1-e1720704718242.jpg"
                alt="Paysagiste à Oléron – croquis"
              />
            </div>
          </div>
        </div>
      </section>

      {/* STEPS */}
      <section className="py-20 bg-warm">
        <div className="max-w-site mx-auto px-8">
          <div className="grid grid-cols-2 gap-16 items-center md:grid-cols-1 md:gap-10 two-col--reverse">
            <div>
              <h2>Les différentes étapes du projet</h2>
              <p className="mb-8">
                Pour donner vie à votre projet extérieur, Alexandre conceptualise un croquis en suivant différentes étapes :
              </p>
              <div className="flex flex-col gap-4">
                <div className="flex gap-5 p-6 bg-white rounded-lg shadow-sm border-l-[3px] border-primary transition hover:shadow-md">
                  <div className="shrink-0 w-11 h-11 bg-primary text-white rounded-full flex items-center justify-center font-bold text-base">1</div>
                  <div>
                    <h4 className="mb-1 text-primary-dark text-[0.95rem] font-bold font-body">Recueil de la demande du client</h4>
                    <p className="text-[0.92rem] text-gray-500 !mb-0 leading-[1.7]">Type de plantations, ambiance, entretien souhaité (régulier ou non, arrosage fréquent ou non…), plantes non allergènes… et des contraintes physiques du terrain (volume de terre, typologie du sol, structures existantes, réseaux…)</p>
                  </div>
                </div>
                <div className="flex gap-5 p-6 bg-white rounded-lg shadow-sm border-l-[3px] border-primary transition hover:shadow-md">
                  <div className="shrink-0 w-11 h-11 bg-primary text-white rounded-full flex items-center justify-center font-bold text-base">2</div>
                  <div>
                    <h4 className="mb-1 text-primary-dark text-[0.95rem] font-bold font-body">Étude topographique, planimétrique et altimétrique</h4>
                    <p className="text-[0.92rem] text-gray-500 !mb-0 leading-[1.7]">Analyse détaillée du terrain pour une conception précise et adaptée.</p>
                  </div>
                </div>
                <div className="flex gap-5 p-6 bg-white rounded-lg shadow-sm border-l-[3px] border-primary transition hover:shadow-md">
                  <div className="shrink-0 w-11 h-11 bg-primary text-white rounded-full flex items-center justify-center font-bold text-base">3</div>
                  <div>
                    <h4 className="mb-1 text-primary-dark text-[0.95rem] font-bold font-body">Création d'une base de croquis</h4>
                    <p className="text-[0.92rem] text-gray-500 !mb-0 leading-[1.7]">Sur papier calque avec plan du terrain, en prenant en compte les bâtis et structures existantes et une échelle adaptée pour que le plan soit le plus lisible possible.</p>
                  </div>
                </div>
              </div>
              <p className="mt-6 italic text-gray-500 text-[0.95rem]">
                À la suite de ces étapes, nous envoyons le croquis en impression afin de présenter le projet au client.
              </p>
              <NavLink to="/contact-paysagiste-17" className="btn btn-primary mt-6 inline-block">
                Demandez un devis
              </NavLink>
            </div>
            <div
              className="rounded-lg overflow-hidden shadow-md [&:hover_img]:scale-[1.03] cursor-zoom-in"
              onClick={() => setLightboxIndex(0)}
            >
              <img
                src="https://atelierdupaysage17.fr/wp-content/uploads/2024/07/asset-17-1-1024x703.webp"
                alt="Conception d'espaces verts 17"
              />
            </div>
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section className="py-20">
        <div className="max-w-site mx-auto px-8">
          <div className="section-header">
            <h2>Nos réalisations</h2>
          </div>
          <div className="gallery-grid">
            {galleryImages.map((img, i) => (
              <div
                key={i}
                className="gallery-item"
                onClick={() => setLightboxIndex(i)}
              >
                <img src={img.src} alt={img.alt} loading="lazy" />
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <NavLink to="/amenagement-paysager-oleron" className="btn btn-outline">
              Voir plus de réalisations
            </NavLink>
          </div>
        </div>
      </section>

      <Testimonials />

      <CTABanner
        text="Vous avez un projet d'aménagement de jardin, une demande d'entretien ? Demandez votre devis gratuit. Nous vous proposons également un devis pour la conception de vos espaces extérieurs sur-mesure."
      />

      {lightboxIndex !== null && (
        <Lightbox
          images={allImages}
          initialIndex={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
        />
      )}
    </>
  )
}
