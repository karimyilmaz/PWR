import type { Metadata } from 'next'
import { Space_Grotesk } from 'next/font/google'
import './globals.css'

const space_grotesk = Space_Grotesk({
  subsets: ['latin'],
  fallback: ['poppins', 'manrope'],
})

export const metadata: Metadata = {
  title: 'PWR chain',
  description: 'PWR chain...',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en' className={space_grotesk.className}>
      <body className={space_grotesk.className}>{children}</body>
    </html>
  )
}
