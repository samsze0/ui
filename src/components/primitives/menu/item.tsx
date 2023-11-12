"use client";

import { cn } from "@@/utils/tailwind";
import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu";
import { cva } from "class-variance-authority";
import * as React from "react";

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
export { variants as menuItemVariants };
export const MenuItemIndicator = ({
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
