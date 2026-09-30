import type { Profile } from '../types'
import { GithubIcon, LinkedinIcon } from '../Icons'

export default function Footer({ profile }: { profile: Profile }) {
  return (
    <footer className="footer">
      <span>
        © {new Date().getFullYear()} {profile.name}
      </span>
      <div className="footer__socials">
        <a href={profile.socials.github} target="_blank" rel="noreferrer" aria-label="GitHub">
          <GithubIcon className="icon icon--sm" />
        </a>
        <a href={profile.socials.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
          <LinkedinIcon className="icon icon--sm" />
        </a>
      </div>
    </footer>
  )
}
