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
      {/* HERO */}
      <section
        className="hero"
        style={{
          backgroundImage: 'url(https://atelierdupaysage17.fr/wp-content/uploads/2024/07/asset-20.webp)',
        }}
      >
        <div className="hero__bg" style={{
          backgroundImage: 'url(https://atelierdupaysage17.fr/wp-content/uploads/2024/07/asset-20.webp)',
        }} />
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

      {/* ABOUT / TEAM */}
      <section className="section">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'start' }}>
            <div>
              <h2>Paysagiste sur l'Île d'Oléron</h2>
              <h3 style={{ fontFamily: 'var(--font-body)', fontWeight: 400, fontSize: '1.05rem', color: 'var(--color-primary)', marginBottom: '2rem' }}>
                Dessinateur, maître d'œuvre &amp; artisan. Nous vous accompagnons tout au long de votre projet paysager sur l'Île d'Oléron !
              </h3>
              <div className="team-grid" style={{ gridTemplateColumns: '1fr' }}>
                <div className="team-card">
                  <h4>Alexandre AMOURY – artisan paysagiste</h4>
                  <p>Sa carrière commence par quatre années dans la Marine Nationale en tant que sous-officier chez les fusiliers marins. Puis Alexandre décide de se reconvertir dans l'aménagement paysager en suivant un BTS en alternance au Centre de Formation et de Promotion Horticole d'Ecully dans le Rhône. Après quelques années, il monte une micro entreprise à Lyon. Finalement, l'opportunité de reprendre l'entreprise de Monsieur VILAIR, chez qui il a grandi, se présente. En juin 2016, une nouvelle aventure commence…</p>
                </div>
                <div className="team-card">
                  <h4>Patricia AMOURY – assistante de gestion</h4>
                  <p>Elle est chargée de gérer les documents administratifs, la comptabilité, les ressources humaines… N'étant pas du métier, elle comble son manque de connaissance technique par son dévouement envers vos attentes, vos demandes urgentes et travaille à rendre possible des prises de rendez-vous ou des interventions rapidement.</p>
                </div>
                <div className="team-card">
                  <h4>Lenny JOVENIAUX</h4>
                  <p>En apprentissage depuis janvier 2022 au sein de l'entreprise, il continue l'aventure avec nous. Il est sérieux et motivé, son but est de vous satisfaire.</p>
                </div>
              </div>
              <div style={{ marginTop: '2rem' }}>
                <NavLink to="/contact-paysagiste-17" className="btn btn-primary">
                  Contactez-nous
                </NavLink>
              </div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <ImageSlider images={heroSliderImages} />
              <p style={{ color: 'var(--color-text-light)', fontSize: '0.95rem', lineHeight: 1.8 }}>
                Plus de 8 années ont passées depuis la reprise de l'entreprise, le plaisir de créer des petits coins de paradis ou des espaces idylliques, nous font du bien et nous en profitons pour remercier nos clients de leur confiance.
              </p>
              <NavLink to="/paysagiste-charente-maritime" className="btn btn-outline">
                Découvrez notre savoir-faire
              </NavLink>
            </div>
          </div>
        </div>
      </section>

      {/* PITCH */}
      <section className="section section--light">
        <div className="container" style={{ maxWidth: '760px' }}>
          <p style={{ fontSize: '1.1rem', textAlign: 'center', lineHeight: 1.9 }}>
            Nous dessinons et réalisons votre jardin en harmonie avec votre maison, votre personnalité, vos envies, votre mode de vie. Que votre projet soit sobre, classique, élégant, raffiné ou original, nous mettons en œuvre nos{' '}
            <NavLink to="/paysagiste-charente-maritime" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>compétences</NavLink>
            {' '}pour le concevoir et lui donner vie.
          </p>
          <div style={{ textAlign: 'center', marginTop: '2rem' }}>
            <NavLink to="/contact-paysagiste-17" className="btn btn-primary">
              Nous contacter
            </NavLink>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <h2>Tout l'univers de vos jardins, paysagiste Oléron</h2>
            <h3>Maître d'œuvre en paysage, nous sommes spécialisés dans la création, l'aménagement et l'entretien de jardins.</h3>
          </div>
          <p style={{ maxWidth: 800, margin: '0 auto 2.5rem', textAlign: 'center', color: 'var(--color-text-light)' }}>
            De la{' '}
            <NavLink to="/conception-espace-vert-oleron" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>conception</NavLink>
            {' '}de votre projet à la{' '}
            <NavLink to="/amenagement-paysager-oleron" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>réalisation finale</NavLink>,
            {' '}Alexandre est à votre écoute et vous propose des idées d'aménagements et d'agencements de votre extérieur.
          </p>
          <ServicesGrid />
          <div style={{ textAlign: 'center', marginTop: '2.5rem' }}>
            <NavLink to="/conception-espace-vert-oleron" className="btn btn-outline">
              Découvrez notre méthode de conception
            </NavLink>
          </div>
        </div>
      </section>

      {/* GUARANTEES */}
      <section className="section section--light">
        <div className="container">
          <div className="section-header">
            <h2>Un travail dans les règles de l'Art</h2>
          </div>
          <div className="guarantees-grid">
            <div className="guarantee-card">
              <div className="guarantee-card__icon">👂</div>
              <h3>Accompagnement</h3>
              <p>Nous sommes à l'écoute de votre projet : type de plantations, ambiance, entretien souhaité…</p>
            </div>
            <div className="guarantee-card">
              <div className="guarantee-card__icon">📋</div>
              <h3>Une tarification juste</h3>
              <p>Nous sommes attachés à l'idée de vous fournir un devis clair, précis et détaillé pour une meilleure compréhension.</p>
            </div>
            <div className="guarantee-card">
              <div className="guarantee-card__icon">🤝</div>
              <h3>Le respect du client</h3>
              <p>Nous prenons le temps nécessaire pour bien comprendre votre projet et favorisons le dialogue pendant et après les créations.</p>
            </div>
          </div>
          <div style={{ textAlign: 'center', marginTop: '2.5rem' }}>
            <NavLink to="/contact-paysagiste-17" className="btn btn-primary">
              Demandez un devis
            </NavLink>
          </div>
        </div>
      </section>

      {/* GALLERY PREVIEW */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <h2>Nos réalisations</h2>
          </div>
          <div className="gallery-grid">
            {galleryImages.map((src, i) => (
              <div key={i} className="gallery-item">
                <img src={src} alt={`Réalisation ${i + 1}`} loading="lazy" />
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
      <CTABanner />
    </>
  )
}
