"use client";

import { tw } from "@@/utils/tailwind";
import { CustomIcons } from "@@/components/custom-icons";
import { SocialLink } from "@@/components/social-link";
import type { ParentNavItem } from "@@/types/nav";
import { LinkComponent } from "@@/types/link";
import { ConfigContext } from "./providers";
import { useContext } from "react";
import { FooterNavLink } from "./nav-link";

export function SiteFooter({
  pathname,
  linkComp,
}: {
  pathname: string;
  linkComp?: LinkComponent;
}) {
  const { navConfig, siteConfig } = useContext(ConfigContext);

  const Link = linkComp ?? "a";

  return (
    <footer className="pb-6">
      <div className="container flex flex-col items-stretch gap-10">
        <div
          className={tw`
            flex
            flex-col gap-8
            lg:flex-row lg:gap-12
          `}
        >
          <Link href="/" className={tw`flex flex-row items-center gap-2`}>
            <CustomIcons.artizon
              className={tw`h-5 w-5 text-primary dark:text-neutral-50`}
            />
            <span className="font-bold">{siteConfig.displayName}</span>
          </Link>
          <nav
            className={tw`
              grid gap-8
              grid-cols-1
              md:grid-cols-2
              lg:flex lg:flex-row lg:gap-20
            `}
          >
            {navConfig.footer.map((navCategory) => (
              <NavCategory
                key={navCategory.title}
                category={navCategory}
                pathname={pathname}
                linkComp={linkComp}
              />
            ))}
          </nav>
        </div>
        <div className="flex flex-row justify-between gap-2 items-center">
          <span className={tw`text-xs dark:text-neutral-400`}>
            {`© ${siteConfig.name}.`}
          </span>
          <nav className="flex flex-row items-center">
            {(["twitter", "linkedIn", "github"] as const).map(
              (type) =>
                siteConfig[type] && (
                  <SocialLink
                    href={siteConfig[type]!.url}
                    type={type}
                    className="opacity-80"
                    linkComp={linkComp}
                    key={type}
                  />
                )
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
  linkComp,
}: {
  category: ParentNavItem;
  pathname: string;
  linkComp?: LinkComponent;
}) => {
  const Link = linkComp ?? "a";

  return (
    <div className="flex flex-col gap-4">
      <span
        className={tw`
          text-sm font-medium dark:text-neutral-50/80
        `}
      >
        {category.title}
      </span>
      <ul className="flex flex-col gap-4">
        {category.items.map((navItem) => (
          <FooterNavLink
            key={navItem.title}
            href={navItem.href}
            external={navItem.external}
            linkComp={Link}
            pathname={pathname}
          >
            {navItem.title}
          </FooterNavLink>
        ))}
      </ul>
    </div>
  );
};
