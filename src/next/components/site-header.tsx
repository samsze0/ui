"use client";

import { SiteHeader } from "@@/components/site-header";
import type { LinkComponent } from "@@/types/link";
import {
  createClientComponentClient
} from "@supabase/auth-helpers-nextjs";
import { isAtRoute } from "@@/next/utils/is-at-route";
import { useSupabaseSession } from "./use-supabase-session";
import { usePathname } from "next/navigation";
// FIX: Gets error: symbol cannot be converted to string
// import Link from "next/link";

export function SiteHeaderWithSupabase({
  linkComp,
  protectedRouteOnly = false,
  ...props
}: Omit<
  React.ComponentProps<typeof SiteHeader>,
  "session" | "signout" | "linkComp" | "pathname"
> & {
  linkComp: LinkComponent;
  protectedRouteOnly?: boolean;
}) {
  const pathname = usePathname();

  const supabase = createClientComponentClient();
  const session = useSupabaseSession(supabase);

  if (protectedRouteOnly && isAtRoute(pathname, ["/login", "/signup"])) {
    return null;
  }

  return (
    <SiteHeader
      session={session}
      signout={supabase.auth.signOut}
      linkComp={linkComp}
      pathname={pathname}
      {...props}
    />
  );
}
