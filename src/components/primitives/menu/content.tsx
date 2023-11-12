"use client";

import { cn, tw } from "@@/utils/tailwind";
import { cva } from "class-variance-authority";

const variants = cva(
  cn(
    "relative",
    "z-50 overflow-hidden",
    "rounded-md border",
    "p-1",
    "bg-popover text-popover-foreground"
  ),
  {
    variants: {
      animations: {
        default: cn(
          "data-[state=closed]:animate-out",
          "data-[state=closed]:fade-out-0",
          "data-[state=closed]:zoom-out-95",
          "data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2"
        ),
        none: "",
      },
      fixedWidth: {
        true: "min-w-[8rem]",
        false: "",
      },
      animateOnMount: {
        true: "",
        false: "",
      },
      shadows: {
        medium: "shadow-md",
        large: "shadow-lg",
        none: "shadow-none",
      },
      popper: {
        true: tw`data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1`,
        false: "",
      },
    },
    compoundVariants: [
      {
        animations: "default",
        animateOnMount: true,
        className: cn("animate-in fade-in-0 zoom-in-95"),
      },
      {
        animations: "default",
        animateOnMount: false,
        className: cn(
          "data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95"
        ),
      },
    ],
    defaultVariants: {
      animations: "default",
      animateOnMount: false,
      popper: false,
      shadows: "medium",
      fixedWidth: true,
    },
  }
);
export { variants as menuContentVariants };
