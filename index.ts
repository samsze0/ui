// Components & hooks

import { AvatarMenu } from "@@/components/avatar-menu";
import {
  CatchHotkeyDialog,
  useCatchHotkeyDialog,
} from "@@/components/catch-hotkey-dialog";
import {
  generateCommandMenuComp,
  generateCommandMenuTriggerComp,
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
  SettingsHotkey,
  SettingsSectionHeader,
  generateUseSettingsStore,
  generateSettingsTriggerComp,
} from "@@/components/settings";
import { ThemeToggle } from "@@/components/theme-toggle";
import {
  generateDialogStack,
  generateDialogStackItem,
  generateUseDialogStackStore,
} from "@@/components/primitives/dialog-stack";
import { useToast } from "@@/components/primitives/toast/use-toast";
import { usePersistedStore } from "@@/components/use-persisted-store";
import { useHotkey } from "@@/components/use-hotkey";
import { useMetaThemeSyncer } from "@@/components/use-meta-theme-syncer";
import { DataTable, DataTableColumnHeader } from "@@/components/data-table";
import { useCronState } from "@@/components/use-cron-state";

export {
  AvatarMenu,
  CatchHotkeyDialog,
  useCatchHotkeyDialog,
  generateCommandMenuComp,
  generateCommandMenuTriggerComp,
  generateSettingsTriggerComp,
  useCommandMenuVisibility,
  CustomIcons,
  HotkeyTogglableDialog,
  generateModalVisibilityStore,
  I18Dropdown,
  SiteHeader,
  SiteFooter,
  Providers,
  generateSettingsComp,
  SettingsHotkey,
  SettingsSectionHeader,
  generateUseSettingsStore,
  ThemeToggle,
  generateDialogStack,
  generateDialogStackItem,
  generateUseDialogStackStore,
  useToast,
  usePersistedStore,
  useHotkey,
  useMetaThemeSyncer,
  useCronState,
  DataTable,
  DataTableColumnHeader,
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
  DialogTitle,
  DialogTrigger,
} from "@@/components/primitives/dialog";
import {
  DropdownMenu,
  DropdownMenuSub,
  DropdownMenuTrigger,
  DropdownMenuSubTrigger,
  DropdownMenuContent,
  DropdownMenuSubContent,
  DropdownMenuLabel,
  DropdownMenuGroup,
  DropdownMenuRadioGroup,
  DropdownMenuSeparator,
  DropdownMenuPortal,
  DropdownMenuItem,
  DropdownMenuCheckboxItem,
  DropdownMenuRadioItem,
} from "@@/components/primitives/dropdown-menu";
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
import { ScrollArea } from "@@/components/primitives/scroll-area";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@@/components/primitives/select";
import {
  Sheet,
  SheetContent,
  SheetClose,
  SheetTrigger,
} from "@@/components/primitives/sheet";
import {
  TableCell,
  TableHead,
  TableRow,
  TableBody,
  TableHeader,
  Table,
} from "@@/components/primitives/table";
import { Textarea } from "@@/components/primitives/textarea";
import { Toast } from "@@/components/primitives/toast";
import { Toaster } from "@@/components/primitives/toast/toaster";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
  TooltipProvider,
} from "@@/components/primitives/tooltip";
import { Translation } from "@@/components/primitives/translation";
import { Keybind } from "@@/components/primitives/keybind";

export {
  Avatar,
  Button,
  Calendar,
  Checkbox,
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
  DropdownMenu,
  DropdownMenuSub,
  DropdownMenuTrigger,
  DropdownMenuSubTrigger,
  DropdownMenuContent,
  DropdownMenuSubContent,
  DropdownMenuLabel,
  DropdownMenuGroup,
  DropdownMenuRadioGroup,
  DropdownMenuSeparator,
  DropdownMenuPortal,
  DropdownMenuItem,
  DropdownMenuCheckboxItem,
  DropdownMenuRadioItem,
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  Input,
  Label,
  ScrollArea,
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  Sheet,
  SheetContent,
  SheetClose,
  SheetTrigger,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
  Textarea,
  Toast,
  Toaster,
  Tooltip,
  TooltipContent,
  TooltipTrigger,
  TooltipProvider,
  Translation,
  Keybind,
};

// Utils

import { cn, tw } from "@@/utils/tailwind";
import { getReadableDate } from "@@/utils/luxon";

export { cn, tw, getReadableDate };

// Types

import type { CommandMenuConfig } from "@@/types/command-menu";
import type { LinkComponent } from "@@/types/link";
import type { SiteHeaderProps } from "@@/types/site-header";
import type { NavConfig } from "@@/types/nav";
import type { SiteConfig } from "@@/types/site";
import type { Translations } from "@@/types/translations";
import type { CustomSetting, DefaultSettings } from "@@/types/settings";
import type { ModalVisibilityStore } from "@@/types/modal-visibility-store";

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
