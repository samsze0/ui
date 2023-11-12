"use client";

import * as React from "react";
import { Command as CommandPrimitive } from "cmdk";

import { cn, tw } from "@@/utils/tailwind";

export const CommandItem = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.Item>
>(({ className, ...props }, ref) => (
  <CommandPrimitive.Item
    ref={ref}
    // TODO: use "Item" variant props
    className={cn(
      tw`
        relative flex items-center
        cursor-default select-none
        rounded-sm px-2 py-1.5
        text-sm
        outline-none
        aria-selected:dark:bg-neutral-800 aria-selected:dark:text-neutral-50
        data-[disabled]:pointer-events-none data-[disabled]:opacity-50
      `,
      className
    )}
    {...props}
  />
));

CommandItem.displayName = CommandPrimitive.Item.displayName;
