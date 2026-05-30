import { Moon, Sun } from "lucide-react";
import { useTheme } from "./ThemeContext";
import { useLang } from "../i18n/LanguageContext";

/** Botón de tema: solo ícono (sol/luna), redondo y limpio. */
export function ThemeSwitcher() {
  const { toggleMode } = useTheme();
  const { t } = useLang();

  return (
    <button
      type="button"
      aria-label={t.controls.theme}
      onClick={toggleMode}
      className="flex items-center justify-center w-10 h-10 rounded-full border border-[var(--color-surface-border)] bg-[var(--color-surface)] hover:bg-[var(--color-surface-soft)] shadow-sm transition-colors cursor-pointer"
    >
      <div className="relative w-6 h-6">
        <Sun
          className="absolute inset-0 w-6 h-6 text-amber-500"
          style={{ clipPath: "inset(0 50% 0 0)" }}
        />
        <Moon
          className="absolute inset-0 w-6 h-6 text-indigo-500"
          style={{ clipPath: "inset(0 0 0 50%)" }}
        />
        <span className="absolute top-0 bottom-0 left-1/2 w-px bg-[var(--color-surface-border)]" />
      </div>
    </button>
  );
}
