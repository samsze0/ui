"use client";

import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import PulseLoader from "react-spinners/PulseLoader";

import { cn, tw } from "@@/utils/tailwind";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@@/components/primitives/tooltip";
import { ComponentProps } from "react";

export const buttonVariants = cva(
  tw`
    inline-flex items-center justify-center
    rounded-md
    text-sm font-medium
    transition-colors
    focus-visible:outline-none focus-visible:ring-1
    focus-visible:ring-neutral-700 dark:focus-visible:dark:ring-neutral-800
    disabled:pointer-events-none disabled:opacity-50
  `,
  {
    variants: {
      styles: {
        default: tw`
          dark:bg-primary-300
          dark:hover:bg-primary-300/90
          dark:text-neutral-900
          shadow
        `,
        outline: tw`
          border
          dark:border-neutral-800
          bg-transparent
          dark:text-neutral-400
          hover:dark:bg-neutral-800
          hover:dark:text-neutral-50
        `,
        ghost: tw`
          bg-transparent
          hover:dark:text-neutral-50
          hover:dark:bg-neutral-800
        `,
      },
      state: {
        idle: tw``,
        error: tw``,
        loading: tw``,
        success: tw``,
      },
      size: {
        default: tw`h-9 px-4 py-2`,
        sm: tw`h-8 px-3 text-xs`,
        lg: tw`h-10 px-8`,
        icon: tw`h-9 w-9 p-0`,
        "icon-xs": tw`h-7 w-7 p-0`,
        "icon-sm": tw`h-8 w-8 p-0`,
      },
    },
    compoundVariants: [
      {
        styles: "default",
        state: "error",
        className: tw`
          dark:bg-error-300
          dark:hover:bg-error-300/90
        `,
      },
      {
        styles: "default",
        state: "loading",
        className: tw``,
      },
    ],
    defaultVariants: {
      styles: "default",
      state: "idle",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  tooltipChildren?: React.ReactNode;
  tooltipClassName?: string;
  tooltipProps?: ComponentProps<typeof TooltipContent>;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      styles,
      size,
      state,
      tooltipChildren,
      tooltipProps,
      tooltipClassName,
      children,
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
            className={cn(buttonVariants({ styles, size, state }), className)}
            ref={ref}
            type="button"
            {...props}
          >
            {state === "loading" ? <PulseLoader /> : children}
          </Comp>
        </TooltipTrigger>
        {tooltipChildren ? (
          <TooltipContent className={tooltipClassName} {...tooltipProps}>
            {tooltipChildren}
          </TooltipContent>
        ) : null}
      </Tooltip>
    );
  }
);
Button.displayName = "Button";

export { Button };
