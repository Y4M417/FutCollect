import type { ThemedImageMap } from "./ThemedImage";

// =========================================================================
// FEATURE: Intercambio Rápido por QR  →  pantalla "qr"
// NOTA: el archivo de México oscuro está como `mex-dark-qr.png` (prefijo
// "mex-" en lugar de "mx-"). Si lo renombras, actualiza el import.
// =========================================================================
import qrSwapMxLight from "../../assets/mx-light-qr.png";
import qrSwapMxDark from "../../assets/mex-dark-qr.png";
import qrSwapUsLight from "../../assets/usa-light-qr.png";
import qrSwapUsDark from "../../assets/usa-dark-qr.png";
import qrSwapCaLight from "../../assets/cnd-light-qr.png";
import qrSwapCaDark from "../../assets/cnd-dark-qr.png";

export const QR_SWAP_IMAGES: ThemedImageMap = {
  "mexico-light": qrSwapMxLight,
  "mexico-dark": qrSwapMxDark,
  "usa-light": qrSwapUsLight,
  "usa-dark": qrSwapUsDark,
  "canada-light": qrSwapCaLight,
  "canada-dark": qrSwapCaDark,
};

// =========================================================================
// FEATURE: Control Visual  →  pantalla "album"
// =========================================================================
import visualMxLight from "../../assets/mx-light-album.png";
import visualMxDark from "../../assets/mx-dark-album.png";
import visualUsLight from "../../assets/usa-light-album.png";
import visualUsDark from "../../assets/usa-dark-album.png";
import visualCaLight from "../../assets/cnd-light-album.png";
import visualCaDark from "../../assets/cnd-light-album.png"; // TODO: Reemplazar con cnd-dark-album.png cuando esté disponible

export const VISUAL_CONTROL_IMAGES: ThemedImageMap = {
  "mexico-light": visualMxLight,
  "mexico-dark": visualMxDark,
  "usa-light": visualUsLight,
  "usa-dark": visualUsDark,
  "canada-light": visualCaLight,
  "canada-dark": visualCaDark,
};

// =========================================================================
// FEATURE: Calendario Oficial  →  pantalla "calendar"
// =========================================================================
import calendarMxLight from "../../assets/mx-light-calendar.png";
import calendarMxDark from "../../assets/mx-dark-calendar.png";
import calendarUsLight from "../../assets/usa-light-calendar.png";
import calendarUsDark from "../../assets/usa-dark-calendar.png";
import calendarCaLight from "../../assets/cnd-light-calendar.png";
import calendarCaDark from "../../assets/cnd-dark-calendar.png";

export const CALENDAR_IMAGES: ThemedImageMap = {
  "mexico-light": calendarMxLight,
  "mexico-dark": calendarMxDark,
  "usa-light": calendarUsLight,
  "usa-dark": calendarUsDark,
  "canada-light": calendarCaLight,
  "canada-dark": calendarCaDark,
};

// =========================================================================
// FEATURE: Personalización Temática  →  pantalla "stats"
// =========================================================================
import customizationMxLight from "../../assets/mx-light-stats.png";
import customizationMxDark from "../../assets/mx-dark-stats.png";
import customizationUsLight from "../../assets/usa-light-stats.png";
import customizationUsDark from "../../assets/usa-dark-stats.png";
import customizationCaLight from "../../assets/cnd-light-stats.png";
import customizationCaDark from "../../assets/cnd-dark-stats.png";

export const CUSTOMIZATION_IMAGES: ThemedImageMap = {
  "mexico-light": customizationMxLight,
  "mexico-dark": customizationMxDark,
  "usa-light": customizationUsLight,
  "usa-dark": customizationUsDark,
  "canada-light": customizationCaLight,
  "canada-dark": customizationCaDark,
};
