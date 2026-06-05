import { useState } from 'react'
import { NavLink } from 'react-router-dom'

const leftLinks = [
  { to: '/', label: 'Accueil' },
  { to: '/paysagiste-charente-maritime', label: 'Nos savoir-faire' },
  { to: '/conception-espace-vert-oleron', label: 'Conception' },
]

const rightLinks = [
  { to: '/amenagement-paysager-oleron', label: 'Réalisations' },
  { to: '/entretien-annuel-jardin-17', label: 'Entretien' },
  { to: '/contact-paysagiste-17', label: 'Contact' },
]

const allLinks = [...leftLinks, ...rightLinks]

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div className="header-wrapper">
      {/* Main nav */}
      <header className="header">
        <nav className="header__nav">
          {/* Left links */}
          <div className="header__nav-left">
            {leftLinks.map(link => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === '/'}
                className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`}
              >
                {link.label}
              </NavLink>
            ))}
          </div>

          {/* Center logo */}
          <NavLink to="/" className="header__logo">
            <img
              src="https://atelierdupaysage17.fr/wp-content/uploads/2022/05/asset-1-1024x717.webp"
              alt="Atelier du Paysage 17 – Paysagiste Oléron"
            />
          </NavLink>

          {/* Right links */}
          <div className="header__nav-right">
            {rightLinks.map(link => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`}
              >
                {link.label}
              </NavLink>
            ))}
          </div>

          {/* Mobile toggle */}
          <button
            className={`header__toggle${menuOpen ? ' open' : ''}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
            aria-expanded={menuOpen}
          >
            <span />
            <span />
            <span />
          </button>
        </nav>

        {/* Mobile menu */}
        <div className={`header__mobile-menu${menuOpen ? ' open' : ''}`} role="navigation">
          {allLinks.map(link => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === '/'}
              className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`}
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </NavLink>
          ))}
          <a
            href="tel:0546753210"
            className="nav-link"
            style={{ color: 'var(--color-primary)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}
          >
            <i className="fa-solid fa-phone" aria-hidden="true" style={{ fontSize: '0.85rem' }} />
            05 46 75 32 10
          </a>
        </div>
      </header>
    </div>
  )
}
