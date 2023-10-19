"use client";

import * as DialogPrimitive from "@radix-ui/react-dialog";
import { DialogContent, dialogContentVariants } from "./content";
import { DialogOverlay } from "./overlay";

const Dialog = DialogPrimitive.Root;

const DialogTrigger = DialogPrimitive.Trigger;

export {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogOverlay,
  dialogContentVariants,
};
