'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'

import { useForm, SubmitHandler } from 'react-hook-form'

import type { FormData, useAuthFormTypes } from './hook.types'

import { useLoginMutation } from '@/src/service/Api/auth/auth.api'
import { Routes } from '@/src/config/routes.config'

export const useAuthForm = (lng: string): useAuthFormTypes => {
  const [req, { isLoading }] = useLoginMutation()
  const [errorText, setErrorText] = useState<string>('')
  const { push } = useRouter()
  const urlForGot = `/${lng}L${Routes.auth.forgot}`
  const urlRegistr = `/${lng}L${Routes.auth.registration}`

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    resetField,
  } = useForm<FormData>({
    defaultValues: {
      email: '',
      password: '',
    },
    mode: 'onSubmit',
  })
  const btnIsDisabled = isValid || isLoading ? false : true

  const login = async (email: string, password: string) => {
    if (email && password && lng)
      try {
        await req({ email, password }).unwrap()

        push(`/${lng}L${Routes.main}`)
      } catch (e: any) {
        setErrorText(e.data.message)
      } finally {
        resetField('email')
        resetField('password')
      }
  }

  const submit: SubmitHandler<FormData> = data => {
    login(data.email, data.password)
  }

  useEffect(() => {
    if (errorText) {
      const timeoutCode = setTimeout(() => setErrorText(''), 5000)

      return () => clearTimeout(timeoutCode)
    }
  }, [errorText])

  return {
    register,
    handleSubmit,
    formState: { errors, isValid },
    submit,
    isLoading,
    errorText,
    urlRegistr,
    urlForGot,
    btnIsDisabled,
  }
}
