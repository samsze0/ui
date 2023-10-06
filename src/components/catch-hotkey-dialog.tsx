"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from "@@/components/primitives/dialog";
import { create } from "zustand";
import { cn } from "@@/utils/tailwind";
import { useEffect, useRef } from "react";
import { Translation } from "@@/components/primitives/translation";

export const useCatchHotkeyDialog = create<{
  onKeydown?: (e: KeyboardEvent) => boolean;
  clearHandler: () => void;
}>((set) => ({
  onKeydown: undefined,
  clearHandler: () => set({ onKeydown: undefined }),
}));

export const CatchHotkeyDialog = () => {
  const { onKeydown, clearHandler } = useCatchHotkeyDialog();
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
        className="items-center justify-center"
        variant="fit"
        onEscapeKeyDown={clearHandler}
        onInteractOutside={clearHandler}
      >
        <Translation className="text-sm text-muted-foreground">
          Waiting for keystroke...
        </Translation>
      </DialogContent>
    </Dialog>
  );
};
