import { NavLink } from 'react-router-dom'
import './CTABanner.css'


interface CTABannerProps {
  title?: string
  text?: string
  btnLabel?: string
}

export default function CTABanner({
  title = 'Atelier du Paysage 17, faites une demande de devis pour votre projet.',
  text = 'Vous avez un projet d\'aménagement de jardin, une demande d\'entretien ? Demandez votre devis gratuit. Nous vous proposons également un devis pour la conception de vos espaces extérieurs sur-mesure.',
  btnLabel = 'Demandez un devis',
}: CTABannerProps) {
  return (
    <section className="cta-banner">
      <div className="container">
        <h2>{title}</h2>
        <p>{text}</p>
        <NavLink to="/contact-paysagiste-17" className="btn btn-outline-white">
          {btnLabel}
        </NavLink>
      </div>
    </section>
  )
}
