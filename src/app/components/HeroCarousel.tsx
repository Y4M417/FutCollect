import type { CSSProperties } from "react";
import { motion } from "motion/react";
import { useTheme } from "../theme/ThemeContext";
import { getHeroCarouselImages, HERO_CAROUSEL_COUNT } from "../theme/heroCarouselImages";

const SECONDS_PER_CARD = 4;

export function HeroCarousel() {
  const { mode } = useTheme();
  const images = getHeroCarouselImages(mode);
  const track = [...images, ...images];

  const wrapperStyle = {
    "--carousel-duration": `${HERO_CAROUSEL_COUNT * SECONDS_PER_CARD}s`,
  } as CSSProperties;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.94 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
      className="hero-carousel relative w-screen -mx-6 lg:w-full lg:mx-0 h-[300px] md:h-[400px] lg:h-[460px] overflow-hidden rounded-none lg:rounded-2xl order-1 lg:order-2 [--card-w:110px] [--step-x:72px] [--step-y:50px] md:[--card-w:135px] md:[--step-x:90px] md:[--step-y:60px] lg:[--card-w:155px] lg:[--step-x:100px] lg:[--step-y:68px]"
      style={wrapperStyle}
      aria-hidden
    >
      <div className="hero-carousel-track absolute inset-0">
        {track.map((img, i) => (
          <div
            key={`${img.key}-${i}`}
            className="absolute aspect-[9/19] rounded-3xl overflow-hidden shadow-2xl shadow-black/30 bg-[var(--color-surface-soft)]"
            style={{
              width: "var(--card-w)",
              transform: `translate(calc(var(--step-x) * ${i}), calc(var(--step-y) * ${i}))`,
            }}
          >
            <img
              src={img.src}
              alt={img.alt}
              className="absolute inset-0 w-full h-full object-cover"
              draggable={false}
            />
          </div>
        ))}
      </div>
    </motion.div>
  );
}
