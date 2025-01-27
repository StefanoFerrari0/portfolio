import { Link } from 'react-router'
import { socialLinksItems } from '@/data/constants'
import { useTranslation } from 'react-i18next'
import { ColorSpan } from '../SystemDesign'
import { formatNameForId, getAge } from '@/utils/helper'
import { SocialLinksProps } from '@/interfaces/props'
import parse from 'html-react-parser'
const age: number = getAge()

const AboutMe: React.FC = () => {
  const { t } = useTranslation('AboutMe')
  const subtitle = t('subtitle')
  const id = formatNameForId(t('title'))
  const paragraph = t('paragraph', { age }).replace(/{age}/g, age.toString())
  const parsedParagraph = parse(paragraph, {
    replace: (domNode) => {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const domElement: any = domNode as any
      if (domElement.name === 'color') {
        return <ColorSpan>{domElement.children[0].data}</ColorSpan>
      }
      if (domElement.name === 'br') {
        return <br />
      }
    }
  })

  return (
    <section
      id={id}
      className="flex h-screen w-full flex-col items-center justify-center gap-1 sm:items-start"
    >
      <h3 className="text-teal-500">{subtitle}</h3>
      <h1 className="mt-2 text-4xl font-bold sm:text-6xl">Stefano Ferrari.</h1>
      <h2 className="text-xl">Fullstack Developer</h2>
      <div className="mt-3 max-w-3xl text-center text-sm leading-relaxed text-slate-300 sm:text-left">
        <p>{parsedParagraph}</p>
      </div>
      <div className="mt-6 flex  space-x-4">
        {socialLinksItems.map((link: SocialLinksProps, index: number) => {
          return (
            <Link
              key={index}
              target="_blank"
              to={link.href}
              className="text-2xl hover:text-teal-500"
            >
              <link.icon size={30} />
            </Link>
          )
        })}
      </div>
    </section>
  )
}

export default AboutMe
