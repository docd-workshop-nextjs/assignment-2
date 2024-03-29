import type { Metadata } from 'next'
import { Inter as FontSans } from 'next/font/google'
import React from 'react'

import '@/styles/globals.css'
import { cn } from '@/lib/utils'

const fontSans = FontSans({
    subsets: ['latin'],
    variable: '--font-sans',
})

export const metadata: Metadata = {
    title: 'Landing Page',
    description: 'landing page',
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="en">
            <body
                className={cn(
                    'bg-background min-h-screen bg-neutral-100 font-sans antialiased 2xl:container',
                    fontSans.variable
                )}
            >
                {children}
            </body>
        </html>
    )
}
