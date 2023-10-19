"use client";
import * as React from "react";
import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu";
import { CheckIcon } from "@radix-ui/react-icons";
import { cn } from "@@/utils/tailwind";
import { dropdownMenuItemVariants } from ".";
import { VariantProps } from "class-variance-authority";

interface Props
  extends React.ComponentPropsWithoutRef<
      typeof DropdownMenuPrimitive.CheckboxItem
    >,
    VariantProps<typeof dropdownMenuItemVariants> {}

export const DropdownMenuCheckboxItem = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.CheckboxItem>,
  Props
>(
  (
    {
      className,
      children,
      checked,
      disabledStyles = true,
      focusStyles = true,
      insetLeft = true,
      insetRight = true,
      ...props
    },
    ref
  ) => (
    <DropdownMenuPrimitive.CheckboxItem
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
      checked={checked}
      {...props}
    >
      <span
        className={cn(
          "absolute left-2 h-3.5 w-3.5",
          "flex items-center justify-center"
        )}
      >
        <DropdownMenuPrimitive.ItemIndicator>
          <CheckIcon className="h-4 w-4" />
        </DropdownMenuPrimitive.ItemIndicator>
      </span>
      {children}
    </DropdownMenuPrimitive.CheckboxItem>
  )
);
DropdownMenuCheckboxItem.displayName =
  DropdownMenuPrimitive.CheckboxItem.displayName;
