"use client";

import * as React from "react";

import { useEffect } from "react";
import { Translations } from "@@/types/translations";

import { TooltipProvider } from "@@/components/primitives/tooltip";

import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { SiteConfig } from "@@/types/site";
import { NavConfig } from "@@/types/nav";

const queryClient = new QueryClient();

export const ConfigContext = React.createContext<{
  siteConfig: SiteConfig;
  navConfig: NavConfig;
}>({
  siteConfig: {} as SiteConfig,
  navConfig: {} as NavConfig,
});

export function Providers({
  children,
  translations,
  siteConfig,
  navConfig,
}: {
  children: React.ReactNode;
  translations: Translations;
  siteConfig: SiteConfig;
  navConfig: NavConfig;
}) {
  useEffect(() => {
    initI18n(translations);
  }, []);

  return (
    <ConfigContext.Provider
      value={{
        siteConfig,
        navConfig,
      }}
    >
      <QueryClientProvider client={queryClient}>
        {process.env.NODE_ENV === "development" && (
          <ReactQueryDevtools initialIsOpen={false} />
        )}
        <TooltipProvider delayDuration={200}>{children}</TooltipProvider>
      </QueryClientProvider>
    </ConfigContext.Provider>
  );
}

export const initI18n = (translations: Translations) =>
  i18n.use(initReactI18next).init({
    resources: translations,
    lng: "en",
    fallbackLng: "en",
    interpolation: {
      escapeValue: false,
    },
  });
