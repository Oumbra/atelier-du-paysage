import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import BeforeAfterPair from '../components/BeforeAfterPair'
import Lightbox from '../components/Lightbox'
import CTABanner from '../components/CTABanner'

const BASE = 'https://atelierdupaysage17.fr/wp-content/uploads/2024/07/'

type Tab = 'allees' | 'plantation' | 'gazon' | 'terrasse' | 'point-eau' | 'entretien' | 'cloture-rigide' | 'cloture-bois' | 'beton'

const tabs: { id: Tab; label: string }[] = [
  { id: 'allees', label: 'Allées' },
  { id: 'plantation', label: 'Plantation' },
  { id: 'gazon', label: 'Gazon' },
  { id: 'terrasse', label: 'Terrasse' },
  { id: 'point-eau', label: 'Point d\'eau' },
  { id: 'entretien', label: 'Entretien' },
  { id: 'cloture-rigide', label: 'Clôture rigide' },
  { id: 'cloture-bois', label: 'Clôture bois' },
  { id: 'beton', label: 'Béton désactivé' },
]

const content: Record<Tab, React.ReactNode> = {
  allees: (
    <>
      <BeforeAfterPair beforeSrc={`${BASE}asset-3.webp`} afterSrc={`${BASE}asset-4.webp`} alt="Allée" />
      <BeforeAfterPair beforeSrc={`${BASE}asset-5-2.webp`} afterSrc={`${BASE}asset-6-1.webp`} alt="Allée 2" />
      <BeforeAfterPair beforeSrc={`${BASE}asset-7-1.webp`} afterSrc={`${BASE}asset-8-1.webp`} alt="Allée 3" />
      <BeforeAfterPair beforeSrc={`${BASE}asset-9-1.webp`} afterSrc={`${BASE}asset-10-1.webp`} alt="Allée 4" />
      <div className="gallery-grid" style={{ marginTop: '1.5rem' }}>
        <div className="gallery-item">
          <img src={`${BASE}allee-1024x768.webp`} alt="Création allée 17" loading="lazy" />
        </div>
      </div>
    </>
  ),
  plantation: (
    <>
      <BeforeAfterPair beforeSrc={`${BASE}asset-12-1.webp`} afterSrc={`${BASE}asset-13-2.webp`} alt="Plantation" />
      <BeforeAfterPair beforeSrc={`${BASE}D-avant-17310-scaled.jpg`} afterSrc={`${BASE}D-apres-vue.jpg`} alt="Plantation 2" />
      <div className="gallery-grid" style={{ marginTop: '1.5rem' }}>
        {[
          { src: `${BASE}asset-14-3.webp`, alt: 'Aménagement paysager à Oléron' },
          { src: `${BASE}B-1-an-apres.webp`, alt: 'Jardin 1 an après' },
          { src: `${BASE}C-apres-17370-scaled.jpg`, alt: 'Aménagement paysager la rochelle' },
          { src: `${BASE}17550-scaled.jpg`, alt: 'Plantation 17550' },
        ].map((img, i) => (
          <div key={i} className="gallery-item">
            <img src={img.src} alt={img.alt} loading="lazy" />
          </div>
        ))}
      </div>
    </>
  ),
  gazon: (
    <>
      <BeforeAfterPair beforeSrc={`${BASE}asset-17-2.webp`} afterSrc={`${BASE}asset-18-1.webp`} alt="Gazon" />
      <div className="gallery-grid" style={{ marginTop: '1.5rem' }}>
        <div className="gallery-item">
          <img src={`${BASE}asset-19.webp`} alt="Aménagement paysager en Charente-Maritime" loading="lazy" />
        </div>
      </div>
    </>
  ),
  terrasse: (
    <>
      <BeforeAfterPair beforeSrc={`${BASE}asset-20-1.webp`} afterSrc={`${BASE}asset-21.webp`} alt="Terrasse" />
      <BeforeAfterPair beforeSrc={`${BASE}asset-23-1.webp`} afterSrc={`${BASE}asset-24.webp`} alt="Terrasse 2" />
      <BeforeAfterPair beforeSrc={`${BASE}asset-25.webp`} afterSrc={`${BASE}asset-26.webp`} alt="Terrasse 3" />
      <div className="gallery-grid" style={{ marginTop: '1.5rem' }}>
        {[
          { src: `${BASE}asset-22.webp`, alt: 'Paysagiste en Charente-Maritime' },
          { src: `${BASE}asset-27.webp`, alt: "Conception d'espaces verts 17" },
          { src: `${BASE}B-terrasse-escalier-17190.webp`, alt: 'Terrasse escalier 17190' },
          { src: `${BASE}A-terrasse-bois-pergola.webp`, alt: 'Terrasse bois pergola' },
        ].map((img, i) => (
          <div key={i} className="gallery-item">
            <img src={img.src} alt={img.alt} loading="lazy" />
          </div>
        ))}
      </div>
    </>
  ),
  'point-eau': (
    <div className="gallery-grid">
      {[
        { src: `${BASE}asset-28.webp`, alt: 'Entretien de jardin en Charente-Maritime' },
        { src: `${BASE}asset-29.webp`, alt: 'Aménagement paysager à Oléron' },
        { src: `${BASE}asset-30.webp`, alt: 'Paysagiste 17' },
        { src: `${BASE}asset-31.webp`, alt: "Conception d'espaces verts en Charente-Maritime" },
      ].map((img, i) => (
        <div key={i} className="gallery-item">
          <img src={img.src} alt={img.alt} loading="lazy" />
        </div>
      ))}
    </div>
  ),
  entretien: (
    <>
      <BeforeAfterPair beforeSrc={`${BASE}asset-32.webp`} afterSrc={`${BASE}asset-33.webp`} alt="Entretien" />
      <BeforeAfterPair beforeSrc={`${BASE}asset-34.webp`} afterSrc={`${BASE}asset-35.webp`} alt="Entretien 2" />
      <BeforeAfterPair beforeSrc={`${BASE}asset-36.webp`} afterSrc={`${BASE}asset-37.webp`} alt="Entretien 3" />
      <BeforeAfterPair beforeSrc={`${BASE}asset-39.webp`} afterSrc={`${BASE}asset-40.webp`} alt="Entretien 4" />
      <div className="gallery-grid" style={{ marginTop: '1.5rem' }}>
        <div className="gallery-item">
          <img src={`${BASE}asset-38.webp`} alt="Paysagiste à Oléron" loading="lazy" />
        </div>
      </div>
    </>
  ),
  'cloture-rigide': (
    <>
      <BeforeAfterPair beforeSrc={`${BASE}asset-41.webp`} afterSrc={`${BASE}asset-42.webp`} alt="Clôture rigide" />
      <BeforeAfterPair beforeSrc={`${BASE}asset-43.webp`} afterSrc={`${BASE}asset-44.webp`} alt="Clôture rigide 2" />
    </>
  ),
  'cloture-bois': (
    <div className="gallery-grid">
      {[
        { src: `${BASE}asset-45.webp`, alt: 'Entretien de jardin 17' },
        { src: `${BASE}asset-15.webp`, alt: "Conception d'espaces verts 17" },
        { src: `${BASE}asset-47.webp`, alt: 'Paysagiste 17' },
        { src: `${BASE}photo-cloture-scaled.webp`, alt: 'Clôture 17' },
        { src: `${BASE}20210923_163902-scaled.webp`, alt: 'Création de clôture' },
      ].map((img, i) => (
        <div key={i} className="gallery-item">
          <img src={img.src} alt={img.alt} loading="lazy" />
        </div>
      ))}
    </div>
  ),
  beton: (
    <BeforeAfterPair
      beforeSrc={`${BASE}avant-17190-scaled.webp`}
      afterSrc={`${BASE}4-ans-apres-extension-terrasse.webp`}
      alt="Béton désactivé"
    />
  ),
}

export default function Realisations() {
  const [activeTab, setActiveTab] = useState<Tab>('allees')
  const [lightboxSrc, setLightboxSrc] = useState<string | null>(null)

  return (
    <>
      {/* PAGE HERO */}
      <section className="page-hero">
        <div className="container">
          <h1>Nos réalisations</h1>
          <p style={{ maxWidth: 700, color: 'var(--color-text-light)', lineHeight: 1.8 }}>
            Découvrez en photos quelques-unes de nos réalisations d'aménagement paysager sur l'île d'Oléron et Marennes,
            en Charente-Maritime (17). Nous mettons tout notre cœur à l'ouvrage pour la{' '}
            <NavLink to="/conception-espace-vert-oleron" style={{ color: 'var(--color-primary)' }}>conception sur-mesure</NavLink>
            {' '}de votre extérieur.
          </p>
        </div>
      </section>

      {/* TABS */}
      <section className="section">
        <div className="container">
          <div className="tabs">
            {tabs.map(tab => (
              <button
                key={tab.id}
                className={`tab-btn${activeTab === tab.id ? ' active' : ''}`}
                onClick={() => setActiveTab(tab.id)}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <div onClick={(e) => {
            const img = (e.target as HTMLElement).closest('img')
            if (img?.src) setLightboxSrc(img.src)
          }}>
            {content[activeTab]}
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTABanner
        title="Atelier du Paysage 17, faites une demande de devis pour votre projet d'aménagement paysager à Oléron."
      />

      {lightboxSrc && (
        <Lightbox src={lightboxSrc} onClose={() => setLightboxSrc(null)} />
      )}
    </>
  )
}
