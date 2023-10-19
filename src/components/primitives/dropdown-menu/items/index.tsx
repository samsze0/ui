"use client";
import * as React from "react";
import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu";
import { cn } from "@@/utils/tailwind";
import { VariantProps, cva } from "class-variance-authority";

const variants = cva(
  cn(
    "relative",
    "flex items-center",
    "rounded-sm",
    "px-2 py-1.5",
    "cursor-default select-none",
    "text-sm",
    "outline-none"
  ),
  {
    variants: {
      disabledStyles: {
        true: "data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
        false: "",
      },
      focusStyles: {
        true: "transition-colors focus:bg-accent focus:text-accent-foreground",
        false: "",
      },
      insetLeft: {
        true: "pl-8",
        false: "",
      },
      insetRight: {
        true: "pr-2",
        false: "",
      },
    },
    defaultVariants: {
      insetLeft: false,
      insetRight: false,
    },
  }
);

export { variants as dropdownMenuItemVariants };

interface Props
  extends React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Item>,
    VariantProps<typeof variants> {}

export const DropdownMenuItem = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.Item>,
  Props
>(
  (
    {
      className,
      disabledStyles = true,
      focusStyles = true,
      insetLeft,
      insetRight,
      ...props
    },
    ref
  ) => (
    <DropdownMenuPrimitive.Item
      ref={ref}
      className={cn(
        variants({ disabledStyles, focusStyles, insetLeft, insetRight }),
        className
      )}
      {...props}
    />
  )
);
DropdownMenuItem.displayName = DropdownMenuPrimitive.Item.displayName;
