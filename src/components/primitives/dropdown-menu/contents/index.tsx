"use client";
import * as React from "react";
import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu";
import { cn } from "@@/utils/tailwind";
import { VariantProps, cva } from "class-variance-authority";

const variants = cva(
  cn(
    "z-50 min-w-[8rem] overflow-hidden",
    "rounded-md border",
    "p-1",
    "bg-popover text-popover-foreground",
    "shadow-md"
  ),
  {
    variants: {
      animations: {
        default: cn(
          "data-[state=open]:animate-in data-[state=closed]:animate-out",
          "data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
          "data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95",
          "data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2"
        ),
        none: "",
      },
      shadows: {
        medium: "shadow-md",
        large: "shadow-lg",
      },
    },
    defaultVariants: {
      animations: "default",
    },
  }
);

export { variants as dropdownMenuCotentVariants };

interface Props
  extends React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Content>,
    VariantProps<typeof variants> {}

export const DropdownMenuContent = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.Content>,
  Props
>(
  (
    { className, sideOffset = 4, animations, shadows = "medium", ...props },
    ref
  ) => (
    <DropdownMenuPrimitive.Portal>
      <DropdownMenuPrimitive.Content
        ref={ref}
        sideOffset={sideOffset}
        className={cn(variants({ animations, shadows }), className)}
        {...props}
      />
    </DropdownMenuPrimitive.Portal>
  )
);
DropdownMenuContent.displayName = DropdownMenuPrimitive.Content.displayName;
