"use client";

import { create } from "zustand";
import { persist } from "zustand/middleware";
import * as z from "zod";
import {
  CustomSetting,
  DefaultSettings,
  SettingsStore,
} from "@@/types/settings";

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
