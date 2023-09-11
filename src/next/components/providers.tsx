"use client";

import * as React from "react";

import { Providers } from "@@/components/providers";
import { Translations } from "types/translations";
import { ThemeProvider } from "next-themes";

export function NextProviders({
  children,
  translations,
}: {
  children: React.ReactNode;
  translations: Translations;
}) {
  return (
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
      <Providers translations={translations}>{children}</Providers>
    </ThemeProvider>
  );
}
