import { Google } from 'iconsax-react'
import { Github } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

import { Button } from '@/lib/components/ui/button'
import { Checkbox } from '@/lib/components/ui/checkbox'
import { Input } from '@/lib/components/ui/input'
import { Label } from '@/lib/components/ui/label'

export default function Login() {
    return (
        <div className="flex min-h-screen flex-1 flex-col justify-center bg-neutral-100 py-12 sm:px-6 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-md">
                <h2 className="mt-6 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                    Sign in to your account
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

                        <div className="flex items-center justify-between">
                            <div className="flex items-center">
                                <Checkbox id="remember-me" name="remember-me" />
                                <Label htmlFor="remember-me" className="ml-3">
                                    Remember me
                                </Label>
                            </div>
                        </div>

                        <Button asChild className="w-full">
                            <Link href="/main">Sign In</Link>
                        </Button>
                    </form>

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
                                <Google
                                    variant="Bold"
                                    size={20}
                                    className="mr-2"
                                />
                                Google
                            </Button>

                            <Button variant="outline">
                                <Github size={20} className="mr-2" />
                                GitHub
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
