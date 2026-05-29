import { motion } from "motion/react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "./ThemeContext";

export function ThemeSwitcher() {
  const { mode, toggleMode } = useTheme();
  const isDark = mode === "dark";

  return (
    <div className="relative">
      <motion.span
        aria-hidden
        className="absolute inset-0 rounded-full pointer-events-none"
        style={{
          boxShadow: "0 0 0 2px var(--color-brand), 0 0 12px 4px var(--color-brand)",
          borderRadius: "9999px",
        }}
        animate={{ opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
      />
      <button
        type="button"
        aria-label="Cambiar modo"
        onClick={toggleMode}
        className="relative flex items-center gap-2 pl-1 pr-3 py-1 rounded-full border border-transparent bg-[var(--color-surface)] hover:bg-[var(--color-surface-soft)] shadow-sm transition-colors cursor-pointer"
      >
        <div className="relative w-9 h-9 flex items-center justify-center flex-shrink-0">
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
        </div>
        <span className="text-xs font-medium text-[var(--color-text-muted)] leading-tight whitespace-nowrap select-none">
          {isDark ? "Modo oscuro" : "Modo claro"}
        </span>
      </button>
    </div>
  );
}
