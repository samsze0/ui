import { AvatarMenu } from "@@/components/avatar-menu";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import Link from "next/link";

export async function AvatarMenuWithSupabase() {
  const supabase = createServerComponentClient({
    cookies,
  });
  const sessionReq = await supabase.auth.getSession();
  const session = sessionReq.data.session;

  async function signout() {
    "use server";
    return supabase.auth.signOut();
  }

  return <AvatarMenu session={session} signOut={signout} linkComp={Link} />;
}
