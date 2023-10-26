"use client";

import * as React from "react";
import { RxViewVertical } from "react-icons/rx";

import { Button } from "@@/components/primitives/button";
import { ScrollArea } from "@@/components/primitives/scroll-area";
import { Sheet, SheetTrigger } from "@@/components/primitives/sheet";
import { cn, tw } from "@@/utils/tailwind";
import { RxArrowTopRight } from "react-icons/rx";
import { SheetContent } from "../primitives/sheet/content";
import { LinkComponent } from "@@/types/link";
import { SiteHeaderProps } from "@@/types/site-header";
import { useContext, useState } from "react";
import { useTranslation } from "react-i18next";
import { ConfigContext } from "../providers";
import { MobileNavLink } from "../nav-link";

export function MobileNav({
  linkComp,
  showSocialLinks,
  rightSideItems,
  logoAsLink,
  triggerClassName,
  logo,
}: SiteHeaderProps & {
  triggerClassName?: string;
  logo?: React.ReactNode;
}) {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);
  const Link = linkComp ?? "a";
  const { t } = useTranslation();

  const { navConfig, siteConfig } = useContext(ConfigContext);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button
          styles="ghost"
          size="icon"
          tooltipChildren="Menu"
          className={cn(triggerClassName)}
        >
          <RxViewVertical className="h-5 w-5" />
        </Button>
      </SheetTrigger>
      <SheetContent side="right">
        {logo}
        <ScrollArea className="my-4 h-[calc(100vh-8rem)] pb-10 pl-6">
          <div className="flex flex-col items-start gap-3">
            {navConfig.main.map(
              (item) =>
                item.href && (
                  <MobileNavLink
                    key={item.title}
                    href={item.href}
                    external={item.external}
                    onClick={close}
                    linkComp={Link}
                  >
                    {t(item.title)}
                  </MobileNavLink>
                )
            )}
          </div>
          <div className="flex flex-col gap-2 pt-6">
            {navConfig.side.map((item, index) => (
              <div key={index} className="flex flex-col gap-3 items-start">
                <h4
                  className={tw`
                    text-sm font-medium
                    dark:text-neutral-400
                  `}
                >
                  {t(item.title)}
                </h4>
                {item.items.map((item) => (
                  <MobileNavLink
                    key={item.title}
                    href={item.href}
                    external={item.external}
                    onClick={close}
                    linkComp={Link}
                  >
                    {t(item.title)}
                  </MobileNavLink>
                ))}
              </div>
            ))}
          </div>
        </ScrollArea>
      </SheetContent>
    </Sheet>
  );
}
