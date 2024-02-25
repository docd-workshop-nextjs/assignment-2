import Link from 'next/link'
import React from 'react'

import { Button } from '@/lib/components/ui/button'
import { Input } from '@/lib/components/ui/input'
import { Label } from '@/lib/components/ui/label'
import SocmedAuth from '@/lib/pages/auth/socmed-auth'

export default function Register() {
    return (
        <>
            <div className="sm:mx-auto sm:w-full sm:max-w-md">
                <h2 className="mt-6 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                    Sign up to library app account
                </h2>
            </div>
            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-[480px]">
                <div className="bg-white px-6 py-12 shadow sm:rounded-lg sm:px-12">
                    <form className="space-y-6" action="#" method="POST">
                        <div>
                            <Label htmlFor="email">Your email address</Label>
                            <div className="mt-2">
                                <Input
                                    id="email"
                                    name="email"
                                    type="email"
                                    autoComplete="email"
                                    required
                                />
                            </div>
                        </div>

                        <div>
                            <Label htmlFor="password">Your password</Label>
                            <div className="mt-2">
                                <Input
                                    id="password"
                                    name="password"
                                    type="password"
                                    autoComplete="current-password"
                                    required
                                />
                            </div>
                        </div>

                        <div className="flex flex-col gap-3">
                            <Button asChild className="w-full">
                                <Link href="/main">Register</Link>
                            </Button>
                            <Button
                                asChild
                                variant="outline"
                                className="w-full"
                            >
                                <Link href="/sign-in">Sign In</Link>
                            </Button>
                        </div>
                    </form>

                    <SocmedAuth />
                </div>
            </div>
        </>
    )
}
