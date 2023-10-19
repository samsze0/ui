"use client";
import * as React from "react";
import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu";
import { cn } from "@@/utils/tailwind";
import { cva } from "class-variance-authority";

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
      inset: {
        left: "pl-8 pl-2",
        right: "pl-2 pl-8",
        none: "",
      },
    },
    defaultVariants: {
      inset: "none",
    },
  }
);

export { variants as dropdownMenuItemVariants };

interface Props
  extends React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Item> {}

export const DropdownMenuItem = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.Item>,
  Props
>(({ className, ...props }, ref) => (
  <DropdownMenuPrimitive.Item
    ref={ref}
    className={cn(
      variants({ disabledStyles: true, focusStyles: true, inset: "none" }),
      className
    )}
    {...props}
  />
));
DropdownMenuItem.displayName = DropdownMenuPrimitive.Item.displayName;

export const DropdownMenuItemIndicator = ({
  inset,
  icon,
}: {
  inset: "left" | "right";
  icon: React.ReactNode;
}) => (
  <span
    className={cn(
      "absolute h-3.5 w-3.5",
      "flex items-center justify-center",
      inset === "right" ? "left-2" : "right-2"
    )}
  >
    <DropdownMenuPrimitive.ItemIndicator>
      {icon}
    </DropdownMenuPrimitive.ItemIndicator>
  </span>
);
