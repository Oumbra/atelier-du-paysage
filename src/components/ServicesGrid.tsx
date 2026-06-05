import './ServicesGrid.css'

const services = [
  { icon: 'fa-solid fa-seedling',     label: 'Plantations' },
  { icon: 'fa-solid fa-leaf',         label: 'Pelouse' },
  { icon: 'fa-solid fa-droplet',      label: 'Arrosage intégré' },
  { icon: 'fa-solid fa-border-all',   label: 'Clôtures diverses' },
  { icon: 'fa-solid fa-mountain',     label: 'Terrassement' },
  { icon: 'fa-solid fa-tree',         label: 'Pergolas bois' },
  { icon: 'fa-solid fa-border-none',  label: 'Dallages' },
  { icon: 'fa-solid fa-hammer',       label: 'Maçonnerie décorative' },
  { icon: 'fa-solid fa-water',        label: 'Bassins paysagers' },
  { icon: 'fa-solid fa-scissors',     label: 'Entretien' },
]

export default function ServicesGrid() {
  return (
    <div className="services-grid">
      {services.map(s => (
        <div key={s.label} className="service-item">
          <div className="service-item__icon">
            <i className={s.icon} aria-hidden="true" />
          </div>
          <h4>{s.label}</h4>
        </div>
      ))}
    </div>
  )
}
