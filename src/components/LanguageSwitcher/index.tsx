import React, { useState } from 'react'
import LocaleSwitcherSelect from '../LocaleSwitcherSelect'
import LocaleIcon from '../LocaleIcon'
import { NavbarLinksProps } from '@/interfaces/props'
import { useTranslation } from 'react-i18next'

const LanguageSwitcher: React.FC<NavbarLinksProps> = ({ isMobile = false }) => {
  const [isOpen, setIsOpen] = useState(false)
  const { t } = useTranslation('Locales')

  const localeOptions = [
    { value: 'en', label: t('en'), icon: '🇺🇸' },
    { value: 'es', label: t('es'), icon: '🇪🇸' }
  ]

  const handleButtonClick = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div className="relative">
      <button
        onClick={handleButtonClick}
        className={`${
          isMobile ? 'ml-3' : ''
        } flex size-10 items-center justify-center rounded-full bg-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-300`}
      >
        <LocaleIcon />
      </button>
      {isOpen && (
        <div
          className={`absolute ${
            isMobile ? '-top-5 left-16' : '-left-10 top-full'
          } mt-2 rounded-md bg-white shadow-lg`}
        >
          <LocaleSwitcherSelect
            onChange={() => setIsOpen(false)}
            localeOptions={localeOptions}
          />
        </div>
      )}
    </div>
  )
}

export default LanguageSwitcher
