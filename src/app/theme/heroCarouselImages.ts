import type { Mode } from "./ThemeContext";

// ── MX ────────────────────────────────────────────────────────────────────────
import mxHome1      from "../../assets/MX/1-MX-HOME.png";
import mxHome2      from "../../assets/MX/2-MX-HOME.png";
import mxAlbum1     from "../../assets/MX/1-MX-ALBUM.png";
import mxAlbum2     from "../../assets/MX/2-MX-ALBUM.png";
import mxQr1        from "../../assets/MX/1-MX-QR.png";
import mxQr2        from "../../assets/MX/2-MX-QR.png";
import mxStats1     from "../../assets/MX/1-MX-STATS.png";
import mxStats2     from "../../assets/MX/2-MX-STATS.png";
import mxCalendario1 from "../../assets/MX/1-MX-CALENDARIO.png";
import mxCalendario2 from "../../assets/MX/2-MX-CALENDARIO.png";
import mxIntercambio1 from "../../assets/MX/1-MX-INTERCAMBIO.png";
import mxIntercambio2 from "../../assets/MX/2-MX-INTERCAMBIO.png";

// ── CND ───────────────────────────────────────────────────────────────────────
import cndHome1      from "../../assets/CND/1-CND-HOME.png";
import cndHome2      from "../../assets/CND/2-CND-HOME.png";
import cndAlbum1     from "../../assets/CND/1-CND-ALBUM.png";
import cndAlbum2     from "../../assets/CND/2-CND-ALBUM.png";
import cndQr1        from "../../assets/CND/1-CND-QR.png";
import cndQr2        from "../../assets/CND/2-CND-QR.png";
import cndStats1     from "../../assets/CND/1-CND-STATS.png";
import cndStats2     from "../../assets/CND/2-CND-STATS.png";
import cndCalendario1 from "../../assets/CND/1-CND-CALENDARIO.png";
import cndCalendario2 from "../../assets/CND/2-CND-CALENDARIO.png";
import cndIntercambio1 from "../../assets/CND/1-CND-INTERCAMBIO.png";
import cndIntercambio2 from "../../assets/CND/2-CND-INTERCAMBIO.png";

// ── USA ───────────────────────────────────────────────────────────────────────
import usaHome1      from "../../assets/USA/1-USA-HOME.png";
import usaHome2      from "../../assets/USA/2-USA-HOME.png";
import usaAlbum1     from "../../assets/USA/1-USA-ALBUM.png";
import usaAlbum2     from "../../assets/USA/2-USA-ALBUM.png";
import usaQr1        from "../../assets/USA/1-USA-QR.png";
import usaQr2        from "../../assets/USA/2-USA-QR.png";
import usaStats1     from "../../assets/USA/1-USA-STATS.png";
import usaStats2     from "../../assets/USA/2-USA-STATS.png";
import usaCalendario1 from "../../assets/USA/1-USA-CALENDARIO.png";
import usaCalendario2 from "../../assets/USA/2-USA-CALENDARIO.png";
import usaIntercambio1 from "../../assets/USA/1-USA-INTERCAMBIO.png";
import usaIntercambio2 from "../../assets/USA/2-USA-INTERCAMBIO.png";

export type CarouselImage = { key: string; src: string; alt: string };

// Pool mezclado: nunca 2 del mismo tipo ni del mismo país seguidos
const POOL: Array<{ key: string; light: string; dark: string; alt: string }> = [
  { key: "mx-home",         light: mxHome1,        dark: mxHome2,        alt: "Pantalla principal MX" },
  { key: "cnd-qr",          light: cndQr1,         dark: cndQr2,         alt: "Intercambio QR CND" },
  { key: "usa-stats",       light: usaStats1,      dark: usaStats2,      alt: "Estadísticas USA" },
  { key: "mx-album",        light: mxAlbum1,       dark: mxAlbum2,       alt: "Vista del álbum MX" },
  { key: "cnd-calendario",  light: cndCalendario1, dark: cndCalendario2, alt: "Calendario de partidos CND" },
  { key: "usa-intercambio", light: usaIntercambio1,dark: usaIntercambio2,alt: "Pantalla de intercambio USA" },
  { key: "mx-stats",        light: mxStats1,       dark: mxStats2,       alt: "Estadísticas MX" },
  { key: "cnd-home",        light: cndHome1,       dark: cndHome2,       alt: "Pantalla principal CND" },
  { key: "usa-qr",          light: usaQr1,         dark: usaQr2,         alt: "Intercambio QR USA" },
  { key: "mx-intercambio",  light: mxIntercambio1, dark: mxIntercambio2, alt: "Pantalla de intercambio MX" },
  { key: "cnd-album",       light: cndAlbum1,      dark: cndAlbum2,      alt: "Vista del álbum CND" },
  { key: "usa-home",        light: usaHome1,       dark: usaHome2,       alt: "Pantalla principal USA" },
  { key: "mx-calendario",   light: mxCalendario1,  dark: mxCalendario2,  alt: "Calendario de partidos MX" },
  { key: "cnd-stats",       light: cndStats1,      dark: cndStats2,      alt: "Estadísticas CND" },
  { key: "usa-album",       light: usaAlbum1,      dark: usaAlbum2,      alt: "Vista del álbum USA" },
  { key: "mx-qr",           light: mxQr1,          dark: mxQr2,          alt: "Intercambio QR MX" },
  { key: "cnd-intercambio", light: cndIntercambio1,dark: cndIntercambio2,alt: "Pantalla de intercambio CND" },
  { key: "usa-calendario",  light: usaCalendario1, dark: usaCalendario2, alt: "Calendario de partidos USA" },
];

export const HERO_CAROUSEL_COUNT = POOL.length;

export function getHeroCarouselImages(mode: Mode): CarouselImage[] {
  return POOL.map(({ key, light, dark, alt }) => ({
    key,
    src: mode === "dark" ? dark : light,
    alt,
  }));
}
