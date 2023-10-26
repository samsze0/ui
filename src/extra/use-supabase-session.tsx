"use client";

import { Session, SupabaseClient } from "@supabase/supabase-js";
import { useEffect, useState } from "react";

export const useSupabaseSession = (supabase: SupabaseClient) => {
  const [session, setSession] = useState<Session | null>(null);

  useEffect(() => {
    supabase.auth.onAuthStateChange((event, session) => {
      setSession(session);
    });
  }, [supabase]);

  return session;
};
