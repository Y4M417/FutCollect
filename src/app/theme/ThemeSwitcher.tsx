import { AnimatePresence, motion } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { Moon, Sun, Check } from "lucide-react";
import { useTheme } from "./ThemeContext";
import type { Country } from "./ThemeContext";

const COUNTRIES: { id: Country; label: string; flag: string; swatch: string }[] = [
  { id: "mexico", label: "México", flag: "🇲🇽", swatch: "#007736" },
  { id: "usa", label: "USA", flag: "🇺🇸", swatch: "#1F2A7A" },
  { id: "canada", label: "Canadá", flag: "🇨🇦", swatch: "#CE1126" },
];

export function ThemeSwitcher() {
  const { country, mode, setCountry, setMode } = useTheme();
  const [open, setOpen] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    function onClickOutside(e: MouseEvent) {
      if (!wrapperRef.current?.contains(e.target as Node)) setOpen(false);
    }
    function onEsc(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    document.addEventListener("mousedown", onClickOutside);
    document.addEventListener("keydown", onEsc);
    return () => {
      document.removeEventListener("mousedown", onClickOutside);
      document.removeEventListener("keydown", onEsc);
    };
  }, [open]);

  return (
    <div ref={wrapperRef} className="relative">
      <button
        type="button"
        aria-label="Cambiar tema"
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
        className="relative w-11 h-11 rounded-full border border-[var(--color-surface-border)] bg-[var(--color-surface)] hover:bg-[var(--color-surface-soft)] flex items-center justify-center overflow-hidden shadow-sm"
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

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.96 }}
            transition={{ duration: 0.18, ease: "easeOut" }}
            className="absolute right-0 mt-3 w-72 rounded-2xl border border-[var(--color-surface-border)] bg-[var(--color-surface)] shadow-xl p-4 z-50"
          >
            <p className="text-xs font-semibold uppercase tracking-wider text-[var(--color-text-muted)] mb-2">Modo</p>
            <div className="grid grid-cols-2 gap-2 mb-4">
              <button
                type="button"
                onClick={() => setMode("light")}
                className={`flex items-center justify-center gap-2 py-2.5 rounded-xl border text-sm font-semibold ${
                  mode === "light"
                    ? "border-brand bg-brand-soft text-brand-dark"
                    : "border-[var(--color-surface-border)] text-[var(--color-text-muted)] hover:text-[var(--color-text-strong)]"
                }`}
              >
                <Sun className="w-4 h-4" /> Claro
              </button>
              <button
                type="button"
                onClick={() => setMode("dark")}
                className={`flex items-center justify-center gap-2 py-2.5 rounded-xl border text-sm font-semibold ${
                  mode === "dark"
                    ? "border-brand bg-brand-soft text-brand-dark"
                    : "border-[var(--color-surface-border)] text-[var(--color-text-muted)] hover:text-[var(--color-text-strong)]"
                }`}
              >
                <Moon className="w-4 h-4" /> Oscuro
              </button>
            </div>

            <p className="text-xs font-semibold uppercase tracking-wider text-[var(--color-text-muted)] mb-2">País</p>
            <div className="flex flex-col gap-1.5">
              {COUNTRIES.map((c) => (
                <button
                  key={c.id}
                  type="button"
                  onClick={() => setCountry(c.id)}
                  className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-left text-sm font-medium transition-colors ${
                    country === c.id
                      ? "bg-brand-soft text-brand-dark"
                      : "hover:bg-[var(--color-surface-soft)] text-[var(--color-text-strong)]"
                  }`}
                >
                  <span
                    className="w-5 h-5 rounded-full border border-black/10 shrink-0"
                    style={{ backgroundColor: c.swatch }}
                  />
                  <span className="text-base leading-none">{c.flag}</span>
                  <span className="flex-1">{c.label}</span>
                  {country === c.id && <Check className="w-4 h-4 text-brand" />}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
