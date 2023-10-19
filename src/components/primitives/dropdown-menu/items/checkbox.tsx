"use client";
import * as React from "react";
import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu";
import { CheckIcon } from "@radix-ui/react-icons";
import { cn } from "@@/utils/tailwind";
import { DropdownMenuItemIndicator, dropdownMenuItemVariants } from ".";

interface Props
  extends React.ComponentPropsWithoutRef<
    typeof DropdownMenuPrimitive.CheckboxItem
  > {}

export const DropdownMenuCheckboxItem = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.CheckboxItem>,
  Props
>(({ className, children, checked, ...props }, ref) => (
  <DropdownMenuPrimitive.CheckboxItem
    ref={ref}
    className={cn(
      dropdownMenuItemVariants({
        disabledStyles: true,
        focusStyles: true,
        inset: "left",
      }),
      className
    )}
    checked={checked}
    {...props}
  >
    <DropdownMenuItemIndicator
      inset="left"
      icon={<CheckIcon className="h-4 w-4" />}
    />
    {children}
  </DropdownMenuPrimitive.CheckboxItem>
));
DropdownMenuCheckboxItem.displayName =
  DropdownMenuPrimitive.CheckboxItem.displayName;
