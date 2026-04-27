import { createContext, useContext, useEffect, useMemo, useState } from "react";
import type { ReactNode } from "react";

export type Country = "mexico" | "usa" | "canada";
export type Mode = "light" | "dark";

type ThemeContextValue = {
  country: Country;
  mode: Mode;
  setCountry: (c: Country) => void;
  setMode: (m: Mode) => void;
  toggleMode: () => void;
};

const ThemeContext = createContext<ThemeContextValue | null>(null);

const STORAGE_KEY = "futcollect.theme";

function readStored(): { country: Country; mode: Mode } {
  if (typeof window === "undefined") return { country: "mexico", mode: "light" };
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return { country: "mexico", mode: "light" };
    const parsed = JSON.parse(raw);
    return {
      country: ["mexico", "usa", "canada"].includes(parsed.country) ? parsed.country : "mexico",
      mode: parsed.mode === "dark" ? "dark" : "light",
    };
  } catch {
    return { country: "mexico", mode: "light" };
  }
}

export function ThemeProvider({ children }: { children: ReactNode }) {
  const initial = readStored();
  const [country, setCountry] = useState<Country>(initial.country);
  const [mode, setMode] = useState<Mode>(initial.mode);

  useEffect(() => {
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify({ country, mode }));
    } catch {
      // ignore
    }
  }, [country, mode]);

  const value = useMemo<ThemeContextValue>(
    () => ({
      country,
      mode,
      setCountry,
      setMode,
      toggleMode: () => setMode((m) => (m === "light" ? "dark" : "light")),
    }),
    [country, mode]
  );

  return (
    <ThemeContext.Provider value={value}>
      <div data-country={country} className={`theme-root ${mode === "dark" ? "dark" : ""} min-h-screen`}>
        {children}
      </div>
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error("useTheme must be used inside ThemeProvider");
  return ctx;
}
