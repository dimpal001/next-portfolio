import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/app/components/navbar'
import TransitionProvider from '@/app/components/transitionProvider'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Dimpal Das',
  description: 'The best animated portfolio page',
}

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <TransitionProvider>{children}</TransitionProvider>
      </body>
    </html>
  )
}
