"use client";
import * as React from "react";
import { cn, tw } from "@@/utils/tailwind";
import { useFormField } from "./use-form-field";

export const FormDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => {
  const { formDescriptionId } = useFormField();

  return (
    <p
      ref={ref}
      id={formDescriptionId}
      className={cn(
        tw`
          text-xs
          dark:text-neutral-400
        `,
        className
      )}
      {...props}
    />
  );
});
FormDescription.displayName = "FormDescription";
