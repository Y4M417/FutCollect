import type { Country, Mode } from "./ThemeContext";

import heroMexicoLight from "../../assets/MX/1-MX-HOME.png";
import heroMexicoDark  from "../../assets/MX/2-MX-HOME.png";
import heroUsaLight    from "../../assets/USA/1-USA-HOME.png";
import heroUsaDark     from "../../assets/USA/2-USA-HOME.png";
import heroCanadaLight from "../../assets/CND/1-CND-HOME.png";
import heroCanadaDark  from "../../assets/CND/2-CND-HOME.png";

type ThemeKey = `${Country}-${Mode}`;

const HERO_IMAGES: Record<ThemeKey, string> = {
  "mexico-light":  heroMexicoLight,
  "mexico-dark":   heroMexicoDark,
  "usa-light":     heroUsaLight,
  "usa-dark":      heroUsaDark,
  "canada-light":  heroCanadaLight,
  "canada-dark":   heroCanadaDark,
};

export function getHeroImage(country: Country, mode: Mode): string {
  return HERO_IMAGES[`${country}-${mode}`];
}

export function getHeroImageKey(country: Country, mode: Mode): ThemeKey {
  return `${country}-${mode}`;
}
