import type { Theme } from "@/lib/theme-storage.ts";

const DARK_CLASS = "dark";
const REDUCED_MOTION_QUERY = "(prefers-reduced-motion: reduce)";

export const applyTheme = (theme: Theme) => {
  document.documentElement.classList.toggle(DARK_CLASS, theme === "dark");
};

export const withViewTransition = (update: () => void) => {
  const canTransition =
    "startViewTransition" in document &&
    !matchMedia(REDUCED_MOTION_QUERY).matches;
  if (!canTransition) {
    update();
    return;
  }
  document.startViewTransition(update);
};
