"use client";

import { ReactNode } from "react";
import { create } from "zustand";
import { produce } from "immer";
import React from "react";
import { DialogStackItemProps } from "./item";

type Direction = "l" | "r";

export { type Direction as DialogStackAnimationDirection };

export function generateUseDialogStackStore() {
  const useDialogStack = create<{
    stack: ReactNode[];
    // Internal stack that keeps instances of DialogStackItem alive for stack history
    _stack: ReactNode[];
    push: (dialog: React.FC<DialogStackItemProps>) => void;
    pop: () => void;
    direction: Direction;
    activeItem: ReactNode | null;
  }>((set, get) => ({
    stack: [],
    _stack: [],
    push: (dialog) => {
      const element = React.createElement(dialog, {
        position: get().stack.length + 1,
      });

      const newStack = produce(get().stack, ($stack) => {
        $stack.push(element);
      });

      set({
        stack: newStack,
        // Sync internal stack with actual stack upon new item insertion
        _stack: newStack,
        direction: "r",
        activeItem: element,
      });
    },
    pop: () => {
      const newStack = produce(get().stack, ($stack) => {
        $stack.pop();
      });

      set({
        stack: newStack,
        direction: "l",
        activeItem: newStack[newStack.length - 1] ?? null,
      });
    },
    direction: "r" as const,
    activeItem: null,
  }));

  return useDialogStack;
}
