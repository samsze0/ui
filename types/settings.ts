import { z } from "zod";
import { StoreApi, UseBoundStore } from "zustand";

export type CustomSetting<T extends any> = {
  defaultValue: T;
  persist: boolean;
  schema?: z.Schema<T>;
};

export type DefaultSettings = {
  toggleHotkey: string;
  changeToggleHotkey: (value: string) => void;
};

export type SettingsStore<
  T extends {
    [key: string]: any;
  }
> = UseBoundStore<Omit<StoreApi<DefaultSettings & T>, "persist">>;
