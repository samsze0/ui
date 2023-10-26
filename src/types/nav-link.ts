import { LinkComponent } from "./link";

export type NavLinkProps = {
  onClick?: () => void;
  linkComp?: LinkComponent;
  href: string;
  pathname?: string;
  external?: boolean;
  className?: string;
  children: React.ReactNode;
};
