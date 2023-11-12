"use client";

import * as React from "react";
import { MagnifyingGlassIcon } from "@radix-ui/react-icons";
import { Command as CommandPrimitive } from "cmdk";

import { cn, tw } from "@@/utils/tailwind";

export const CommandInput = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.Input>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.Input>
>(({ className, ...props }, ref) => (
  <div className="flex items-center border-b px-3" cmdk-input-wrapper="">
    <MagnifyingGlassIcon className="mr-2 h-4 w-4 shrink-0 opacity-50" />
    {/* TODO: reuse Input variant props */}
    <CommandPrimitive.Input
      ref={ref}
      className={cn(
        tw`
          flex h-10 w-full
          rounded-md py-3
          bg-transparent
          outline-none
          text-sm
          placeholder:dark:text-neutral-400
          disabled:cursor-not-allowed disabled:opacity-50
        `,
        className
      )}
      {...props}
    />
  </div>
));

CommandInput.displayName = CommandPrimitive.Input.displayName;
