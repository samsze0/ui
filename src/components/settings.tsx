"use client";

import { Button } from "@@/components/primitives/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@@/components/primitives/dialog";
import { Close as DialogClose } from "@radix-ui/react-dialog";
import { Input } from "@@/components/primitives/input";
import { Label } from "@@/components/primitives/label";
import { Textarea } from "@@/components/primitives/textarea";
import { useTranslation } from "react-i18next";
import React, { ReactNode, useEffect, useRef } from "react";
import { StoreApi, create, UseBoundStore, StateCreator } from "zustand";
import { RxGear } from "react-icons/rx";
import { persist } from "zustand/middleware";
import { cn } from "@@/utils/tailwind";
import {
  CatchHotkeyDialog,
  useCatchHotkeyDialog,
} from "@@/components/catch-hotkey-dialog";
import usePersistedStore from "@@/components/use-persisted-store";
import * as z from "zod";
import { CustomSetting, DefaultSettings, SettingsStore } from "types/settings";
import { HotkeyTogglableDialog } from "./hotkey-togglable-dialog";
import { ModalVisibilityStore } from "types/modal-visibility-store";
import { generateModalVisibilityStore } from "./modal-visibility-store";
import { Translation } from "./primitives/translation";

export const generateUseSettingsStore = <
  T extends {
    [key: Exclude<string, "toggleHotkey" | "changeToggleHotkey">]: any;
  }
>(settings: {
  [key in keyof T]: CustomSetting<T[key]>;
}): SettingsStore<T> =>
  create<DefaultSettings & T>()(
    persist(
      (_set) => {
        type SetStore = (
          partial:
            | Partial<DefaultSettings>
            | ((prevState: DefaultSettings) => Partial<DefaultSettings>)
        ) => void;
        const set = _set as unknown as SetStore;
        return {
          toggleHotkey: ",",
          changeToggleHotkey: (value) => set({ toggleHotkey: value }),
          ...(Object.fromEntries(
            Object.keys(settings).map((key) => [
              key,
              settings[key].defaultValue,
            ])
          ) as T),
        };
      },
      {
        name: "settings-storage",
        partialize: ({ ...props }) => ({
          ...props,
          ...Object.fromEntries(
            Object.keys(settings)
              .filter((key) => !settings[key].persist)
              .map((key) => [key, undefined])
          ),
          changeToggleHotkey: undefined,
        }),
        merge: (persisted, current) => {
          if (!persisted) return current;

          const parseResult = z
            .object({
              toggleHotkey: z.string(),
              ...Object.fromEntries(
                Object.keys(settings)
                  .filter((key) => settings[key].persist)
                  .map((key) => [key, settings[key]["schema"]])
              ),
            })
            .safeParse(persisted);

          if (!parseResult.success) {
            console.error(parseResult.error);
            return current;
          }

          return { ...current, ...parseResult.data };
        },
      }
    )
  );

export const useSettingsVisibility = generateModalVisibilityStore();

export const generateSettingsComp =
  (useSettings: SettingsStore<{}>) =>
  // eslint-disable-next-line react/display-name
  ({
    className,
    hotkeyConfigItems,
  }: {
    className?: string;
    hotkeyConfigItems: ReactNode;
  }) => {
    // } & Omit<
    //   React.ComponentProps<typeof HotkeyTogglableDialog>,
    //   keyof HotkeyTogglableDialogStore
    // >) => {
    const { close, isOpen, open, setIsOpen, toggle } = useSettingsVisibility();
    const changeToggleHotkey = useSettings((state) => state.changeToggleHotkey);
    const hotkey = usePersistedStore(
      useSettings,
      (state) => state.toggleHotkey
    );

    return (
      <HotkeyTogglableDialog
        close={close}
        isOpen={isOpen}
        open={open}
        setIsOpen={setIsOpen}
        toggle={toggle}
        trigger={
          <Button onClick={open} variant="ghost" size="icon">
            <RxGear className="w-5 h-5" />
          </Button>
        }
        triggerContent={
          <>
            <RxGear className="w-5 h-5" />
          </>
        }
        triggerClassName=""
        toggleHotkey={hotkey ?? ""}
      >
        <DialogHeader className="gap-1">
          <DialogTitle>
            <Translation asChild>Settings</Translation>
          </DialogTitle>
          <DialogDescription>
            <Translation asChild>
              All settings are automatically saved.
            </Translation>
          </DialogDescription>
        </DialogHeader>
        <section className="flex flex-col gap-3 flex-1">
          <SettingsSectionHeader title="Hotkey" />
          <div className="grid grid-cols-[200px_minmax(900px,1fr)] gap-2 items-center">
            <SettingsHotkeyItem
              inputId="open-settings-hotkey"
              label="settings"
              onChange={changeToggleHotkey}
              value={hotkey}
            />
            {hotkeyConfigItems}
          </div>
          <CatchHotkeyDialog />
        </section>
        <DialogFooter>
          <Button variant="outline" onClick={close}>
            <Translation asChild>Close</Translation>
          </Button>
        </DialogFooter>
      </HotkeyTogglableDialog>
    );
  };

export const SettingsSectionHeader = ({ title }: { title: string }) => {
  const { t } = { t: (t: string) => t };
  // const { t } = useTranslation();

  return (
    <h3 className="text-sm text-muted-foreground font-semibold">{t(title)}</h3>
  );
};

export const SettingsHotkeyItem = ({
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
        <Translation asChild>{`Open/close ${label}`}</Translation>
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
