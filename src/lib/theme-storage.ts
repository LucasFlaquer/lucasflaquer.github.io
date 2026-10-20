export type Theme = "dark" | "light";

const STORAGE_KEY = "theme";
const DARK_SCHEME_QUERY = "(prefers-color-scheme: dark)";

const isTheme = (value: string | null): value is Theme =>
  value === "dark" || value === "light";

export const readStoredTheme = (): Theme | null => {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    return isTheme(stored) ? stored : null;
  } catch {
    return null;
  }
};

const systemTheme = (): Theme =>
  matchMedia(DARK_SCHEME_QUERY).matches ? "dark" : "light";

export const readInitialTheme = (): Theme => readStoredTheme() ?? systemTheme();

export const storeTheme = (theme: Theme): boolean => {
  try {
    localStorage.setItem(STORAGE_KEY, theme);
    return true;
  } catch {
    return false;
  }
};

export const watchSystemTheme = (onChange: (theme: Theme) => void) => {
  const query = matchMedia(DARK_SCHEME_QUERY);
  const handleChange = () => onChange(systemTheme());
  query.addEventListener("change", handleChange);
  return () => query.removeEventListener("change", handleChange);
};
