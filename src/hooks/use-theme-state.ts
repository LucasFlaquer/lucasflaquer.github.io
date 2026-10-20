import { useEffect, useLayoutEffect, useState } from "react";
import { flushSync } from "react-dom";

import { applyTheme, withViewTransition } from "@/lib/theme-document.ts";
import {
  readInitialTheme,
  readStoredTheme,
  storeTheme,
  watchSystemTheme,
} from "@/lib/theme-storage.ts";
import type { Theme } from "@/lib/theme-storage.ts";

export const useThemeState = () => {
  const [theme, setTheme] = useState<Theme>(readInitialTheme);
  useLayoutEffect(() => {
    applyTheme(theme);
  }, [theme]);
  useEffect(
    () =>
      watchSystemTheme((next) => {
        if (readStoredTheme()) {
          return;
        }
        withViewTransition(() => flushSync(() => setTheme(next)));
      }),
    []
  );
  const changeTheme = (next: Theme) => {
    storeTheme(next);
    withViewTransition(() => flushSync(() => setTheme(next)));
  };
  return { setTheme: changeTheme, theme };
};
