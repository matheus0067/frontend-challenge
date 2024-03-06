"use client"
import './globals.css'
import { DefaultProviders } from 'components/defaultProviders/defaultProviders'
import { Header } from './header/header'
import { Saira } from 'next/font/google'

const saira = Saira({
  weight: ['300', '400', '500', '600' ],
   subsets: ['latin']
   })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={saira.className}>
        <DefaultProviders>
          <Header/>
          {children}
        </DefaultProviders>
      </body>
    </html>
  )
}
