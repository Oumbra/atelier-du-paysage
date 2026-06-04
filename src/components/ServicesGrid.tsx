const services = [
  { icon: '🌿', label: 'Plantations' },
  { icon: '🌱', label: 'Pelouse' },
  { icon: '💧', label: 'Arrosage intégré' },
  { icon: '🚧', label: 'Clôtures diverses' },
  { icon: '🏗️', label: 'Terrassement' },
  { icon: '🌲', label: 'Pergolas bois' },
  { icon: '🪨', label: 'Dallages' },
  { icon: '🧱', label: 'Maçonnerie décorative' },
  { icon: '🌊', label: 'Bassins paysagers' },
  { icon: '✂️', label: 'Entretien' },
]

export default function ServicesGrid() {
  return (
    <div className="services-grid">
      {services.map(s => (
        <div key={s.label} className="service-item">
          <div className="service-item__icon">{s.icon}</div>
          <h4>{s.label}</h4>
        </div>
      ))}
    </div>
  )
}
