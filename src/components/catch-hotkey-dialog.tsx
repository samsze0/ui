"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@@/components/primitives/dialog";
import { create } from "zustand";
import { cn } from "@@/utils/tailwind";
import { useEffect, useRef } from "react";
import { Translation } from "@@/components/primitives/translation";

export const useCatchHotkeyDialogStore = create<{
  onKeydown?: (e: KeyboardEvent) => boolean;
  clearHandler: () => void;
}>((set) => ({
  onKeydown: undefined,
  clearHandler: () => set({ onKeydown: undefined }),
}));

export const CatchHotkeyDialog = () => {
  const { onKeydown, clearHandler } = useCatchHotkeyDialogStore();
  const currentKeydownHandler = useRef<((e: KeyboardEvent) => void) | null>(
    null
  );
  useEffect(() => {
    if (currentKeydownHandler.current) {
      document.removeEventListener("keydown", currentKeydownHandler.current);
    }

    if (!onKeydown) return;

    const onKey = (e: KeyboardEvent) => {
      e.preventDefault();
      e.stopImmediatePropagation();

      if (onKeydown(e)) clearHandler();
    };

    document.addEventListener("keydown", onKey);
    currentKeydownHandler.current = onKey;
  }, [onKeydown]);

  return (
    <Dialog open={!!onKeydown}>
      <DialogContent
        className="p-5 shadow-none flex flex-col items-center justify-center"
        onEscapeKeyDown={clearHandler}
        onInteractOutside={clearHandler}
        onPointerDownOutside={clearHandler}
      >
        <Translation className="text-sm text-muted-foreground">
          Waiting for keystroke...
        </Translation>
      </DialogContent>
    </Dialog>
  );
};
