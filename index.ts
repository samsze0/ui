// Components & hooks

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
  SettingsHotkey,
  SettingsSectionHeader,
  generateUseSettingsStore,
} from "@@/components/settings";
import { ThemeToggle } from "@@/components/theme-toggle";
import {
  generateDialogStack,
  generateDialogStackItem,
  generateUseDialogStackStore,
} from "@@/components/primitives/dialog-stack";
import { useToast } from "@@/components/primitives/use-toast";
import { usePersistedStore } from "@@/components/use-persisted-store";
import { useHotkey } from "@@/components/use-hotkey";
import { useMetaThemeSyncer } from "@@/components/use-meta-theme-syncer";
import { DataTablePaginationControls } from "@@/components/data-table/pagination-controls";
import { useCronState } from "@@/components/use-cron-state";

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
  DataTablePaginationControls as DataTableFooter,
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
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuCheckboxItem,
  DropdownMenuRadioItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuGroup,
  DropdownMenuPortal,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuRadioGroup,
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
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@@/components/primitives/table";
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
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuCheckboxItem,
  DropdownMenuRadioItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuGroup,
  DropdownMenuPortal,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuRadioGroup,
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
