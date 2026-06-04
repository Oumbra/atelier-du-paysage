import { NavLink } from 'react-router-dom'
import Guarantees from '../components/Guarantees'
import Testimonials from '../components/Testimonials'
import CTABanner from '../components/CTABanner'

const BASE = 'https://atelierdupaysage17.fr/wp-content/uploads/2024/07/'

const galleryImages = [
  { src: `${BASE}asset-13.webp`, alt: 'Réalisation 1' },
  { src: `${BASE}asset-5-1.webp`, alt: 'Réalisation 2' },
  { src: `${BASE}asset-15.webp`, alt: 'Réalisation 3' },
  { src: `${BASE}asset-16.webp`, alt: 'Réalisation 4' },
  { src: `${BASE}asset-17.webp`, alt: 'Réalisation 5' },
  { src: `${BASE}asset-18.webp`, alt: 'Réalisation 6' },
]

const entretienTasks = [
  'La tonte de la pelouse.',
  'La taille et l\'élagage des haies et des arbres fruitiers.',
  'Le nettoyage et l\'entretien des massifs.',
  'Le désherbage des allées et des mauvaises herbes.',
  'Le ramassage des feuilles mortes.',
  'Le nettoyage des terrasses.',
  'Le traitement des végétaux, des arbres et des arbustes.',
  'L\'évacuation des déchets et végétaux.',
]

export default function Entretien() {
  return (
    <>
      {/* PAGE HERO */}
      <section className="page-hero">
        <div className="container">
          <h1>Entretien de jardin en Charente-Maritime</h1>
        </div>
      </section>

      {/* MAIN CONTENT */}
      <section className="section">
        <div className="container">
          <div className="two-col">
            <div>
              <h2>Entretien annuel, ponctuel, remise en état</h2>
              <p>
                Parce que nous ne nous contentons pas seulement de{' '}
                <NavLink to="/conception-espace-vert-oleron" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>créer votre jardin</NavLink>,
                {' '}nous l'entretenons. Nous bénéficions d'une clientèle régulière pour laquelle nous entretenons le jardin à l'année. Nous nous efforçons de travailler en concordance avec le client avant son arrivée dans sa résidence secondaire.
              </p>
              <p>Pour préserver la beauté de vos espaces verts, nous effectuons toutes les tâches d'entretien :</p>
              <ul className="entretien-list">
                {entretienTasks.map((task, i) => (
                  <li key={i}>{task}</li>
                ))}
              </ul>
              <p style={{ marginTop: '1.5rem', color: 'var(--color-text-light)', fontSize: '0.95rem' }}>
                Nous apportons des solutions d'aménagements pour limiter les entretiens répétitifs (toile polypropylène, paillage…)
              </p>
              <p style={{ marginTop: '0.75rem', color: 'var(--color-text-light)', fontSize: '0.95rem' }}>
                De plus, depuis 2018, nous avons pris le parti de limiter au strict minimum l'usage des produits phytosanitaires
                (utilisation de produits BIO et d'auxiliaires pour lutter contre les insectes nuisibles et les maladies des végétaux).
              </p>
            </div>
            <div>
              <img
                src={`${BASE}entretien-de-jardin-e1720770496702.webp`}
                alt="Entretien de jardin en Charente-Maritime"
                style={{ borderRadius: 8, boxShadow: 'var(--shadow-md)' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* INFO BOX */}
      <section className="section section--light">
        <div className="container">
          <div className="two-col" style={{ alignItems: 'center', gap: '3rem' }}>
            <div>
              <img
                src={`${BASE}logo-service-a-la-personne.webp`}
                alt="Service à la personne – crédit d'impôt"
                style={{ maxWidth: 160, marginBottom: '1rem' }}
              />
              <div className="info-box">
                <p>
                  L'entreprise est membre de la coopérative <strong>Pro Jardin Services 17</strong> afin que vous puissiez bénéficier
                  d'un <strong>crédit d'impôts de 50%</strong> sur vos factures d'entretien.
                </p>
              </div>
            </div>
            <div>
              <h2>Entretien à l'île d'Oléron</h2>
              <p>
                Que vous ayez une résidence principale ou secondaire, nous proposons des contrats d'entretien adaptés à vos besoins.
                Profitez d'un jardin toujours impeccable, sans avoir à vous en préoccuper.
              </p>
              <NavLink to="/contact-paysagiste-17" className="btn btn-primary" style={{ marginTop: '1rem' }}>
                Demandez un devis entretien
              </NavLink>
            </div>
          </div>
        </div>
      </section>

      {/* GUARANTEES */}
      <Guarantees />

      {/* TESTIMONIALS */}
      <Testimonials />

      {/* GALLERY */}
      <section className="section">
        <div className="container">
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
          <div style={{ textAlign: 'center', marginTop: '2.5rem' }}>
            <NavLink to="/amenagement-paysager-oleron" className="btn btn-outline">
              Voir plus de réalisations
            </NavLink>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTABanner
        title="Entretien de jardin en Charente-Maritime, faites une demande de devis pour votre projet."
        text="Vous avez un projet d'aménagement de jardin, une demande d'entretien ? Demandez votre devis gratuit. Nous vous proposons également un devis pour la conception de vos espaces extérieurs sur-mesure."
      />
    </>
  )
}
