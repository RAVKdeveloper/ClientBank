import { Inter } from 'next/font/google'

import { dir } from 'i18next'

import { languages, fallbackLng } from '@/src/i18n/settings/i18n.settings'

import { Providers } from '@/src/service/Redux/Provider/Provider'

import '@/public/styles/global.css'
import '@/src/i18n/i18n.instance'

export async function generateStaticParams() {
  return languages.map(lng => ({ lng }))
}

export async function generateMetadata({ params: { lng } }: { params: { lng: string } }) {
  if (languages.indexOf(lng) < 0) lng = fallbackLng
  // eslint-disable-next-line react-hooks/rules-of-hooks
  // const { t } = await useTranslation(lng, 'client')
  return {
    content: 'Test',
    title: 'Сбербанк',
  }
}

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
  params: { lng },
}: Readonly<{
  children: React.ReactNode
  params: { lng: string }
}>) {
  return (
    <html lang={lng} dir={dir(lng)}>
      <body className={inter.className}>
        <Providers lng={lng}>{children}</Providers>
      </body>
    </html>
  )
}
