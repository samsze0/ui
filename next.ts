import {
  config as nextMiddlewareConfig,
  middleware as nextMiddleware,
} from "@@/next/middleware";
import { generateMetadata as generateNextMetadata } from "@@/next/metadata";
import { LoginPage } from "@@/next/pages/login";
import { AccountPage } from "@@/next/pages/account";
import { Route as authCallbackRoute } from "@@/next/routes/auth-callback";
import {
  Layout as NextLayout,
  appContainerStyles as nextAppContainerStyles,
} from "@@/next/layout";

export {
  nextMiddlewareConfig,
  nextMiddleware,
  generateNextMetadata,
  LoginPage,
  AccountPage,
  authCallbackRoute,
  NextLayout,
  nextAppContainerStyles,
};
