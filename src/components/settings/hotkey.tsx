"use client";

import { Label } from "@@/components/primitives/label";
import { useCatchHotkeyDialog } from "@@/components/catch-hotkey-dialog";
import { Translation } from "../primitives/translation";

export const SettingsHotkey = ({
  value,
  inputId,
  onChange,
  label,
}: {
  value?: string;
  inputId: string;
  onChange: (value: string) => void;
  label: string;
}) => {
  return (
    <>
      <Label htmlFor={inputId} className="text-foreground/80 text-sm">
        <Translation asChild>{`Open ${label}`}</Translation>
      </Label>
      <div className="flex flex-row gap-2 items-center">
        <kbd className="pointer-events-none select-none rounded border bg-muted h-[25px] w-[25px] font-mono font-medium flex items-center justify-center">
          <span>⌘</span>
        </kbd>
        <kbd
          className="select-none rounded border bg-muted h-[25px] w-[25px] font-mono font-light text-foreground cursor-pointer flex items-center justify-center text-sm"
          onClick={() => {
            useCatchHotkeyDialog.setState({
              onKeydown: (e) => {
                if (
                  e.key.length === 1 &&
                  !e.metaKey &&
                  !e.altKey &&
                  !e.ctrlKey &&
                  !e.shiftKey
                ) {
                  onChange(e.key);
                  return true;
                }

                return false;
              },
            });
          }}
        >
          <span>{value?.toUpperCase()}</span>
        </kbd>
      </div>
    </>
  );
};
