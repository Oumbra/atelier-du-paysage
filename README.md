# Atelier du Paysage 17 – Site web React/TypeScript

Recréation fidèle du site [atelierdupaysage17.fr](https://atelierdupaysage17.fr/) en React + TypeScript + Vite.

## Démarrage

```bash
npm install
npm run dev
```

Le site sera disponible sur http://localhost:5173

## Structure

```
src/
├── components/
│   ├── Header.tsx          # Navigation split + top bar + menu mobile
│   ├── Footer.tsx          # Footer avec carte Google Maps
│   ├── Testimonials.tsx    # Carousel d'avis clients
│   ├── CTABanner.tsx       # Bandeau appel à l'action
│   ├── ImageSlider.tsx     # Carousel d'images
│   ├── BeforeAfterPair.tsx # Comparaison avant/après
│   ├── Lightbox.tsx        # Visionneuse d'images
│   ├── Guarantees.tsx      # Section garanties
│   ├── ServicesGrid.tsx    # Grille des savoir-faire
│   └── ScrollToTop.tsx     # Scroll en haut à chaque changement de page
├── pages/
│   ├── Home.tsx            # Accueil
│   ├── SavoirFaire.tsx     # Nos savoir-faire
│   ├── Conception.tsx      # Conception d'espaces verts
│   ├── Realisations.tsx    # Réalisations (avec onglets par catégorie)
│   ├── Entretien.tsx       # Entretien de jardin
│   ├── Contact.tsx         # Contact (formulaires Devis + Contact)
│   └── MentionsLegales.tsx # Mentions légales
└── index.css               # Styles globaux (CSS variables, composants)
```

## Pages

| Route | Page |
|-------|------|
| `/` | Accueil |
| `/paysagiste-charente-maritime` | Nos savoir-faire |
| `/conception-espace-vert-oleron` | Conception |
| `/amenagement-paysager-oleron` | Réalisations |
| `/entretien-annuel-jardin-17` | Entretien |
| `/contact-paysagiste-17` | Contact |
| `/mentions-legales` | Mentions légales |

## Notes

- Les images sont chargées depuis le site original (CDN WordPress)
- Les formulaires de contact affichent un message de succès (pas d'envoi réel – à brancher sur un backend)
- Le projet est responsive mobile
