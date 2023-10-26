"use client";

// Components

import { AccountProfile } from "@@/components/account";
import { AvatarMenu } from "@@/components/avatar-menu";
import {
  useCommandMenuVisibility,
  generateCommandMenuComp,
  generateCommandMenuTriggerComp,
} from "@@/components/command-menu";
import { DataTableColumnHeader, DataTable } from "@@/components/data-table";
import {
  SettingsHotkey,
  SettingsSection,
  generateSettingsComp,
  generateSettingsTriggerComp,
  generateUseSettingsStore,
} from "@@/components/settings";
import { Signin } from "@@/components/signin";
import { SiteHeader } from "@@/components/site-header";
import {
  CatchHotkeyDialog,
  useCatchHotkeyDialog,
} from "@@/components/catch-hotkey-dialog";
import { CustomIcons } from "@@/components/custom-icons";
import { HotkeyTogglableDialog } from "@@/components/hotkey-togglable-dialog";
import { I18Dropdown } from "@@/components/i18-dropdown";
import { generateModalVisibilityStore } from "@@/components/modal-visibility-store";
import { NavLink, FooterNavLink, MobileNavLink } from "@@/components/nav-link";
import { Providers, ConfigContext } from "@@/components/providers";
import { SiteFooter } from "@@/components/site-footer";
import { SocialLink } from "@@/components/social-link";
import { ThemeToggle } from "@@/components/theme-toggle";

export {
  AccountProfile,
  AvatarMenu,
  useCommandMenuVisibility,
  generateCommandMenuComp,
  generateCommandMenuTriggerComp,
  DataTableColumnHeader,
  DataTable,
  SettingsHotkey,
  SettingsSection,
  generateSettingsComp,
  generateSettingsTriggerComp,
  generateUseSettingsStore,
  Signin,
  SiteHeader,
  CatchHotkeyDialog,
  useCatchHotkeyDialog,
  CustomIcons,
  HotkeyTogglableDialog,
  I18Dropdown,
  generateModalVisibilityStore,
  NavLink,
  FooterNavLink,
  MobileNavLink,
  Providers,
  ConfigContext,
  SiteFooter,
  SocialLink,
  ThemeToggle,
};

// Hooks

import { useCronState } from "@@/hooks/use-cron-state";
import { useHotkey } from "@@/hooks/use-hotkey";
import { usePersistedStore } from "@@/hooks/use-persisted-store";
import { useMetaThemeSyncer } from "@@/hooks/use-meta-theme-syncer";

export { useCronState, useHotkey, usePersistedStore, useMetaThemeSyncer };

// Utils

import { cn, tw } from "@@/utils/tailwind";
import { getReadableDate } from "@@/utils/luxon";

export { cn, tw, getReadableDate };

// Types

// TODO: expose every component props type

import type { CommandMenuConfig } from "@@/types/command-menu";
import type { LinkComponent } from "@@/types/link";
import type { SiteHeaderProps } from "@@/types/site-header";
import type { NavConfig } from "@@/types/nav";
import type { SiteConfig } from "@@/types/site";
import type { Translations } from "@@/types/translations";
import type { CustomSetting, DefaultSettings } from "@@/types/settings";
import type { ModalVisibilityStore } from "@@/types/modal-visibility-store";
import type { SearchParams } from "@@/types/search-params";
import type { IconType } from "@@/types/icon";
import type { NavLinkProps } from "@@/types/nav-link"
import type { UIState } from "@@/types/ui-state"
import type { PrefixProperties } from "@@/types/prefix-properties"

export {
  CommandMenuConfig,
  LinkComponent,
  SiteHeaderProps,
  NavConfig,
  SiteConfig,
  Translations,
  CustomSetting,
  DefaultSettings,
  ModalVisibilityStore,
  SearchParams,
  IconType,
  NavLinkProps,
  UIState,
  PrefixProperties
};
