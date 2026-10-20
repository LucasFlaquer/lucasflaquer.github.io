import { createContext } from "react";

import type { Locale } from "@/types/content.ts";

export interface LocaleContextValue {
  locale: Locale;
  setLocale: (locale: Locale) => void;
}

export const LocaleContext = createContext<LocaleContextValue | null>(null);
