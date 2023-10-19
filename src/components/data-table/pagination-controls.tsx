"use client";

import { cn } from "@@/utils/tailwind";
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  DoubleArrowLeftIcon,
  DoubleArrowRightIcon,
} from "@radix-ui/react-icons";
import { Table as TableType } from "@tanstack/react-table";

import { Button } from "@@/components/primitives/button";
import { Select, SelectValue } from "@@/components/primitives/select";
import { SelectItem } from "../primitives/select/item";
import { SelectContent } from "../primitives/select/content";
import { SelectTrigger } from "../primitives/select/trigger";

export function DataTablePaginationControls<T>({
  table,
  pageSizeOptions,
}: {
  table: TableType<T>;
  pageSizeOptions: number[];
}) {
  return (
    <div
      className={cn(
        "flex flex-col justify-between items-end py-4 gap-3",
        "md:flex-row md:items-center"
      )}
    >
      <span className="text-sm text-muted-foreground">
        {table.getFilteredSelectedRowModel().rows.length} of{" "}
        {table.getFilteredRowModel().rows.length} row(s) selected.
      </span>
      <div className="flex items-center space-x-6 lg:space-x-8">
        <div className="hidden md:flex items-center space-x-2">
          <p className="text-sm font-medium">Rows per page</p>
          <Select
            value={`${table.getState().pagination.pageSize}`}
            onValueChange={(value) => {
              table.setPageSize(Number(value));
            }}
          >
            <SelectTrigger className="h-8 w-[70px]">
              <SelectValue placeholder={table.getState().pagination.pageSize} />
            </SelectTrigger>
            <SelectContent side="top">
              {pageSizeOptions.map((pageSize) => (
                <SelectItem key={pageSize} value={`${pageSize}`}>
                  {pageSize}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div className="flex w-[100px] items-center justify-center text-sm font-medium">
          Page {table.getState().pagination.pageIndex + 1} of{" "}
          {table.getPageCount()}
        </div>
        <div className="flex items-center gap-2">
          <PaginationButton table={table} direction="prev" toEnd />
          <PaginationButton table={table} direction="prev" />
          <PaginationButton table={table} direction="next" />
          <PaginationButton table={table} direction="next" toEnd />
        </div>
      </div>
    </div>
  );
}

function PaginationButton<T>({
  table,
  direction,
  toEnd,
}: {
  table: TableType<T>;
  direction: "next" | "prev";
  toEnd?: boolean;
}) {
  const Icon = toEnd
    ? direction === "next"
      ? DoubleArrowRightIcon
      : DoubleArrowLeftIcon
    : direction === "next"
    ? ChevronRightIcon
    : ChevronLeftIcon;

  return (
    <Button
      variant="outline"
      size="icon"
      className="p-0"
      onClick={() => {
        if (toEnd) {
          if (direction === "next")
            table.setPageIndex(table.getPageCount() - 1);
          else table.setPageIndex(0);
        } else {
          if (direction === "next") table.nextPage();
          else table.previousPage();
        }
      }}
      disabled={
        direction === "next"
          ? !table.getCanNextPage()
          : !table.getCanPreviousPage()
      }
    >
      <Icon className="h-4 w-4" />
    </Button>
  );
}
