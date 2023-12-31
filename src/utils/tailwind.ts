import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const tw = (
  template: TemplateStringsArray,
  ...templateElements: any[]
) =>
  template.reduce((acc, str, i) => acc + str + (templateElements[i] ?? ""), "");
