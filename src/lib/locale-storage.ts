import type { Locale } from "@/types/content.ts";

const STORAGE_KEY = "locale";
const PORTUGUESE_PREFIX = "pt";

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
  if (isLocale(stored)) {
    return stored;
  }
  return navigator.language.startsWith(PORTUGUESE_PREFIX) ? "pt" : "en";
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
