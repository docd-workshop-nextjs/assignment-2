import dummyBooksData, { type BooksProps } from '@/data/dummy-books'
import { Separator } from '@/lib/components/ui/separator'
import BookContent from '@/lib/pages/main/books/content'

async function getData(): Promise<BooksProps[]> {
    // Fetch data from your API here.
    return dummyBooksData
}

export default async function Books() {
    const data = await getData()
    return (
        <div className=" bg-white">
            <div className="mx-auto max-w-7xl p-8 pt-10">
                <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                    Books Management
                </h2>
                <Separator className="my-8" />

                <BookContent data={data} />
            </div>
        </div>
    )
}
