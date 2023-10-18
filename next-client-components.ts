"use client";

import { NextProviders } from "@@/next/components/providers";
import { NextThemeToggle } from "@@/next/components/theme-toggle";
import { generateNextCommandMenuComp } from "@@/next/components/command-menu";
import { useSupabaseSession } from "@@/next/components/use-supabase-session";
import { AvatarMenuWithSupabase as NextAvatarMenuWithSupabase } from "@@/next/components/avatar-menu";
import { SiteHeaderWithSupabase as NextSiteHeaderWithSupabase } from "@@/next/components/site-header";
import { SiteFooterWithSupabase as NextSiteFooterWithSupabase } from "@@/next/components/site-footer";

export {
  NextProviders,
  NextThemeToggle,
  generateNextCommandMenuComp,
  useSupabaseSession,
  NextAvatarMenuWithSupabase,
  NextSiteHeaderWithSupabase,
  NextSiteFooterWithSupabase,
};
