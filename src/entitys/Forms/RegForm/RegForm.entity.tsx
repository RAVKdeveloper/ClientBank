'use client'

import { FC } from 'react'

import { TextField, Button, Alert } from '@mui/material'

import s from './assets/style.module.css'

import { useRegForm } from './logic/useRegForm.model'

import { LabelFields } from '@/src/shared/LabelFields/labelFields.shared'

import TComponent from '@/src/shared/TComponent'

export const RegistrationForm: FC = () => {
  const { register, handleSubmit, submit, objMessage, isDisabled, errorResText } = useRegForm()

  return (
    <article className={s.root}>
      <h1 className={s.title}>
        <TComponent str='auth.form.regTitle' />
      </h1>
      <form onSubmit={handleSubmit(submit)} className={s.form}>
        <fieldset>
          <LabelFields label={<TComponent str='auth.form.nameFormLabel' />} />
          <TextField
            error={objMessage.name ? true : false}
            helperText={objMessage.name}
            className={s.field}
            {...register('name')}
          />
        </fieldset>
        <fieldset>
          <LabelFields label={<TComponent str='auth.form.surnameFormLabel' />} />
          <TextField
            className={s.field}
            {...register('surname')}
            error={objMessage.surname ? true : false}
            helperText={objMessage.surname}
          />
        </fieldset>
        <fieldset>
          <LabelFields label={<TComponent str='auth.form.middlenameFormLabel' />} />
          <TextField
            className={s.field}
            {...register('middlename')}
            error={objMessage.middlename ? true : false}
            helperText={objMessage.middlename}
          />
        </fieldset>
        <fieldset>
          <LabelFields label={<TComponent str='auth.form.emailFormLabel' />} />
          <TextField
            className={s.field}
            {...register('email')}
            error={objMessage.email ? true : false}
            helperText={objMessage.email}
          />
        </fieldset>
        <fieldset>
          <LabelFields label={<TComponent str='auth.form.passFormLabel' />} />
          <TextField
            className={s.field}
            {...register('password')}
            error={objMessage.password ? true : false}
            helperText={objMessage.password}
          />
        </fieldset>
        <Button variant='contained' fullWidth className={s.btn} type='submit' disabled={isDisabled}>
          <TComponent str={'auth.form.btnText'} />
        </Button>
      </form>
      {errorResText && (
        <Alert
          severity='error'
          variant='standard'
          color='error'
          sx={{ position: 'fixed', bottom: '50px', left: '30px' }}
        >
          {errorResText}
        </Alert>
      )}
    </article>
  )
}
