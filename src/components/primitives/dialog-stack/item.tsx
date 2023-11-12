"use client";

import { ReactNode } from "react";
import { cn, tw } from "@@/utils/tailwind";
import { dialogContentVariants } from "@@/components/primitives/dialog";
import { Variants, motion } from "framer-motion";
import {
  DialogStackAnimationDirection,
  generateUseDialogStackStore,
} from "./store";
import { Button } from "../button";
import { TbArrowLeft } from "react-icons/tb";

const SLIDE_DISTANCE = 30;

type VariantsProps = {
  direction: DialogStackAnimationDirection;
  isFirstItem: boolean;
};

const variants: Variants = {
  initial: ({ direction, isFirstItem }: VariantsProps) => {
    // Disable enter animation for first item
    // Note that this is not controlled by AnimatePresence's initial prop
    if (direction === "r" && isFirstItem) return {};

    return {
      x: direction === "r" ? SLIDE_DISTANCE : -SLIDE_DISTANCE,
      opacity: 0,
    };
  },
  animate: ({ direction }: VariantsProps) => ({
    x: 0,
    opacity: 1,
    transition: {
      x: { ease: "easeOut", duration: 0.3 },
      opacity: { duration: 0.15 },
    },
  }),
  exit: ({ direction, isFirstItem }: VariantsProps) => {
    // Disable exit animation for first item
    if (direction === "l" && isFirstItem) return {};

    return {
      x: direction === "r" ? -SLIDE_DISTANCE : SLIDE_DISTANCE,
      opacity: 0,
      transition: {
        x: { ease: "easeIn", duration: 0.3 },
        opacity: { duration: 0.8 },
      },
    };
  },
};

interface Props {
  children?: ReactNode;
  position: number;
  className?: string;
}

export type { Props as DialogStackItemProps };

export function generateDialogStackItem(
  useDialogStack: ReturnType<typeof generateUseDialogStackStore>
) {
  function DialogStackItem({ children, className, position }: Props) {
    const { pop, direction } = useDialogStack();
    const isFirstItem = position === 1;

    // FIX: exit animation not playing

    // Framer motion's animation properties conflicts with CSS if applied on the same component
    // hence we are leaving DialogContent alone and applying all its styles in a wrapper div.
    // Plus AnimatePresence can only work with direct descendants
    // https://github.com/framer/motion/issues/387
    return (
      <motion.div
        key={position} // for AnimatePresence to track
        variants={variants}
        initial="initial"
        animate="animate"
        exit="exit"
        custom={{ direction, isFirstItem }}
        className={cn(
          dialogContentVariants({
            position: "none",
            animation: "none",
            layout: "default",
            border: "none",
          }),
          className
        )}
      >
        {!isFirstItem && (
          <Button
            className={tw`
              absolute top-0 left-0
            `}
            styles="ghost"
            onClick={pop}
          >
            <TbArrowLeft className="w-4 h-4" />
            Back
          </Button>
        )}
        {children}
      </motion.div>
    );
  }

  return DialogStackItem;
}
