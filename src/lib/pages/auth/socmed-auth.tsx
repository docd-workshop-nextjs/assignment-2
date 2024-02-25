import { Google } from 'iconsax-react'
import { Github } from 'lucide-react'
import React from 'react'

import { Button } from '@/lib/components/ui/button'

export default function SocmedAuth() {
    return (
        <div>
            <div className="relative mt-10">
                <div
                    className="absolute inset-0 flex items-center"
                    aria-hidden="true"
                >
                    <div className="w-full border-t border-gray-200" />
                </div>
                <div className="relative flex justify-center text-sm font-medium leading-6">
                    <span className="bg-white px-6 text-gray-900">
                        Or continue with
                    </span>
                </div>
            </div>

            <div className="mt-6 grid grid-cols-2 gap-4">
                <Button variant="outline">
                    <Google variant="Bold" size={20} className="mr-2" />
                    Google
                </Button>

                <Button variant="outline">
                    <Github size={20} className="mr-2" />
                    GitHub
                </Button>
            </div>
        </div>
    )
}
