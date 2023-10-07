import {
  ColumnDef,
  ColumnFiltersState,
  SortingState,
  Table as TableType,
  VisibilityState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@@/components/primitives/table";
import { cn } from "@@/utils/tailwind";
import { DataTableFilterControls } from "./filter-controls";
import { DataTablePaginationControls } from "./pagination-controls";
import { useEffect, useState } from "react";
import { DataTableColumnHeader } from "./column-header";

// TODO: add loading/error states

export function DataTable<TData, TValue>({
  className,
  tableHeaderClassName,
  TableHeaderRowClassName,
  tableHeadClassName,
  TableBodyClassName,
  TableBodyRowClassName,
  TableCellClassName,
  filterPlaceholder,
  filterColumnId,
  columns,
  data,
  pageSizeOptions = [20, 50, 100],
}: {
  className?: string;
  tableHeaderClassName?: string;
  TableHeaderRowClassName?: string;
  tableHeadClassName?: string;
  TableBodyClassName?: string;
  TableBodyRowClassName?: string;
  TableCellClassName?: string;
  filterPlaceholder: string;
  filterColumnId: string;
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
  pageSizeOptions?: number[];
}) {
  const [sorting, setSorting] = useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
  const [columnVisibility, setColumnVisibility] = useState<VisibilityState>({});
  const [rowSelection, setRowSelection] = useState({});

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection,
    },
  });

  useEffect(() => {
    table.setPageSize(pageSizeOptions[0]);
  }, [table]);

  return (
    <div>
      <DataTableFilterControls
        table={table}
        filterColumnId={filterColumnId}
        filterPlaceholder={filterPlaceholder}
      />
      <Table className={cn("", className)}>
        <TableHeader>
          {table.getHeaderGroups().map((headerGroup) => (
            <TableRow key={headerGroup.id}>
              {headerGroup.headers.map((header) => {
                return (
                  <TableHead key={header.id}>
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                  </TableHead>
                );
              })}
            </TableRow>
          ))}
        </TableHeader>
        <TableBody>
          {table.getRowModel().rows?.length ? (
            table.getRowModel().rows.map((row) => (
              <TableRow
                key={row.id}
                data-state={row.getIsSelected() ? "selected" : undefined}
              >
                {row.getVisibleCells().map((cell) => (
                  <TableCell key={cell.id}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </TableCell>
                ))}
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell
                colSpan={table.getAllColumns().length}
                className="h-24 text-center"
              >
                No results.
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
      <DataTablePaginationControls
        table={table}
        pageSizeOptions={pageSizeOptions}
      />
    </div>
  );
}

export {
  DataTableColumnHeader
};