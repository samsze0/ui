"use client";

import { MainNav } from "@@/components/site-header/main-nav";
import { MobileNav } from "./mobile-nav";
import { ReactNode } from "react";
import { SiteHeaderProps } from "types/site-header";

export function SiteHeader({ rightMainNavItems, ...props }: SiteHeaderProps) {
  return (
    <header className="supports-backdrop-blur:bg-background/60 sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur">
      <MainNav {...props} rightMainNavItems={rightMainNavItems} />
      <MobileNav {...props} />
    </header>
  );
}
