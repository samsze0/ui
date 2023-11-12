"use client";
import * as React from "react";
import { CheckIcon } from "@radix-ui/react-icons";
import * as SelectPrimitive from "@radix-ui/react-select";
import { cn } from "@@/utils/tailwind";
import { MenuItemIndicator } from "../menu/item";
import { menuItemVariants } from "../menu/item";

interface Props
  extends React.ComponentPropsWithoutRef<typeof SelectPrimitive.Item> {}

export const SelectItem = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Item>,
  Props
>(({ className, children, ...props }, ref) => (
  <SelectPrimitive.Item
    ref={ref}
    className={cn(
      menuItemVariants({
        disabledStyles: true,
        focusStyles: true,
        inset: "right",
      }),
      className
    )}
    {...props}
  >
    <MenuItemIndicator inset="right" icon={<CheckIcon className="h-4 w-4" />} />
    <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
  </SelectPrimitive.Item>
));
SelectItem.displayName = SelectPrimitive.Item.displayName;
