"use client";

import { Button } from "@@/components/primitives/button";
import { RxGear } from "react-icons/rx";
import usePersistedStore from "@@/components/use-persisted-store";
import { SettingsStore } from "@@/types/settings";
import { generateModalVisibilityStore } from "../modal-visibility-store";
import { SettingsSectionHeader } from "./section-header";
import { SettingsHotkey } from "./hotkey";
import { generateUseSettingsStore, useSettingsVisibility } from "./store";
import { cn } from "@@/utils/tailwind";

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
        className={cn(className)}
        onClick={open}
        tooltipText="Settings"
      >
        <RxGear className="w-5 h-5" />
      </Button>
    );
  };

export { SettingsSectionHeader, SettingsHotkey, generateUseSettingsStore };
