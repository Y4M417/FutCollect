import type { Country, Mode } from "./ThemeContext";

// Reemplaza cada ruta por la imagen real del Hero correspondiente.
// Son 6 combinaciones (3 países × 2 modos).
import heroMexicoLight from "../../assets/placeholder.svg";
import heroMexicoDark from "../../assets/placeholder.svg";
import heroUsaLight from "../../assets/placeholder.svg";
import heroUsaDark from "../../assets/placeholder.svg";
import heroCanadaLight from "../../assets/placeholder.svg";
import heroCanadaDark from "../../assets/placeholder.svg";

type ThemeKey = `${Country}-${Mode}`;

const HERO_IMAGES: Record<ThemeKey, string> = {
  "mexico-light": heroMexicoLight,
  "mexico-dark": heroMexicoDark,
  "usa-light": heroUsaLight,
  "usa-dark": heroUsaDark,
  "canada-light": heroCanadaLight,
  "canada-dark": heroCanadaDark,
};

export function getHeroImage(country: Country, mode: Mode): string {
  return HERO_IMAGES[`${country}-${mode}`];
}

export function getHeroImageKey(country: Country, mode: Mode): ThemeKey {
  return `${country}-${mode}`;
}
