"use client";

import * as TooltipPrimitive from "@radix-ui/react-tooltip";
import { TooltipContent } from "./content";

const TooltipProvider = TooltipPrimitive.Provider;

const Tooltip = TooltipPrimitive.Root;

const TooltipTrigger = TooltipPrimitive.Trigger;

export { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider };
