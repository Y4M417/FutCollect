import { motion } from "motion/react";
import { Sparkles, ArrowRight } from "lucide-react";
import { useTheme } from "../theme/ThemeContext";
import type { Country, Mode } from "../theme/ThemeContext";

import { IOS_APP_URL } from "../config";
type BannerPalette = {
  from: string;
  via: string;
  to: string;
  text: string;
  buttonBg: string;
  buttonText: string;
  buttonHover: string;
};

const PALETTES: Record<Country, Record<Mode, BannerPalette>> = {
  mexico: {
    light: {
      from: "#E52521",
      via: "#F4B41A",
      to: "#E52521",
      text: "#ffffff",
      buttonBg: "#ffffff",
      buttonText: "#9a1410",
      buttonHover: "#fef2f2",
    },
    dark: {
      from: "#7a0f0d",
      via: "#b8851a",
      to: "#7a0f0d",
      text: "#fff5d6",
      buttonBg: "#fef3c7",
      buttonText: "#7a0f0d",
      buttonHover: "#fde68a",
    },
  },
  usa: {
    light: {
      from: "#B22234",
      via: "#F4B41A",
      to: "#B22234",
      text: "#ffffff",
      buttonBg: "#ffffff",
      buttonText: "#7a1521",
      buttonHover: "#fef2f2",
    },
    dark: {
      from: "#5a0f1a",
      via: "#b8851a",
      to: "#5a0f1a",
      text: "#fff5d6",
      buttonBg: "#fde68a",
      buttonText: "#5a0f1a",
      buttonHover: "#fcd34d",
    },
  },
  canada: {
    light: {
      from: "#0a3d6b",
      via: "#1e6fb8",
      to: "#0a3d6b",
      text: "#ffffff",
      buttonBg: "#ffffff",
      buttonText: "#0a3d6b",
      buttonHover: "#e0f2fe",
    },
    dark: {
      from: "#06223d",
      via: "#0a4a82",
      to: "#06223d",
      text: "#bfdbfe",
      buttonBg: "#bfdbfe",
      buttonText: "#06223d",
      buttonHover: "#93c5fd",
    },
  },
};

export function AnnouncementBanner() {
  const { country, mode } = useTheme();
  const palette = PALETTES[country][mode];

  return (
    <div
      className="relative w-full shadow-lg overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(90deg, ${palette.from} 0%, ${palette.via} 50%, ${palette.to} 100%)`,
        color: palette.text,
      }}
    >
      <motion.div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.25) 50%, transparent 100%)`,
        }}
        animate={{ x: ["-100%", "100%"] }}
        transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
      />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-2.5 flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 text-center">
        <motion.div
          className="flex items-center gap-2 text-sm sm:text-base font-semibold drop-shadow-sm"
          animate={{ scale: [1, 1.02, 1] }}
          transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
        >
          <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 shrink-0" />
          <span>¡La app ya está disponible para <strong className="font-black text-lg">iOS</strong>!</span>
        </motion.div>
        <a
          href={IOS_APP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 px-4 py-1.5 text-xs sm:text-sm font-bold rounded-full transition-all shadow-md hover:shadow-lg hover:scale-105"
          style={{
            backgroundColor: palette.buttonBg,
            color: palette.buttonText,
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = palette.buttonHover;
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = palette.buttonBg;
          }}
        >
          Llévame ahí
          <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
        </a>
      </div>
    </div>
  );
}
