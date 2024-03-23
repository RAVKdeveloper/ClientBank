'use client'

import { useEffect } from 'react'

import { useAppDispatch } from '@/src/service/Redux/hooks/hooks'
import { setLanguage } from '@/src/service/Redux/slices/global/global.slice'

export const useLanguage = (lng: string) => {
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(setLanguage(lng))
  }, [])
}
