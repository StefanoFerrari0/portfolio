import { useState } from 'react'
import { Link } from 'react-router'
import { NavbarLinksProps, NavbarMobileProps } from '@/interfaces/props.d'
import { formatDoubleDigitNumber, formatNameForId } from '@/utils/helper'
import LanguageSwitcher from '../LanguageSwitcher'
import { useTranslation } from 'react-i18next'

const NavbarLinks: React.FC<NavbarLinksProps> = ({ isMobile = false }) => {
  const { t } = useTranslation('NavbarItems')
  const navbarItems: Array<string> = [
    t('aboutMe'),
    t('experience'),
    t('skills'),
    t('contact')
  ]
  return (
    <>
      {navbarItems.map((name, index) => {
        const number = index + 1
        const id = `#${formatNameForId(name)}`
        return (
          <Link key={name} to={id}>
            <li
              className={`${
                isMobile ? 'block px-3 py-2 text-sm lg:text-sm' : 'text-sm'
              } cursor-pointer capitalize text-slate-300 transition-colors duration-300 hover:text-teal-500`}
            >
              <span
                className={`${
                  isMobile ? '' : 'sm:pb-1.5'
                } mx-auto pr-1.5 text-sm text-teal-500`}
              >
                {`${formatDoubleDigitNumber(number)}.`}
              </span>
              {name}
            </li>
          </Link>
        )
      })}
    </>
  )
}

const NavbarDesktop: React.FC = () => {
  return (
    <div className="hidden md:flex md:w-full md:items-center md:justify-between">
      <div className="flex items-center">
        <ol className="flex gap-7 lg:gap-8">
          <NavbarLinks />
        </ol>
      </div>
      <div className="ml-4">
        <LanguageSwitcher />
      </div>
    </div>
  )
}

const NavbarMobile: React.FC<NavbarMobileProps> = ({
  isOpen,
  toggleNavbar
}) => {
  return (
    <div className="-mr-2 flex md:hidden">
      <button
        onClick={toggleNavbar}
        className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:bg-gray-700 focus:text-white focus:outline-none"
      >
        <svg
          className={`${isOpen ? 'hidden' : 'block'} size-6`}
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16m-7 6h7"
          />
        </svg>
        <svg
          className={`${isOpen ? 'block' : 'hidden'} size-6`}
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>
    </div>
  )
}

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const toggleNavbar = () => {
    setIsOpen(!isOpen)
  }
  return (
    <nav className="bg-primary-midnight/90">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex w-full items-center justify-between">
            <NavbarDesktop />
            <NavbarMobile isOpen={isOpen} toggleNavbar={toggleNavbar} />
          </div>
        </div>
      </div>
      <div className={`${isOpen ? 'block' : 'hidden'} md:hidden`}>
        <ol className="space-y-1 px-2 pb-3 pt-2 sm:px-3">
          <NavbarLinks isMobile />
        </ol>
        <div className="px-2 pb-3 pt-2 sm:px-3">
          <LanguageSwitcher isMobile />
        </div>
      </div>
    </nav>
  )
}
