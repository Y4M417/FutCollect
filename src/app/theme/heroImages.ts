import type { Country, Mode } from "./ThemeContext";

import heroMexicoLight from "../../assets/mx-light-home.png";
import heroMexicoDark from "../../assets/mx-dark-home.png";
import heroUsaLight from "../../assets/usa-light-home.png";
import heroUsaDark from "../../assets/usa-dark-home.png";
import heroCanadaLight from "../../assets/cnd-light-home.png";
import heroCanadaDark from "../../assets/cnd-dark-home.png";

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
