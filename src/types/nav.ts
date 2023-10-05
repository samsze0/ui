import { type CustomIconType } from "@@/components/custom-icons";
import { IconType } from "./icon";

export interface NavItem {
  title: string;
  href: string;
  disabled?: boolean;
  external?: boolean;
  icon?: IconType;
}

export interface ParentNavItem extends Pick<NavItem, "title"> {
  items: NavItem[];
}

export interface MainNavItem extends NavItem {}

export interface SidebarNavItem extends ParentNavItem {}

export interface FooterNavItem extends ParentNavItem {}

export interface NavConfig {
  main: MainNavItem[];
  side: SidebarNavItem[];
  footer: FooterNavItem[];
}
