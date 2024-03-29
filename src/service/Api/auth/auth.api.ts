import { api } from '../api.instance'

import type { UserLoginDto } from './dto/login.dto'
import type { RegistrationDto } from './dto/registration.dto'
import type { UserType } from '../../types/user.type'

import { ServerEndpoints } from '@/src/config/server.config'

export const authApi = api.injectEndpoints({
  endpoints: builder => ({
    login: builder.mutation<UserType, UserLoginDto>({
      query: body => ({
        url: ServerEndpoints.auth.login,
        method: 'POST',
        body,
      }),
    }),
    registration: builder.mutation<UserType, RegistrationDto>({
      query: body => ({
        url: ServerEndpoints.auth.registration,
        method: 'POST',
        body,
      }),
    }),
  }),
  overrideExisting: true,
})

export const { useLoginMutation, useRegistrationMutation } = authApi
