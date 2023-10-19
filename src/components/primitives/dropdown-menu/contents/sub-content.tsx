"use client";
import * as React from "react";
import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu";
import { cn } from "@@/utils/tailwind";
import { dropdownMenuCotentVariants } from ".";
import { VariantProps } from "class-variance-authority";

interface Props
  extends React.ComponentPropsWithoutRef<
      typeof DropdownMenuPrimitive.SubContent
    >,
    VariantProps<typeof dropdownMenuCotentVariants> {}

export const DropdownMenuSubContent = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.SubContent>,
  Props
>(({ className, animations, shadows, ...props }, ref) => (
  <DropdownMenuPrimitive.SubContent
    ref={ref}
    className={cn(
      dropdownMenuCotentVariants({ animations, shadows }),
      className
    )}
    {...props}
  />
));
DropdownMenuSubContent.displayName =
  DropdownMenuPrimitive.SubContent.displayName;
