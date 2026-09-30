import { useEffect, useState } from 'react'
import type { Profile } from '../types'
import { WhatsappIcon } from '../Icons'

const NAV_LINKS = [
  { href: '#sobre', label: 'Sobre' },
  { href: '#servicos', label: 'Serviços' },
  { href: '#projetos', label: 'Projetos' },
  { href: '#contato', label: 'Contato' },
]

export default function Header({ profile }: { profile: Profile }) {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const waHref = `https://wa.me/${profile.whatsapp}?text=${encodeURIComponent(
    'Olá! Vi seu portfólio e gostaria de conversar sobre um projeto.',
  )}`

  return (
    <header className={`header ${scrolled ? 'header--scrolled' : ''}`}>
      <div className="header__inner">
        <a href="#topo" className="brand">
          <span className="brand__mark">&lt;/&gt;</span>
          <span className="brand__name">leonhard.dev</span>
        </a>

        <nav className={`nav ${open ? 'nav--open' : ''}`}>
          {NAV_LINKS.map((link) => (
            <a key={link.href} href={link.href} onClick={() => setOpen(false)}>
              {link.label}
            </a>
          ))}
        </nav>

        <div className="header__actions">
          <a className="btn btn--sm btn--primary" href={waHref} target="_blank" rel="noreferrer">
            <WhatsappIcon className="icon" />
            <span>Fazer pedido</span>
          </a>
          <button
            className="nav-toggle"
            aria-label="Abrir menu"
            onClick={() => setOpen((v) => !v)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>
    </header>
  )
}
