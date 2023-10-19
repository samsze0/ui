"use client";

import { SiteFooter } from "@@/components/site-footer";
import Link from "next/link";
import { isAtRoute } from "@@/next/utils/is-at-route";
import { usePathname } from "next/navigation";

export function SiteFooterWithSupabase({
  protectedRouteOnly,
  ...props
}: Omit<React.ComponentProps<typeof SiteFooter>, "linkComp" | "pathname"> & {
  protectedRouteOnly?: boolean;
}) {
  const pathname = usePathname();

  if (protectedRouteOnly && isAtRoute(pathname, ["/login", "/signup"])) {
    return null;
  }

  return <SiteFooter pathname={pathname} linkComp={Link} {...props} />;
}
