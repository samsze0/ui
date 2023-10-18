"use client";

import { Button } from "@@/components/primitives/button";
import { RxGear } from "react-icons/rx";
import usePersistedStore from "@@/components/use-persisted-store";
import { SettingsStore } from "@@/types/settings";
import { generateModalVisibilityStore } from "../modal-visibility-store";
import { SettingsSectionHeader } from "./section-header";
import { SettingsHotkey } from "./hotkey";
import { generateUseSettingsStore } from "./store";
import { cn } from "@@/utils/tailwind";

export const useSettingsVisibility = generateModalVisibilityStore();

export const generateSettingsTriggerComp =
  (useSettings: SettingsStore<{}>) =>
  // eslint-disable-next-line react/display-name
  ({ className }: { className?: string }) => {
    const { close, isOpen, open, setIsOpen, toggle } = useSettingsVisibility();
    const hotkey = usePersistedStore(
      useSettings,
      (state) => state.toggleHotkey
    );

    return (
      <Button
        variant="ghost"
        size="icon"
        className={cn(
          "relative",
          "flex items-center justify-between",
          "text-sm text-muted-foreground gap-5 border",
          "transition-none",
          "focus-visible:ring-0 ring-0 outline-none focus-visible:outline-none",
          className
        )}
        onClick={open}
      >
        <RxGear className="w-5 h-5" />
      </Button>
    );
  };

export { SettingsSectionHeader, SettingsHotkey, generateUseSettingsStore };
