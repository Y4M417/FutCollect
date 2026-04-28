import type { ThemedImageMap } from "./ThemedImage";

// =========================================================================
// QR EXCHANGE — Paso 1: Genera tu QR  →  pantalla "qr"
// NOTA: México oscuro usa `mex-dark-qr.png` (prefijo "mex-" en vez de "mx-").
// =========================================================================
import step1MxLight from "../../assets/mx-light-qr.png";
import step1MxDark from "../../assets/mex-dark-qr.png";
import step1UsLight from "../../assets/usa-light-qr.png";
import step1UsDark from "../../assets/usa-dark-qr.png";
import step1CaLight from "../../assets/cnd-light-qr.png";
import step1CaDark from "../../assets/cnd-dark-qr.png";

export const STEP_1_IMAGES: ThemedImageMap = {
  "mexico-light": step1MxLight,
  "mexico-dark": step1MxDark,
  "usa-light": step1UsLight,
  "usa-dark": step1UsDark,
  "canada-light": step1CaLight,
  "canada-dark": step1CaDark,
};

// =========================================================================
// QR EXCHANGE — Paso 2: Escanea el de tu amigo  →  pantalla "home"
// =========================================================================
import step2MxLight from "../../assets/mx-light-home.png";
import step2MxDark from "../../assets/mx-dark-home.png";
import step2UsLight from "../../assets/usa-light-home.png";
import step2UsDark from "../../assets/usa-dark-home.png";
import step2CaLight from "../../assets/cnd-light-home.png";
import step2CaDark from "../../assets/cnd-dark-home.png";

export const STEP_2_IMAGES: ThemedImageMap = {
  "mexico-light": step2MxLight,
  "mexico-dark": step2MxDark,
  "usa-light": step2UsLight,
  "usa-dark": step2UsDark,
  "canada-light": step2CaLight,
  "canada-dark": step2CaDark,
};

// =========================================================================
// QR EXCHANGE — Paso 3: Intercambien y listo  →  pantalla "album"
// =========================================================================
import step3MxLight from "../../assets/mx-light-album.png";
import step3MxDark from "../../assets/mx-dark-album.png";
import step3UsLight from "../../assets/usa-light-album.png";
import step3UsDark from "../../assets/usa-dark-album.png";
import step3CaLight from "../../assets/cnd-light-album.png";
import step3CaDark from "../../assets/cnd-light-album.png"; // TODO: Reemplazar con cnd-dark-album.png cuando esté disponible

export const STEP_3_IMAGES: ThemedImageMap = {
  "mexico-light": step3MxLight,
  "mexico-dark": step3MxDark,
  "usa-light": step3UsLight,
  "usa-dark": step3UsDark,
  "canada-light": step3CaLight,
  "canada-dark": step3CaDark,
};
