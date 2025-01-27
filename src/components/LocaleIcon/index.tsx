import React from 'react'
import { useTranslation } from 'react-i18next'

const localeIcons: { [key: string]: string } = {
  en: '🇺🇸',
  es: '🇪🇸'
  // Agrega más locales y sus iconos correspondientes según sea necesario
}

export default function LocaleIcon() {
  const { i18n } = useTranslation()
  const locale = i18n.language
  const icon = localeIcons[locale as keyof typeof localeIcons] || '🌐'
  return <span className="text-2xl">{icon}</span>
}
