"use client";
import * as React from "react";
import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu";
import { DotFilledIcon } from "@radix-ui/react-icons";
import { cn } from "@@/utils/tailwind";
import { dropdownMenuItemVariants } from ".";
import { VariantProps } from "class-variance-authority";

interface Props
  extends React.ComponentPropsWithoutRef<
      typeof DropdownMenuPrimitive.RadioItem
    >,
    VariantProps<typeof dropdownMenuItemVariants> {}

export const DropdownMenuRadioItem = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.RadioItem>,
  Props
>(
  (
    {
      className,
      children,
      disabledStyles = true,
      focusStyles = true,
      insetLeft = true,
      insetRight = true,
      ...props
    },
    ref
  ) => (
    <DropdownMenuPrimitive.RadioItem
      ref={ref}
      className={cn(
        dropdownMenuItemVariants({
          disabledStyles,
          focusStyles,
          insetLeft,
          insetRight,
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
        <DropdownMenuPrimitive.ItemIndicator>
          <DotFilledIcon className="h-4 w-4 fill-current" />
        </DropdownMenuPrimitive.ItemIndicator>
      </span>
      {children}
    </DropdownMenuPrimitive.RadioItem>
  )
);
DropdownMenuRadioItem.displayName = DropdownMenuPrimitive.RadioItem.displayName;
