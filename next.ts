import {
  config as nextMiddlewareConfig,
  middleware as nextMiddleware,
} from "@@/next/middleware";
import { AvatarMenuWithSupabase as NextAvatarMenuWithSupabase } from "@@/next/components/avatar-menu";
import { SiteHeaderWithSupabase as NextSiteHeaderWithSupabase } from "@@/next/components/site-header";
import { SiteFooterWithSupabase as NextSiteFooterWithSupabase } from "@@/next/components/site-footer";
import { generateMetadata as generateNextMetadata } from "@@/next/metadata";
import { LoginPage } from "@@/next/pages/login";
import { AccountPage } from "@@/next/pages/account";
import { Route as authCallbackRoute } from "@@/next/routes/auth-callback";

export {
  nextMiddlewareConfig,
  nextMiddleware,
  NextAvatarMenuWithSupabase,
  NextSiteHeaderWithSupabase,
  NextSiteFooterWithSupabase,
  generateNextMetadata,
  LoginPage,
  AccountPage,
  authCallbackRoute,
};
