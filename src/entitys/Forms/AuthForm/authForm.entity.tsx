'use client'

import { FC } from 'react'
import Image from 'next/image'
import dynamic from 'next/dynamic'
import Link from 'next/link'

import { Box, TextField, Button, Alert } from '@mui/material'
import { Typography } from '@mui/material'

import { useAuthForm } from './logic/useAuthFom.model'

import { LabelFields } from '@/src/shared/LabelFields/labelFields.shared'

const TComponent = dynamic(() => import('@/src/shared/TComponent/ui/translateClient.shared'), {
  ssr: true,
})

import { useAppSelector } from '@/src/service/Redux/hooks/hooks'
import { globalSelector } from '@/src/service/Redux/slices/global/global.slice'

const logo = `https://upload.wikimedia.org
/wikipedia/commons/thumb/9/9b/Sberbank_Logo_2020.svg/1920px-Sberbank_Logo_2020.svg.png?20230923130330`

export const AuthForm: FC = () => {
  const { language } = useAppSelector(globalSelector)
  const {
    register,
    handleSubmit,
    submit,
    formState,
    urlRegistr,
    urlForGot,
    errorText,
    btnIsDisabled,
  } = useAuthForm(language)

  const isValidEmail = formState.errors?.email ? true : false
  const isValidPass = formState.errors?.password ? true : false
  const errorTextEmail = isValidEmail ? (
    <TComponent str='auth.errors.emptyEmail' lng={language} />
  ) : (
    ''
  )
  const errorTextPass = isValidPass ? <TComponent str='auth.errors.emptyPass' lng={language} /> : ''

  return (
    <Box display={'flex'} flexDirection={'column'} alignItems={'center'} sx={{ width: '100%' }}>
      <Image
        priority={true}
        src={logo}
        alt={'logo'}
        width={157}
        height={24}
        style={{ marginBottom: 32 }}
      />
      <form
        style={{ width: '100%', display: 'flex', alignItems: 'center', flexDirection: 'column' }}
        onSubmit={handleSubmit(submit)}
      >
        <Box sx={{ width: '100%' }}>
          <LabelFields
            label={<TComponent str={'auth.form.loginFormLabel'} lng={language ?? 'ru'} />}
          />
          <TextField
            required
            error={isValidEmail}
            helperText={errorTextEmail}
            sx={{
              width: '100%',
              '& .MuiOutlinedInput-root': {
                '&.Mui-focused fieldset': {
                  borderColor: '#000',
                },
              },
            }}
            {...register('email', { required: true, minLength: 6, maxLength: 50 })}
          />
        </Box>
        <Box sx={{ width: '100%', marginTop: '8px' }}>
          <LabelFields
            label={<TComponent str={'auth.form.passFormLabel'} lng={language ?? 'ru'} />}
            urlLink={urlForGot}
            linkText={<TComponent str='auth.form.updatePassLabel' lng={language} />}
          />
          <TextField
            required
            error={isValidPass}
            helperText={errorTextPass}
            sx={{
              width: '100%',
              '& .MuiOutlinedInput-root': {
                '&.Mui-focused fieldset': {
                  borderColor: '#000',
                },
              },
            }}
            {...register('password', { required: true, minLength: 6, maxLength: 50 })}
          />
        </Box>
        <Button
          variant='contained'
          fullWidth
          sx={{
            height: '55px',
            marginTop: '28px',
            background: 'var(--color-accent)',
            ':hover': { background: 'var(--color-accent)' },
            fontSize: '16px',
            fontWeight: '400',
            textTransform: 'lowercase',
          }}
          type='submit'
          disabled={btnIsDisabled}
        >
          <TComponent str={'auth.form.btnText'} lng={language ?? 'ru'} />
        </Button>
      </form>
      <Box
        display={'flex'}
        flexDirection={'column'}
        justifyContent={'flex-start'}
        gap={1}
        sx={{ width: '100%', marginTop: '20px' }}
      >
        <Link href={urlRegistr}>
          <Typography
            sx={{ ':hover': { textDecoration: 'underline' }, color: 'var(--color-accent)' }}
          >
            <TComponent str='auth.links.registr' lng={language} />
          </Typography>
        </Link>
        <Link href={urlForGot}>
          <Typography
            sx={{ ':hover': { textDecoration: 'underline' }, color: 'var(--color-accent)' }}
          >
            <TComponent str='auth.links.RestoreAccess' lng={language} />
          </Typography>
        </Link>
      </Box>
      {errorText && (
        <Alert
          severity='error'
          variant='standard'
          color='error'
          sx={{ position: 'fixed', bottom: '50px', left: '30px' }}
        >
          {errorText}
        </Alert>
      )}
    </Box>
  )
}
