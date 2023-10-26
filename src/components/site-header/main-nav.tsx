"use client";

import { CustomIcons } from "@@/components/custom-icons";
import { cn, tw } from "@@/utils/tailwind";
import { RxArrowTopRight } from "react-icons/rx";
import { SiteHeaderProps } from "@@/types/site-header";
import { SocialLink } from "../social-link";
import { MobileNav } from "./mobile-nav";
import { useTranslation } from "react-i18next";
import { useContext } from "react";
import { ConfigContext } from "../providers";
import { NavLink } from "../nav-link";

export const MainNav = (props: SiteHeaderProps) => {
  const { linkComp, pathname, rightSideItems, showSocialLinks, logoAsLink } =
    props;

  const { navConfig, siteConfig } = useContext(ConfigContext);

  const Link = linkComp ?? "a";
  const { t } = useTranslation();

  const Logo = () => {
    const LogoContent = () => (
      <>
        <CustomIcons.artizon className="h-6 w-6 dark:text-neutral-50" />
        <span className="font-bold hidden md:inline-block">
          {t(siteConfig.displayName)}
        </span>
      </>
    );

    const containerStyles = tw`flex items-center gap-2`;

    return logoAsLink ? (
      <Link href="/" className={containerStyles}>
        <LogoContent />
      </Link>
    ) : (
      <div className={containerStyles}>
        <LogoContent />
      </div>
    );
  };

  return (
    <div
      className={tw`
        container h-14
        flex items-center justify-between gap-4
      `}
    >
      <Logo />
      <nav className="flex-1 flex items-center gap-6">
        {navConfig.main.map((navItem) => (
          <NavLink
            key={navItem.title}
            href={navItem.href}
            external={navItem.external}
            linkComp={linkComp}
            pathname={pathname}
          >
            {t(navItem.title)}
          </NavLink>
        ))}
      </nav>
      <nav className="flex items-center gap-2 justify-end">
        {showSocialLinks
          ? (["twitter", "linkedIn", "github"] as const).map(
              (type) =>
                siteConfig[type] && (
                  <SocialLink
                    href={siteConfig[type]!.url}
                    type={type}
                    className={"md:hidden"}
                    linkComp={linkComp}
                    key={type}
                  />
                )
            )
          : null}
        {rightSideItems}
      </nav>
      <MobileNav {...props} logo={<Logo />} triggerClassName="md:hidden" />
    </div>
  );
};
