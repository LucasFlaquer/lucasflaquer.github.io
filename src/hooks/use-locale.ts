import { use } from "react";

import { en } from "@/data/ui/en.ts";
import { pt } from "@/data/ui/pt.ts";
import { LocaleContext } from "@/lib/locale-context.ts";
import type { Localized } from "@/types/content.ts";

const dictionaries = { en, pt };

export const useLocale = () => {
  const context = use(LocaleContext);
  if (!context) {
    throw new Error("useLocale must be used inside LocaleProvider");
  }
  const { locale, setLocale } = context;
  const pick = <T>(value: Localized<T>): T => value[locale];
  return { locale, pick, setLocale, ui: dictionaries[locale] };
};
