import { useTranslation } from 'react-i18next'
import './workouts.css'

const week = { workouts: 4, minutes: 135, streak: 6 }

export function Workouts() {
  const { t } = useTranslation('workouts')

  return (
    <section>
      <h2>{t('title')}</h2>
      <p>{t('count', { count: week.workouts })}</p>
      <p>{t('minutes', { count: week.minutes })}</p>
      <p className="streak">{t('streak', { count: week.streak })}</p>
      <button type="button">{t('start')}</button>
    </section>
  )
}
