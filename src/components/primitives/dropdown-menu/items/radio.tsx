"use client";
import * as React from "react";
import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu";
import { DotFilledIcon } from "@radix-ui/react-icons";
import { cn } from "@@/utils/tailwind";
import { MenuItemIndicator } from "../../menu/item";
import { menuItemVariants } from "../../menu/item";

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
      menuItemVariants({
        disabledStyles: true,
        focusStyles: true,
        inset: "left",
      }),
      className
    )}
    {...props}
  >
    <MenuItemIndicator
      inset="left"
      icon={<DotFilledIcon className="h-4 w-4 fill-current" />}
    />
    {children}
  </DropdownMenuPrimitive.RadioItem>
));
DropdownMenuRadioItem.displayName = DropdownMenuPrimitive.RadioItem.displayName;
