import { FC } from 'react'

import s from '../styles/style.module.css'

import { TComponent } from '@/src/shared/TComponent'

export const CardSafetyRules: FC<{ text: string }> = ({ text }) => {
  return (
    <article className={s.card}>
      <TComponent str={text} />
    </article>
  )
}
