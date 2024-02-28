'use client'

import type { ColumnDef } from '@tanstack/react-table'
import { Edit, Trash } from 'iconsax-react'
import { ArrowUpDown, MoreHorizontal } from 'lucide-react'
import Link from 'next/link'

import type { BooksProps } from '@/data/dummy-books'
import { Badge } from '@/lib/components/ui/badge'
import { Button } from '@/lib/components/ui/button'
import { Checkbox } from '@/lib/components/ui/checkbox'
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from '@/lib/components/ui/dialog'
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from '@/lib/components/ui/popover'
import { Separator } from '@/lib/components/ui/separator'

export const columns: ColumnDef<BooksProps>[] = [
    {
        id: 'select',
        header: ({ table }) => (
            <Checkbox
                checked={
                    table.getIsAllPageRowsSelected() ||
                    (table.getIsSomePageRowsSelected() && 'indeterminate')
                }
                onCheckedChange={(value) =>
                    table.toggleAllPageRowsSelected(!!value)
                }
                aria-label="Select all"
            />
        ),
        cell: ({ row }) => (
            <Checkbox
                checked={row.getIsSelected()}
                onCheckedChange={(value) => row.toggleSelected(!!value)}
                aria-label="Select row"
            />
        ),
        enableSorting: false,
        enableHiding: false,
    },
    {
        accessorKey: 'title',
        header: ({ column }) => {
            return (
                <div className="flex items-center gap-2">
                    <span>Title</span>
                    <Button
                        variant="ghost"
                        onClick={() =>
                            column.toggleSorting(column.getIsSorted() === 'asc')
                        }
                    >
                        <ArrowUpDown className="h-4 w-4" />
                    </Button>
                </div>
            )
        },
        cell: ({ row }) => {
            const books = row.original
            return (
                <div className="flex flex-col">
                    <div className="text-base font-semibold uppercase">
                        {books.title}
                    </div>
                    <p className="text-xs text-slate-500">{books.no}</p>
                </div>
            )
        },
    },
    {
        accessorKey: 'author',
        header: ({ column }) => {
            return (
                <div className="flex items-center gap-2">
                    <span>Author</span>
                    <Button
                        variant="ghost"
                        onClick={() =>
                            column.toggleSorting(column.getIsSorted() === 'asc')
                        }
                    >
                        <ArrowUpDown className="h-4 w-4" />
                    </Button>
                </div>
            )
        },
    },
    {
        accessorKey: 'status',
        header: 'Status',
        cell: ({ row }) => {
            let status = 'default' as
                | 'default'
                | 'destructive'
                | 'secondary'
                | 'outline'

            if (row.getValue('status') === 'loan') {
                status = 'destructive'
            } else if (row.getValue('status') === 'none') {
                status = 'secondary'
            } else if (row.getValue('status') === 'booking') {
                status = 'outline'
            }

            return (
                <Badge className="rounded-lg uppercase" variant={status}>
                    {row.getValue('status')}
                </Badge>
            )
        },
    },
    {
        id: 'actions',
        cell: ({ row }) => {
            const payment = row.original

            return (
                <Popover>
                    <PopoverTrigger asChild>
                        <Button variant="ghost" className="h-8 w-8 p-0">
                            <span className="sr-only">Open menu</span>
                            <MoreHorizontal className="h-4 w-4" />
                        </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-44 rounded-lg p-0">
                        <div className="flex flex-col">
                            <div className="px-3 py-1.5">
                                <span className="text-xs font-bold">
                                    Actions
                                </span>
                            </div>
                            <Separator className="" />
                            <ul className="flex flex-col">
                                <li>
                                    <Button
                                        variant="ghost"
                                        className="w-full justify-start"
                                        asChild
                                    >
                                        <Link
                                            href={`/main/books/edit/${payment.id}`}
                                            className="inline-flex items-center"
                                        >
                                            <Edit className="mr-2" size={16} />
                                            Edit
                                        </Link>
                                    </Button>
                                </li>
                                <li>
                                    <Dialog>
                                        <DialogTrigger asChild>
                                            <Button
                                                variant="ghost"
                                                className="w-full justify-start text-red-500 hover:text-red-500"
                                            >
                                                <Trash
                                                    className="mr-2"
                                                    size={16}
                                                />
                                                Delete
                                            </Button>
                                        </DialogTrigger>
                                        <DialogContent className="sm:max-w-[425px]">
                                            <DialogHeader>
                                                <DialogTitle>
                                                    Delete Item
                                                </DialogTitle>
                                            </DialogHeader>
                                            <Separator />
                                            <div className="grid gap-4 ">
                                                <p className="text-base italic text-neutral-500">
                                                    are you sure to delete this
                                                    item ?<br /> (
                                                    <span className="text-xs font-medium italic text-red-500">
                                                        {payment.title}
                                                    </span>
                                                    )
                                                </p>
                                            </div>
                                            <DialogFooter>
                                                <Button
                                                    type="button"
                                                    variant="destructive"
                                                >
                                                    Yes, Sure
                                                </Button>

                                                <DialogClose asChild>
                                                    <Button
                                                        type="button"
                                                        variant="secondary"
                                                    >
                                                        Cancel
                                                    </Button>
                                                </DialogClose>
                                            </DialogFooter>
                                        </DialogContent>
                                    </Dialog>
                                </li>
                            </ul>
                        </div>
                    </PopoverContent>
                </Popover>
            )
        },
    },
]
