import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'

import { useForm, SubmitHandler } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'

import type { useRegFormType, FormData } from '../assets/useRegForm.type'

import { Routes } from '@/src/config/routes.config'

import { useRegistrationMutation } from '@/src/service/Api/auth/auth.api'

import { useAppSelector } from '@/src/service/Redux/hooks/hooks'
import { globalSelector } from '@/src/service/Redux/slices/global/global.slice'

const schema = yup.object().shape({
  name: yup
    .string()
    .matches(/^([^0-9]*)/i, 'Поле недолжно содержать цифры')
    .required('Поле обязательно для заполнения')
    .min(2, 'Минимально количество символов: 2')
    .max(60, 'Максимальное количество символов: 60'),
  middlename: yup
    .string()
    .matches(/^([^0-9]*)/i, 'Поле недолжно содержать цифры')
    .required('Поле обязательно для заполнения')
    .min(3, 'Минимально количество символов: 3')
    .max(60, 'Максимальное количество символов: 60'),
  surname: yup
    .string()
    .matches(/^([^0-9]*)/i, 'Поле недолжно содержать цифры')
    .required('Поле обязательно для заполнения')
    .min(3, 'Минимально количество символов: 3')
    .max(60, 'Максимальное количество символов: 60'),
  email: yup.string().email('Невалидный Email').required('Поле обязательно для заполнения'),
  password: yup
    .string()
    .min(6, 'Минимально количество символов: 6')
    .max(60, 'Максимальное количество символов: 60')
    .required(),
})

export const useRegForm = (): useRegFormType => {
  const {
    register,
    handleSubmit,
    resetField,
    formState: { errors, isValid },
  } = useForm<FormData>({
    mode: 'all',
    resolver: yupResolver<FormData>(schema),
  })
  const [req, { isLoading }] = useRegistrationMutation()
  const [errorText, setErrorText] = useState<string>('')
  const { language } = useAppSelector(globalSelector)
  const { push } = useRouter()

  const fetchRegistr = async (data: FormData) => {
    try {
      await req(data).unwrap()
      setErrorText('')
      push(`/${language}L${Routes.main}`)
    } catch (e: any) {
      setErrorText(e.data.message)
    } finally {
      resetField('name')
      resetField('middlename')
      resetField('surname')
      resetField('email')
      resetField('password')
    }
  }

  const submit: SubmitHandler<FormData> = data => {
    fetchRegistr(data)
  }

  useEffect(() => {
    const timer = setTimeout(() => setErrorText(''), 5000)

    return () => clearTimeout(timer)
  }, [errorText])

  const objMessage = {
    name: errors?.name?.message,
    middlename: errors?.middlename?.message,
    surname: errors?.surname?.message,
    email: errors?.email?.message,
    password: errors?.password?.message,
  }

  const isDisabled = isValid && !isLoading ? false : true

  return {
    register,
    handleSubmit,
    submit,
    errorText,
    objMessage,
    isDisabled,
    errorResText: errorText,
  }
}
