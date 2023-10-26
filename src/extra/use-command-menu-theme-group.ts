"use client";

import { CommandMenuConfig } from "@@/types/command-menu";
import { RxMoon, RxSun } from "react-icons/rx";

export function useCommandMenuThemeGroup({
  setTheme,
}: {
  setTheme: (theme: "light" | "dark") => void;
}): CommandMenuConfig {
  return [
    {
      title: "Theme",
      commands: [
        {
          title: "Change to Light Theme",
          action: () => setTheme("light"),
          icon: RxSun,
        },
        {
          title: "Change to Dark Theme",
          action: () => setTheme("dark"),
          icon: RxMoon,
        },
      ],
    },
  ];
}
