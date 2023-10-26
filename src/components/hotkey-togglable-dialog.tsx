"use client";

import { ReactNode } from "react";
import { Button } from "@@/components/primitives/button";
import { cn } from "@@/utils/tailwind";
import {
  DialogContent,
  Dialog,
  DialogTrigger,
} from "@@/components/primitives/dialog";
import { ModalVisibilityStore } from "@@/types/modal-visibility-store";
import { useHotkey } from "../hooks/use-hotkey";

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
      {includeTrigger && (
        <DialogTrigger asChild>
          <Button
            styles="outline"
            className={triggerClassName}
            onClick={open}
            {...triggerProps}
          >
            {triggerContent}
          </Button>
        </DialogTrigger>
      )}
      <DialogContent
        className={dialogClassName}
        onEscapeKeyDown={close}
        onInteractOutside={close}
      >
        {children}
      </DialogContent>
    </Dialog>
  );
};
