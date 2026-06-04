import { NavLink } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__top">
        <div className="footer__grid">
          {/* Col 1: Logo + description */}
          <div>
            <div className="footer__logo">
              <NavLink to="/">
                <img
                  src="https://atelierdupaysage17.fr/wp-content/uploads/2022/05/asset-1-1024x717.webp"
                  alt="Paysagiste 17"
                />
              </NavLink>
            </div>
            <p className="footer__desc">
              L'Atelier du Paysage 17, paysagiste à DOLUS D'OLÉRON en Charente-Maritime (17).
              Découvrez <NavLink to="/paysagiste-charente-maritime" style={{ color: 'var(--color-accent)' }}>notre savoir-faire</NavLink>.
              Nous proposons de la{' '}
              <NavLink to="/conception-espace-vert-oleron" style={{ color: 'var(--color-accent)' }}>conception d'espace vert</NavLink>
              {' '}et{' '}
              <NavLink to="/entretien-annuel-jardin-17" style={{ color: 'var(--color-accent)' }}>l'entretien paysager</NavLink>.
            </p>
          </div>

          {/* Col 2: Contact */}
          <div>
            <p className="footer__title">Nous contacter</p>
            <ul className="footer__contact-list">
              <li>
                <span>📍</span>
                <span>Route de la Rémigeasse, 17550 DOLUS D'OLERON</span>
              </li>
              <li>
                <span>📞</span>
                <a href="tel:0546753210"><strong>05 46 75 32 10</strong></a>
              </li>
              <li>
                <span>🕐</span>
                <span>Du lundi au vendredi de 8h30 à 18h30</span>
              </li>
              <li>
                <span>✉️</span>
                <NavLink to="/contact-paysagiste-17">Contactez-nous ici</NavLink>
              </li>
            </ul>
            <div className="footer__social">
              <a
                href="https://www.facebook.com/atelierdupaysage17/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
              >
                f
              </a>
              <a
                href="https://g.page/r/Ccj3DMR6OXOjEAE/review"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Google"
              >
                G
              </a>
            </div>
          </div>

          {/* Col 3: Map */}
          <div>
            <p className="footer__title">Nous trouver</p>
            <div className="footer__map">
              <iframe
                title="Atelier du Paysage 17 - Localisation"
                src="https://maps.google.com/maps?q=Atelier%20du%20paysage%2017&t=m&z=14&output=embed&iwloc=near"
                loading="lazy"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </div>

      <div className="footer__bottom">
        <div className="footer__bottom-inner">
          <span>Atelier du paysage 17 &copy; 2025 — Tous droits réservés</span>
          <NavLink to="/mentions-legales">Mentions légales et conformité</NavLink>
        </div>
      </div>
    </footer>
  )
}
