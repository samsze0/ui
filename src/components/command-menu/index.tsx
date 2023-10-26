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
import { useHotkey } from "@@/hooks/use-hotkey";
import { usePersistedStore } from "@@/hooks/use-persisted-store";
import { CommandMenuConfig } from "@@/types/command-menu";
import { SettingsStore } from "@@/types/settings";
import { useCallback, useContext } from "react";
import { useCommandMenuVisibility } from "./store";
import { generateCommandMenuTriggerComp } from "./trigger";
import { ConfigContext } from "../providers";

export const generateCommandMenuComp =
  (
    useSettings: SettingsStore<{
      toggleCommandMenuHotkey: string;
    }>
  ) =>
  // eslint-disable-next-line react/display-name
  ({
    routerPush,
    commandMenuConfig,
  }: {
    routerPush: (href: string) => void;
    commandMenuConfig: CommandMenuConfig;
  }) => {
    const { close, isOpen, toggle, setIsOpen } = useCommandMenuVisibility();
    const hotkey = usePersistedStore(
      useSettings,
      (state) => state.toggleCommandMenuHotkey
    );
    useHotkey(hotkey ?? "", toggle);

    const { navConfig } = useContext(ConfigContext);

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
        <CommandInput placeholder="Type a command..." />
        <CommandList>
          <CommandEmpty>
            <span className="text-sm dark:text-neutral-400">
              No results found.
            </span>
          </CommandEmpty>
          {navConfig ? (
            <>
              <CommandGroup heading="Links">
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
                      {navItem.title}
                    </CommandItem>
                  ))}
              </CommandGroup>
              {navConfig.side.map((group) => (
                <CommandGroup key={group.title} heading={group.title}>
                  {group.items.map((navItem) => (
                    <CommandItem
                      key={navItem.title}
                      value={navItem.title}
                      onSelect={() => {
                        runCommand(() => routerPush(navItem.href));
                      }}
                    >
                      <CircleIcon className="mr-2 h-4 w-4" />
                      {navItem.title}
                    </CommandItem>
                  ))}
                </CommandGroup>
              ))}
            </>
          ) : null}
          {commandMenuConfig.map((group) => (
            <>
              <CommandSeparator key={`${group.title}-separator`} />
              <CommandGroup key={group.title} heading={group.title}>
                {group.commands.map((command) => (
                  <CommandItem
                    key={command.title}
                    onSelect={() => runCommand(command.action)}
                  >
                    {command.icon ? (
                      <command.icon className="mr-2 h-4 w-4" />
                    ) : null}
                    {command.title}
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
