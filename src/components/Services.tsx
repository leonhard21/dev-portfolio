import type { Profile, Service } from '../types'
import { ICONS_BY_KEY_MAP, WhatsappIcon } from '../Icons'

export default function Services({
  services,
  profile,
}: {
  services: Service[]
  profile: Profile
}) {
  return (
    <section id="servicos" className="section section--alt">
      <div className="section__head">
        <span className="section__index">02</span>
        <h2>Serviços</h2>
      </div>

      <div className="services-grid">
        {services.map((service) => {
          const Icon = ICONS_BY_KEY_MAP(service.icon)
          const waHref = `https://wa.me/${profile.whatsapp}?text=${encodeURIComponent(
            `Olá! Tenho interesse no serviço "${service.title}" e gostaria de um orçamento.`,
          )}`
          return (
            <div key={service.title} className="service-card">
              <div className="service-card__icon">
                <Icon className="icon" />
              </div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <a href={waHref} target="_blank" rel="noreferrer" className="service-card__link">
                <WhatsappIcon className="icon icon--sm" />
                Solicitar orçamento
              </a>
            </div>
          )
        })}
      </div>
    </section>
  )
}
