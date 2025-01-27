import { Dispatch, SetStateAction } from 'react'

export interface RootLayoutProps {
  children: React.ReactNode
  params: {
    locale: 'en' | 'es'
  }
}

export interface NavbarMobileProps {
  isOpen: boolean
  toggleNavbar: () => void
}

export interface NavbarLinksProps {
  isMobile?: boolean
}

export interface SocialLinksProps {
  href: string
  icon: IconType
}

export interface ExperienceProps {
  company: string
  position: string
  description?: Array<string>
  imageUrl: string
  date: string
  education?: boolean
}

export interface Technology {
  name: string
  icon: SVG
}

export interface TitleProps {
  number: number
  title: string
}

export interface CategoryTypes {
  frontend: CategoryType
  backend: CategoryType
  others: CategoryType
  learning: CategoryType
}

export interface SkillButtonProps {
  selectedCategory: CategoryType
  setSelectedCategory: Dispatch<SetStateAction<CategoryType>>
  category: CategoryType
  label: string
}

interface AboutMeTranslations {
  paragraph: React.ReactNode
  title: string
  id: string
}

interface ExperienceTranslations {
  company: string
  position: string
  description: Array<string>
  imageUrl: string
  date: string
  educationTitle?: string
  education?: boolean
}

interface ProjectCardProps {
  title: string
  description: string
  year: string
  icons: Array<Technology>
  image: string
}

interface RouteParams {
  lang: string
}
