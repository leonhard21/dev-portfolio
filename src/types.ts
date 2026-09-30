export interface SocialLinks {
  github: string
  linkedin: string
}

export interface Profile {
  name: string
  title: string
  tagline: string
  availableForFreelance: boolean
  availableForHire: boolean
  location: string
  photo: string
  whatsapp: string
  email: string
  socials: SocialLinks
}

export interface Service {
  icon: string
  title: string
  description: string
}

export interface Project {
  id: string
  title: string
  description: string
  tags: string[]
  githubUrl: string
  demoUrl: string | null
  image: string | null
  featured: boolean
}

export interface SiteData {
  profile: Profile
  skills: string[]
  services: Service[]
  projects: Project[]
}
