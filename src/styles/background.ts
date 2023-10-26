import { tw } from "@@/utils/tailwind";
import { cva } from "class-variance-authority";

export const backgroundVariants = cva(tw``, {
  variants: {
    variant: {
      app: tw`bg-neutral-50 dark:bg-neutral-950`,
    },
  },
});
