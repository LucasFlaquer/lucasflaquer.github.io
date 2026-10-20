import {
  SWITCH_GROUP_CLASS,
  switchOptionClass,
} from "@/components/layout/switch-styles.ts";
import { useLocale } from "@/hooks/use-locale.ts";
import type { Locale } from "@/types/content.ts";

const LOCALES: { label: string; locale: Locale; name: string }[] = [
  { label: "EN", locale: "en", name: "English" },
  { label: "PT", locale: "pt", name: "Português" },
];

const LanguageSwitch = () => {
  const { locale, setLocale, ui } = useLocale();
  return (
    <fieldset className={SWITCH_GROUP_CLASS}>
      <legend className="sr-only">{ui.language.label}</legend>
      {LOCALES.map((option) => (
        <button
          aria-label={option.name}
          aria-pressed={locale === option.locale}
          className={switchOptionClass(locale === option.locale)}
          key={option.locale}
          lang={option.locale === "pt" ? "pt-BR" : "en"}
          onClick={() => setLocale(option.locale)}
          type="button"
        >
          {option.label}
        </button>
      ))}
    </fieldset>
  );
};

export default LanguageSwitch;
