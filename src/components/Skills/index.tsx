'use client'

import { useState } from 'react'
import { categoryList, technologyList } from '@/data/constants'
import { SkillButton, Title } from '../SystemDesign'
import { deleteSpacesAndDots, formatNameForId } from '@/utils/helper'
import { useTranslation } from 'react-i18next'

const Skills: React.FC = () => {
  const [selectedCategory, setSelectedCategory] =
    useState<CategoryType>('frontend')
  const { t } = useTranslation('Skills')
  const title = t('title')
  const id = formatNameForId(t('title'))

  const categoryTranslations = {
    frontend: 'Frontend',
    backend: 'Backend',
    others: t('others'),
    learning: t('learning')
  }
  return (
    <section
      id={id}
      className="flex h-screen w-full flex-col items-center justify-center gap-1"
    >
      <Title number={3} title={title} />
      <div className="relative mt-10 w-full sm:w-1/3">
        <div className="flex">
          {categoryList.map((category) => (
            <SkillButton
              key={category}
              selectedCategory={selectedCategory}
              setSelectedCategory={setSelectedCategory}
              category={category}
              label={categoryTranslations[category]}
            />
          ))}
        </div>
      </div>
      <div className="grid w-full grid-cols-4 grid-rows-2 justify-items-center sm:w-1/3">
        {technologyList[selectedCategory].map(({ name, icon }) => {
          const tailwindNameClass = deleteSpacesAndDots(name)
          return (
            <button
              key={name}
              className={`hover:text-icon-${tailwindNameClass} group flex flex-col items-center gap-3 py-6 text-gray-600 `}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox={icon.viewBox}
                className={`size-8 fill-current transition-all duration-300`}
              >
                <path d={icon.path} />
              </svg>
              <label>{name}</label>
            </button>
          )
        })}
      </div>
    </section>
  )
}

export default Skills
