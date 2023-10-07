"use client";

import { useEffect, useRef, useState } from "react";

export function useCronState<T>(initialValue: T): [T, (value: T) => void, T] {
  const [value, setValue] = useState<T>(initialValue);
  const [cronValue, setCronValue] = useState<T>(initialValue);

  const cronTimerHandle = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (cronTimerHandle.current) clearTimeout(cronTimerHandle.current);

    cronTimerHandle.current = setTimeout(() => {
      setCronValue(value);
    }, 500);
  }, [value]);

  return [value, setValue, cronValue];
}
