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
      {/* Top bar */}
      <div className="topbar">
        <div className="topbar__inner">
          <a href="tel:0546753210">
            <span>📞</span>
            <span>05 46 75 32 10</span>
          </a>
          <NavLink to="/contact-paysagiste-17" className="topbar__contact-btn">
            Contactez-nous
          </NavLink>
        </div>
      </div>

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
                className={({ isActive }) =>
                  `nav-link${isActive ? ' active' : ''}`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </div>

          {/* Center logo */}
          <NavLink to="/" className="header__logo">
            <img
              src="https://atelierdupaysage17.fr/wp-content/uploads/2022/05/asset-1-1024x717.webp"
              alt="Paysagiste 17 – Atelier du Paysage"
            />
          </NavLink>

          {/* Right links */}
          <div className="header__nav-right">
            {rightLinks.map(link => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) =>
                  `nav-link${isActive ? ' active' : ''}`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </div>

          {/* Mobile toggle */}
          <button
            className="header__toggle"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menu"
          >
            <span />
            <span />
            <span />
          </button>
        </nav>

        {/* Mobile menu */}
        <div className={`header__mobile-menu${menuOpen ? ' open' : ''}`}>
          {allLinks.map(link => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === '/'}
              className={({ isActive }) =>
                `nav-link${isActive ? ' active' : ''}`
              }
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </NavLink>
          ))}
          <a href="tel:0546753210" className="nav-link" style={{ color: 'var(--color-primary)' }}>
            📞 05 46 75 32 10
          </a>
        </div>
      </header>
    </div>
  )
}
