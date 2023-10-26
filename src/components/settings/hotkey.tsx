"use client";

import { Label } from "@@/components/primitives/label";
import { useCatchHotkeyDialog } from "@@/components/catch-hotkey-dialog";
import { tw } from "@@/utils/tailwind";

export const SettingsHotkey = ({
  value,
  onChange,
  label,
}: {
  value?: string;
  onChange: (value: string) => void;
  label: string;
}) => {
  return (
    <>
      <Label htmlFor={label} className="dark:text-neutral-50/80 text-sm">
        Open ${label}
      </Label>
      <div className="flex flex-row gap-2 items-center">
        <kbd
          className={tw`
          pointer-events-none select-none
          rounded border
          dark:bg-neutral-800
          h-[25px] w-[25px]
          font-mono font-medium
          flex items-center justify-center
        `}
        >
          <span>⌘</span>
        </kbd>
        <kbd
          className={tw`
            cursor-pointer select-none
            rounded border
            dark:bg-neutral-800
            dark:text-neutral-50
            h-[25px] w-[25px]
            font-mono font-light text-sm
            flex items-center justify-center
          `}
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
