import { useTranslation } from 'react-i18next'

const goal = { sessions: 3, done: 2 }

export function Goals() {
  const { t } = useTranslation('goals')

  return (
    <section>
      <h2>{t('title')}</h2>
      <p>{t('sessions', { count: goal.sessions })}</p>
      <p>{t('progress', { done: goal.done, target: goal.sessions })}</p>
      <p>{t('reward', { badge: 'Gold' })}</p>
      <button type="button">{t('reset')}</button>
    </section>
  )
}
