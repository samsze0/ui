import { cn } from "@@/utils/tailwind";

function Keybind({
  hotkey,
  className,
}: {
  hotkey: string;
  className?: string;
}) {
  return (
    <kbd
      className={cn(
        "font-mono text-[10px] font-medium",
        "border bg-muted rounded px-1.5 h-5",
        "flex items-center gap-1",
        "pointer-events-none select-none",
        className
      )}
    >
      <span className="text-xs">⌘</span>
      {hotkey?.toUpperCase()}
    </kbd>
  );
}

export { Keybind };
