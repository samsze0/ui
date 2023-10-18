"use client";

import * as React from "react";

import { cn } from "@@/utils/tailwind";
import { VariantProps, cva } from "class-variance-authority";

const variants = cva(
  cn(
    "flex min-h-[60px] w-full",
    "rounded-md border border-input bg-transparent",
    "px-3 py-2",
    "shadow-sm",
    "text-sm placeholder:text-muted-foreground/70",
    "focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring",
    "disabled:cursor-not-allowed disabled:opacity-50"
  ),
  {
    variants: {},
    defaultVariants: {},
  }
);

interface Props
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement>,
    VariantProps<typeof variants> {}

const Textarea = React.forwardRef<HTMLTextAreaElement, Props>(
  ({ className, ...props }, ref) => {
    return (
      <textarea className={cn(variants(), className)} ref={ref} {...props} />
    );
  }
);
Textarea.displayName = "Textarea";

export { Textarea };
