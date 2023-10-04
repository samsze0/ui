// Components

import { AvatarMenu } from "@@/components/avatar-menu";
import {
  CatchHotkeyDialog,
  useCatchHotkeyDialog,
} from "@@/components/catch-hotkey-dialog";
import {
  generateCommandMenuComp,
  useCommandMenuVisibility,
} from "@@/components/command-menu";
import { CustomIcons } from "@@/components/custom-icons";
import { HotkeyTogglableDialog } from "@@/components/hotkey-togglable-dialog";
import { generateModalVisibilityStore } from "@@/components/modal-visibility-store";
import { I18Dropdown } from "@@/components/i18-dropdown";
import { SiteHeader } from "@@/components/site-header";
import { SiteFooter } from "@@/components/site-footer";
import { Providers } from "@@/components/providers";
import {
  generateSettingsComp,
  SettingsHotkeyItem,
  SettingsSectionHeader,
  generateUseSettingsStore,
} from "@@/components/settings";
import { ThemeToggle } from "@@/components/theme-toggle";

export {
  AvatarMenu,
  CatchHotkeyDialog,
  useCatchHotkeyDialog,
  generateCommandMenuComp,
  useCommandMenuVisibility,
  CustomIcons,
  HotkeyTogglableDialog,
  generateModalVisibilityStore,
  I18Dropdown,
  SiteHeader,
  SiteFooter,
  Providers,
  generateSettingsComp,
  SettingsHotkeyItem,
  SettingsSectionHeader,
  generateUseSettingsStore,
  ThemeToggle,
};

// Primitive Components

import { Avatar } from "@@/components/primitives/avatar";
import { Button } from "@@/components/primitives/button";
import { Calendar } from "@@/components/primitives/calendar";
import { Checkbox } from "@@/components/primitives/checkbox";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@@/components/primitives/dialog";
import { DropdownMenu } from "@@/components/primitives/dropdown-menu";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@@/components/primitives/form";
import { Input } from "@@/components/primitives/input";
import { Label } from "@@/components/primitives/label";
import { NavigationMenu } from "@@/components/primitives/navigation-menu";
import { ScrollArea } from "@@/components/primitives/scroll-area";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@@/components/primitives/select";
import { Sheet } from "@@/components/primitives/sheet";
import { Table } from "@@/components/primitives/table";
import { Textarea } from "@@/components/primitives/textarea";
import { Toast } from "@@/components/primitives/toast";
import { Toaster } from "@@/components/primitives/toaster";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
  TooltipProvider,
} from "@@/components/primitives/tooltip";
import { Translation } from "@@/components/primitives/translation";
import { useToast } from "@@/components/primitives/use-toast";
import { usePersistedStore } from "@@/components/use-persisted-store";
import { useHotkey } from "@@/components/use-hotkey";

export {
  Avatar,
  Button,
  Calendar,
  Checkbox,
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DropdownMenu,
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  Input,
  Label,
  NavigationMenu,
  ScrollArea,
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  Sheet,
  Table,
  Textarea,
  Toast,
  Toaster,
  Tooltip,
  TooltipContent,
  TooltipTrigger,
  TooltipProvider,
  Translation,
  useToast,
  usePersistedStore,
  useHotkey,
};

// Utils

import { cn, tailwind } from "@@/utils/tailwind";

export { cn, tailwind };

// Types

import type { CommandMenuConfig } from "types/command-menu";
import type { LinkComponent } from "types/link";
import type { SiteHeaderProps } from "types/site-header";
import type { NavConfig } from "types/nav";
import type { SiteConfig } from "types/site";
import type { Translations } from "types/translations";
import type { CustomSetting, DefaultSettings } from "types/settings";
import type { ModalVisibilityStore } from "types/modal-visibility-store";

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
};
