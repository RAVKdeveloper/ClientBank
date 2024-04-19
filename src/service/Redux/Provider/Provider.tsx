'use client'

import { Provider } from 'react-redux'

import { store } from '../store'

import { LanguageWrapper } from '@/src/shared/LanguageWrapper/language.shared'

export function Providers({ children, lng }: { children: React.ReactNode; lng: string }) {
  return (
    <Provider store={store}>
      <LanguageWrapper lng={lng.substring(0, 2)}>{children}</LanguageWrapper>
    </Provider>
  )
}
