"use client";

import { DialogProps } from "@radix-ui/react-dialog";

import { Dialog, DialogContent } from "@@/components/primitives/dialog";
import { Command } from "./command";

interface Props extends DialogProps {}

export const CommandDialog = ({
  children,
  onEscapeKeyDown,
  ...props
}: Props & {
  onEscapeKeyDown?: (e: KeyboardEvent) => void;
}) => {
  return (
    <Dialog {...props}>
      <DialogContent
        className="overflow-hidden p-0"
        onEscapeKeyDown={onEscapeKeyDown}
      >
        <Command className="[&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground [&_[cmdk-group]:not([hidden])_~[cmdk-group]]:pt-0 [&_[cmdk-group]]:px-2 [&_[cmdk-input-wrapper]_svg]:h-5 [&_[cmdk-input-wrapper]_svg]:w-5 [&_[cmdk-input]]:h-12 [&_[cmdk-item]]:px-2 [&_[cmdk-item]]:py-3 [&_[cmdk-item]_svg]:h-5 [&_[cmdk-item]_svg]:w-5">
          {children}
        </Command>
      </DialogContent>
    </Dialog>
  );
};
