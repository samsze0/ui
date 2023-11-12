"use client";

import * as React from "react";
import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import { RxCheck } from "react-icons/rx";

import { cn, tw } from "@@/utils/tailwind";
import { VariantProps, cva } from "class-variance-authority";

const variants = cva(
  tw`
    peer
    shrink-0
    h-4 w-4 rounded-sm
    shadow
    focus-visible:outline-none focus-visible:ring-1 focus-visible:dark:ring-neutral-800
    disabled:cursor-not-allowed disabled:opacity-50
  `,
  {
    variants: {
      variant: {
        primary: tw`
          border dark:border-primary-300
          data-[state=checked]:dark:bg-primary-300 data-[state=checked]:dark:text-neutral-900
        `,
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
    className={cn(variants({ variant }), className)}
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
