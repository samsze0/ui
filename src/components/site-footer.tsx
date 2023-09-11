"use client";

import { cn } from "@@/utils/tailwind";
import { RxArrowTopRight } from "react-icons/rx";
import { CustomIcons } from "@@/components/custom-icons";
import { SocialLink } from "@@/components/social-link";
import type { FooterNavItem, NavConfig, ParentNavItem } from "types/nav";
import { type SiteConfig } from "types/site";
import { Translation } from "@@/components/primitives/translation";
import { LinkComponent } from "types/link";

export function SiteFooter({
  navConfig,
  siteConfig,
  pathname,
  linkComp,
}: {
  navConfig: NavConfig;
  siteConfig: SiteConfig;
  pathname: string;
  linkComp?: LinkComponent;
}) {
  const Link = linkComp ?? "a";

  return (
    <footer className="pb-6">
      <div className="container flex flex-col items-stretch gap-10">
        <div className={cn("flex flex-col gap-8", "lg:flex-row lg:gap-12")}>
          <Link
            href="/"
            className="mr-6 flex flex-row self-start items-center space-x-2"
          >
            <CustomIcons.artizon className="h-5 w-5 text-primary dark:text-foreground" />
            <Translation className="font-bold">
              {siteConfig.displayName}
            </Translation>
          </Link>
          <nav
            className={cn(
              "grid grid-cols-1 gap-8",
              "md:grid-cols-2",
              "lg:flex lg:flex-row lg:gap-20"
            )}
          >
            {navConfig.footer.map((navCategory) => (
              <NavCategory
                category={navCategory}
                key={navCategory.title}
                pathname={pathname}
                linkComp={linkComp}
              />
            ))}
          </nav>
        </div>
        <div className="flex flex-row justify-between gap-2 items-center">
          <Translation className="text-xs text-muted-foreground" as="p">
            {"© 2023 Zhonghui Anda CPA Limited."}
          </Translation>
          <nav className="flex flex-row items-center">
            {(["twitter", "linkedIn"] as const).map((type) =>
              siteConfig[type] ? (
                <SocialLink
                  href={siteConfig[type]!.url}
                  type={type}
                  className="text-muted-foreground/80 hover:text-muted-foreground"
                  linkComp={linkComp}
                  key={type}
                />
              ) : null
            )}
          </nav>
        </div>
      </div>
    </footer>
  );
}

const NavCategory = ({
  category,
  pathname,
  className,
  linkComp,
}: {
  category: ParentNavItem;
  pathname: string;
  linkComp?: LinkComponent;
  className?: string;
}) => {
  const Link = linkComp ?? "a";

  return (
    <div className={cn(className, "flex flex-col gap-4")}>
      <Translation
        as="p"
        className="font text-foreground/80 text-sm font-medium"
      >
        {category.title}
      </Translation>
      <ul className="flex flex-col gap-4">
        {category.items.map((navItem) => (
          <span
            className="flex flex-row gap-1 items-center"
            key={navItem.title}
          >
            <Link
              href={navItem.href}
              className={cn(
                "text-sm transition-colors hover:text-muted-foreground",
                pathname?.startsWith(navItem.href)
                  ? "text-foreground/80"
                  : "text-muted-foreground/80"
              )}
              target={navItem.external ? "_blank" : undefined}
              rel={navItem.external ? "noopener noreferrer" : undefined}
            >
              <Translation asChild>{navItem.title}</Translation>
            </Link>
            <RxArrowTopRight
              className={cn(
                "text-muted-foreground/70 w-[13px] h-[13px]",
                navItem.external ? "opacity-100" : "opacity-0"
              )}
            />
          </span>
        ))}
      </ul>
    </div>
  );
};
