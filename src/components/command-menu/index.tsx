"use client";

import { CircleIcon, FileIcon } from "@radix-ui/react-icons";

import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "@@/components/primitives/command";
import { Translation } from "@@/components/primitives/translation";
import { useHotkey } from "@@/components/use-hotkey";
import usePersistedStore from "@@/components/use-persisted-store";
import { CommandMenuConfig } from "@@/types/command-menu";
import { NavConfig } from "@@/types/nav";
import { SettingsStore } from "@@/types/settings";
import { useCallback } from "react";
import { useCommandMenuVisibility } from "./store";
import { generateCommandMenuTriggerComp } from "./trigger";

export const generateCommandMenuComp =
  (
    useSettings: SettingsStore<{
      toggleCommandMenuHotkey: string;
    }>
  ) =>
  // eslint-disable-next-line react/display-name
  ({
    navConfig,
    routerPush,
    commandMenuConfig,
  }: {
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
              <CommandGroup heading={<Translation asChild>Links</Translation>}>
                {navConfig.main
                  .filter((navitem) => !navitem.external)
                  .map((navItem) => (
                    <CommandItem
                      key={`mainNav-${navItem.title}`}
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
                      key={navItem.title}
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
              <CommandSeparator key={`${group.group}-separator`} />
              <CommandGroup
                key={group.group}
                heading={<Translation asChild>{group.group}</Translation>}
              >
                {group.commands.map((command) => (
                  <CommandItem
                    onSelect={() => runCommand(command.action)}
                    key={command.name}
                  >
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
    );
  };

export { generateCommandMenuTriggerComp, useCommandMenuVisibility };

