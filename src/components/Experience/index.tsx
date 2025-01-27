import { Title } from '../SystemDesign'
import { useExperienceTranslations } from '@/hooks/useTranslations'
import { formatNameForId } from '@/utils/helper'
import { useTranslation } from 'react-i18next'

export default function Experience() {
  const experiences = useExperienceTranslations()
  const { t } = useTranslation('Experience')
  const title = t('title')
  const id = formatNameForId(title)

  return (
    <section
      id={id}
      className="relative mt-24 flex w-full flex-col items-center sm:mt-0"
    >
      <Title number={2} title={title} />
      <div
        style={{ height: '94%' }}
        className="absolute -left-2 mt-16 -translate-x-1/2 border-l-4 border-teal-500 sm:left-1/2"
      />
      {experiences.map((experience, index) => (
        <div key={index} className="relative my-8 flex w-full items-center">
          <div
            className={`${
              experience.description.length > 0 ? '' : 'mt-16'
            } absolute -left-2 size-12 -translate-x-1/2 -translate-y-6 overflow-hidden rounded-full border-2 border-teal-500 bg-white sm:left-1/2`}
          >
            <img
              src={experience.imageUrl}
              alt={`${experience.company} logo`}
              width={48}
              height={48}
              className="object-cover"
            />
          </div>
          <div
            className={`relative w-full sm:w-1/2 ${
              index % 2 === 0
                ? '-right-6 sm:right-10'
                : 'left-6 sm:left-2/4 sm:ml-10'
            }`}
          >
            {experience.education && (
              <span className="text-bold block text-lg text-teal-500">
                {experience.educationTitle}
              </span>
            )}
            <span className="text-bold mb-2 block text-sm text-teal-500">
              {experience.date}
            </span>
            <div className="rounded-lg border-b-8 border-teal-500 bg-slate-800 p-4 text-slate-300 shadow-lg">
              <h3 className="text-xl font-bold text-teal-500">
                {experience.position}
              </h3>
              <h4 className="text-lg font-semibold">{experience.company}</h4>
              <ol className="mt-2 list-inside list-disc whitespace-pre-line text-sm leading-relaxed">
                {experience?.description?.map((text, index) => (
                  <li key={index} className="mt-3">
                    {text}
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      ))}
    </section>
  )
}
