import { ExperienceTranslations } from '@/interfaces/props'
import { useTranslation } from 'react-i18next'

export const useExperienceTranslations = (): ExperienceTranslations[] => {
  const { t } = useTranslation('Experience')
  const experiences: Record<string, ExperienceTranslations> = {
    geotec: {
      company: t('geotec.company'),
      position: t('geotec.position'),
      description: [
        t('geotec.descriptions.desc1'),
        t('geotec.descriptions.desc2'),
        t('geotec.descriptions.desc3'),
        t('geotec.descriptions.desc4')
      ],
      imageUrl: t('geotec.imageUrl'),
      date: t('geotec.date')
    },
    technolobiz: {
      company: t('technolobiz.company'),
      position: t('technolobiz.position'),
      description: [
        t('technolobiz.descriptions.desc1'),
        t('technolobiz.descriptions.desc2'),
        t('technolobiz.descriptions.desc3'),
        t('technolobiz.descriptions.desc4'),
        t('technolobiz.descriptions.desc5')
      ],
      imageUrl: t('technolobiz.imageUrl'),
      date: t('technolobiz.date')
    },
    utn: {
      company: t('utn.company'),
      position: t('utn.position'),
      description: [],
      imageUrl: t('utn.imageUrl'),
      date: t('utn.date'),
      education: true,
      educationTitle: t('utn.education')
    }
  }

  // Convertir el objeto de experiencias a un array
  return Object.values(experiences)
}
