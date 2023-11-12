"use client";

import { Command as CommandPrimitive } from "cmdk";
import * as React from "react";

import { cn, tw } from "@@/utils/tailwind";

export const Command = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive>
>(({ className, ...props }, ref) => (
  <CommandPrimitive
    ref={ref}
    className={cn(
      tw`
        h-full w-full
        flex flex-col
        overflow-hidden
        rounded-md
        dark:bg-neutral-950
        dark:text-neutral-50
      `,
      className
    )}
    {...props}
  />
));
Command.displayName = CommandPrimitive.displayName;