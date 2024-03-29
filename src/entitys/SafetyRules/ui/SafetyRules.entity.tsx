'use client'

import { FC } from 'react'
import dynamic from 'next/dynamic'

import { Container, Typography, Box } from '@mui/material'

import s from '../styles/style.module.css'

import { CardSafetyRules } from './CardRules.ui'

const TComponent = dynamic(() => import('@/src/shared/TComponent'), { ssr: true })

export const SafetyRules: FC = () => {
  return (
    <Container className={s.container}>
      <section className={s.root}>
        <Typography className={s.title}>
          <TComponent str='safetyRules.title' />
        </Typography>
        <Box className={s.row}>
          <CardSafetyRules text={'safetyRules.one'} />
          <CardSafetyRules text={'safetyRules.two'} />
          <CardSafetyRules text={'safetyRules.three'} />
          <CardSafetyRules text={'safetyRules.four'} />
        </Box>
      </section>
    </Container>
  )
}
