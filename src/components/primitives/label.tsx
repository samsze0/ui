"use client";

import * as React from "react";
import * as LabelPrimitive from "@radix-ui/react-label";
import { cva, VariantProps } from "class-variance-authority";

import { cn, tw } from "@@/utils/tailwind";

const variants = cva(
  tw`
    text-sm font-medium leading-none
    peer-disabled:cursor-not-allowed peer-disabled:opacity-70
  `,
  {
    variants: {
      state: {
        error: tw`dark:text-error-700`,
        idle: tw``,
        success: tw``,
        loading: tw``,
      },
    },
    defaultVariants: {
      state: "idle",
    },
  }
);

interface Props
  extends React.ComponentPropsWithoutRef<typeof LabelPrimitive.Root>,
    VariantProps<typeof variants> {}

const Label = React.forwardRef<
  React.ElementRef<typeof LabelPrimitive.Root>,
  Props
>(({ className, state, ...props }, ref) => (
  <LabelPrimitive.Root
    ref={ref}
    className={cn(variants({ state }), className)}
    {...props}
  />
));
Label.displayName = LabelPrimitive.Root.displayName;

export { Label };
