import { useState, type FormEvent } from 'react'

type ContactTab = 'devis' | 'contact'

interface DevisForm {
  prenom: string
  nom: string
  email: string
  tel: string
  nature: string[]
  message: string
}

interface ContactForm {
  prenom: string
  nom: string
  email: string
  tel: string
  sujet: string
  message: string
}

const initialDevis: DevisForm = {
  prenom: '',
  nom: '',
  email: '',
  tel: '',
  nature: [],
  message: '',
}

const initialContact: ContactForm = {
  prenom: '',
  nom: '',
  email: '',
  tel: '',
  sujet: '',
  message: '',
}

export default function Contact() {
  const [activeTab, setActiveTab] = useState<ContactTab>('devis')
  const [devisForm, setDevisForm] = useState<DevisForm>(initialDevis)
  const [contactForm, setContactForm] = useState<ContactForm>(initialContact)
  const [devisSuccess, setDevisSuccess] = useState(false)
  const [contactSuccess, setContactSuccess] = useState(false)

  const handleNature = (val: string) => {
    setDevisForm(f => ({
      ...f,
      nature: f.nature.includes(val)
        ? f.nature.filter(n => n !== val)
        : [...f.nature, val],
    }))
  }

  const handleDevisSubmit = (e: FormEvent) => {
    e.preventDefault()
    // In production: send to backend
    setDevisSuccess(true)
    setDevisForm(initialDevis)
    setTimeout(() => setDevisSuccess(false), 6000)
  }

  const handleContactSubmit = (e: FormEvent) => {
    e.preventDefault()
    setContactSuccess(true)
    setContactForm(initialContact)
    setTimeout(() => setContactSuccess(false), 6000)
  }

  return (
    <>
      {/* PAGE HERO */}
      <section className="page-hero">
        <div className="container">
          <h1>Contact aménagement paysager 17</h1>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1.4fr 1fr', gap: '4rem', alignItems: 'start' }}>
            {/* Forms column */}
            <div>
              <h2>Une question ? <span style={{ color: 'var(--color-primary)' }}>Contactez</span> votre paysagiste</h2>
              <p style={{ color: 'var(--color-text-light)', marginBottom: '2rem' }}>
                Vous avez un projet ou désirez un renseignement d'aménagement paysager 17 ?
                Remplissez le formulaire ci-dessous. Nous tâcherons de vous répondre dans les meilleurs délais.
              </p>

              {/* Tab switcher */}
              <div className="contact-tabs">
                <button
                  className={`contact-tab-btn${activeTab === 'devis' ? ' active' : ''}`}
                  onClick={() => setActiveTab('devis')}
                >
                  Devis
                </button>
                <button
                  className={`contact-tab-btn${activeTab === 'contact' ? ' active' : ''}`}
                  onClick={() => setActiveTab('contact')}
                >
                  Contact
                </button>
              </div>

              {/* DEVIS FORM */}
              <div className={`contact-form-panel${activeTab === 'devis' ? ' active' : ''}`}>
                <h3 style={{ marginBottom: '1.5rem' }}>Demandez un devis</h3>
                {devisSuccess && (
                  <div className="form-success">
                    ✓ Votre demande de devis a bien été envoyée. Nous vous recontacterons rapidement !
                  </div>
                )}
                <form onSubmit={handleDevisSubmit}>
                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="devis-prenom">Prénom *</label>
                      <input
                        id="devis-prenom"
                        type="text"
                        required
                        value={devisForm.prenom}
                        onChange={e => setDevisForm(f => ({ ...f, prenom: e.target.value }))}
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="devis-nom">Nom *</label>
                      <input
                        id="devis-nom"
                        type="text"
                        required
                        value={devisForm.nom}
                        onChange={e => setDevisForm(f => ({ ...f, nom: e.target.value }))}
                      />
                    </div>
                  </div>
                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="devis-email">E-mail *</label>
                      <input
                        id="devis-email"
                        type="email"
                        required
                        value={devisForm.email}
                        onChange={e => setDevisForm(f => ({ ...f, email: e.target.value }))}
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="devis-tel">Téléphone</label>
                      <input
                        id="devis-tel"
                        type="tel"
                        value={devisForm.tel}
                        onChange={e => setDevisForm(f => ({ ...f, tel: e.target.value }))}
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <label>Quelle est la nature de votre demande ?</label>
                    <div className="form-checkboxes">
                      {['Conception', 'Réalisation', 'Entretien'].map(opt => (
                        <label key={opt} className="form-check">
                          <input
                            type="checkbox"
                            checked={devisForm.nature.includes(opt)}
                            onChange={() => handleNature(opt)}
                          />
                          {opt}
                        </label>
                      ))}
                    </div>
                  </div>

                  <div className="form-group">
                    <label htmlFor="devis-message">Message *</label>
                    <textarea
                      id="devis-message"
                      required
                      value={devisForm.message}
                      onChange={e => setDevisForm(f => ({ ...f, message: e.target.value }))}
                      placeholder="Décrivez votre projet..."
                    />
                  </div>

                  <p className="form-consent">
                    En cliquant sur « Envoyer », vous acceptez que vos données soient utilisées afin de répondre à votre demande.
                  </p>
                  <button type="submit" className="btn btn-primary">Envoyer</button>
                </form>
              </div>

              {/* CONTACT FORM */}
              <div className={`contact-form-panel${activeTab === 'contact' ? ' active' : ''}`}>
                <h3 style={{ marginBottom: '1.5rem' }}>Contactez-nous</h3>
                {contactSuccess && (
                  <div className="form-success">
                    ✓ Votre message a bien été envoyé. Nous vous répondrons dans les meilleurs délais !
                  </div>
                )}
                <form onSubmit={handleContactSubmit}>
                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="contact-prenom">Prénom *</label>
                      <input
                        id="contact-prenom"
                        type="text"
                        required
                        value={contactForm.prenom}
                        onChange={e => setContactForm(f => ({ ...f, prenom: e.target.value }))}
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="contact-nom">Nom *</label>
                      <input
                        id="contact-nom"
                        type="text"
                        required
                        value={contactForm.nom}
                        onChange={e => setContactForm(f => ({ ...f, nom: e.target.value }))}
                      />
                    </div>
                  </div>
                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="contact-email">E-mail *</label>
                      <input
                        id="contact-email"
                        type="email"
                        required
                        value={contactForm.email}
                        onChange={e => setContactForm(f => ({ ...f, email: e.target.value }))}
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="contact-tel">Téléphone</label>
                      <input
                        id="contact-tel"
                        type="tel"
                        value={contactForm.tel}
                        onChange={e => setContactForm(f => ({ ...f, tel: e.target.value }))}
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <label htmlFor="contact-sujet">Sujet</label>
                    <input
                      id="contact-sujet"
                      type="text"
                      value={contactForm.sujet}
                      onChange={e => setContactForm(f => ({ ...f, sujet: e.target.value }))}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="contact-message">Message *</label>
                    <textarea
                      id="contact-message"
                      required
                      value={contactForm.message}
                      onChange={e => setContactForm(f => ({ ...f, message: e.target.value }))}
                      placeholder="Votre message..."
                    />
                  </div>
                  <p className="form-consent">
                    En cliquant sur « Envoyer », vous acceptez que vos données soient utilisées afin de répondre à votre demande.
                  </p>
                  <button type="submit" className="btn btn-primary">Envoyer</button>
                </form>
              </div>
            </div>

            {/* Info column */}
            <div>
              <h3 style={{ marginBottom: '1.5rem' }}>Nos informations</h3>
              <ul className="footer__contact-list" style={{ color: 'var(--color-text)' }}>
                <li style={{ color: 'var(--color-text)', marginBottom: '0.75rem', display: 'flex', gap: '0.6rem' }}>
                  <span>📍</span>
                  <span><strong>Adresse :</strong> Route de la Rémigeasse, 17550 DOLUS D'OLERON</span>
                </li>
                <li style={{ color: 'var(--color-text)', marginBottom: '0.75rem', display: 'flex', gap: '0.6rem' }}>
                  <span>📞</span>
                  <span><strong>Tél :</strong> <a href="tel:0546753210" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>05 46 75 32 10</a></span>
                </li>
                <li style={{ color: 'var(--color-text)', marginBottom: '0.75rem', display: 'flex', gap: '0.6rem' }}>
                  <span>🕐</span>
                  <span>Du lundi au vendredi de 8h30 à 18h30</span>
                </li>
              </ul>

              <div style={{ marginTop: '2rem' }}>
                <iframe
                  title="Localisation Atelier du Paysage 17"
                  src="https://maps.google.com/maps?q=Atelier%20du%20paysage%2017&t=m&z=14&output=embed&iwloc=near"
                  width="100%"
                  height="280"
                  style={{ border: 'none', borderRadius: 8, boxShadow: 'var(--shadow-sm)' }}
                  loading="lazy"
                  allowFullScreen
                />
              </div>

              <div style={{ marginTop: '1.5rem', display: 'flex', gap: '0.75rem' }}>
                <a
                  href="https://www.facebook.com/atelierdupaysage17/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline"
                  style={{ padding: '0.6rem 1.2rem', fontSize: '0.85rem' }}
                >
                  Facebook
                </a>
                <a
                  href="https://g.page/r/Ccj3DMR6OXOjEAE/review"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline"
                  style={{ padding: '0.6rem 1.2rem', fontSize: '0.85rem' }}
                >
                  Laisser un avis Google
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
