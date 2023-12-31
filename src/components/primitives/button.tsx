"use client";

import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@@/utils/tailwind";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@@/components/primitives/tooltip";
import { Translation } from "@@/components/primitives/translation";

// TODO: add state (loading, error, etc.) for UI primitives

const variants = cva(
  cn(
    "inline-flex items-center justify-center",
    "rounded-md",
    "text-sm font-medium",
    "transition-colors",
    "focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring",
    "disabled:pointer-events-none disabled:opacity-50"
  ),
  {
    variants: {
      variant: {
        default: cn(
          "bg-primary text-primary-foreground",
          "hover:bg-primary/90",
          "shadow"
        ),
        destructive: cn(
          "bg-destructive text-destructive-foreground",
          "hover:bg-destructive/90",
          "shadow-sm"
        ),
        outline: cn(
          "border border-input",
          "bg-background text-muted-foreground",
          "hover:bg-accent hover:text-accent-foreground"
        ),
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-9 px-4 py-2",
        sm: "h-8 px-3 text-xs",
        lg: "h-10 px-8",
        icon: "h-9 w-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export { variants as buttonVariants };

interface Props
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof variants> {
  asChild?: boolean;
  tooltipText?: string;
  tooltipContent?: React.ReactNode;
}

const Button = React.forwardRef<HTMLButtonElement, Props>(
  (
    {
      className,
      variant,
      size,
      tooltipText,
      tooltipContent,
      asChild = false,
      ...props
    },
    ref
  ) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Tooltip>
        <TooltipTrigger asChild>
          <Comp
            className={
              !asChild ? cn(variants({ variant, size }), className) : ""
            }
            ref={ref}
            type="button"
            {...props}
          />
        </TooltipTrigger>
        {tooltipText || tooltipContent ? (
          <TooltipContent>
            {tooltipText ? (
              <Translation asChild>{tooltipText}</Translation>
            ) : (
              tooltipContent
            )}
          </TooltipContent>
        ) : null}
      </Tooltip>
    );
  }
);
Button.displayName = "Button";

export { Button };
