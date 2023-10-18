"use client";

import { cn } from "@@/utils/tailwind";
import { Button } from "@@/components/primitives/button";
import usePersistedStore from "@@/components/use-persisted-store";
import { Translation } from "@@/components/primitives/translation";
import { SettingsStore } from "@@/types/settings";
import { useHotkey } from "../use-hotkey";
import { useCommandMenuVisibility } from "./store";

export const generateCommandMenuTriggerComp =
  (
    useSettings: SettingsStore<{
      toggleCommandMenuHotkey: string;
    }>
  ) =>
  // eslint-disable-next-line react/display-name
  ({ className }: { className?: string }) => {
    const { close, isOpen, open, toggle, setIsOpen } =
      useCommandMenuVisibility();
    const hotkey = usePersistedStore(
      useSettings,
      (state) => state.toggleCommandMenuHotkey
    );

    return (
      <Button
        variant="outline"
        className={cn(
          "relative w-full justify-start text-sm text-muted-foreground sm:pr-12 md:w-40 lg:w-64",
          "transition-none",
          className
        )}
        onClick={open}
      >
        <Translation className="hidden lg:inline-flex">
          Type a command...
        </Translation>
        <Translation className="inline-flex lg:hidden">Command...</Translation>
        <kbd className="pointer-events-none absolute right-1.5 top-1.5 hidden h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium opacity-100 sm:flex">
          <span className="text-xs">⌘</span>
          {hotkey?.toUpperCase()}
        </kbd>
      </Button>
    );
  };
