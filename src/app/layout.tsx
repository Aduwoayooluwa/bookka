import type { Metadata } from 'next'
import { Work_Sans } from 'next/font/google'
import './globals.css';
import GeneralProvider from './provider';

const work_sans = Work_Sans({
  subsets: ['latin'],
  weight: ['400', '700'],
  style: ['normal', 'italic'],
})

export const metadata: Metadata = {
  title: 'Bookka - Bookkeeping and Invoicing',
  description: 'A Secure, Simple, Easy Bookkeeping and Invoicing Application  built on the Web 5.0 Technology',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={work_sans.className}>
        <GeneralProvider>
          {children}
        </GeneralProvider>
      </body>
    </html>
  )
}
