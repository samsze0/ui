"use client";

import { ReactNode, forwardRef, useEffect, useRef } from "react";
import { SettingsStore } from "types/settings";
import { create } from "zustand";
import usePersistedStore from "@@/components/use-persisted-store";
import { Button } from "@@/components/primitives/button";
import { cn } from "@@/utils/tailwind";
import {
  DialogContent,
  DialogDescription,
  DialogTitle,
  Dialog,
  DialogTrigger,
} from "@@/components/primitives/dialog";
import { ModalVisibilityStore } from "types/modal-visibility-store";
import { useHotkey } from "./use-hotkey";

export const HotkeyTogglableDialog = ({
  className,
  children,
  trigger,
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
  className?: string;
  trigger?: ReactNode;
  triggerProps?: React.ComponentProps<typeof Button>;
  triggerClassName?: string;
  triggerContent?: ReactNode;
  children: ReactNode;
  toggleHotkey: string;
} & ModalVisibilityStore) => {
  useHotkey(hotkey, toggle);

  // eslint-disable-next-line react/display-name
  const Trigger = forwardRef(() =>
    !trigger ? (
      <Button
        variant="outline"
        className={cn(
          "relative flex items-center justify-between text-sm text-muted-foreground gap-5 border",
          "transition-none",
          "focus-visible:ring-0 ring-0 outline-none focus-visible:outline-none",
          triggerClassName
        )}
        onClick={open}
        {...triggerProps}
      >
        {triggerContent}
      </Button>
    ) : (
      trigger
    )
  );

  return (
    <Dialog open={isOpen}>
      <DialogTrigger asChild>
        <Trigger />
      </DialogTrigger>
      <DialogContent
        className={cn(className)}
        onEscapeKeyDown={close}
        onInteractOutside={close}
        onPointerDownOutside={close}
      >
        {children}
      </DialogContent>
    </Dialog>
  );
};
