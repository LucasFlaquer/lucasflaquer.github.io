import type { Locale } from "@/types/content.ts";

const STORAGE_KEY = "locale";
const DEFAULT_LOCALE: Locale = "en";

const isLocale = (value: string | null): value is Locale =>
  value === "en" || value === "pt";

const readStoredLocale = (): string | null => {
  try {
    return localStorage.getItem(STORAGE_KEY);
  } catch {
    return null;
  }
};

export const readInitialLocale = (): Locale => {
  const stored = readStoredLocale();
  return isLocale(stored) ? stored : DEFAULT_LOCALE;
};

export const storeLocale = (locale: Locale): boolean => {
  try {
    localStorage.setItem(STORAGE_KEY, locale);
    return true;
  } catch {
    return false;
  }
};

export const htmlLang = (locale: Locale): string =>
  locale === "pt" ? "pt-BR" : "en";
