"use client";

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@@/components/primitives/avatar";
import { TbLogout } from "react-icons/tb";
import { MdOutlineAccountCircle } from "react-icons/md";
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
import { Button } from "@@/components/primitives/button";
import { Session } from "@supabase/supabase-js";
// import { Translation } from "@@/components/primitives/translation";
import { LinkComponent } from "@@/types/link";
import { useTranslation } from "react-i18next";
import { ComponentProps, ReactNode } from "react";
import { cn } from "@@/utils/tailwind";
import { AvatarMenuItem } from "./item";

export function AvatarMenu({
  signOut,
  linkComp,
  session,
  avatarProps,
  avatarClassName,
  contentClassName,
  contentProps,
  children,
}: {
  signOut: () => Promise<any>;
  linkComp?: LinkComponent;
  session: Session;
  avatarClassName?: string;
  avatarProps?: Omit<ComponentProps<typeof Avatar>, "className">;
  contentClassName?: string;
  contentProps?: Omit<ComponentProps<typeof DropdownMenuContent>, "className">;
  children?: ReactNode;
}) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Avatar
          className={cn(
            "w-[35px] h-[35px] border border-background cursor-pointer",
            avatarClassName
          )}
          {...avatarProps}
        >
          <AvatarImage src={"/content/test.jpeg"} />
          <AvatarFallback className="text-sm">
            {session.user.id.charAt(0).toUpperCase()}
          </AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        className={cn("w-[150px]", contentClassName)}
        {...contentProps}
      >
        <AvatarMenuItem
          icon={MdOutlineAccountCircle}
          title="Account"
          href="/account"
          linkComp={linkComp}
        />
        <AvatarMenuItem
          icon={TbLogout}
          title="Sign out"
          href="/login"
          onClick={signOut}
          linkComp={linkComp}
        />
        {children}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
