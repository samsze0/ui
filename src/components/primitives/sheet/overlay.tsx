"use client";
import { cn } from "@@/utils/tailwind";
import * as SheetPrimitive from "@radix-ui/react-dialog";
import * as React from "react";
import { dialogOverlayStyles } from "../dialog/overlay";

export const SheetOverlay = React.forwardRef<
  React.ElementRef<typeof SheetPrimitive.Overlay>,
  React.ComponentPropsWithoutRef<typeof SheetPrimitive.Overlay>
>(({ className, ...props }, ref) => (
  <SheetPrimitive.Overlay
    className={cn(dialogOverlayStyles, className)}
    {...props}
    ref={ref}
  />
));
SheetOverlay.displayName = SheetPrimitive.Overlay.displayName;
