import './globals.css'
import { Inter } from 'next/font/google'
import localFont from 'next/font/local'

const inter = Inter({ subsets: ['latin'] })

const generalSans = localFont({
  src: '../../public/fonts/GeneralSans-Variable.woff2',
  // variable: '--font-general-sans'
})

export const metadata = {
  title: 'AGP Dev',
  description: 'portfolio',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      {/* <body className={`${generalSans.variable}`}>{children}</body> */}
      <body className={generalSans.className}>{children}</body>
    </html>
  )
}
