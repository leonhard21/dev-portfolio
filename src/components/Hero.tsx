import { useState } from 'react'
import type { Profile } from '../types'
import { useTypewriter } from '../hooks'
import { GithubIcon, LinkedinIcon, WhatsappIcon } from '../Icons'

export default function Hero({ profile }: { profile: Profile }) {
  const typed = useTypewriter(profile.tagline, 22)
  const [imgError, setImgError] = useState(false)

  const initials = profile.name
    .split(' ')
    .filter(Boolean)
    .slice(0, 2)
    .map((n) => n[0])
    .join('')
    .toUpperCase()

  const waHref = `https://wa.me/${profile.whatsapp}?text=${encodeURIComponent(
    'Olá! Vi seu portfólio e gostaria de conversar sobre um projeto.',
  )}`

  return (
    <section id="topo" className="hero">
      <div className="hero__grid" aria-hidden="true" />
      <div className="hero__glow hero__glow--a" aria-hidden="true" />
      <div className="hero__glow hero__glow--b" aria-hidden="true" />

      <div className="hero__inner">
        <div className="hero__content">
          {(profile.availableForFreelance || profile.availableForHire) && (
            <div className="badge">
              <span className="badge__dot" />
              Disponível para freelance &amp; vagas fixas
            </div>
          )}

          <p className="eyebrow">Olá, meu nome é</p>
          <h1 className="hero__name">{profile.name}</h1>
          <h2 className="hero__title">{profile.title}</h2>

          <p className="hero__tagline">
            <span className="typewriter">{typed}</span>
            <span className="cursor" />
          </p>

          <div className="hero__cta">
            <a className="btn btn--primary" href={waHref} target="_blank" rel="noreferrer">
              <WhatsappIcon className="icon" />
              Fazer um pedido
            </a>
            <a className="btn btn--ghost" href="#projetos">
              Ver projetos
            </a>
          </div>

          <div className="hero__socials">
            <a href={profile.socials.github} target="_blank" rel="noreferrer" aria-label="GitHub">
              <GithubIcon className="icon" />
            </a>
            <a href={profile.socials.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
              <LinkedinIcon className="icon" />
            </a>
          </div>
        </div>

        <div className="hero__portrait">
          <div className="portrait-ring">
            {!imgError ? (
              <img
                src={profile.photo}
                alt={profile.name}
                onError={() => setImgError(true)}
              />
            ) : (
              <div className="portrait-fallback">{initials}</div>
            )}
          </div>
          <div className="portrait-tag">{profile.location}</div>
        </div>
      </div>

      <a className="scroll-hint" href="#sobre" aria-label="Rolar para baixo">
        <span />
      </a>
    </section>
  )
}
