import { useState } from 'react'
import type { Profile } from '../types'
import { MailIcon, WhatsappIcon } from '../Icons'

const PROJECT_TYPES = [
  'Landing page / site',
  'Aplicação web (React)',
  'Análise de dados',
  'Vaga fixa (CLT/PJ)',
  'Outro',
]

export default function Contact({ profile }: { profile: Profile }) {
  const [name, setName] = useState('')
  const [type, setType] = useState(PROJECT_TYPES[0])
  const [budget, setBudget] = useState('')
  const [message, setMessage] = useState('')

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()

    const lines = [
      `Olá, me chamo ${name || '(seu nome)'}.`,
      `Tipo de pedido: ${type}.`,
      budget ? `Orçamento/prazo: ${budget}.` : null,
      message ? `Detalhes: ${message}` : null,
    ].filter(Boolean)

    const text = encodeURIComponent(lines.join('\n'))
    window.open(`https://wa.me/${profile.whatsapp}?text=${text}`, '_blank', 'noreferrer')
  }

  return (
    <section id="contato" className="section section--alt">
      <div className="section__head">
        <span className="section__index">04</span>
        <h2>Vamos conversar?</h2>
      </div>

      <div className="contact">
        <div className="contact__info">
          <p>
            Está com um projeto em mente, precisa de alguém para reforçar o time ou quer
            simplesmente trocar uma ideia? Preencha o formulário ao lado que o pedido é
            enviado direto para o meu WhatsApp, ou me chame por e-mail.
          </p>

          <a className="contact__link" href={`mailto:${profile.email}`}>
            <MailIcon className="icon" />
            {profile.email}
          </a>

          <a
            className="contact__link"
            href={`https://wa.me/${profile.whatsapp}`}
            target="_blank"
            rel="noreferrer"
          >
            <WhatsappIcon className="icon" />
            Chamar no WhatsApp
          </a>
        </div>

        <form className="order-form" onSubmit={handleSubmit}>
          <label>
            Nome
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Seu nome"
              required
            />
          </label>

          <label>
            Tipo de pedido
            <select value={type} onChange={(e) => setType(e.target.value)}>
              {PROJECT_TYPES.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </label>

          <label>
            Orçamento / prazo (opcional)
            <input
              value={budget}
              onChange={(e) => setBudget(e.target.value)}
              placeholder="Ex: até R$1.000 / 2 semanas"
            />
          </label>

          <label>
            Mensagem
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Conte um pouco sobre o que você precisa"
              rows={4}
            />
          </label>

          <button type="submit" className="btn btn--primary btn--block">
            <WhatsappIcon className="icon" />
            Enviar pedido pelo WhatsApp
          </button>
        </form>
      </div>
    </section>
  )
}
