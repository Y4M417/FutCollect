import type { Mode } from "./ThemeContext";

import mxHomeLight from "../../assets/mx-light-home.png";
import mxHomeDark from "../../assets/mx-dark-home.png";
import usaAlbumLight from "../../assets/usa-light-album.png";
import usaAlbumDark from "../../assets/usa-dark-album.png";
import cndCalendarLight from "../../assets/cnd-light-calendar.png";
import cndCalendarDark from "../../assets/cnd-dark-calendar.png";
import mxQrLight from "../../assets/mx-light-qr.png";
import mxQrDark from "../../assets/mex-dark-qr.png";
import usaStatsLight from "../../assets/usa-light-stats.png";
import usaStatsDark from "../../assets/usa-dark-stats.png";
import cndHomeLight from "../../assets/cnd-light-home.png";
import cndHomeDark from "../../assets/cnd-dark-home.png";
import mxAlbumLight from "../../assets/mx-light-album.png";
import mxAlbumDark from "../../assets/mx-dark-album.png";
import usaCalendarLight from "../../assets/usa-light-calendar.png";
import usaCalendarDark from "../../assets/usa-dark-calendar.png";

export type CarouselImage = { key: string; src: string; alt: string };

const POOL: Array<{ key: string; light: string; dark: string; alt: string }> = [
  { key: "mx-home", light: mxHomeLight, dark: mxHomeDark, alt: "Pantalla principal del álbum" },
  { key: "usa-album", light: usaAlbumLight, dark: usaAlbumDark, alt: "Vista del álbum de estampas" },
  { key: "cnd-calendar", light: cndCalendarLight, dark: cndCalendarDark, alt: "Calendario de partidos" },
  { key: "mx-qr", light: mxQrLight, dark: mxQrDark, alt: "Pantalla de intercambio QR" },
  { key: "usa-stats", light: usaStatsLight, dark: usaStatsDark, alt: "Estadísticas del álbum" },
  { key: "cnd-home", light: cndHomeLight, dark: cndHomeDark, alt: "Pantalla principal del álbum" },
  { key: "mx-album", light: mxAlbumLight, dark: mxAlbumDark, alt: "Vista del álbum de estampas" },
  { key: "usa-calendar", light: usaCalendarLight, dark: usaCalendarDark, alt: "Calendario de partidos" },
];

export const HERO_CAROUSEL_COUNT = POOL.length;

export function getHeroCarouselImages(mode: Mode): CarouselImage[] {
  return POOL.map(({ key, light, dark, alt }) => ({
    key,
    src: mode === "dark" ? dark : light,
    alt,
  }));
}
