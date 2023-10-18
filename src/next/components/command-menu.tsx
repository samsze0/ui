"use client";

import { CommandMenu } from "@@/components/command-menu";
import { useRouter } from "next/router";
import { useTheme } from "next-themes";

export const NextCommandMenu = ({
  commandMenuConfig,
  ...props
}: Omit<React.ComponentProps<typeof CommandMenu>, "routerPush">) => {
  const router = useRouter();
  const { setTheme } = useTheme();

  return (
    <CommandMenu
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
