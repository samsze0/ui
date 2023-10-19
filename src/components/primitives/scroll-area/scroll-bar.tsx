"use client";
import * as React from "react";
import * as ScrollAreaPrimitive from "@radix-ui/react-scroll-area";
import { cn } from "@@/utils/tailwind";
import { VariantProps, cva } from "class-variance-authority";

const variants = cva(
  cn("flex", "touch-none select-none", "transition-colors"),
  {
    variants: {
      orient: {
        vertical: "h-full w-2.5 border-l border-l-transparent p-[1px]",
        horizontal: "h-2.5 border-t border-t-transparent p-[1px]",
      },
    },
    defaultVariants: {},
  }
);

interface Props
  extends React.ComponentPropsWithoutRef<
      typeof ScrollAreaPrimitive.ScrollAreaScrollbar
    >,
    VariantProps<typeof variants> {}

export const ScrollBar = React.forwardRef<
  React.ElementRef<typeof ScrollAreaPrimitive.ScrollAreaScrollbar>,
  Props
>(({ className, orientation = "vertical", ...props }, ref) => (
  <ScrollAreaPrimitive.ScrollAreaScrollbar
    ref={ref}
    orientation={orientation}
    className={cn(variants({ orient: orientation }), className)}
    {...props}
  >
    <ScrollAreaPrimitive.ScrollAreaThumb className="relative flex-1 rounded-full bg-border" />
  </ScrollAreaPrimitive.ScrollAreaScrollbar>
));
ScrollBar.displayName = ScrollAreaPrimitive.ScrollAreaScrollbar.displayName;
