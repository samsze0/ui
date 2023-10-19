"use client";

import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu";
import { DropdownMenuSubTrigger, DropdownMenuTrigger } from "./triggers";
import { DropdownMenuContent } from "./contents";
import { DropdownMenuSubContent } from "./contents/sub-content";
import { DropdownMenuLabel } from "./label";
import { DropdownMenuGroup, DropdownMenuRadioGroup } from "./groups";
import { DropdownMenuSeparator } from "./separator";
import { DropdownMenuItem } from "./items";
import { DropdownMenuCheckboxItem } from "./items/checkbox";
import { DropdownMenuRadioItem } from "./items/radio";

const DropdownMenu = DropdownMenuPrimitive.Root;

const DropdownMenuPortal = DropdownMenuPrimitive.Portal;

const DropdownMenuSub = DropdownMenuPrimitive.Sub;

export {
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
};
