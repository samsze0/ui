"use client";
import * as React from "react";
import * as LabelPrimitive from "@radix-ui/react-label";
import { Label } from "@@/components/primitives/label";
import { useFormField } from "./use-form-field";

export const FormLabel = React.forwardRef<
  React.ElementRef<typeof LabelPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof LabelPrimitive.Root>
>(({ className, ...props }, ref) => {
  const { error, formItemId } = useFormField();

  return (
    <Label
      ref={ref}
      state={error ? "error" : "idle"}
      className={className}
      htmlFor={formItemId}
      {...props}
    />
  );
});
FormLabel.displayName = "FormLabel";
