"use client";

import { MainNav } from "@@/components/site-header/main-nav";
import { SiteHeaderProps } from "@@/types/site-header";
import { tw } from "@@/utils/tailwind";

export function SiteHeader({ ...props }: SiteHeaderProps) {
  return (
    <header
      className={tw`
        sticky top-0 z-40 w-full
        border-b dark:bg-neutral-950/95
        backdrop-blur
      `}
    >
      <MainNav {...props} />
    </header>
  );
}
