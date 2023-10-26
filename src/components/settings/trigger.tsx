"use client";

import { Button } from "@@/components/primitives/button";
import { RxGear } from "react-icons/rx";
import { usePersistedStore } from "@@/hooks/use-persisted-store";
import { SettingsStore } from "@@/types/settings";
import { useSettingsVisibility } from "./store";
import { cn } from "@@/utils/tailwind";

export const generateSettingsTriggerComp =
  (useSettings: SettingsStore<{}>) =>
  // eslint-disable-next-line react/display-name
  ({ className }: { className?: string }) => {
    const open = useSettingsVisibility((state) => state.open);
    const hotkey = usePersistedStore(
      useSettings,
      (state) => state.toggleHotkey
    );

    return (
      <Button
        styles="ghost"
        size="icon"
        className={cn(className)}
        onClick={open}
        tooltipChildren="Settings"
      >
        <RxGear className="w-5 h-5" />
      </Button>
    );
  };
