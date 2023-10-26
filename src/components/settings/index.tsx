"use client";

import { Button } from "@@/components/primitives/button";
import { ReactNode } from "react";
import { CatchHotkeyDialog } from "@@/components/catch-hotkey-dialog";
import { usePersistedStore } from "@@/hooks/use-persisted-store";
import { SettingsStore } from "@@/types/settings";
import { HotkeyTogglableDialog } from "../hotkey-togglable-dialog";
import { SettingsSection } from "./section";
import { SettingsHotkey } from "./hotkey";
import { generateUseSettingsStore, useSettingsVisibility } from "./store";
import { generateSettingsTriggerComp } from "./trigger";

export const generateSettingsComp =
  (useSettings: SettingsStore<{}>) =>
  // eslint-disable-next-line react/display-name
  ({
    hotkeyConfigItems,
    children,
  }: {
    hotkeyConfigItems: ReactNode;
    children?: ReactNode;
  }) => {
    const { close, isOpen, open, setIsOpen, toggle } = useSettingsVisibility();
    const changeToggleHotkey = useSettings((state) => state.changeToggleHotkey);
    const hotkey = usePersistedStore(
      useSettings,
      (state) => state.toggleHotkey
    );

    return (
      <HotkeyTogglableDialog
        includeTrigger={false}
        close={close}
        isOpen={isOpen}
        open={open}
        setIsOpen={setIsOpen}
        toggle={toggle}
        toggleHotkey={hotkey ?? ""}
      >
        <div className="flex flex-col gap-1">
          <h1 className="fond-medium text-lg">Settings</h1>
          <span className="text-sm dark:text-neutral-400">
            All settings are automatically saved.
          </span>
        </div>
        <SettingsSection title="Settings">
          <div className="grid grid-cols-[200px_minmax(900px,1fr)] gap-2 items-center">
            <SettingsHotkey
              label="settings"
              onChange={changeToggleHotkey}
              value={hotkey}
            />
            {hotkeyConfigItems}
          </div>
          <CatchHotkeyDialog />
        </SettingsSection>
        {children}
        <div className="flex flex-row justify-end gap-2">
          <Button styles="outline" onClick={close}>
            Close
          </Button>
        </div>
      </HotkeyTogglableDialog>
    );
  };

export {
  SettingsSection,
  SettingsHotkey,
  generateUseSettingsStore,
  generateSettingsTriggerComp,
};
