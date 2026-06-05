import { NavLink } from 'react-router-dom'
import ImageSlider from '../components/ImageSlider'
import Testimonials from '../components/Testimonials'
import CTABanner from '../components/CTABanner'
import ServicesGrid from '../components/ServicesGrid'

const heroSliderImages = [
  {
    src: 'https://atelierdupaysage17.fr/wp-content/uploads/2024/07/asset-6.webp',
    alt: 'Aménagement paysager en Charente-Maritime',
  },
  {
    src: 'https://atelierdupaysage17.fr/wp-content/uploads/2024/07/17190-scaled.webp',
    alt: 'Réalisation 17190',
  },
  {
    src: 'https://atelierdupaysage17.fr/wp-content/uploads/2024/07/B-1-an-apres.webp',
    alt: 'Jardin 1 an après',
  },
  {
    src: 'https://atelierdupaysage17.fr/wp-content/uploads/2024/07/IMG-20240615-WA0004.webp',
    alt: 'Réalisation récente',
  },
]

const galleryImages = [
  'https://atelierdupaysage17.fr/wp-content/uploads/2024/07/asset-10.webp',
  'https://atelierdupaysage17.fr/wp-content/uploads/2024/07/asset-11.webp',
  'https://atelierdupaysage17.fr/wp-content/uploads/2024/07/asset-12.webp',
  'https://atelierdupaysage17.fr/wp-content/uploads/2024/07/asset-13.webp',
  'https://atelierdupaysage17.fr/wp-content/uploads/2024/07/asset-14.webp',
  'https://atelierdupaysage17.fr/wp-content/uploads/2024/07/asset-15.webp',
  'https://atelierdupaysage17.fr/wp-content/uploads/2024/07/asset-16.webp',
  'https://atelierdupaysage17.fr/wp-content/uploads/2024/07/asset-17.webp',
  'https://atelierdupaysage17.fr/wp-content/uploads/2024/07/asset-18.webp',
]

export default function Home() {
  return (
    <>
      {/* ===== HERO ===== */}
      <section className="hero">
        <div
          className="hero__bg"
          style={{ backgroundImage: 'url(https://atelierdupaysage17.fr/wp-content/uploads/2024/07/asset-20.webp)' }}
        />
        <img
          className="hero__deco"
          src="https://atelierdupaysage17.fr/wp-content/uploads/2024/07/asset-0.webp"
          alt="Paysagiste à Oléron"
          loading="eager"
        />
        <div className="hero__content">
          <h1>Votre paysagiste sur l'Île d'Oléron</h1>
          <p>
            Nous apportons des connaissances et des compétences techniques pour donner vie à votre projet.
          </p>
          <NavLink to="/contact-paysagiste-17" className="btn btn-primary">
            Nous contacter
          </NavLink>
        </div>
      </section>

      {/* ===== ABOUT / TEAM ===== */}
      <section className="py-20">
        <div className="max-w-site mx-auto px-8">
          {/*
            align-items: stretch → les deux colonnes ont la même hauteur.
            La colonne droite est flex-col : le slider prend tout l'espace disponible (flex:1).
          */}
          <div className="grid grid-cols-2 gap-16 items-stretch md:grid-cols-1 md:gap-10">
            {/* LEFT — équipe */}
            <div className="flex flex-col">
              <h2>Paysagiste sur l'Île d'Oléron</h2>
              <p className="font-body font-medium text-[1.05rem] text-primary mb-8 leading-[1.7]">
                Dessinateur, maître d'œuvre &amp; artisan. Nous vous accompagnons tout au long de votre projet paysager sur l'Île d'Oléron&nbsp;!
              </p>
              <div className="grid gap-6">
                <div className="bg-white rounded-md py-7 px-8 shadow-sm border-l-4 border-primary transition hover:shadow-md hover:-translate-y-0.5">
                  <h4 className="text-primary mb-3 text-base font-bold">Alexandre AMOURY – artisan paysagiste</h4>
                  <p>Sa carrière commence par quatre années dans la Marine Nationale en tant que sous-officier chez les fusiliers marins. Puis Alexandre décide de se reconvertir dans l'aménagement paysager en suivant un BTS en alternance au Centre de Formation et de Promotion Horticole d'Ecully dans le Rhône. Après quelques années, il monte une micro entreprise à Lyon. Finalement, l'opportunité de reprendre l'entreprise de Monsieur VILAIR, chez qui il a grandi, se présente. En juin 2016, une nouvelle aventure commence…</p>
                </div>
                <div className="bg-white rounded-md py-7 px-8 shadow-sm border-l-4 border-primary transition hover:shadow-md hover:-translate-y-0.5">
                  <h4 className="text-primary mb-3 text-base font-bold">Patricia AMOURY – assistante de gestion</h4>
                  <p>Elle est chargée de gérer les documents administratifs, la comptabilité, les ressources humaines… N'étant pas du métier, elle comble son manque de connaissance technique par son dévouement envers vos attentes, vos demandes urgentes et travaille à rendre possible des prises de rendez-vous ou des interventions rapidement.</p>
                </div>
                <div className="bg-white rounded-md py-7 px-8 shadow-sm border-l-4 border-primary transition hover:shadow-md hover:-translate-y-0.5">
                  <h4 className="text-primary mb-3 text-base font-bold">Lenny JOVENIAUX</h4>
                  <p>En apprentissage depuis janvier 2022 au sein de l'entreprise, il continue l'aventure avec nous. Il est sérieux et motivé, son but est de vous satisfaire.</p>
                </div>
              </div>
              <div className="mt-8">
                <NavLink to="/contact-paysagiste-17" className="btn btn-primary">
                  Contactez-nous
                </NavLink>
              </div>
            </div>

            {/* RIGHT — slider pleine hauteur + caption */}
            <div className="flex flex-col gap-5">
              <div className="about-grid__slider-wrap">
                <ImageSlider images={heroSliderImages} fillHeight />
              </div>
              <p className="text-gray-500 text-[0.95rem] leading-[1.85] italic">
                Plus de 8 années ont passées depuis la reprise de l'entreprise, le plaisir de créer des petits coins de paradis ou des espaces idylliques, nous font du bien et nous en profitons pour remercier nos clients de leur confiance.
              </p>
              <NavLink to="/paysagiste-charente-maritime" className="btn btn-outline">
                Découvrez notre savoir-faire
              </NavLink>
            </div>
          </div>
        </div>
      </section>

      {/* ===== PITCH ===== */}
      <section className="py-20 bg-warm">
        <div className="max-w-[780px] mx-auto px-8">
          <p className="text-[1.1rem] text-center leading-[1.9]">
            Nous dessinons et réalisons votre jardin en harmonie avec votre maison, votre personnalité, vos envies, votre mode de vie. Que votre projet soit sobre, classique, élégant, raffiné ou original, nous mettons en œuvre nos{' '}
            <NavLink to="/paysagiste-charente-maritime" className="text-primary font-semibold">compétences</NavLink>
            {' '}pour le concevoir et lui donner vie.
          </p>
          <div className="text-center mt-8">
            <NavLink to="/contact-paysagiste-17" className="btn btn-primary">
              Nous contacter
            </NavLink>
          </div>
        </div>
      </section>

      {/* ===== SERVICES ===== */}
      <section className="py-20">
        <div className="max-w-site mx-auto px-8">
          <div className="section-header">
            <h2>Tout l'univers de vos jardins, paysagiste Oléron</h2>
            <h3>Maître d'œuvre en paysage, nous sommes spécialisés dans la création, l'aménagement et l'entretien de jardins.</h3>
          </div>
          <p className="max-w-[820px] mx-auto mb-10 text-center text-gray-500 leading-[1.8]">
            De la{' '}
            <NavLink to="/conception-espace-vert-oleron" className="text-primary font-semibold">conception</NavLink>
            {' '}de votre projet à la{' '}
            <NavLink to="/amenagement-paysager-oleron" className="text-primary font-semibold">réalisation finale</NavLink>,
            {' '}Alexandre est à votre écoute et vous propose des idées d'aménagements et d'agencements de votre extérieur.
          </p>
          <ServicesGrid />
          <div className="text-center mt-10">
            <NavLink to="/conception-espace-vert-oleron" className="btn btn-outline">
              Découvrez notre méthode de conception d'espaces verts
            </NavLink>
          </div>
        </div>
      </section>

      {/* ===== GUARANTEES ===== */}
      <section className="py-20 bg-warm">
        <div className="max-w-site mx-auto px-8">
          <div className="section-header">
            <h2>Un travail dans les règles de l'Art</h2>
          </div>
          <div className="grid grid-cols-3 gap-10 md:grid-cols-1">
            <div className="text-center px-6 py-8">
              <div className="w-[68px] h-[68px] bg-primary rounded-full flex items-center justify-center mx-auto mb-6 text-white text-2xl transition hover:bg-primary-dark hover:scale-[1.08] shadow-[0_4px_16px_rgba(74,124,89,0.3)]">
                <i className="fa-solid fa-ear-listen" aria-hidden="true" />
              </div>
              <h3>Accompagnement</h3>
              <p>Nous sommes à l'écoute de votre projet : type de plantations, ambiance, entretien souhaité…</p>
            </div>
            <div className="text-center px-6 py-8">
              <div className="w-[68px] h-[68px] bg-primary rounded-full flex items-center justify-center mx-auto mb-6 text-white text-2xl transition hover:bg-primary-dark hover:scale-[1.08] shadow-[0_4px_16px_rgba(74,124,89,0.3)]">
                <i className="fa-solid fa-file-invoice" aria-hidden="true" />
              </div>
              <h3>Une tarification juste</h3>
              <p>Nous sommes attachés à l'idée de vous fournir un devis clair, précis et détaillé pour une meilleure compréhension.</p>
            </div>
            <div className="text-center px-6 py-8">
              <div className="w-[68px] h-[68px] bg-primary rounded-full flex items-center justify-center mx-auto mb-6 text-white text-2xl transition hover:bg-primary-dark hover:scale-[1.08] shadow-[0_4px_16px_rgba(74,124,89,0.3)]">
                <i className="fa-solid fa-handshake" aria-hidden="true" />
              </div>
              <h3>Le respect du client</h3>
              <p>Nous prenons le temps nécessaire pour bien comprendre votre projet et favorisons le dialogue pendant et après les créations.</p>
            </div>
          </div>
          <div className="text-center mt-10">
            <NavLink to="/contact-paysagiste-17" className="btn btn-primary">
              Demandez un devis
            </NavLink>
          </div>
        </div>
      </section>

      {/* ===== GALLERY PREVIEW ===== */}
      <section className="py-20">
        <div className="max-w-site mx-auto px-8">
          <div className="section-header">
            <h2>Nos réalisations</h2>
          </div>
          <div className="gallery-grid">
            {galleryImages.map((src, i) => (
              <div key={i} className="gallery-item">
                <img src={src} alt={`Réalisation paysagère ${i + 1}`} loading="lazy" />
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

      {/* ===== TESTIMONIALS ===== */}
      <Testimonials />

      {/* ===== CTA ===== */}
      <CTABanner />
    </>
  )
}
