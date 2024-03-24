import { SubmitHandler, UseFormHandleSubmit, UseFormRegister } from 'react-hook-form'

export interface FormData {
  name: string
  middlename: string
  surname: string
  email: string
  password: string
}

interface ObjMessage {
  name: string | undefined
  middlename: string | undefined
  surname: string | undefined
  email: string | undefined
  password: string | undefined
}

export interface useRegFormType {
  register: UseFormRegister<FormData>
  handleSubmit: UseFormHandleSubmit<FormData, undefined>
  submit: SubmitHandler<FormData>
  errorText: string
  objMessage: ObjMessage
  isDisabled: boolean
  errorResText: string
}
