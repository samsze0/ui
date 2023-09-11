"use client";

import { ThemeToggle } from "@@/components/theme-toggle";
import { useTheme } from "next-themes";

export function NextThemeToggle() {
  const { resolvedTheme: theme, setTheme } = useTheme();

  return (
    <ThemeToggle
      toggleTheme={() => setTheme(theme === "light" ? "dark" : "light")}
    />
  );
}
