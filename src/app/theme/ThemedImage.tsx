import { AnimatePresence, motion } from "motion/react";
import type { Country, Mode } from "./ThemeContext";
import { useTheme } from "./ThemeContext";

export type ThemeKey = `${Country}-${Mode}`;
export type ThemedImageMap = Record<ThemeKey, string>;

export function pickThemedImage(map: ThemedImageMap, country: Country, mode: Mode): string {
  return map[`${country}-${mode}`];
}

export function themedKey(country: Country, mode: Mode): ThemeKey {
  return `${country}-${mode}`;
}

type Props = {
  map: ThemedImageMap;
  alt: string;
  className?: string;
};

/**
 * Imagen que cambia según el tema (país + modo) con crossfade.
 * Debe ir DENTRO de un contenedor con `position: relative` y dimensiones definidas
 * (la imagen se posiciona absoluta `inset-0` para permitir el cruce de fundido).
 */
export function ThemedImage({ map, alt, className }: Props) {
  const { country, mode } = useTheme();
  const src = pickThemedImage(map, country, mode);
  const key = themedKey(country, mode);

  return (
    <AnimatePresence initial={false} mode="sync">
      <motion.img
        key={key}
        src={src}
        alt={alt}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.45, ease: "easeOut" }}
        className={`absolute inset-0 w-full h-full ${className ?? ""}`}
      />
    </AnimatePresence>
  );
}
