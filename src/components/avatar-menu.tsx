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
import { LinkComponent } from "types/link";
import { useTranslation } from "react-i18next";

export function AvatarMenu({
  signOut,
  linkComp,
  session,
}: {
  signOut: () => Promise<any>;
  linkComp?: LinkComponent;
  session: Session | null;
}) {
  const Link = linkComp ?? "a";
  const { t } = { t: (t: string) => t };
  // const { t } = useTranslation();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Avatar className="w-[35px] h-[35px] border border-background cursor-pointer">
          <AvatarImage src={"/content/test.jpeg"} />
          <AvatarFallback className="text-sm">
            {session?.user.id.charAt(0).toUpperCase()}
          </AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-[150px]">
        <DropdownMenuItem asChild>
          <Link className="text-muted-foreground" href="/account">
            <MdOutlineAccountCircle className="mr-2 h-4 w-4 text-muted-foreground" />
            <span>{t("Account")}</span>
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <Link
            className="text-muted-foreground"
            onClick={signOut}
            href="/login"
          >
            <TbLogout className="mr-2 h-4 w-4 text-muted-foreground" />
            <span>{t("Sign out")}</span>
          </Link>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
