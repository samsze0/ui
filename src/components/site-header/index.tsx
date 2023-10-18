"use client";

import { MainNav } from "@@/components/site-header/main-nav";
import { MobileNav } from "./mobile-nav";
import { ReactNode } from "react";
import { SiteHeaderProps } from "@@/types/site-header";
import { cn } from "@@/utils/tailwind";

export function SiteHeader({ ...props }: SiteHeaderProps) {
  return (
    <header
      className={cn(
        "sticky top-0 z-40 w-full border-b bg-background/95",
        "supports-backdrop-blur:bg-background/60 backdrop-blur"
      )}
    >
      <MainNav {...props} />
    </header>
  );
}
