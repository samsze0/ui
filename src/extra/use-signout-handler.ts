"use client";

import { useToast } from "@@/components/primitives/toast/use-toast";

export function useSignoutHandler({
  signOut,
  routerReplace,
}: {
  signOut: () => Promise<void>;
  routerReplace: (path: string) => void;
}) {
  const { toast } = useToast();

  return async () => {
    try {
      await signOut();
      routerReplace("/login");
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
  };
}
