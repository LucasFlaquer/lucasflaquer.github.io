import type { ReactNode } from "react";

import { useThemeState } from "@/hooks/use-theme-state.ts";
import { ThemeContext } from "@/lib/theme-context.ts";

interface ThemeProviderProps {
  children: ReactNode;
}

const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const { setTheme, theme } = useThemeState();
  return <ThemeContext value={{ setTheme, theme }}>{children}</ThemeContext>;
};

export default ThemeProvider;
