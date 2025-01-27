export const getAge = (): number => {
  return new Date().getFullYear() - 1997
}

export const formatDoubleDigitNumber = (number: number): string => {
  return number.toString().padStart(2, '0')
}

export const capitalizeFirstLetter = (text: string) => {
  return text.charAt(0).toUpperCase() + text.slice(1)
}

export const deleteSpacesAndDots = (text: string) => {
  return text.replace(/[ .]/g, '').toLowerCase()
}

export const formatNameForId = (text: string) => {
  return `${text.toLowerCase().replace(' ', '-')}`
}
