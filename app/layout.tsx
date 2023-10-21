import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from './components/Navbar'
import { ClerkProvider } from '@clerk/nextjs';


const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  let pubkey = (process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY)
  return (
      <ClerkProvider publishableKey={pubkey}>
    <html lang="en">
      <body className={inter.className}>

          <Navbar />
        
        {children}
        
        </body>
    </html>
    </ClerkProvider>
    
  )
}
