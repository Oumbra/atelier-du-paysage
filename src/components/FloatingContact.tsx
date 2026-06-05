import { NavLink } from 'react-router-dom'
import './FloatingContact.css'


export default function FloatingContact() {
  return (
    <div className="floating-contact" aria-label="Contact rapide">
      {/* Téléphone */}
      <a href="tel:0546753210" className="floating-contact__tab floating-contact__tab--phone">
        <i className="fa-solid fa-phone" aria-hidden="true" />
        <span>05 46 75 32 10</span>
      </a>

      {/* Contactez-nous */}
      <NavLink to="/contact-paysagiste-17" className="floating-contact__tab floating-contact__tab--contact">
        <i className="fa-regular fa-envelope" aria-hidden="true" />
        <span>Contactez-nous</span>
      </NavLink>
    </div>
  )
}
