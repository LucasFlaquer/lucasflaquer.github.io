import { useEffect, useState } from "react";
import type { ReactNode } from "react";

import { LocaleContext } from "@/lib/locale-context.ts";
import {
  htmlLang,
  readInitialLocale,
  storeLocale,
} from "@/lib/locale-storage.ts";
import type { Locale } from "@/types/content.ts";

interface LocaleProviderProps {
  children: ReactNode;
}

const LocaleProvider = ({ children }: LocaleProviderProps) => {
  const [locale, setLocale] = useState<Locale>(readInitialLocale);
  useEffect(() => {
    document.documentElement.lang = htmlLang(locale);
  }, [locale]);
  const changeLocale = (next: Locale) => {
    storeLocale(next);
    setLocale(next);
  };
  return (
    <LocaleContext value={{ locale, setLocale: changeLocale }}>
      {children}
    </LocaleContext>
  );
};

export default LocaleProvider;
