import { Input } from "@@/components/primitives/input";
import { Translation } from "@@/components/primitives/translation";
import { cn } from "@@/utils/tailwind";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

export async function AccountPage() {
  const supabase = createServerComponentClient({
    cookies,
  });

  const sessionReq = await supabase.auth.getSession();
  const session = sessionReq.data.session;

  const profileReq = await supabase
    .from("profiles")
    .select()
    .eq("id", session!.user.id)
    .throwOnError()
    .single();

  return (
    <div className="relative container flex flex-col gap-8 mt-8 mb-8">
      <Translation as="h1" className="text-xl">
        Account settings
      </Translation>
      <div
        className={cn(
          "grid auto-rows-min gap-3 items-center",
          "grid-cols-[80px_minmax(100px,1fr)] lg:grid-cols-[160px_minmax(100px,1fr)]"
        )}
      >
        <Translation className="text-sm text-muted-foreground">
          Username
        </Translation>
        <Input value={profileReq.data?.username ?? ""} readOnly />
        <Translation className="text-sm text-muted-foreground">
          Email
        </Translation>
        <Input value={session?.user?.email ?? ""} readOnly />
      </div>
    </div>
  );
}
