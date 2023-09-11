import { SiteFooter } from "@@/components/site-footer";
import { cookies, headers } from "next/headers";
import Link from "next/link";

export async function SiteFooterWithSupabase({
  ...props
}: Omit<React.ComponentProps<typeof SiteFooter>, "linkComp" | "pathname">) {
  const headersList = headers();
  const pathname = headersList.get("x-pathname")!;

  return <SiteFooter pathname={pathname} linkComp={Link} {...props} />;
}
