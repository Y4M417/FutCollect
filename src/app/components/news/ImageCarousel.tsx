import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import type { NewsImage } from "../../data/news";
import { useLang } from "../../i18n/LanguageContext";

type Props = {
  images: NewsImage[];
};

/** Recuadro de imagen(es) arriba del texto. Si hay varias, carrusel con flechas y puntos. */
export function ImageCarousel({ images }: Props) {
  const { t } = useLang();
  const [index, setIndex] = useState(0);
  const [dir, setDir] = useState(0);

  if (images.length === 0) return null;

  const go = (next: number) => {
    setDir(next > index ? 1 : -1);
    setIndex((next + images.length) % images.length);
  };

  const hasMany = images.length > 1;

  // Una sola imagen: el contorno se ajusta a la foto (sin marco de relación fija).
  if (!hasMany) {
    return (
      <img
        src={images[0].src}
        alt={images[0].alt}
        className="block mx-auto rounded-3xl border border-[var(--color-surface-border)] w-auto h-auto max-w-full max-h-[75vh] md:max-h-full"
      />
    );
  }

  return (
    <div className="relative w-full rounded-3xl border border-[var(--color-surface-border)] bg-[var(--color-surface-soft)] overflow-hidden aspect-[4/3]">
      <AnimatePresence initial={false} custom={dir} mode="popLayout">
        <motion.img
          key={index}
          src={images[index].src}
          alt={images[index].alt}
          custom={dir}
          initial={{ opacity: 0, x: dir * 40 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: dir * -40 }}
          transition={{ duration: 0.35, ease: "easeOut" }}
          className="absolute inset-0 w-full h-full object-contain p-3"
        />
      </AnimatePresence>

      {hasMany && (
        <>
          <button
            type="button"
            onClick={() => go(index - 1)}
            aria-label={t.news.prevImage}
            className="absolute left-2 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-black/40 text-white flex items-center justify-center hover:bg-black/60 transition-colors"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            type="button"
            onClick={() => go(index + 1)}
            aria-label={t.news.nextImage}
            className="absolute right-2 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-black/40 text-white flex items-center justify-center hover:bg-black/60 transition-colors"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
          <div className="absolute bottom-3 left-0 right-0 flex justify-center gap-1.5">
            {images.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => go(i)}
                aria-label={`${t.news.goToImage} ${i + 1}`}
                className={`h-1.5 rounded-full transition-all ${
                  i === index ? "w-5 bg-brand" : "w-1.5 bg-white/60"
                }`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
