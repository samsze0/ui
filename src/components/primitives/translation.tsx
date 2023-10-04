"use client";

import { cn } from "@@/utils/tailwind";
import { useTranslation } from "react-i18next";

export function Translation<T extends React.ElementType = "span">({
  children,
  className,
  as: _as,
  asChild = false,
  ...props
}: {
  children?: string;
  className?: string;
  as?: T;
  asChild?: boolean;
} & React.ComponentProps<T>) {
  const { t } = { t: (t: string) => t };
  // const { t } = useTranslation();

  if (asChild) return children ? t(children) : null;

  const As = _as ?? "span";

  const translatedProps = {} as React.ComponentProps<T>;
  if (Object.hasOwn(props, "placeholder"))
    translatedProps["placeholder"] = t(props["placeholder"]);

  return (
    <As className={cn("", className)} {...props} {...translatedProps}>
      {children ? t(children) : null}
    </As>
  );
}
