import { useLocation, useNavigate, useParams } from 'react-router'
import { useTranslation } from 'react-i18next'

interface LocaleSwitcherSelectProps {
  onChange: () => void
  localeOptions: Array<LocaleOption>
}

export default function LocaleSwitcherSelect({
  onChange,
  localeOptions
}: LocaleSwitcherSelectProps) {
  const navigate = useNavigate()
  const location = useLocation()
  const params = useParams()
  const { i18n } = useTranslation()
  const currentLocale = i18n.language

  function handleLocaleChange(newLocale: string) {
    const segments = location.pathname.split('/')
    if (segments[1]) {
      segments[1] = newLocale
    } else {
      segments.unshift(newLocale)
    }

    let newPathname = segments.join('/')
    for (const [key, value] of Object.entries(params)) {
      newPathname = newPathname.replace(`[${key}]`, value as string)
    }

    i18n.changeLanguage(newLocale)
    onChange()
  }

  return (
    <div className="py-1">
      {localeOptions.map((option) => (
        <button
          key={option.value}
          onClick={() => handleLocaleChange(option.value)}
          className={`flex w-full px-6 py-2 text-left text-sm ${
            currentLocale === option.value
              ? 'bg-gray-100 text-gray-900'
              : 'text-gray-700'
          } hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none`}
        >
          <span className="mr-2">{option.icon}</span>
          {option.label}
        </button>
      ))}
    </div>
  )
}
