import type { Project } from '../types'
import { ExternalLinkIcon, GithubIcon } from '../Icons'

function ProjectThumb({ project, index }: { project: Project; index: number }) {
  if (project.image) {
    return (
      <div className="project-card__thumb">
        <img src={project.image} alt={project.title} loading="lazy" />
      </div>
    )
  }

  return (
    <div className={`project-card__thumb project-card__thumb--code accent-${index % 4}`}>
      <div className="fake-window">
        <span />
        <span />
        <span />
      </div>
      <pre>
        <code>
          {`> git clone ${project.title.toLowerCase().replace(/\s+/g, '-')}\n> npm install\n> npm run dev\n✔ pronto`}
        </code>
      </pre>
    </div>
  )
}

export default function Projects({ projects }: { projects: Project[] }) {
  return (
    <section id="projetos" className="section">
      <div className="section__head">
        <span className="section__index">03</span>
        <h2>Projetos</h2>
      </div>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <article key={project.id} className="project-card">
            <ProjectThumb project={project} index={index} />

            <div className="project-card__body">
              <h3>{project.title}</h3>
              <p>{project.description}</p>

              <div className="tag-row">
                {project.tags.map((tag) => (
                  <span key={tag} className="tag">
                    {tag}
                  </span>
                ))}
              </div>

              <div className="project-card__links">
                <a href={project.githubUrl} target="_blank" rel="noreferrer">
                  <GithubIcon className="icon icon--sm" />
                  Código
                </a>
                {project.demoUrl && (
                  <a href={project.demoUrl} target="_blank" rel="noreferrer">
                    <ExternalLinkIcon className="icon icon--sm" />
                    Ver ao vivo
                  </a>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
