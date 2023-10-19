"use client";

import * as React from "react";
import * as TooltipPrimitive from "@radix-ui/react-tooltip";

import { cn } from "@@/utils/tailwind";
import { dropdownMenuCotentVariants } from "../dropdown-menu/contents";

type Props = React.ComponentPropsWithoutRef<
  typeof TooltipPrimitive.Content
> & {};

export const TooltipContent = React.forwardRef<
  React.ElementRef<typeof TooltipPrimitive.Content>,
  Props
>(({ className, sideOffset = 4, ...props }, ref) => (
  <TooltipPrimitive.Content
    ref={ref}
    sideOffset={sideOffset}
    className={cn(
      dropdownMenuCotentVariants({
        animateOnMount: true,
        shadows: "none",
        fixedWidth: false
      }),
      "bg-muted px-3 py-1.5 text-xs text-muted-foreground",
      className
    )}
    {...props}
  />
));
TooltipContent.displayName = TooltipPrimitive.Content.displayName;
