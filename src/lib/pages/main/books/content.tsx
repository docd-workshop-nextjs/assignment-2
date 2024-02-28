'use client'

import { Add } from 'iconsax-react'

import { columns } from '@/app/main/books/columns'
import DataTable from '@/app/main/books/data-table'
import type { BooksProps } from '@/data/dummy-books'
import { Button } from '@/lib/components/ui/button'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from '@/lib/components/ui/dialog'
import { Input } from '@/lib/components/ui/input'
import { Label } from '@/lib/components/ui/label'
import { Textarea } from '@/lib/components/ui/textarea'

export default function BookContent({ data }: { data: BooksProps[] }) {
    return (
        <div className="mt-8">
            <DataTable
                columns={columns}
                data={data}
                addEl={
                    <Dialog>
                        <DialogTrigger asChild>
                            <Button>
                                <Add className="mr-2" />
                                Add Item
                            </Button>
                        </DialogTrigger>
                        <DialogContent className="sm:max-w-[600px]">
                            <DialogHeader>
                                <DialogTitle>Add book</DialogTitle>
                                <DialogDescription>
                                    {`Make new book to your management here. Click
                                    submit when you're done.`}
                                </DialogDescription>
                            </DialogHeader>
                            <div className="grid gap-4 py-4">
                                <div className="flex flex-col gap-4">
                                    <Label htmlFor="no">No. Books</Label>
                                    <Input
                                        id="no"
                                        className="col-span-3"
                                        placeholder="No. books"
                                    />
                                </div>
                                <div className="flex flex-col gap-4">
                                    <Label htmlFor="title">Title</Label>
                                    <Input
                                        id="title"
                                        className="col-span-3"
                                        placeholder="Title of book"
                                    />
                                </div>
                                <div className="flex flex-col gap-4">
                                    <Label htmlFor="author">Author</Label>
                                    <Input
                                        id="author"
                                        className="col-span-3"
                                        placeholder="Author of book"
                                    />
                                </div>
                                <div className="flex flex-col gap-4">
                                    <Label htmlFor="shortDesc">
                                        Sort Description
                                    </Label>

                                    <Textarea
                                        id="shortDesc"
                                        className="col-span-3"
                                        placeholder="Short description of book"
                                        rows={5}
                                    />
                                </div>
                            </div>
                            <DialogFooter>
                                <Button type="submit">Submit</Button>
                            </DialogFooter>
                        </DialogContent>
                    </Dialog>
                }
            />
        </div>
    )
}
