import { cn, tw } from "@@/utils/tailwind";
import { ReactNode } from "react";
import { fontSans } from "@@/next/fonts";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies, headers } from "next/headers";
import { redirect } from "next/navigation";
import { isAtRoute } from "./utils/is-at-route";

export const appContainerStyles = tw`relative flex flex-col min-h-screen`;

export async function Layout({ children }: { children?: ReactNode }) {
  const headersList = headers();
  const pathname = headersList.get("x-pathname")!;

  const supabase = createServerComponentClient({
    cookies,
  });
  const userReq = await supabase.auth.getUser();
  const user = userReq.data.user;

  const atSigninRoutes = isAtRoute(pathname, ["/login", "/signup"]);
  const atProtectedRoutes = !atSigninRoutes;

  if (!user && atProtectedRoutes) redirect(`/login?returnTo=${pathname}`);
  else if (user && atSigninRoutes) redirect("/");

  return (
    <>
      <html lang="en" suppressHydrationWarning>
        <head />
        <body
          className={cn(
            "bg-background font-sans antialiased",
            fontSans.variable
          )}
        >
          {children}
        </body>
      </html>
    </>
  );
}
