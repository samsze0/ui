"use client";

import {
  CircleIcon,
  FileIcon,
  LaptopIcon,
  MoonIcon,
  SunIcon,
} from "@radix-ui/react-icons";

import { cn } from "@@/utils/tailwind";
import { Button } from "@@/components/primitives/button";
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "@@/components/primitives/command";
import { useCallback, useEffect, useRef } from "react";
import usePersistedStore from "@@/components/use-persisted-store";
import { NavConfig } from "types/nav";
import { create } from "zustand";
import { generateUseSettingsStore } from "./settings";
import { Translation } from "@@/components/primitives/translation";
import { CommandMenuConfig } from "types/command-menu";
import { SettingsStore } from "types/settings";
import { generateModalVisibilityStore } from "./modal-visibility-store";
import { useHotkey } from "./use-hotkey";

export const useCommandMenuVisibility = generateModalVisibilityStore();

export const generateCommandMenuComp =
  (
    useSettings: SettingsStore<{
      toggleCommandMenuHotkey: string;
    }>
  ) =>
  ({
    className,
    navConfig,
    routerPush,
    commandMenuConfig,
  }: {
    className?: string;
    navConfig?: NavConfig;
    routerPush: (href: string) => void;
    commandMenuConfig: CommandMenuConfig;
  }) => {
    const { close, isOpen, open, toggle, setIsOpen } =
      useCommandMenuVisibility();
    const hotkey = usePersistedStore(
      useSettings,
      (state) => state.toggleCommandMenuHotkey
    );
    useHotkey(hotkey ?? "", toggle);

    const runCommand = useCallback((command: () => unknown) => {
      close();
      command();
    }, []);

    return (
      <>
        <Button
          variant="outline"
          className={cn(
            "relative w-full justify-start text-sm text-muted-foreground sm:pr-12 md:w-40 lg:w-64",
            "transition-none",
            className
          )}
          onClick={open}
        >
          <Translation className="hidden lg:inline-flex">
            Type a command...
          </Translation>
          <Translation className="inline-flex lg:hidden">
            Command...
          </Translation>
          <kbd className="pointer-events-none absolute right-1.5 top-1.5 hidden h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium opacity-100 sm:flex">
            <span className="text-xs">⌘</span>
            {hotkey?.toUpperCase()}
          </kbd>
        </Button>
        <CommandDialog
          open={isOpen}
          onOpenChange={setIsOpen}
          onEscapeKeyDown={close}
        >
          <Translation as={CommandInput} placeholder="Type a command..." />
          <CommandList>
            <CommandEmpty>
              <Translation asChild>No results found.</Translation>
            </CommandEmpty>
            {navConfig ? (
              <>
                <CommandGroup
                  heading={<Translation asChild>Links</Translation>}
                >
                  {navConfig.main
                    .filter((navitem) => !navitem.external)
                    .map((navItem) => (
                      <CommandItem
                        key={`mainNav-${navItem.href}`}
                        value={navItem.title}
                        onSelect={() => {
                          runCommand(() => routerPush(navItem.href));
                        }}
                      >
                        <FileIcon className="mr-2 h-4 w-4" />
                        <Translation asChild>{navItem.title}</Translation>
                      </CommandItem>
                    ))}
                </CommandGroup>
                {navConfig.side.map((group) => (
                  <CommandGroup
                    key={group.title}
                    heading={<Translation asChild>{group.title}</Translation>}
                  >
                    {group.items.map((navItem) => (
                      <CommandItem
                        key={`sidebarNav-${navItem.href}`}
                        value={navItem.title}
                        onSelect={() => {
                          runCommand(() => routerPush(navItem.href));
                        }}
                      >
                        <div className="mr-2 flex h-4 w-4 items-center justify-center">
                          <CircleIcon className="h-3 w-3" />
                        </div>
                        <Translation asChild>{navItem.title}</Translation>
                      </CommandItem>
                    ))}
                  </CommandGroup>
                ))}
              </>
            ) : null}
            {commandMenuConfig.map((group) => (
              <>
                <CommandSeparator />
                <CommandGroup
                  heading={<Translation asChild>{group.group}</Translation>}
                >
                  {group.commands.map((command) => (
                    <CommandItem onSelect={() => runCommand(command.action)}>
                      {command.icon ? (
                        <command.icon className="mr-2 h-4 w-4" />
                      ) : null}
                      <Translation asChild>{command.name}</Translation>
                    </CommandItem>
                  ))}
                </CommandGroup>
              </>
            ))}
          </CommandList>
        </CommandDialog>
      </>
    );
  };

// export { CommandGroup as CommandMenuGroup, CommandItem as CommandMenuItem };
