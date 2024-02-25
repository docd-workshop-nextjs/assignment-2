import * as React from 'react'

import { cn } from '@/lib/utils'

interface TableProps extends React.HTMLAttributes<HTMLTableElement> {
    className?: string
}
const Table = React.forwardRef<HTMLTableElement, TableProps>(
    ({ className, ...props }, ref) => (
        <div className="relative w-full overflow-auto">
            <table
                ref={ref}
                className={cn('w-full caption-bottom text-sm', className)}
                {...props}
            />
        </div>
    )
)
Table.displayName = 'Table'

interface TableHeaderProps
    extends React.HTMLAttributes<HTMLTableSectionElement> {
    className?: string
}
const TableHeader = React.forwardRef<HTMLTableSectionElement, TableHeaderProps>(
    ({ className, ...props }, ref) => (
        <thead
            ref={ref}
            className={cn('[&_tr]:border-b', className)}
            {...props}
        />
    )
)
TableHeader.displayName = 'TableHeader'

interface TableBodyProps extends React.HTMLAttributes<HTMLTableSectionElement> {
    className?: string
}
const TableBody = React.forwardRef<HTMLTableSectionElement, TableBodyProps>(
    ({ className, ...props }, ref) => (
        <tbody
            ref={ref}
            className={cn('[&_tr:last-child]:border-0', className)}
            {...props}
        />
    )
)
TableBody.displayName = 'TableBody'

interface TableFooterProps
    extends React.HTMLAttributes<HTMLTableSectionElement> {
    className?: string
}
const TableFooter = React.forwardRef<HTMLTableSectionElement, TableFooterProps>(
    ({ className, ...props }, ref) => (
        <tfoot
            ref={ref}
            className={cn(
                'border-t bg-slate-100/50 font-medium dark:bg-slate-800/50 [&>tr]:last:border-b-0',
                className
            )}
            {...props}
        />
    )
)
TableFooter.displayName = 'TableFooter'

interface TableRowProps extends React.HTMLAttributes<HTMLTableRowElement> {
    className?: string
}
const TableRow = React.forwardRef<HTMLTableRowElement, TableRowProps>(
    ({ className, ...props }, ref) => (
        <tr
            ref={ref}
            className={cn(
                'border-b transition-colors hover:bg-slate-100/50 data-[state=selected]:bg-slate-100 dark:hover:bg-slate-800/50 dark:data-[state=selected]:bg-slate-800',
                className
            )}
            {...props}
        />
    )
)
TableRow.displayName = 'TableRow'

interface TableHeadProps extends React.HTMLAttributes<HTMLTableCellElement> {
    className?: string
}
const TableHead = React.forwardRef<HTMLTableCellElement, TableHeadProps>(
    ({ className, ...props }, ref) => (
        <th
            ref={ref}
            className={cn(
                'h-12 px-4 text-left align-middle font-medium text-slate-500 dark:text-slate-400 [&:has([role=checkbox])]:pr-0',
                className
            )}
            {...props}
        />
    )
)
TableHead.displayName = 'TableHead'

interface TableCellProps extends React.HTMLAttributes<HTMLTableCellElement> {
    className?: string
}
const TableCell = React.forwardRef<HTMLTableCellElement, TableCellProps>(
    ({ className, ...props }, ref) => (
        <td
            ref={ref}
            className={cn(
                'p-4 align-middle [&:has([role=checkbox])]:pr-0',
                className
            )}
            {...props}
        />
    )
)
TableCell.displayName = 'TableCell'

interface TableCaptionProps
    extends React.HTMLAttributes<HTMLTableCaptionElement> {
    className?: string
}
const TableCaption = React.forwardRef<
    HTMLTableCaptionElement,
    TableCaptionProps
>(({ className, ...props }, ref) => (
    <caption
        ref={ref}
        className={cn(
            'mt-4 text-sm text-slate-500 dark:text-slate-400',
            className
        )}
        {...props}
    />
))
TableCaption.displayName = 'TableCaption'

export {
    Table,
    TableHeader,
    TableBody,
    TableFooter,
    TableHead,
    TableRow,
    TableCell,
    TableCaption,
}
