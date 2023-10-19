"use client";

import { Toast, ToastProvider } from "@@/components/primitives/toast";
import { ToastViewport } from "./viewport";
import { useToast } from "@@/components/primitives/toast/use-toast";
import * as ToastPrimitives from "@radix-ui/react-toast";
import { cn } from "@@/utils/tailwind";
import { Cross2Icon } from "@radix-ui/react-icons";

export function Toaster() {
  const { toasts } = useToast();

  return (
    <ToastProvider>
      {toasts.map(({ id, title, description, action, ...props }) => (
        <Toast key={id} {...props}>
          <div className="grid gap-1">
            <ToastPrimitives.Title className={cn("text-sm font-semibold")}>
              {title}
            </ToastPrimitives.Title>
            {description ? (
              <ToastPrimitives.Description className={cn("text-sm opacity-90")}>
                {description}
              </ToastPrimitives.Description>
            ) : null}
          </div>
          {action}
          <ToastPrimitives.Close
            className={cn(
              "absolute right-1 top-1",
              "rounded-md",
              "p-1",
              "transition-opacity opacity-0 focus:opacity-100 group-hover:opacity-100",
              // Foreground color
              "text-foreground/50 hover:text-foreground",
              "group-[.destructive]:text-red-300 group-[.destructive]:hover:text-red-50",
              // Ring/outline
              "focus:outline-none focus:ring-1",
              "group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600"
            )}
            toast-close=""
          >
            <Cross2Icon className="h-4 w-4" />
          </ToastPrimitives.Close>
        </Toast>
      ))}
      <ToastViewport />
    </ToastProvider>
  );
}
