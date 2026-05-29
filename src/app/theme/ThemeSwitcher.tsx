import { motion } from "motion/react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "./ThemeContext";

export function ThemeSwitcher() {
  const { toggleMode } = useTheme();

  return (
    <div className="relative">
      <motion.span
        aria-hidden
        className="absolute inset-0 rounded-full pointer-events-none"
        style={{
          backgroundColor: "var(--color-brand)",
          filter: "blur(10px)",
        }}
        animate={{ scale: [1, 1.25, 1], opacity: [0.45, 0.75, 0.45] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
      />
      <button
        type="button"
        aria-label="Cambiar modo"
        onClick={toggleMode}
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
    </div>
  );
}
