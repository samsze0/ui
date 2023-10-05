import type { CustomIconType } from "@@/components/custom-icons";
import { CustomIcons } from "@@/components/custom-icons";
import { IconType } from "./icon";

export type CommandMenuConfig = {
  group: string;
  commands: {
    name: string;
    action: () => void;
    icon?: IconType;
  }[];
}[];
