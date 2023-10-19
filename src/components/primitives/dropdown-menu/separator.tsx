"use client";
import * as React from "react";
import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu";
import { cn, tw } from "@@/utils/tailwind";

export const dropdownMenuSeparatorStyles = tw`-mx-1 my-1 h-px bg-muted`;

export const DropdownMenuSeparator = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.Separator>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Separator>
>(({ className }, ref) => (
  <DropdownMenuPrimitive.Separator
    ref={ref}
    className={cn(dropdownMenuSeparatorStyles, className)}
  />
));
DropdownMenuSeparator.displayName = DropdownMenuPrimitive.Separator.displayName;
