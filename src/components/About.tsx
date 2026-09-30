import type { Profile } from '../types'

export default function About({ profile, skills }: { profile: Profile; skills: string[] }) {
  return (
    <section id="sobre" className="section">
      <div className="section__head">
        <span className="section__index">01</span>
        <h2>Sobre mim</h2>
      </div>

      <div className="about">
        <p className="about__text">
          Sou {profile.title.toLowerCase()}, apaixonado por transformar ideias em interfaces
          rápidas, acessíveis e bem construídas. Trabalho tanto em projetos pontuais de
          freelance quanto busco uma posição fixa em times de desenvolvimento, sempre com
          atenção a código limpo, performance e experiência do usuário.
        </p>

        <div className="skills">
          {skills.map((skill) => (
            <span key={skill} className="skill-chip">
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
