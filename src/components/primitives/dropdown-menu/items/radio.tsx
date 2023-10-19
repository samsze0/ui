"use client";
import * as React from "react";
import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu";
import { DotFilledIcon } from "@radix-ui/react-icons";
import { cn } from "@@/utils/tailwind";
import { DropdownMenuItemIndicator, dropdownMenuItemVariants } from ".";

interface Props
  extends React.ComponentPropsWithoutRef<
    typeof DropdownMenuPrimitive.RadioItem
  > {}

export const DropdownMenuRadioItem = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.RadioItem>,
  Props
>(({ className, children, ...props }, ref) => (
  <DropdownMenuPrimitive.RadioItem
    ref={ref}
    className={cn(
      dropdownMenuItemVariants({
        disabledStyles: true,
        focusStyles: true,
        inset: "left",
      }),
      className
    )}
    {...props}
  >
    <span
      className={cn(
        "absolute left-2 h-3.5 w-3.5",
        "flex items-center justify-center"
      )}
    >
      <DropdownMenuItemIndicator
        inset="left"
        icon={<DotFilledIcon className="h-4 w-4 fill-current" />}
      />
    </span>
    {children}
  </DropdownMenuPrimitive.RadioItem>
));
DropdownMenuRadioItem.displayName = DropdownMenuPrimitive.RadioItem.displayName;
