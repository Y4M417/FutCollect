import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { pickThemedImage } from "./ThemedImage";
import type { ThemedImageMap } from "./ThemedImage";
import type { Country, Mode } from "./ThemeContext";
import { useTheme } from "./ThemeContext";
import { PhoneMockup } from "../components/PhoneMockup";

type SlideImageProps = {
  maps: [ThemedImageMap, ThemedImageMap];
  alt: string;
  className?: string;
  /** Controlled slide index — when provided the internal timer is disabled */
  slideIndex?: number;
};

export function SlideImage({ maps, alt, className, slideIndex }: SlideImageProps) {
  const { country, mode } = useTheme();
  const [internalSlide, setInternalSlide] = useState(0);

  const slide = slideIndex ?? internalSlide;

  useEffect(() => { setInternalSlide(0); }, [country, mode]);

  const src = pickThemedImage(maps[slide], country as Country, mode as Mode);
  const compositeKey = `${country}-${mode}-${slide}`;

  return (
    <div className="relative w-full h-full">
      <AnimatePresence initial={false} mode="sync">
        <motion.img
          key={compositeKey}
          src={src}
          alt={alt}
          initial={{ opacity: 0, scale: 1.03 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.97 }}
          transition={{ duration: 0.55, ease: [0.25, 0.46, 0.45, 0.94] }}
          className={`absolute inset-0 w-full h-full ${className ?? ""}`}
        />
      </AnimatePresence>
    </div>
  );
}

// ── PhoneSlide ────────────────────────────────────────────────────────────────
// Renders PhoneMockup + SlideImage + dot indicators below the phone frame.

type PhoneSlideProps = {
  maps: [ThemedImageMap, ThemedImageMap];
  alt: string;
  glowColor?: string;
  scale?: string;
  intervalMs?: number;
};

export function PhoneSlide({ maps, alt, glowColor, scale, intervalMs = 3000 }: PhoneSlideProps) {
  const { country, mode } = useTheme();
  const [slide, setSlide] = useState(0);

  useEffect(() => { setSlide(0); }, [country, mode]);

  useEffect(() => {
    const id = setInterval(() => setSlide((s) => (s + 1) % maps.length), intervalMs);
    return () => clearInterval(id);
  }, [maps.length, intervalMs]);

  return (
    <div className="flex flex-col items-center gap-2.5">
      <PhoneMockup glowColor={glowColor} scale={scale}>
        <SlideImage maps={maps} alt={alt} className="object-cover" slideIndex={slide} />
      </PhoneMockup>

      <div className="flex items-center gap-2">
        {maps.map((_, i) => (
          <button
            key={i}
            onClick={() => setSlide(i)}
            aria-label={`Imagen ${i + 1}`}
            className={[
              "rounded-full transition-all duration-300",
              i === slide
                ? "w-5 h-1.5 bg-[var(--color-brand)]"
                : "w-1.5 h-1.5 bg-[var(--color-text-muted)]/40 hover:bg-[var(--color-text-muted)]/70",
            ].join(" ")}
          />
        ))}
      </div>
    </div>
  );
}
