"use client";

import { cn } from "@@/utils/tailwind";
import { CustomIcons } from "@@/components/custom-icons";
import { RxArrowTopRight } from "react-icons/rx";
// import { Translation } from "@@/components/primitives/translation";
import { SiteHeaderProps } from "types/site-header";
import { ReactNode } from "react";
import { SocialLink } from "../social-link";
import { useTranslation } from "react-i18next";

export const MainNav = ({
  session,
  siteConfig,
  navConfig,
  linkComp,
  pathname,
  signout,
  rightSideItems,
  showSocialLinks,
}: SiteHeaderProps) => {
  const Link = linkComp ?? "a";
  const { t } = { t: (t: string) => t };
  // const { t } = useTranslation();

  return (
    <div className="container hidden lg:flex h-14 items-center justify-between">
      <Link href="/" className="mr-6 flex items-center space-x-2">
        <CustomIcons.artizon className="h-6 w-6 text-foreground" />
        <span className="hidden font-bold sm:inline-block">
          {t(siteConfig.displayName)}
        </span>
      </Link>
      <nav className="flex items-center space-x-6 text-sm font-medium">
        {navConfig.main.map((navItem) => (
          <span className="relative inline-block" key={navItem.href}>
            <Link
              href={navItem.href}
              className={cn(
                "transition-colors hover:text-foreground/80",
                pathname?.startsWith(navItem.href)
                  ? "text-foreground"
                  : "text-foreground/60"
              )}
              target={navItem.external ? "_blank" : undefined}
              rel={navItem.external ? "noopener noreferrer" : undefined}
            >
              {t(navItem.title)}
            </Link>
            <RxArrowTopRight
              className={cn(
                "absolute top-[0px] right-[-13px] text-foreground/60 w-[10px] h-[10px]",
                navItem.external ? "opacity-100" : "opacity-0"
              )}
            />
          </span>
        ))}
      </nav>
      <nav className="flex items-center gap-2 justify-end">
        {rightSideItems}
        {showSocialLinks
          ? (["twitter", "linkedIn"] as const).map((type) =>
              siteConfig[type] ? (
                <SocialLink
                  href={siteConfig[type]!.url}
                  type={type}
                  className="text-muted-foreground/80 hover:text-muted-foreground"
                  linkComp={linkComp}
                  key={type}
                />
              ) : null
            )
          : null}
      </nav>
    </div>
  );
};
