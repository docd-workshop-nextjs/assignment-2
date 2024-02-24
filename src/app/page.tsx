import Link from 'next/link'
import React from 'react'

import { Button } from '@/lib/components/ui/button'

export default function Page() {
    return (
        <div className="bg-white">
            <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
                <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                    Landing Page
                </h2>
                <p className="mt-2 text-sm italic text-neutral-500">
                    The library book borrowing system application.
                </p>
                <div className="mt-5 flex items-center gap-x-6">
                    <Button asChild>
                        <Link href="/sign-in">Sign In</Link>
                    </Button>

                    <Button asChild variant="outline">
                        <Link href="/main">
                            Dashboard
                            <span aria-hidden="true" className="ml-2">
                                →
                            </span>
                        </Link>
                    </Button>
                </div>
            </div>
        </div>
    )
}
