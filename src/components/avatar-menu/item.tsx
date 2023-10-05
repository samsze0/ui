"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@@/components/primitives/dropdown-menu";
import { LinkComponent } from "@@/types/link";
import { useTranslation } from "react-i18next";
import { ComponentProps, MouseEventHandler } from "react";
import { IconType } from "@@/types/icon";

export function AvatarMenuItem({
  linkComp,
  title,
  icon,
  href,
  onClick,
}: {
  linkComp?: LinkComponent;
  title: string;
  icon: IconType;
  href?: string;
  onClick?: MouseEventHandler;
}) {
  const Link = linkComp ?? "a";
  const { t } = { t: (t: string) => t };
  // const { t } = useTranslation();

  const Icon = icon;

  return (
    <DropdownMenuItem asChild>
      <Link
        className="text-muted-foreground"
        href={href ?? ""}
        onClick={onClick}
      >
        <Icon className="mr-2 h-4 w-4 text-muted-foreground" />
        <span>{t(title)}</span>
      </Link>
    </DropdownMenuItem>
  );
}
