import React from 'react'

export default function MainLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <div className="flex min-h-screen flex-1 flex-col justify-center  py-12 sm:px-6 lg:px-8">
            {children}
        </div>
    )
}
