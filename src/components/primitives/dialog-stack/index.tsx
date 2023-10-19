"use client";

import { AnimatePresence } from "framer-motion";
import { ComponentProps } from "react";
import {
  DialogContent, Dialog
} from "@@/components/primitives/dialog";
import { generateUseDialogStackStore } from "./store";
import { generateDialogStackItem } from "./item";

export function generateDialogStack(
  useDialogStack: ReturnType<typeof generateUseDialogStackStore>
) {
  function DialogStack({
    contentProps,
  }: {
    contentProps?: ComponentProps<typeof DialogContent>;
  }) {
    const { activeItem, pop } = useDialogStack();

    return (
      <Dialog open={!!activeItem}>
        <DialogContent
          border="none"
          layout="none"
          animation="full" // FIX: exit animation not playing
          overflowControl="none"
          onEscapeKeyDown={pop}
          onInteractOutside={pop}
          {...contentProps}
        >
          <AnimatePresence mode="sync">{activeItem}</AnimatePresence>
        </DialogContent>
      </Dialog>
    );
  }

  return DialogStack;
}

export { generateDialogStackItem, generateUseDialogStackStore };
