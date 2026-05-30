import { useTheme } from "./ThemeContext";
import type { Country } from "./ThemeContext";
import { useLang } from "../i18n/LanguageContext";

const COUNTRIES: { id: Country; labelKey: "mexico" | "usa" | "canada"; flag: string }[] = [
  { id: "mexico", labelKey: "mexico", flag: "🇲🇽" },
  { id: "usa", labelKey: "usa", flag: "🇺🇸" },
  { id: "canada", labelKey: "canada", flag: "🇨🇦" },
];

export function CountrySelector() {
  const { country, setCountry } = useTheme();
  const { t } = useLang();

  return (
    <div className="flex items-center justify-center gap-3 flex-wrap">
      {COUNTRIES.map((c) => (
        <button
          key={c.id}
          type="button"
          onClick={() => setCountry(c.id)}
          className={`flex items-center gap-2 px-5 py-2.5 rounded-full border text-sm font-semibold transition-colors ${
            country === c.id
              ? "border-brand bg-brand-soft text-brand-dark"
              : "border-[var(--color-surface-border)] text-[var(--color-text-muted)] hover:text-[var(--color-text-strong)] hover:bg-[var(--color-surface-soft)]"
          }`}
        >
          <span className="text-base leading-none">{c.flag}</span>
          <span>{t.country[c.labelKey]}</span>
        </button>
      ))}
    </div>
  );
}
