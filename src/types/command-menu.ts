import { IconType } from "./icon";

export type CommandMenuConfig = {
  group: string;
  commands: {
    name: string;
    action: () => void;
    icon?: IconType;
  }[];
}[];
