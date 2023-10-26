"use client";

import { useTheme } from "next-themes";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

export function useMetaThemeSyncer() {
  const { resolvedTheme: theme } = useTheme();
  const pathname = usePathname();

  useEffect(() => {
    if (theme === "light")
      document
        .querySelectorAll('meta[name="theme-color"]')
        ?.forEach((elem) => elem.setAttribute("content", "white"));
    else
      document
        .querySelectorAll('meta[name="theme-color"]')
        ?.forEach((elem) => elem.setAttribute("content", "black"));
  }, [theme, pathname]);
}
