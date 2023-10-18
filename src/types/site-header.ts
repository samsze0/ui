import { NavConfig } from "./nav";
import { Session } from "@supabase/supabase-js";
import { SiteConfig } from "./site";
import { LinkComponent } from "./link";
import { ReactNode } from "react";

export type SiteHeaderProps = {
  siteConfig: SiteConfig;
  navConfig: NavConfig;
  linkComp?: LinkComponent;
  pathname: string;
  session?: Session | null;
  signout?: () => Promise<any>;
  rightSideItems: ReactNode;
  showSocialLinks?: boolean;
  logoAsLink?: boolean;
};
