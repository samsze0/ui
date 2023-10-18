"use client";

import {
  CircleIcon,
  FileIcon,
  LaptopIcon,
  MoonIcon,
  SunIcon,
} from "@radix-ui/react-icons";

import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "@@/components/primitives/command";
import { useCallback } from "react";
import { NavConfig } from "@@/types/nav";
import { Translation } from "@@/components/primitives/translation";
import { CommandMenuConfig } from "@@/types/command-menu";
import { useCommandMenuVisibility } from "./store";
import { generateCommandMenuTriggerComp } from "./trigger";

export const CommandMenu = ({
  navConfig,
  routerPush,
  commandMenuConfig,
}: {
  navConfig?: NavConfig;
  routerPush: (href: string) => void;
  commandMenuConfig: CommandMenuConfig;
}) => {
  const { close, isOpen, open, toggle, setIsOpen } = useCommandMenuVisibility();

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

export { generateCommandMenuTriggerComp };
export { useCommandMenuVisibility };
