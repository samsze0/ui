import { IconType } from "./icon";

export type CommandMenuConfig = {
  title: string;
  commands: {
    title: string;
    action: () => void;
    icon?: IconType;
  }[];
}[];
