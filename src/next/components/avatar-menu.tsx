"use client";

import { AvatarMenu } from "@@/components/avatar-menu";
import {
  createClientComponentClient,
  createServerComponentClient,
} from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import Link from "next/link";
import { ComponentProps } from "react";
import { useSupabaseSession } from "./use-supabase-session";
import { useToast } from "@@/components/primitives/toast/use-toast";
import { useRouter } from "next/navigation";

export function AvatarMenuWithSupabase({
  ...props
}: Omit<
  ComponentProps<typeof AvatarMenu>,
  "session" | "signOut" | "linkComp"
>) {
  const supabase = createClientComponentClient();
  const session = useSupabaseSession(supabase);
  const router = useRouter();

  const { toast } = useToast();

  return (
    <AvatarMenu
      session={session}
      signOut={async () => {
        try {
          await supabase.auth.signOut();
          router.replace("/login");
          toast({
            title: "Successfully signed out",
          });
        } catch (e) {
          console.error(e);
          toast({
            title: "Fail to sign out",
            description: "Plesae contact the site administrator.",
            variant: "destructive",
          });
        }
      }}
      linkComp={Link}
      {...props}
    />
  );
}
