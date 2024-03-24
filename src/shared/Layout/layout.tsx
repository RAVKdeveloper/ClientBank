import { FC, ReactNode } from 'react'

import { Header } from '@/src/widgets/Header'

interface Props {
  children: ReactNode
}

export const Layout: FC<Props> = ({ children }) => {
  return (
    <>
      <Header />
      {children}
    </>
  )
}
