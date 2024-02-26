'use client';

import i18next from 'i18next'
import { initReactI18next } from 'react-i18next'
import I18nextBrowserLanguageDetector from 'i18next-browser-languagedetector'
import Backend from 'i18next-http-backend'


i18next
  .use(Backend)
  .use(I18nextBrowserLanguageDetector)
  .use(initReactI18next)
  .init({
     debug: true,
     fallbackLng: 'ru',
  })


  export default i18next