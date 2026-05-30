import { Languages } from "lucide-react";
import { useLang } from "../i18n/LanguageContext";

/** Botón de idioma: ícono + código del idioma activo (ES/EN). Alterna ES↔EN. */
export function LanguageSwitcher() {
  const { lang, toggle, t } = useLang();

  return (
    <button
      type="button"
      aria-label={t.controls.language}
      onClick={toggle}
      className="flex items-center gap-1.5 h-10 px-3 rounded-full border border-[var(--color-surface-border)] bg-[var(--color-surface)] hover:bg-[var(--color-surface-soft)] shadow-sm transition-colors cursor-pointer"
    >
      <Languages className="w-[18px] h-[18px] text-[var(--color-text-muted)]" />
      <span className="text-xs font-bold tracking-wide text-[var(--color-text-strong)] select-none">
        {lang.toUpperCase()}
      </span>
    </button>
  );
}
