import {
  ArrowDownIcon,
  ArrowUpIcon,
  CaretSortIcon,
  EyeNoneIcon,
} from "@radix-ui/react-icons";
import { Column } from "@tanstack/react-table";

import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@@/components/primitives/dropdown-menu";
import { Button } from "@@/components/primitives/button";
import { cn, tw } from "@@/utils/tailwind";

const iconStyles = tw`mr-2 h-3.5 w-3.5 text-muted-foreground/70`;

export function DataTableColumnHeader<TData, TValue>({
  column,
  title,
}: {
  title: string;
  column: Column<TData, TValue>;
}) {
  if (!column.getCanSort()) {
    return <span>{title}</span>;
  }

  const SortIndicatorIcon =
    column.getIsSorted() === "desc"
      ? ArrowDownIcon
      : column.getIsSorted() === "asc"
      ? ArrowUpIcon
      : CaretSortIcon;

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          size="sm"
          className="-ml-3 h-8 data-[state=open]:bg-accent gap-2"
        >
          <span>{title}</span>
          <SortIndicatorIcon className="h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="start">
        <DropdownMenuItem onClick={() => column.toggleSorting(false)}>
          <ArrowUpIcon className={iconStyles} />
          Asc
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => column.toggleSorting(true)}>
          <ArrowDownIcon className={iconStyles} />
          Desc
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={() => column.toggleVisibility(false)}>
          <EyeNoneIcon className={iconStyles} />
          Hide
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
