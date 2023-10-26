"use client";

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@@/components/primitives/avatar";
import { DropdownMenu } from "@@/components/primitives/dropdown-menu";
import { DropdownMenuContent } from "../primitives/dropdown-menu/contents";
import { DropdownMenuTrigger } from "../primitives/dropdown-menu/triggers";
import { cn, tw } from "@@/utils/tailwind";
import { ComponentProps, ReactNode } from "react";

export function AvatarMenu({
  avatarProps,
  avatarClassName,
  contentClassName,
  contentProps,
  user,
  children,
}: {
  user: {
    name: string;
  };
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
            tw`
              w-[35px] h-[35px]
              cursor-pointer
            `,
            avatarClassName
          )}
          {...avatarProps}
        >
          <AvatarImage src={"/content/test.jpeg"} />
          <AvatarFallback className="text-sm">
            {user.name.charAt(0).toUpperCase()}
          </AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        className={cn(tw`w-[150px]`, contentClassName)}
        {...contentProps}
      >
        {children}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
