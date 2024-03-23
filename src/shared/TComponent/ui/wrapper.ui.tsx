'use client'

import { FC, memo } from 'react'
import dynamic from 'next/dynamic'

import { useAppSelector } from '@/src/service/Redux/hooks/hooks'
import { globalSelector } from '@/src/service/Redux/slices/global/global.slice'

const Translate = dynamic(() => import('./translateClient.shared'))

// eslint-disable-next-line react/display-name
export const TComponent: FC<{ str: string }> = memo(({ str }) => {
  const { language } = useAppSelector(globalSelector)

  return (
    <>
      <Translate str={str} lng={language} />
    </>
  )
})
