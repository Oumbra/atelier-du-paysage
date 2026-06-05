import { NavLink } from 'react-router-dom'
import ServicesGrid from '../components/ServicesGrid'
import Guarantees from '../components/Guarantees'
import Testimonials from '../components/Testimonials'
import CTABanner from '../components/CTABanner'

const galleryImages = [
  { src: 'https://atelierdupaysage17.fr/wp-content/uploads/2024/07/asset-10.webp', alt: 'Réalisation 1' },
  { src: 'https://atelierdupaysage17.fr/wp-content/uploads/2024/07/asset-11.webp', alt: 'Réalisation 2' },
  { src: 'https://atelierdupaysage17.fr/wp-content/uploads/2024/07/asset-12.webp', alt: 'Réalisation 3' },
  { src: 'https://atelierdupaysage17.fr/wp-content/uploads/2024/07/asset-13.webp', alt: 'Réalisation 4' },
  { src: 'https://atelierdupaysage17.fr/wp-content/uploads/2024/07/asset-14-1.webp', alt: 'Réalisation 5' },
  { src: 'https://atelierdupaysage17.fr/wp-content/uploads/2024/07/asset-15.webp', alt: 'Réalisation 6' },
]

export default function SavoirFaire() {
  return (
    <>
      {/* PAGE HERO */}
      <section className="page-hero">
        <div className="max-w-site mx-auto px-8">
          <h1>Paysagiste sur l'Île d'Oléron (17), notre savoir-faire</h1>
        </div>
      </section>

      {/* INTRO */}
      <section className="py-20">
        <div className="max-w-site mx-auto px-8">
          <div className="grid grid-cols-2 gap-16 items-center md:grid-cols-1 md:gap-10">
            <div>
              <h2>Conception et création de vos espaces verts sur l'Île d'Oléron</h2>
              <p>
                Nous réalisons la{' '}
                <NavLink to="/conception-espace-vert-oleron" className="text-primary font-semibold">conception</NavLink>
                {' '}de votre projet d'aménagement extérieur en tenant compte de vos envies, plantations souhaitées, ambiance et contraintes du terrain et d'{' '}
                <NavLink to="/entretien-annuel-jardin-17" className="text-primary font-semibold">entretien</NavLink>.
                Nous vous accompagnons dans toute l'avancée de votre projet paysager en assurant une communication du début de votre projet jusqu'à son suivi.
              </p>
              <p>
                Il nous est important d'assurer votre satisfaction au tarif prévu par le devis. Ce dernier est le plus réaliste possible et détaillé pour une transparence totale. Pour compléter nos créations, nous proposons également des contrats d'entretien ajusté à votre aménagement.
              </p>
              <h3 className="mt-8 mb-6">Nous travaillons sur les univers suivants :</h3>
              <ServicesGrid />
              <div className="mt-8">
                <NavLink to="/amenagement-paysager-oleron" className="btn btn-primary">
                  Découvrez nos réalisations
                </NavLink>
              </div>
            </div>
            <div className="rounded-lg overflow-hidden shadow-md [&:hover_img]:scale-[1.03]">
              <img
                src="https://atelierdupaysage17.fr/wp-content/uploads/2024/07/asset-14-1.webp"
                alt="Entretien de jardin 17"
              />
            </div>
          </div>
        </div>
      </section>

      {/* GUARANTEES */}
      <Guarantees />

      {/* GALLERY */}
      <section className="py-20">
        <div className="max-w-site mx-auto px-8">
          <div className="section-header">
            <h2>Nos réalisations</h2>
          </div>
          <div className="gallery-grid">
            {galleryImages.map((img, i) => (
              <div key={i} className="gallery-item">
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

      {/* TESTIMONIALS */}
      <Testimonials />

      {/* CTA */}
      <CTABanner />
    </>
  )
}
