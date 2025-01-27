import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa'
import {
  awsSvg,
  cssSvg,
  dockerSvg,
  dotNetCoreSvg,
  expressSvg,
  gitSvg,
  githubSvg,
  graphqlSvg,
  mongoDbSvg,
  mysqlSvg,
  nextJsSvg,
  nodeJsSvg,
  pnpmSvg,
  postmanSvg,
  reactJsSvg,
  reduxSvg,
  sassSvg,
  tailwindCssSvg,
  typeScriptSvg,
  vscodeSvg
} from './svg'
import { CategoryTypes, SocialLinksProps, Technology } from '@/interfaces/props'

export const categoryTypes: CategoryTypes = {
  frontend: 'frontend',
  backend: 'backend',
  others: 'others',
  learning: 'learning'
}

export const socialLinksItems: Array<SocialLinksProps> = [
  {
    href: 'https://github.com/StefanoFerrari0',
    icon: ({ size }) => <FaGithub size={size} />
  },
  {
    href: 'https://www.linkedin.com/in/stefanoferrari-dev/',
    icon: ({ size }) => <FaLinkedin size={size} />
  },
  {
    href: 'mailto:stefanoferrari.dev@gmail.com',
    icon: ({ size }) => <FaEnvelope size={size} />
  }
]

export const categoryList: Array<CategoryType> = [
  categoryTypes.frontend,
  categoryTypes.backend,
  categoryTypes.others,
  categoryTypes.learning
]

export const technologyList: Record<CategoryType, Technology[]> = {
  frontend: [
    { name: 'React.js', icon: reactJsSvg },
    { name: 'Redux', icon: reduxSvg },
    { name: 'Next.js', icon: nextJsSvg },
    { name: 'TypeScript', icon: typeScriptSvg },
    { name: 'TailwindCss', icon: tailwindCssSvg },
    { name: 'CSS', icon: cssSvg },
    { name: 'Sass', icon: sassSvg }
  ],
  backend: [
    { name: '.NET', icon: dotNetCoreSvg },
    { name: 'Node.js', icon: nodeJsSvg },
    { name: 'Express', icon: expressSvg },
    { name: 'MongoDB', icon: mongoDbSvg }
  ],
  others: [
    { name: 'Git', icon: gitSvg },
    { name: 'Github', icon: githubSvg },
    { name: 'VS code', icon: vscodeSvg },
    { name: 'Docker', icon: dockerSvg },
    { name: 'PNPM', icon: pnpmSvg },
    { name: 'Postman', icon: postmanSvg }
  ],
  learning: [
    { name: 'MySQL', icon: mysqlSvg },
    { name: 'GraphQL', icon: graphqlSvg },
    { name: 'AWS', icon: awsSvg }
  ]
}

export const locales = ['en', 'es']
