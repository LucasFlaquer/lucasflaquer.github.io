import { cn } from "@/lib/utils";

export const SWITCH_GROUP_CLASS = "border-sign-muted/60 flex border-2";

export const switchOptionClass = (isSelected: boolean) =>
  cn(
    "grid h-8 min-w-8 place-items-center px-2.5 text-xs font-bold transition-colors",
    isSelected
      ? "bg-sign-foreground text-sign"
      : "text-sign-muted hover:text-sign-foreground"
  );
