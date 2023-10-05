import type { CustomIconType } from "@@/components/custom-icons";
import type { IconType } from "react-icons";
import { CustomIcons } from "@@/components/custom-icons";

export type CommandMenuConfig = {
  group: string;
  commands: {
    name: string;
    action: () => void;
    icon?: IconType | CustomIconType;
  }[];
}[];
