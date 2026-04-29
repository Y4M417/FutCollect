import type { ThemedImageMap } from "./ThemedImage";

import step1Llenado from "../../assets/llenado-stamps.png";

export const STEP_1_IMAGES: ThemedImageMap = {
  "mexico-light": step1Llenado,
  "mexico-dark": step1Llenado,
  "usa-light": step1Llenado,
  "usa-dark": step1Llenado,
  "canada-light": step1Llenado,
  "canada-dark": step1Llenado,
};

import step2MxLight from "../../assets/mx-light-qr.png";
import step2MxDark from "../../assets/mex-dark-qr.png";
import step2UsLight from "../../assets/usa-light-qr.png";
import step2UsDark from "../../assets/usa-dark-qr.png";
import step2CaLight from "../../assets/cnd-light-qr.png";
import step2CaDark from "../../assets/cnd-dark-qr.png";

export const STEP_2_IMAGES: ThemedImageMap = {
  "mexico-light": step2MxLight,
  "mexico-dark": step2MxDark,
  "usa-light": step2UsLight,
  "usa-dark": step2UsDark,
  "canada-light": step2CaLight,
  "canada-dark": step2CaDark,
};

import step3Light from "../../assets/mex-light-resultado.jpg";
import step3Dark from "../../assets/mex-dark-resultado.png";

export const STEP_3_IMAGES: ThemedImageMap = {
  "mexico-light": step3Light,
  "mexico-dark": step3Dark,
  "usa-light": step3Light,
  "usa-dark": step3Dark,
  "canada-light": step3Light,
  "canada-dark": step3Dark,
};
