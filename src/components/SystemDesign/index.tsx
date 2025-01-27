import { SkillButtonProps, TitleProps } from '@/interfaces/props'
import { formatDoubleDigitNumber } from '@/utils/helper'

export const ColorSpan: React.FC<React.PropsWithChildren> = ({ children }) => (
  <span className="text-teal-500">{children}</span>
)

export const Title: React.FC<TitleProps> = ({ number, title }) => (
  <h1 className="text-3xl">
    <ColorSpan>{formatDoubleDigitNumber(number)}. </ColorSpan>
    {title}
  </h1>
)

export const SkillButton: React.FC<SkillButtonProps> = ({
  selectedCategory,
  setSelectedCategory,
  category,
  label
}) => (
  <button
    className={`flex-1 border-b-2 pb-3 ${
      selectedCategory === category ? 'border-teal-300' : 'border-white '
    }`}
    onClick={() => setSelectedCategory(category)}
  >
    {label}
  </button>
)
