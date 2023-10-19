"use client";

import { CustomIcons } from "@@/components/custom-icons";
import { cn, tw } from "@@/utils/tailwind";
import { RxArrowTopRight } from "react-icons/rx";
// import { Translation } from "@@/components/primitives/translation";
import { SiteHeaderProps } from "@@/types/site-header";
import { SocialLink } from "../social-link";
import { MobileNav } from "./mobile-nav";

export const MainNav = (props: SiteHeaderProps) => {
  const {
    session,
    siteConfig,
    navConfig,
    linkComp,
    pathname,
    signout,
    rightSideItems,
    showSocialLinks,
    logoAsLink,
  } = props;

  const Link = linkComp ?? "a";
  const { t } = { t: (t: string) => t };
  // const { t } = useTranslation();

  const Logo = () => {
    const LogoContent = () => (
      <>
        <CustomIcons.artizon className="h-6 w-6 text-foreground" />
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
      className={cn(
        "container h-14",
        "flex items-center justify-between gap-4"
      )}
    >
      <Logo />
      <nav className="flex-1 flex items-center gap-6">
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
        {showSocialLinks
          ? (["twitter", "linkedIn"] as const).map((type) =>
              siteConfig[type] ? (
                <SocialLink
                  href={siteConfig[type]!.url}
                  type={type}
                  className={cn("md:hidden")}
                  linkComp={linkComp}
                  key={type}
                />
              ) : null
            )
          : null}
        {rightSideItems}
      </nav>
      <MobileNav {...props} logo={<Logo />} triggerClassName="md:hidden" />
    </div>
  );
};
