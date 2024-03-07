
import { TFunction, createInstance } from 'i18next'
import resourcesToBackend from 'i18next-resources-to-backend'

import { initReactI18next } from 'react-i18next/initReactI18next'

import { getOptions } from './settings/i18n.settings' 

import type { i18n } from 'i18next' 

const initI18next = async (lng: string, ns: string) => {
  const i18nInstance = createInstance()
  await i18nInstance
    .use(initReactI18next)
    .use(resourcesToBackend((language: string, namespace: string) => 
    import(`../../public/locales/${language}/${namespace}.json`)
    ))
    .init(getOptions(lng, ns))
  return i18nInstance
}

export async function languageStore(lng?: string): Promise<string> {
  
   return lng ?? 'ru'

}

export async function useTranslation(lng?: string, ns?: any, options: any = {}): 
Promise<{ t: TFunction<string, string>, i18n: i18n }> {
  const i18nextInstance = await initI18next(lng ?? await languageStore(), ns)
  return {
    t: i18nextInstance.getFixedT(lng ?? '', Array.isArray(ns) ? ns[0] : ns, options.keyPrefix),
    i18n: i18nextInstance
  }
}