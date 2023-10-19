"use client";
import * as React from "react";
import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu";
import { cn, tw } from "@@/utils/tailwind";

export const dropdownMenuLabelStyles = tw`px-2 py-1.5 text-sm font-semibold`;

export const DropdownMenuLabel = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.Label>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Label>
>(({ className }, ref) => (
  <DropdownMenuPrimitive.Label
    ref={ref}
    className={cn(dropdownMenuLabelStyles, className)}
  />
));
DropdownMenuLabel.displayName = DropdownMenuPrimitive.Label.displayName;
