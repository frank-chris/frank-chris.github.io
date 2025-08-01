// Common type definitions for the portfolio

export interface Project {
  id: string
  title: string
  description: string
  technologies: string[]
  imageUrl?: string
  githubUrl?: string
  liveUrl?: string
  featured?: boolean
  createdAt: Date
}

export interface ContactForm {
  name: string
  email: string
  subject: string
  message: string
}

export interface NavItem {
  label: string
  path: string
  icon?: string
}

export interface SocialLink {
  platform: string
  url: string
  icon: string
}