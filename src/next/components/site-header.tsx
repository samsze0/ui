import { SiteHeader } from "@@/components/site-header";
import type { LinkComponent } from "@@/types/link";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies, headers } from "next/headers";
// FIX: Gets error: symbol cannot be converted to string
// import Link from "next/link";

export async function SiteHeaderWithSupabase({
  linkComp,
  ...props
}: Omit<
  React.ComponentProps<typeof SiteHeader>,
  "session" | "signout" | "linkComp" | "pathname"
> & {
  linkComp: LinkComponent;
}) {
  const supabase = createServerComponentClient({
    cookies,
  });
  const sessionReq = await supabase.auth.getSession();
  const session = sessionReq.data.session;

  const headersList = headers();
  const pathname = headersList.get("x-pathname")!;

  async function signout() {
    "use server";

    await supabase.auth.signOut();
  }

  return (
    <SiteHeader
      session={session}
      signout={signout}
      linkComp={linkComp}
      pathname={pathname}
      {...props}
    />
  );
}
