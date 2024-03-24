'use client'

import { Provider } from 'react-redux'

import { LanguageWrapper } from '@/src/shared/LanguageWrapper/language.shared'

import { store } from '../store'

export function Providers({ children, lng }: { children: React.ReactNode; lng: string }) {
  return (
    <Provider store={store}>
      <LanguageWrapper lng={lng.substring(0, 2)}>{children}</LanguageWrapper>
    </Provider>
  )
}
