import React from 'react'

import Sidebar from '@/lib/pages/layout/sidebar'

export default function MainLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <div>
            <Sidebar />
            <main className="py-10 lg:pl-72">
                <div className="px-4 sm:px-6 lg:px-8">{children}</div>
            </main>
        </div>
    )
}
