"use client";

import { generateCommandMenuComp } from "@@/components/command-menu";
import { useRouter } from "next/router";
import { useTheme } from "next-themes";

export const generateNextCommandMenuComp = (
  settings: Parameters<typeof generateCommandMenuComp>[0]
) => {
  const Comp = generateCommandMenuComp(settings);

  return function CommandMenu({
    commandMenuConfig,
    ...props
  }: Omit<React.ComponentProps<typeof Comp>, "routerPush">) {
    const router = useRouter();
    const { setTheme } = useTheme();

    return (
      <Comp
        routerPush={router.push}
        commandMenuConfig={[
          {
            group: "Theme",
            commands: [
              {
                name: "Change to Light Theme",
                action: () => setTheme("light"),
              },
              {
                name: "Change to Dark Theme",
                action: () => setTheme("dark"),
              },
            ],
          },
          ...commandMenuConfig,
        ]}
        {...props}
      />
    );
  };
};
