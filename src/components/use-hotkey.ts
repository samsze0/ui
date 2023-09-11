"use client";

import { useEffect, useRef } from "react";

export const useHotkey = (hotkey: string, action: () => void) => {
  const hotkeyRef = useRef(hotkey);

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === hotkeyRef.current && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        action();
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, [action]);

  useEffect(() => {
    hotkeyRef.current = hotkey;
  }, [hotkey]);
};
