import { createContext } from "react";

import type { Theme } from "@/lib/theme-storage.ts";

export interface ThemeContextValue {
  setTheme: (theme: Theme) => void;
  theme: Theme;
}

export const ThemeContext = createContext<ThemeContextValue | null>(null);
