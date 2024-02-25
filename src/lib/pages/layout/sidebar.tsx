'use client'

import { Dialog, Transition } from '@headlessui/react'
import {
    Book1,
    CloseSquare,
    HambergerMenu,
    Home2,
    LogoutCurve,
    Profile2User,
    ScanBarcode,
} from 'iconsax-react'
import Image from 'next/image'
import Link from 'next/link'
import React, { Fragment, useState } from 'react'

import { Button } from '@/lib/components/ui/button'
import { cn } from '@/lib/utils'

const navigation = [
    { name: 'Dashboard', href: '/main', icon: Home2, current: true },
    {
        name: 'Transactions',
        href: '/main/transactions',
        icon: ScanBarcode,
        current: false,
    },
    { name: 'Books', href: '/main/books', icon: Book1, current: false },
    {
        name: 'Member',
        href: '/main/member',
        icon: Profile2User,
        current: false,
    },
]

export default function Sidebar() {
    const [sidebarOpen, setSidebarOpen] = useState(false)

    return (
        <>
            {/* // * mobile sidebar */}
            <Transition.Root show={sidebarOpen} as={Fragment}>
                <Dialog
                    as="div"
                    className="relative z-50 lg:hidden"
                    onClose={setSidebarOpen}
                >
                    <Transition.Child
                        as={Fragment}
                        enter="transition-opacity ease-linear duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="transition-opacity ease-linear duration-300"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-gray-900/80" />
                    </Transition.Child>

                    <div className="fixed inset-0 flex">
                        <Transition.Child
                            as={Fragment}
                            enter="transition ease-in-out duration-300 transform"
                            enterFrom="-translate-x-full"
                            enterTo="translate-x-0"
                            leave="transition ease-in-out duration-300 transform"
                            leaveFrom="translate-x-0"
                            leaveTo="-translate-x-full"
                        >
                            <Dialog.Panel className="relative mr-16 flex w-full max-w-xs flex-1">
                                <Transition.Child
                                    as={Fragment}
                                    enter="ease-in-out duration-300"
                                    enterFrom="opacity-0"
                                    enterTo="opacity-100"
                                    leave="ease-in-out duration-300"
                                    leaveFrom="opacity-100"
                                    leaveTo="opacity-0"
                                >
                                    <div className="absolute left-full top-0 flex w-16 justify-center pt-5">
                                        <Button
                                            variant="link"
                                            className="-m-2.5 p-2.5"
                                            onClick={() =>
                                                setSidebarOpen(false)
                                            }
                                        >
                                            <span className="sr-only">
                                                Close sidebar
                                            </span>
                                            <CloseSquare
                                                size={32}
                                                variant="Bold"
                                                className="text-white"
                                                aria-hidden="true"
                                            />
                                        </Button>
                                    </div>
                                </Transition.Child>
                                {/* Sidebar component, swap this element with another sidebar if you like */}
                                <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-white px-6 pb-2">
                                    <div className="flex h-16 shrink-0 items-center">
                                        <Image
                                            className="h-8 w-auto"
                                            src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                                            alt="Your Company"
                                            width={0}
                                            height={0}
                                            unoptimized
                                            loading="eager"
                                        />
                                    </div>
                                    <nav className="flex flex-1 flex-col">
                                        <ul className="flex flex-1 flex-col gap-y-7">
                                            <li>
                                                <ul className="-mx-2 space-y-1">
                                                    {navigation.map((item) => (
                                                        <li key={item.name}>
                                                            <a
                                                                href={item.href}
                                                                className={cn(
                                                                    'group flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6',
                                                                    {
                                                                        'bg-gray-50 text-indigo-600':
                                                                            item.current,
                                                                        'text-gray-700 hover:bg-gray-50 hover:text-indigo-600':
                                                                            !item.current,
                                                                    }
                                                                )}
                                                            >
                                                                <item.icon
                                                                    className={cn(
                                                                        'h-6 w-6 shrink-0',
                                                                        {
                                                                            'text-indigo-600':
                                                                                item.current,
                                                                            'text-gray-400 group-hover:text-indigo-600':
                                                                                !item.current,
                                                                        }
                                                                    )}
                                                                    aria-hidden="true"
                                                                />
                                                                {item.name}
                                                            </a>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </li>
                                        </ul>
                                    </nav>
                                </div>
                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </Dialog>
            </Transition.Root>

            {/* Static sidebar for desktop */}
            <div className="hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-72 lg:flex-col">
                {/* Sidebar component, swap this element with another sidebar if you like */}
                <div className="flex grow flex-col gap-y-5 overflow-y-auto border-r border-gray-200 bg-white px-6">
                    <div className="flex h-16 shrink-0 items-center">
                        <Image
                            className="h-8 w-auto"
                            src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                            alt="Your Company"
                            width={0}
                            height={0}
                            unoptimized
                            loading="eager"
                        />
                    </div>
                    <nav className="flex flex-1 flex-col">
                        <ul className="flex flex-1 flex-col gap-y-7">
                            <li>
                                <ul className="-mx-2 space-y-1">
                                    {navigation.map((item) => (
                                        <li key={item.name}>
                                            <Link
                                                href={item.href}
                                                className={cn(
                                                    'group flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6',
                                                    item.current
                                                        ? 'bg-gray-50 text-indigo-600'
                                                        : 'text-gray-700 hover:bg-gray-50 hover:text-indigo-600'
                                                )}
                                            >
                                                <item.icon
                                                    className={cn(
                                                        'h-6 w-6 shrink-0',
                                                        item.current
                                                            ? 'text-indigo-600'
                                                            : 'text-gray-400 group-hover:text-indigo-600'
                                                    )}
                                                    aria-hidden="true"
                                                />
                                                {item.name}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </li>

                            <li className="-mx-6 mt-auto">
                                <div className="group flex cursor-pointer gap-x-3 rounded-md p-2 py-3 text-sm font-semibold leading-6 hover:bg-neutral-50">
                                    <LogoutCurve />
                                    Sign Out
                                </div>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>

            <div className="sticky top-0 z-40 flex items-center gap-x-6 bg-white px-4 py-4 shadow-sm sm:px-6 lg:hidden">
                <Button
                    variant="ghost"
                    type="button"
                    className="-m-2.5 p-2.5 text-gray-700 lg:hidden"
                    onClick={() => setSidebarOpen(true)}
                >
                    <span className="sr-only">Open sidebar</span>
                    <HambergerMenu aria-hidden="true" />
                </Button>
                <div className="flex-1 text-sm font-semibold leading-6 text-gray-900">
                    Dashboard
                </div>
                <div className="cursor-pointer">
                    <LogoutCurve />
                </div>
            </div>
        </>
    )
}
