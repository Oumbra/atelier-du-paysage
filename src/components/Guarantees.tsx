import './Guarantees.css'

interface GuaranteesProps {
  dark?: boolean
}

const guarantees = [
  {
    icon: 'fa-solid fa-star',
    title: 'Travail de qualité',
    text: 'Nous prenons le temps qu\'il faut pour réaliser votre projet et favorisons un dialogue de qualité avant, pendant et après sa conception.',
  },
  {
    icon: 'fa-solid fa-ear-listen',
    title: 'Écoute',
    text: 'Nous sommes très à l\'écoute de nos clients. Nous essayons d\'apporter la meilleure solution du début à la fin en prenant en compte les différentes contraintes du chantier.',
  },
  {
    icon: 'fa-solid fa-handshake',
    title: 'Accompagnement',
    text: 'Fort de notre retour d\'expérience, nous apportons des compétences et connaissances pour donner vie à votre projet.',
  },
]

export default function Guarantees({ dark = false }: GuaranteesProps) {
  return (
    <section className={`section${dark ? ' section--dark' : ' section--light'}`}>
      <div className="container">
        <div className="section-header">
          <h2>Nos garanties</h2>
          <h3>Le cœur de notre entreprise est de respecter les projets de chaque client en mettant à disposition notre savoir-faire et nos valeurs.</h3>
        </div>
        <div className="guarantees-grid">
          {guarantees.map(g => (
            <div key={g.title} className="guarantee-card">
              <div className="guarantee-card__icon">
                <i className={g.icon} aria-hidden="true" />
              </div>
              <h3>{g.title}</h3>
              <p>{g.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
