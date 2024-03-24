import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'

import { api } from '../Api/api.instance'

import { rootReduser } from './rootReduser/rootReduser'

export const store = configureStore({
  reducer: rootReduser,
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(api.middleware),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
setupListeners(store.dispatch)
