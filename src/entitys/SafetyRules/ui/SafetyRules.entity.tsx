import { FC } from 'react'
import dynamic from 'next/dynamic'

import { Container, Typography } from '@mui/material'

import s from '../styles/style.module.css'

import { CardSafetyRules } from './CardRules.ui'

const TComponent = dynamic(() => import('@/src/shared/TComponent/translateClient.shared'))

export const SafetyRules: FC = () => {
  return (
    <Container className={s.container}>
      <Typography>
        <TComponent str='safetyRules.title' />
      </Typography>
      <section className={s.root}>hello</section>
    </Container>
  )
}
