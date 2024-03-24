import type { BaseType } from './base.type'

export interface UserType extends BaseType {
  name: string
  middlename: string
  surname: string
  email: string
  password: string
  phoneNumber: number
  isActivated: boolean
}
