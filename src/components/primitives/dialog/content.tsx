"use client";

import * as React from "react";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { Cross2Icon } from "@radix-ui/react-icons";
import { cva, type VariantProps } from "class-variance-authority";

import { cn, tw } from "@@/utils/tailwind";
import { DialogPortal } from "./portal";
import { DialogOverlay } from "./overlay";

const variants = cva("", {
  variants: {
    variant: {
      maximised: "h-[80vh] w-[80vw]",
      fit: "",
    },
    animation: {
      full: cn(
        "duration-200",
        "data-[state=open]:animate-in data-[state=closed]:animate-out",
        "data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
        "data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95",
        "data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%]"
      ),
      none: "",
    },
    position: {
      fixed:
        "fixed left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] z-50",
      none: "",
    },
    mainStyles: {
      default: cn(
        "p-5",
        "shadow-none",
        "border bg-background sm:rounded-lg",
        "flex flex-col gap-4"
      ),
      none: "",
    },
    overflowControl: {
      default: cn("overflow-auto-y"),
      none: "",
    },
  },
  defaultVariants: {
    variant: "maximised",
    animation: "full",
    position: "fixed",
    mainStyles: "default",
    overflowControl: "default",
  },
});

export { variants as dialogContentVariants };

interface Props
  extends React.ComponentPropsWithoutRef<typeof DialogPrimitive.Content>,
    VariantProps<typeof variants> {
  showDefaultCloseButton?: boolean;
  showOverlay?: boolean;
}

export const DialogContent = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Content>,
  Props
>(
  (
    {
      className,
      children,
      showDefaultCloseButton,
      variant,
      animation,
      mainStyles,
      position,
      overflowControl,
      showOverlay = true,
      ...props
    },
    ref
  ) => (
    <DialogPortal>
      {showOverlay ? <DialogOverlay /> : null}
      <DialogPrimitive.Content
        ref={ref}
        className={cn(
          variants({
            variant,
            animation,
            mainStyles,
            position,
            overflowControl,
          }),
          className
        )}
        {...props}
      >
        {children}
        {showDefaultCloseButton ? (
          <DialogPrimitive.Close className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground">
            <Cross2Icon className="h-4 w-4" />
            <span className="sr-only">Close</span>
          </DialogPrimitive.Close>
        ) : null}
      </DialogPrimitive.Content>
    </DialogPortal>
  )
);
DialogContent.displayName = DialogPrimitive.Content.displayName;
