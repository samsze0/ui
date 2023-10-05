"use client";

import * as React from "react";
import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import { RxCheck } from "react-icons/rx";

import { cn } from "@@/utils/tailwind";
import { VariantProps, cva } from "class-variance-authority";

const variants = cva(
  cn(
    "peer",
    "shrink-0",
    "h-4 w-4 rounded-sm",
    "shadow",
    "focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring",
    "disabled:cursor-not-allowed disabled:opacity-50"
  ),
  {
    variants: {
      variant: {
        primary: cn(
          "border border-primary",
          "data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground"
        ),
      },
    },
    defaultVariants: {
      variant: "primary",
    },
  }
);

interface Props
  extends React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root>,
    VariantProps<typeof variants> {
  asChild?: boolean;
}

const Checkbox = React.forwardRef<
  React.ElementRef<typeof CheckboxPrimitive.Root>,
  Props
>(({ className, variant, ...props }, ref) => (
  <CheckboxPrimitive.Root
    ref={ref}
    className={cn(cn(variants({ variant })), className)}
    {...props}
  >
    <CheckboxPrimitive.Indicator
      className={cn("flex items-center justify-center text-current")}
    >
      <RxCheck className="h-4 w-4" />
    </CheckboxPrimitive.Indicator>
  </CheckboxPrimitive.Root>
));
Checkbox.displayName = CheckboxPrimitive.Root.displayName;

export { Checkbox };
