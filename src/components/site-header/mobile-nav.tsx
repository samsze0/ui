"use client";

import * as React from "react";
import { RxViewVertical } from "react-icons/rx";

import { Button } from "@@/components/primitives/button";
import { ScrollArea } from "@@/components/primitives/scroll-area";
import { Sheet, SheetTrigger } from "@@/components/primitives/sheet";
import { cn } from "@@/utils/tailwind";
import { RxArrowTopRight } from "react-icons/rx";
import { SheetContent } from "../primitives/sheet/content";
// import { Translation } from "@@/components/primitives/translation";
import { LinkComponent } from "@@/types/link";
import { SiteHeaderProps } from "@@/types/site-header";
import { useState } from "react";

export function MobileNav({
  session,
  siteConfig,
  navConfig,
  linkComp,
  signout,
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
  const { t } = { t: (t: string) => t };
  // const { t } = useTranslation();

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          tooltipText="Menu"
          className={cn(triggerClassName)}
        >
          <RxViewVertical className="h-5 w-5" />
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="pr-0 w-[300px]">
        {logo}
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
                <h4 className="text-sm font-medium text-muted-foreground">
                  {t(item.title)}
                </h4>
                {item.items.map((item) => (
                  <React.Fragment key={item.href}>
                    {!item.disabled ? (
                      <MobileLink
                        href={item.href}
                        external={item.external}
                        onClick={() => setOpen(false)}
                      >
                        {t(item.title)}
                      </MobileLink>
                    ) : null}
                  </React.Fragment>
                ))}
              </div>
            ))}
          </div>
        </ScrollArea>
      </SheetContent>
    </Sheet>
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
