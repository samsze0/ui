import { DateTime } from "luxon";

export const getReadableDate = (month: DateTime, day?: string) => {
  const date = `${month.year}-${String(month.month).padStart(2, "0")}`;

  if (day) {
    return `${date}-${day}`;
  } else {
    return date;
  }
};
