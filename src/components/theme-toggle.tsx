import { MoonIcon, SunIcon } from "@radix-ui/react-icons";
import { Button } from "@@/components/primitives/button";
import { tw } from "@@/utils/tailwind";

export function ThemeToggle({ toggleTheme }: { toggleTheme: () => void }) {
  return (
    <Button
      styles="ghost"
      size="icon"
      onClick={toggleTheme}
      tooltipChildren={"Change theme"}
    >
      <SunIcon
        className={tw`
          h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0
        `}
      />
      <MoonIcon
        className={tw`
          h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100
        `}
      />
    </Button>
  );
}
