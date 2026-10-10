import { useTranslation } from 'react-i18next'

const week = { workouts: 4, minutes: 135, streak: 6, restDays: 2 }

export function Workouts() {
  const { t } = useTranslation('workouts')

  return (
    <section>
      <h2>{t('title')}</h2>
      <p>{t('count', { count: week.workouts })}</p>
      <p>{t('minutes', { count: week.minutes })}</p>
      <p>{t('streak', { count: week.streak })}</p>
      <button type="button">{t('start')}</button>
      <h3>{t('rest.title')}</h3>
      <p>{t('rest.planned', { count: week.restDays })}</p>
      <small>{t('rest.tip')}</small>
    </section>
  )
}
