import { ReactNode } from "react";

export const SettingsSection = ({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) => {
  return (
    <section className="flex flex-col gap-3 flex-1">
      <h3 className="text-sm font-semibold dark:text-neutral-400">{title}</h3>
      {children}
    </section>
  );
};
