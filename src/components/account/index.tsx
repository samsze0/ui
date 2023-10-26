"use client";

import { Input } from "@@/components/primitives/input";
import { cn, tw } from "@@/utils/tailwind";
import { Label } from "../primitives/label";

export function AccountProfile({
  profile,
}: {
  profile?: {
    username: string;
    email: string;
  };
}) {
  return (
    <div className={tw`flex flex-col gap-8`}>
      <h1 className={tw`text-xl dark:text-neutral-50`}>Account settings</h1>
      <div
        className={cn(
          tw`
            grid auto-rows-min gap-3 items-center
            grid-cols-[80px_minmax(100px,1fr)] lg:grid-cols-[160px_minmax(100px,1fr)]
          `
        )}
      >
        {profile ? (
          <>
            <AccountSection label="Username" value={profile.username} />
            <AccountSection label="Email" value={profile.email} />
          </>
        ) : null}
      </div>
    </div>
  );
}

export function AccountSection({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <>
      <Label className={cn(tw`text-sm dark:text-neutral-400`)}>{label}</Label>
      <Input value={value} readOnly />
    </>
  );
}
