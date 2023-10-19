"use client";

import * as SelectPrimitive from "@radix-ui/react-select";

import { SelectItem } from "./item";
import { SelectContent } from "./content";
import { SelectTrigger } from "./trigger";
import { SelectLabel } from "./label";
import { SelectSeparator } from "./separator";

const Select = SelectPrimitive.Root;

const SelectGroup = SelectPrimitive.Group;

const SelectValue = SelectPrimitive.Value;

export {
  Select,
  SelectGroup,
  SelectValue,
  SelectTrigger,
  SelectContent,
  SelectLabel,
  SelectItem,
  SelectSeparator,
};
