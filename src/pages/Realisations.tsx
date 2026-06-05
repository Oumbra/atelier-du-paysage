import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import BeforeAfterPair from '../components/BeforeAfterPair'
import Lightbox from '../components/Lightbox'
import CTABanner from '../components/CTABanner'

const BASE = 'https://atelierdupaysage17.fr/wp-content/uploads/2024/07/'

type Tab = 'allees' | 'plantation' | 'gazon' | 'terrasse' | 'point-eau' | 'entretien' | 'cloture-rigide' | 'cloture-bois' | 'beton'

const tabs: { id: Tab; label: string }[] = [
  { id: 'allees',         label: 'Allées' },
  { id: 'plantation',     label: 'Plantation' },
  { id: 'gazon',          label: 'Gazon' },
  { id: 'terrasse',       label: 'Terrasse' },
  { id: 'point-eau',      label: "Point d'eau" },
  { id: 'entretien',      label: 'Entretien' },
  { id: 'cloture-rigide', label: 'Clôture rigide' },
  { id: 'cloture-bois',   label: 'Clôture bois' },
  { id: 'beton',          label: 'Béton désactivé' },
]

const galleryByTab: Record<Tab, string[]> = {
  allees: [
    `${BASE}allee-1024x768.webp`,
  ],
  plantation: [
    `${BASE}asset-14-3.webp`,
    `${BASE}B-1-an-apres.webp`,
    `${BASE}C-apres-17370-scaled.jpg`,
    `${BASE}17550-scaled.jpg`,
  ],
  gazon: [
    `${BASE}asset-19.webp`,
  ],
  terrasse: [
    `${BASE}asset-22.webp`,
    `${BASE}asset-27.webp`,
    `${BASE}B-terrasse-escalier-17190.webp`,
    `${BASE}A-terrasse-bois-pergola.webp`,
  ],
  'point-eau': [
    `${BASE}asset-28.webp`,
    `${BASE}asset-29.webp`,
    `${BASE}asset-30.webp`,
    `${BASE}asset-31.webp`,
  ],
  entretien: [
    `${BASE}asset-38.webp`,
  ],
  'cloture-rigide': [],
  'cloture-bois': [
    `${BASE}asset-45.webp`,
    `${BASE}asset-15.webp`,
    `${BASE}asset-47.webp`,
    `${BASE}photo-cloture-scaled.webp`,
    `${BASE}20210923_163902-scaled.webp`,
  ],
  beton: [],
}

const allImagesByTab: Record<Tab, string[]> = {
  allees: [
    `${BASE}asset-3.webp`, `${BASE}asset-4.webp`,
    `${BASE}asset-5-2.webp`, `${BASE}asset-6-1.webp`,
    `${BASE}asset-7-1.webp`, `${BASE}asset-8-1.webp`,
    `${BASE}asset-9-1.webp`, `${BASE}asset-10-1.webp`,
    `${BASE}allee-1024x768.webp`,
  ],
  plantation: [
    `${BASE}asset-12-1.webp`, `${BASE}asset-13-2.webp`,
    `${BASE}D-avant-17310-scaled.jpg`, `${BASE}D-apres-vue.jpg`,
    `${BASE}asset-14-3.webp`,
    `${BASE}B-1-an-apres.webp`,
    `${BASE}C-apres-17370-scaled.jpg`,
    `${BASE}17550-scaled.jpg`,
  ],
  gazon: [
    `${BASE}asset-17-2.webp`, `${BASE}asset-18-1.webp`,
    `${BASE}asset-19.webp`,
  ],
  terrasse: [
    `${BASE}asset-20-1.webp`, `${BASE}asset-21.webp`,
    `${BASE}asset-23-1.webp`, `${BASE}asset-24.webp`,
    `${BASE}asset-25.webp`, `${BASE}asset-26.webp`,
    `${BASE}asset-22.webp`,
    `${BASE}asset-27.webp`,
    `${BASE}B-terrasse-escalier-17190.webp`,
    `${BASE}A-terrasse-bois-pergola.webp`,
  ],
  'point-eau': [
    `${BASE}asset-28.webp`,
    `${BASE}asset-29.webp`,
    `${BASE}asset-30.webp`,
    `${BASE}asset-31.webp`,
  ],
  entretien: [
    `${BASE}asset-32.webp`, `${BASE}asset-33.webp`,
    `${BASE}asset-34.webp`, `${BASE}asset-35.webp`,
    `${BASE}asset-36.webp`, `${BASE}asset-37.webp`,
    `${BASE}asset-39.webp`, `${BASE}asset-40.webp`,
    `${BASE}asset-38.webp`,
  ],
  'cloture-rigide': [
    `${BASE}asset-41.webp`, `${BASE}asset-42.webp`,
    `${BASE}asset-43.webp`, `${BASE}asset-44.webp`,
  ],
  'cloture-bois': [
    `${BASE}asset-45.webp`,
    `${BASE}asset-15.webp`,
    `${BASE}asset-47.webp`,
    `${BASE}photo-cloture-scaled.webp`,
    `${BASE}20210923_163902-scaled.webp`,
  ],
  beton: [
    `${BASE}avant-17190-scaled.webp`,
    `${BASE}4-ans-apres-extension-terrasse.webp`,
  ],
}

interface GalleryGridProps {
  images: { src: string; alt: string }[]
  onOpen: (src: string) => void
}

function GalleryGrid({ images, onOpen }: GalleryGridProps) {
  return (
    <div className="gallery-grid" style={{ marginTop: '1.5rem' }}>
      {images.map((img, i) => (
        <div key={i} className="gallery-item" onClick={() => onOpen(img.src)}>
          <img src={img.src} alt={img.alt} loading="lazy" />
        </div>
      ))}
    </div>
  )
}

export default function Realisations() {
  const [activeTab, setActiveTab] = useState<Tab>('allees')
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)

  const openLightbox = (src: string) => {
    const idx = allImagesByTab[activeTab].indexOf(src)
    setLightboxIndex(idx >= 0 ? idx : 0)
  }

  const handleContainerClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const img = (e.target as HTMLElement).closest('img') as HTMLImageElement | null
    if (img?.src) openLightbox(img.src)
  }

  return (
    <>
      {/* PAGE HERO */}
      <section className="page-hero">
        <div className="max-w-site mx-auto px-8">
          <h1>Nos réalisations</h1>
          <p className="max-w-[700px] text-gray-500 leading-[1.8] mt-3">
            Découvrez en photos quelques-unes de nos réalisations d'aménagement paysager sur l'île d'Oléron et Marennes,
            en Charente-Maritime (17). Nous mettons tout notre cœur à l'ouvrage pour la{' '}
            <NavLink to="/conception-espace-vert-oleron" className="text-primary">conception sur-mesure</NavLink>
            {' '}de votre extérieur.
          </p>
        </div>
      </section>

      {/* TABS */}
      <section className="py-20">
        <div className="max-w-site mx-auto px-8">
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

          <div onClick={handleContainerClick} className="cursor-pointer">
            {activeTab === 'allees' && (
              <>
                <BeforeAfterPair beforeSrc={`${BASE}asset-3.webp`} afterSrc={`${BASE}asset-4.webp`} alt="Allée" />
                <BeforeAfterPair beforeSrc={`${BASE}asset-5-2.webp`} afterSrc={`${BASE}asset-6-1.webp`} alt="Allée 2" />
                <BeforeAfterPair beforeSrc={`${BASE}asset-7-1.webp`} afterSrc={`${BASE}asset-8-1.webp`} alt="Allée 3" />
                <BeforeAfterPair beforeSrc={`${BASE}asset-9-1.webp`} afterSrc={`${BASE}asset-10-1.webp`} alt="Allée 4" />
                <GalleryGrid
                  images={[{ src: `${BASE}allee-1024x768.webp`, alt: 'Création allée 17' }]}
                  onOpen={openLightbox}
                />
              </>
            )}
            {activeTab === 'plantation' && (
              <>
                <BeforeAfterPair beforeSrc={`${BASE}asset-12-1.webp`} afterSrc={`${BASE}asset-13-2.webp`} alt="Plantation" />
                <BeforeAfterPair beforeSrc={`${BASE}D-avant-17310-scaled.jpg`} afterSrc={`${BASE}D-apres-vue.jpg`} alt="Plantation 2" />
                <GalleryGrid
                  images={[
                    { src: `${BASE}asset-14-3.webp`, alt: 'Aménagement paysager à Oléron' },
                    { src: `${BASE}B-1-an-apres.webp`, alt: 'Jardin 1 an après' },
                    { src: `${BASE}C-apres-17370-scaled.jpg`, alt: 'Aménagement paysager la rochelle' },
                    { src: `${BASE}17550-scaled.jpg`, alt: 'Plantation 17550' },
                  ]}
                  onOpen={openLightbox}
                />
              </>
            )}
            {activeTab === 'gazon' && (
              <>
                <BeforeAfterPair beforeSrc={`${BASE}asset-17-2.webp`} afterSrc={`${BASE}asset-18-1.webp`} alt="Gazon" />
                <GalleryGrid
                  images={[{ src: `${BASE}asset-19.webp`, alt: 'Aménagement paysager en Charente-Maritime' }]}
                  onOpen={openLightbox}
                />
              </>
            )}
            {activeTab === 'terrasse' && (
              <>
                <BeforeAfterPair beforeSrc={`${BASE}asset-20-1.webp`} afterSrc={`${BASE}asset-21.webp`} alt="Terrasse" />
                <BeforeAfterPair beforeSrc={`${BASE}asset-23-1.webp`} afterSrc={`${BASE}asset-24.webp`} alt="Terrasse 2" />
                <BeforeAfterPair beforeSrc={`${BASE}asset-25.webp`} afterSrc={`${BASE}asset-26.webp`} alt="Terrasse 3" />
                <GalleryGrid
                  images={[
                    { src: `${BASE}asset-22.webp`, alt: 'Paysagiste en Charente-Maritime' },
                    { src: `${BASE}asset-27.webp`, alt: "Conception d'espaces verts 17" },
                    { src: `${BASE}B-terrasse-escalier-17190.webp`, alt: 'Terrasse escalier 17190' },
                    { src: `${BASE}A-terrasse-bois-pergola.webp`, alt: 'Terrasse bois pergola' },
                  ]}
                  onOpen={openLightbox}
                />
              </>
            )}
            {activeTab === 'point-eau' && (
              <GalleryGrid
                images={[
                  { src: `${BASE}asset-28.webp`, alt: 'Entretien de jardin en Charente-Maritime' },
                  { src: `${BASE}asset-29.webp`, alt: 'Aménagement paysager à Oléron' },
                  { src: `${BASE}asset-30.webp`, alt: 'Paysagiste 17' },
                  { src: `${BASE}asset-31.webp`, alt: "Conception d'espaces verts en Charente-Maritime" },
                ]}
                onOpen={openLightbox}
              />
            )}
            {activeTab === 'entretien' && (
              <>
                <BeforeAfterPair beforeSrc={`${BASE}asset-32.webp`} afterSrc={`${BASE}asset-33.webp`} alt="Entretien" />
                <BeforeAfterPair beforeSrc={`${BASE}asset-34.webp`} afterSrc={`${BASE}asset-35.webp`} alt="Entretien 2" />
                <BeforeAfterPair beforeSrc={`${BASE}asset-36.webp`} afterSrc={`${BASE}asset-37.webp`} alt="Entretien 3" />
                <BeforeAfterPair beforeSrc={`${BASE}asset-39.webp`} afterSrc={`${BASE}asset-40.webp`} alt="Entretien 4" />
                <GalleryGrid
                  images={[{ src: `${BASE}asset-38.webp`, alt: 'Paysagiste à Oléron' }]}
                  onOpen={openLightbox}
                />
              </>
            )}
            {activeTab === 'cloture-rigide' && (
              <>
                <BeforeAfterPair beforeSrc={`${BASE}asset-41.webp`} afterSrc={`${BASE}asset-42.webp`} alt="Clôture rigide" />
                <BeforeAfterPair beforeSrc={`${BASE}asset-43.webp`} afterSrc={`${BASE}asset-44.webp`} alt="Clôture rigide 2" />
              </>
            )}
            {activeTab === 'cloture-bois' && (
              <GalleryGrid
                images={[
                  { src: `${BASE}asset-45.webp`, alt: 'Entretien de jardin 17' },
                  { src: `${BASE}asset-15.webp`, alt: "Conception d'espaces verts 17" },
                  { src: `${BASE}asset-47.webp`, alt: 'Paysagiste 17' },
                  { src: `${BASE}photo-cloture-scaled.webp`, alt: 'Clôture 17' },
                  { src: `${BASE}20210923_163902-scaled.webp`, alt: 'Création de clôture' },
                ]}
                onOpen={openLightbox}
              />
            )}
            {activeTab === 'beton' && (
              <BeforeAfterPair
                beforeSrc={`${BASE}avant-17190-scaled.webp`}
                afterSrc={`${BASE}4-ans-apres-extension-terrasse.webp`}
                alt="Béton désactivé"
              />
            )}
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTABanner
        title="Atelier du Paysage 17, faites une demande de devis pour votre projet d'aménagement paysager à Oléron."
      />

      {/* LIGHTBOX DIAPORAMA */}
      {lightboxIndex !== null && (
        <Lightbox
          images={allImagesByTab[activeTab]}
          initialIndex={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
        />
      )}
    </>
  )
}
