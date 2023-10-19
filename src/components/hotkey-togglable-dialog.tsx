"use client";

import { ReactNode } from "react";
import { Button } from "@@/components/primitives/button";
import { cn } from "@@/utils/tailwind";
import {
  DialogContent, Dialog,
  DialogTrigger
} from "@@/components/primitives/dialog";
import { ModalVisibilityStore } from "@@/types/modal-visibility-store";
import { useHotkey } from "./use-hotkey";

export const HotkeyTogglableDialog = ({
  dialogClassName,
  children,
  includeTrigger = true,
  triggerContent,
  triggerClassName,
  triggerProps,
  close,
  isOpen,
  open,
  setIsOpen,
  toggle,
  toggleHotkey: hotkey,
}: {
  dialogClassName?: string;
  includeTrigger?: boolean;
  triggerProps?: React.ComponentProps<typeof Button>;
  triggerClassName?: string;
  triggerContent?: ReactNode;
  children: ReactNode;
  toggleHotkey: string;
} & ModalVisibilityStore) => {
  useHotkey(hotkey, toggle);

  return (
    <Dialog open={isOpen}>
      {includeTrigger ? (
        <DialogTrigger asChild>
          <Button
            variant="outline"
            className={cn(
              "relative",
              "flex items-center justify-between",
              "text-sm text-muted-foreground gap-5 border",
              "transition-none",
              "focus-visible:ring-0 ring-0 outline-none focus-visible:outline-none",
              triggerClassName
            )}
            onClick={open}
            {...triggerProps}
          >
            {triggerContent}
          </Button>
        </DialogTrigger>
      ) : null}
      <DialogContent
        className={cn(dialogClassName)}
        onEscapeKeyDown={close}
        onInteractOutside={close}
      >
        {children}
      </DialogContent>
    </Dialog>
  );
};
