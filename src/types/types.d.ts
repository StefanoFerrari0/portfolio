type IconType = React.FC<{ size: number }>

type SVG = {
  viewBox: string
  path: string
}

type CategoryType = 'frontend' | 'backend' | 'others' | 'learning'

type LocaleOption = {
  value: string
  label: string
  icon: string
}

type Params = {
  locale: string
}
