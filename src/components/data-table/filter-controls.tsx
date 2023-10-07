"use client";

import { DropdownMenuTrigger } from "@radix-ui/react-dropdown-menu";
import { MixerHorizontalIcon } from "@radix-ui/react-icons";
import { Table as TableType } from "@tanstack/react-table";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
} from "@@/components/primitives/dropdown-menu";
import { Button } from "@@/components/primitives/button";
import { Input } from "@@/components/primitives/input";
import { useCronState } from "@@/components/use-cron-state";
import { useEffect } from "react";

export function DataTableFilterControls<T>({
  table,
  filterPlaceholder,
  filterColumnId,
}: {
  table: TableType<T>;
  filterPlaceholder: string;
  filterColumnId: string;
}) {
  const [filter, setFilter, cronFilter] = useCronState<string>("");

  useEffect(() => {
    table.getColumn(filterColumnId)?.setFilterValue(cronFilter);
  }, [table, cronFilter]);

  return (
    <div className="flex flex-col-reverse md:flex-row items-center py-4 gap-3">
      <Input
        value={filter}
        placeholder={filterPlaceholder}
        onChange={(event) => {
          setFilter(event.target.value);
        }}
        className="md:max-w-sm"
      />
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" size="sm" className="ml-auto h-8 flex">
            <MixerHorizontalIcon className="mr-2 h-4 w-4" />
            View
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuLabel>Toggle columns</DropdownMenuLabel>
          <DropdownMenuSeparator />
          {table
            .getAllColumns()
            .filter(
              (column) =>
                typeof column.accessorFn !== "undefined" && column.getCanHide()
            )
            .map((column) => {
              return (
                <DropdownMenuCheckboxItem
                  key={column.id}
                  className="capitalize"
                  checked={column.getIsVisible()}
                  onCheckedChange={(value) => column.toggleVisibility(!!value)}
                >
                  {column.id}
                </DropdownMenuCheckboxItem>
              );
            })}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
