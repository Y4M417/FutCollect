import { createContext, useContext, useEffect, useMemo, useState } from "react";
import type { ReactNode } from "react";
import { TRANSLATIONS } from "./translations";
import type { Copy } from "./translations";

export type Lang = "es" | "en";

const STORAGE_KEY = "futcollect.lang";

/** Detecta el idioma del navegador: español si alguno empieza con "es", si no inglés (default). */
function detectLang(): Lang {
  if (typeof navigator === "undefined") return "en";
  const candidates = navigator.languages?.length ? navigator.languages : [navigator.language];
  return candidates.some((l) => l?.toLowerCase().startsWith("es")) ? "es" : "en";
}

/** Preferencia guardada (manda sobre la detección); si no hay, detecta el navegador. */
function readInitial(): Lang {
  if (typeof window === "undefined") return "en";
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (raw === "es" || raw === "en") return raw;
  } catch {}
  return detectLang();
}

type LanguageContextValue = {
  lang: Lang;
  t: Copy;
  setLang: (l: Lang) => void;
  toggle: () => void;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>(readInitial);

  useEffect(() => {
    try {
      window.localStorage.setItem(STORAGE_KEY, lang);
    } catch {}
    if (typeof document !== "undefined") {
      document.documentElement.lang = lang;
    }
  }, [lang]);

  const value = useMemo<LanguageContextValue>(
    () => ({
      lang,
      t: TRANSLATIONS[lang],
      setLang,
      toggle: () => setLang((l) => (l === "es" ? "en" : "es")),
    }),
    [lang]
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLang() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLang must be used inside LanguageProvider");
  return ctx;
}
