"use client";

import * as React from "react";
import { RxViewVertical } from "react-icons/rx";

import { CustomIcons } from "@@/components/custom-icons";
import { Button } from "@@/components/primitives/button";
import { ScrollArea } from "@@/components/primitives/scroll-area";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@@/components/primitives/sheet";
import { cn } from "@@/utils/tailwind";
import { RxArrowTopRight } from "react-icons/rx";
// import { Translation } from "@@/components/primitives/translation";
import { SiteHeaderProps } from "types/site-header";
import { useState } from "react";
import { LinkComponent } from "types/link";
import { useTranslation } from "react-i18next";

export function MobileNav({
  session,
  siteConfig,
  navConfig,
  linkComp,
  signout,
  showSocialLinks,
}: Omit<SiteHeaderProps, "rightMainNavItems">) {
  const [open, setOpen] = useState(false);
  const Link = linkComp ?? "a";
  const { t } = { t: (t: string) => t };
  // const { t } = useTranslation();

  return (
    <div className="container lg:hidden flex h-14 items-center justify-between">
      <Link href="/" className="mr-6 flex items-center space-x-2">
        <CustomIcons.artizon className="h-6 w-6 text-foreground" />
        <span className="font-bold hidden xs:inline">
          {t(siteConfig.displayName)}
        </span>
      </Link>
      <div className="flex items-center justify-between space-x-2 lg:justify-end">
        <div className="w-full flex-1 lg:w-auto lg:flex-none">
          {/* <CommandMenu /> */}
        </div>
        <nav className="flex items-center">
          {/* <SocialLink href={siteConfig.links.twitter} type="twitter" />
          <SocialLink href={siteConfig.links.linkedIn} type="linkedin" /> */}
          {/* <ThemeToggle /> */}
          {/* <I18Dropdown /> */}
        </nav>
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <Button
              variant="ghost"
              className="text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 pr-0"
            >
              <RxViewVertical className="h-5 w-5" />
              <span className="sr-only">Toggle Menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="pr-0 w-[300px]">
            <MobileLink
              href="/"
              className="flex items-center"
              onClick={() => setOpen(false)}
            >
              <CustomIcons.artizon className="mr-2 h-4 w-4" />
              <span className="font-bold">{t(siteConfig.displayName)}</span>
            </MobileLink>
            <ScrollArea className="my-4 h-[calc(100vh-8rem)] pb-10 pl-6">
              <div className="flex flex-col items-start space-y-3">
                {navConfig.main.map(
                  (item) =>
                    item.href && (
                      <MobileLink
                        key={`mainNav-${item.href}`}
                        href={item.href}
                        external={item.external}
                        onClick={() => setOpen(false)}
                      >
                        {t(item.title)}
                      </MobileLink>
                    )
                )}
              </div>
              <div className="flex flex-col space-y-2">
                {navConfig.side.map((item, index) => (
                  <div
                    key={index}
                    className="flex flex-col space-y-3 pt-6 items-start"
                  >
                    <h4 className="font-medium">{t(item.title)}</h4>
                    {item?.items?.length
                      ? item.items.map((item) => (
                          <React.Fragment key={item.href}>
                            {!item.disabled &&
                              (item.href ? (
                                <MobileLink
                                  href={item.href}
                                  external={item.external}
                                  onClick={() => setOpen(false)}
                                  className="text-muted-foreground"
                                >
                                  {t(item.title)}
                                </MobileLink>
                              ) : (
                                <span>{t(item.title)}</span>
                              ))}
                          </React.Fragment>
                        ))
                      : null}
                  </div>
                ))}
              </div>
            </ScrollArea>
          </SheetContent>
        </Sheet>
      </div>
    </div>
  );
}

function MobileLink({
  href,
  onClick,
  className,
  external,
  children,
  linkComp,
}: {
  href: string;
  onClick?: () => void;
  children: React.ReactNode;
  external?: boolean;
  className?: string;
  linkComp?: LinkComponent;
}) {
  const Link = linkComp ?? "a";
  return (
    <span className="flex flex-row gap-2 items-center">
      <Link
        onClick={onClick}
        href={href}
        className={cn(className)}
        target={external ? "_blank" : undefined}
        rel={external ? "noopener noreferrer" : undefined}
      >
        {children}
      </Link>
      <RxArrowTopRight
        className={cn(
          "text-foreground/60 w-[12px] h-[12px]",
          external ? "opacity-100" : "opacity-0"
        )}
      />
    </span>
  );
}
