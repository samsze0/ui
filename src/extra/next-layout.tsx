import { cn, tw } from "@@/utils/tailwind";
import { ReactNode } from "react";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { isAtRoute } from "../utils/is-at-route";

export async function NextAppContainer({ children }: { children: ReactNode }) {
  return <div className="relative flex flex-col min-h-screen">{children}</div>;
}

export async function NextAppBody({ children }: { children: ReactNode }) {
  return <div className="flex-1 flex child:flex-1">{children}</div>;
}

export async function NextLayout({
  children,
  user,
  routeProtection = false,
}: {
  children?: ReactNode;
  user?: any;
  routeProtection?: boolean;
}) {
  if (routeProtection) {
    const headersList = headers();
    const pathname = headersList.get("x-pathname")!;

    const atSigninRoutes = isAtRoute(pathname, ["/login", "/signup"]);
    const atProtectedRoutes = !atSigninRoutes;

    if (!user && atProtectedRoutes) redirect(`/login?returnTo=${pathname}`);
    else if (user && atSigninRoutes) redirect("/");
  }

  return (
    <>
      <html lang="en" suppressHydrationWarning>
        <head />
        <body
          className={tw`dark:bg-neutral-950 bg-neutral-50 dark:text-neutral-50 text-neutral-950`}
        >
          {children}
        </body>
      </html>
    </>
  );
}
