import { Inter } from 'next/font/google'

import { Providers } from '@/src/service/Redux/Provider/Provider';

import type { Metadata } from 'next'

import '@/public/styles/global.css'
import '@/src/i18n'


const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Сбербанк',
  description: 'ПАО Сбербанк Россия',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (

    <html lang='ru'>
      <body className={inter.className}>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
