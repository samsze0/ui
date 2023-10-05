"use client";

import * as DialogPrimitive from "@radix-ui/react-dialog";
import { DialogContent } from "./content";
import { DialogTitle } from "./title";
import { DialogDescription } from "./description";

const Dialog = DialogPrimitive.Root;

const DialogTrigger = DialogPrimitive.Trigger;

export {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogTitle,
  DialogDescription,
};
