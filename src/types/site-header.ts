import { LinkComponent } from "./link";
import { ReactNode } from "react";

export type SiteHeaderProps = {
  linkComp?: LinkComponent;
  pathname: string;
  rightSideItems: ReactNode;
  showSocialLinks?: boolean;
  logoAsLink?: boolean;
};
