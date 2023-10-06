"use client";

import * as DialogPrimitive from "@radix-ui/react-dialog";
import { DialogContent, dialogContentVariants } from "./content";
import { DialogTitle } from "./title";
import { DialogDescription } from "./description";
import { DialogOverlay } from "./overlay";

const Dialog = DialogPrimitive.Root;

const DialogTrigger = DialogPrimitive.Trigger;

export {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogTitle,
  DialogDescription,
  DialogOverlay,
  dialogContentVariants,
};
