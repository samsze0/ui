"use client";

import * as React from "react";

import { useEffect } from "react";
import { Translations } from "@@/types/translations";

import { TooltipProvider } from "@@/components/primitives/tooltip";

import i18n from "i18next";
import { useTranslation, initReactI18next } from "react-i18next";
import { SupabaseClient, createClient } from "@supabase/supabase-js";
import { Query, QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

// export const useSupabase = () => {
//   const [state, setState] = useState<SupabaseClient | null>(null);

//   useEffect(() => {
//     const supabase = createClient(
//       process.env.NEXT_PUBLIC_SUPABASE_URL as string,
//       process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY as string,
//       {
//         auth: {
//           debug: process.env.NODE_ENV === "development",
//           persistSession: true,
//           storage: localStorage,
//           storageKey: "supabase.auth.token",
//         },
//       }
//     );
//     setState(supabase);
//   }, []);

//   return state;
// }

const queryClient = new QueryClient();

export function Providers({
  children,
  translations,
}: {
  children: React.ReactNode;
  translations: Translations;
}) {
  useEffect(() => {
    initI18n(translations);
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      {process.env.NODE_ENV === "development" ? (
        <ReactQueryDevtools initialIsOpen={false} />
      ) : null}
      <TooltipProvider delayDuration={200}>{children}</TooltipProvider>
    </QueryClientProvider>
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
