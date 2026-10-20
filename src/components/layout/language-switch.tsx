import { useLocale } from "@/hooks/use-locale.ts";
import { cn } from "@/lib/utils";
import type { Locale } from "@/types/content.ts";

const LOCALES: { label: string; locale: Locale; name: string }[] = [
  { label: "EN", locale: "en", name: "English" },
  { label: "PT", locale: "pt", name: "Português" },
];

const LanguageSwitch = () => {
  const { locale, setLocale, ui } = useLocale();
  return (
    <fieldset className="border-sign-muted/60 flex border-2">
      <legend className="sr-only">{ui.language.label}</legend>
      {LOCALES.map((option) => (
        <button
          aria-label={option.name}
          aria-pressed={locale === option.locale}
          className={cn(
            "h-8 px-2.5 text-xs font-bold transition-colors",
            locale === option.locale
              ? "bg-sign-foreground text-sign"
              : "text-sign-muted hover:text-sign-foreground"
          )}
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
