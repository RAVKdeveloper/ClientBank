import { FC } from 'react'

import s from './style.module.css'

import { RegistrationForm } from '@/src/entitys/Forms/RegForm/RegForm.entity'

const RegistrationPage: FC = () => {
  return (
    <main className={s.root}>
      <RegistrationForm />
    </main>
  )
}

export default RegistrationPage
