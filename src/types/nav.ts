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

export type MainNavItem = NavItem;

export type SidebarNavItem = ParentNavItem;

export type FooterNavItem = ParentNavItem;

export interface NavConfig {
  main: MainNavItem[];
  side: SidebarNavItem[];
  footer: FooterNavItem[];
}
