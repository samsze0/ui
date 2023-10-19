"use client";
import { cn, tw } from "@@/utils/tailwind";
import * as SheetPrimitive from "@radix-ui/react-dialog";
import { Cross2Icon } from "@radix-ui/react-icons";
import { VariantProps, cva } from "class-variance-authority";
import { motion } from "framer-motion";
import * as React from "react";
import { SheetOverlay } from "./overlay";
import { SheetPortal } from "./portal";

export const SheetClose = SheetPrimitive.Close;

const variants = cva(
  cn(
    "fixed z-50",
    "bg-background",
    "p-6",
    "shadow-lg"
    // tw`transition ease-in-out data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:duration-300 data-[state=open]:duration-500`
  ),
  {
    variants: {
      side: {
        top: cn(
          tw`inset-x-0 top-0 border-b`
          // tw`data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top`
        ),
        bottom: cn(
          "inset-x-0 bottom-0 border-t"
          // "data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom"
        ),
        left: cn(
          tw`inset-y-0 left-0 h-full w-3/4 border-r sm:max-w-sm`
          // "data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left"
        ),
        right: cn(
          "inset-y-0 right-0 h-full w-3/4 border-l sm:max-w-sm"
          // "data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right"
        ),
      },
    },
    defaultVariants: {
      side: "right",
    },
  }
);

interface Props
  extends React.ComponentPropsWithoutRef<typeof MotionSheetContent>,
    VariantProps<typeof variants> {}

const MotionSheetContent = motion(SheetPrimitive.Content);

export const SheetContent = React.forwardRef<
  React.ElementRef<typeof SheetPrimitive.Content>,
  Props
>(({ side = "right", className, children, ...props }, ref) => (
  <SheetPortal>
    <SheetOverlay />
    <MotionSheetContent
      ref={ref}
      className={cn(variants({ side }), className)}
      layout
      initial={{
        x: side === "left" ? "-100%" : side === "right" ? "100%" : 0,
      }}
      animate={{
        x: 0,
        transition: {
          type: "spring",
          bounce: 0,
          duration: 0.5,
        },
      }}
      {...props}
    >
      {children}
      <SheetClose
        className={cn(
          "absolute right-4 top-4",
          "rounded-sm",
          "opacity-70 transition-opacity hover:opacity-100",
          "ring-offset-background focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
          "disabled:pointer-events-none",
          "data-[state=open]:bg-muted"
        )}
      >
        <Cross2Icon className="h-4 w-4" />
        <span className="sr-only">Close</span>
      </SheetClose>
    </MotionSheetContent>
  </SheetPortal>
));
SheetContent.displayName = SheetPrimitive.Content.displayName;
