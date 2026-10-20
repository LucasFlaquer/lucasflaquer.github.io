import { MoonIcon, SunIcon } from "@phosphor-icons/react";

import {
  SWITCH_GROUP_CLASS,
  switchOptionClass,
} from "@/components/layout/switch-styles.ts";
import { useLocale } from "@/hooks/use-locale.ts";
import { useTheme } from "@/hooks/use-theme.ts";
import type { Theme } from "@/lib/theme-storage.ts";

const THEMES: { icon: typeof SunIcon; theme: Theme }[] = [
  { icon: SunIcon, theme: "light" },
  { icon: MoonIcon, theme: "dark" },
];

const ThemeSwitch = () => {
  const { ui } = useLocale();
  const { setTheme, theme } = useTheme();
  return (
    <fieldset className={SWITCH_GROUP_CLASS}>
      <legend className="sr-only">{ui.theme.label}</legend>
      {THEMES.map(({ icon: Icon, theme: option }) => (
        <button
          aria-label={ui.theme[option]}
          aria-pressed={theme === option}
          className={switchOptionClass(theme === option)}
          key={option}
          onClick={() => setTheme(option)}
          type="button"
        >
          <Icon aria-hidden="true" className="size-4" weight="bold" />
        </button>
      ))}
    </fieldset>
  );
};

export default ThemeSwitch;
