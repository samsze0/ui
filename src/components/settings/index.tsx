"use client";

import { Button } from "@@/components/primitives/button";
import {
  DialogDescription,
  DialogTitle,
} from "@@/components/primitives/dialog";
import { ReactNode } from "react";
import { RxGear } from "react-icons/rx";
import { CatchHotkeyDialog } from "@@/components/catch-hotkey-dialog";
import usePersistedStore from "@@/components/use-persisted-store";
import { SettingsStore } from "@@/types/settings";
import { HotkeyTogglableDialog } from "../hotkey-togglable-dialog";
import { generateModalVisibilityStore } from "../modal-visibility-store";
import { Translation } from "../primitives/translation";
import { SettingsSectionHeader } from "./section-header";
import { SettingsHotkey } from "./hotkey";
import { generateUseSettingsStore } from "./store";

export const useSettingsVisibility = generateModalVisibilityStore();

export const generateSettingsComp =
  (useSettings: SettingsStore<{}>) =>
  // eslint-disable-next-line react/display-name
  ({
    className,
    includeTrigger,
    hotkeyConfigItems,
  }: {
    className?: string;
    includeTrigger?: boolean;
    hotkeyConfigItems: ReactNode;
  }) => {
    const { close, isOpen, open, setIsOpen, toggle } = useSettingsVisibility();
    const changeToggleHotkey = useSettings((state) => state.changeToggleHotkey);
    const hotkey = usePersistedStore(
      useSettings,
      (state) => state.toggleHotkey
    );

    return (
      <HotkeyTogglableDialog
        includeTrigger={includeTrigger}
        className={className}
        close={close}
        isOpen={isOpen}
        open={open}
        setIsOpen={setIsOpen}
        toggle={toggle}
        triggerProps={{
          variant: "ghost",
          size: "icon",
        }}
        triggerContent={
          <>
            <RxGear className="w-5 h-5" />
          </>
        }
        triggerClassName=""
        toggleHotkey={hotkey ?? ""}
      >
        <div className="flex flex-col gap-1">
          <DialogTitle>
            <Translation asChild>Settings</Translation>
          </DialogTitle>
          <DialogDescription>
            <Translation asChild>
              All settings are automatically saved.
            </Translation>
          </DialogDescription>
        </div>
        <section className="flex flex-col gap-3 flex-1">
          <SettingsSectionHeader title="Hotkey" />
          <div className="grid grid-cols-[200px_minmax(900px,1fr)] gap-2 items-center">
            <SettingsHotkey
              inputId="open-settings-hotkey"
              label="settings"
              onChange={changeToggleHotkey}
              value={hotkey}
            />
            {hotkeyConfigItems}
          </div>
          <CatchHotkeyDialog />
        </section>
        <div className="flex flex-row justify-end gap-2">
          <Button variant="outline" onClick={close}>
            <Translation asChild>Close</Translation>
          </Button>
        </div>
      </HotkeyTogglableDialog>
    );
  };

export { SettingsSectionHeader, SettingsHotkey, generateUseSettingsStore };
