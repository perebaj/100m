import './globals.css'

import { ClerkProvider } from '@clerk/nextjs'
import { McLaren as Font } from 'next/font/google'

import { cn } from '@/lib/utils'

const fontMono = Font({
  weight: '400',
  subsets: ['latin'],
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <ClerkProvider>
        <div className="fixed left-0 top-0 -z-10 h-full w-full">
          <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]">
            <body
              className={cn(
                fontMono.className,
                'relative h-full w-full bg-slate-950 antialiased',
              )}
            >
              {children}
            </body>
          </div>
        </div>
      </ClerkProvider>
    </html>
  )
}
