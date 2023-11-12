"use client";

import * as React from "react";
import { RxChevronLeft, RxChevronRight } from "react-icons/rx";
import { DayPicker } from "react-day-picker";

import { cn, tw } from "@@/utils/tailwind";
import { buttonVariants } from "@@/components/primitives/button";

export type CalendarProps = React.ComponentProps<typeof DayPicker>;

function Calendar({
  className,
  classNames,
  showOutsideDays = true,
  ...props
}: CalendarProps) {
  return (
    <DayPicker
      showOutsideDays={showOutsideDays}
      className={cn("p-3", className)}
      classNames={{
        months: tw`
          flex
          flex-col gap-y-4 gap-x-0
          sm:flex-row sm:gap-x-4 sm:gap-y-0
        `,
        month: tw`
          space-y-4
        `,
        caption: tw`
          relative
          pt-1
          flex justify-center items-center
        `,
        caption_label: tw`
          text-sm font-medium
        `,
        nav: tw`
          flex items-center gap-x-1
        `,
        nav_button: cn(
          buttonVariants({ styles: "outline", size: "icon-xs" }),
          tw`
            bg-transparent
            opacity-50 hover:opacity-100
          `
        ),
        nav_button_previous: tw`
          absolute left-1
        `,
        nav_button_next: tw`
          absolute right-1
        `,
        table: tw`
          w-full border-collapse space-y-1
        `,
        head_row: tw`
          flex
        `,
        head_cell: tw`
          rounded-md
          w-8
          font-normal text-xs
          dark:text-neutral-400
        `,
        row: tw`
          w-full mt-2
          flex
        `,
        cell: tw`
          relative
          focus-within:relative focus-within:z-20
          p-0
          text-center text-sm
          first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md
          dark:[&:has([aria-selected])]:bg-neutral-800`,
        day: cn(
          buttonVariants({ styles: "ghost", size: "icon-sm" }),
          tw`
            font-normal
            aria-selected:opacity-100
          `
        ),
        day_selected: tw`
          dark:text-neutral-900 dark:hover:text-neutral-900 dark:focus:text-neutral-900
          dark:bg-primary-300 dark:hover:bg-primary-300 dark:focus:bg-primary-300
        `,
        day_today: tw`
          dark:bg-neutral-800 dark:text-neutral-50
        `,
        day_outside: tw`
          dark:text-neutral-400
          opacity-50
        `,
        day_disabled: tw`
        dark:text-neutral-400
          opacity-50
        `,
        day_range_middle: tw`
          dark:aria-selected:text-neutral-50
          dark:aria-selected:bg-neutral-800
        `,
        day_hidden: tw`
          invisible
        `,
        ...classNames,
      }}
      components={{
        IconLeft: ({ ...props }) => <RxChevronLeft className="h-4 w-4" />,
        IconRight: ({ ...props }) => <RxChevronRight className="h-4 w-4" />,
      }}
      {...props}
    />
  );
}
Calendar.displayName = "Calendar";

export { Calendar };
