import { motion } from "motion/react";
import { ArrowRight, QrCode, Apple, Heart } from "lucide-react";
import { ANDROID_APP_URL, IOS_APP_URL } from "../config";
import { HeroCarousel } from "./HeroCarousel";
import { useLang } from "../i18n/LanguageContext";

export function Hero() {
  const { t } = useLang();
  return (
    <section id="top" className="relative pt-24 pb-12 md:pt-32 md:pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      <motion.div
        aria-hidden
        className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand/20 rounded-full blur-[120px] pointer-events-none"
        animate={{
          x: [0, 40, -25, 0],
          y: [0, -30, 35, 0],
          scale: [1, 1.1, 0.95, 1],
        }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        aria-hidden
        className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-brand-bright/20 rounded-full blur-[120px] pointer-events-none"
        animate={{
          x: [0, -35, 25, 0],
          y: [0, 25, -30, 0],
          scale: [1, 0.9, 1.15, 1],
        }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
      />

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-6 lg:gap-12 items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col gap-4 sm:gap-6 order-2 lg:order-1"
        >
          <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-extrabold text-[var(--color-text-strong)] leading-[1.1] tracking-tight">
            {t.hero.titleA}{" "}
            <br className="hidden lg:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand to-brand-bright">
              {t.hero.titleHighlight}
            </span>{" "}
            <br className="hidden lg:inline" />
            {t.hero.titleB}
          </h1>

          <p className="hidden md:block text-lg md:text-xl text-[var(--color-text-muted)] leading-relaxed max-w-xl">
            {t.hero.subtitle}
          </p>

          <div className="flex flex-col gap-3 max-[420px]:gap-2 mt-4 max-[420px]:mt-2">
            <div className="flex flex-col sm:flex-row gap-4 max-[420px]:gap-2">
              <a
                href={ANDROID_APP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 max-[420px]:gap-1.5 px-6 max-[420px]:px-4 py-4 max-[420px]:py-2.5 text-base max-[420px]:text-sm font-bold text-white bg-brand hover:bg-brand-bright rounded-full transition-all shadow-[0_0_25px_color-mix(in_srgb,var(--color-brand)_40%,transparent)]"
              >
                <svg viewBox="0 0 24 24" className="w-5 h-5 max-[420px]:w-4 max-[420px]:h-4" fill="currentColor" aria-hidden>
                  <path d="M6 18c0 .55.45 1 1 1h1v3.5c0 .83.67 1.5 1.5 1.5S11 23.33 11 22.5V19h2v3.5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5V19h1c.55 0 1-.45 1-1V8H6v10zm-2.5-10C2.67 8 2 8.67 2 9.5v7c0 .83.67 1.5 1.5 1.5S5 17.33 5 16.5v-7C5 8.67 4.33 8 3.5 8zm17 0c-.83 0-1.5.67-1.5 1.5v7c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5v-7c0-.83-.67-1.5-1.5-1.5zM15.53 2.16l1.3-1.3c.2-.2.2-.51 0-.71-.2-.2-.51-.2-.71 0l-1.48 1.48A5.84 5.84 0 0 0 12 1c-.96 0-1.86.23-2.66.63L7.85.16c-.2-.2-.51-.2-.71 0-.2.2-.2.51 0 .71l1.31 1.31A5.983 5.983 0 0 0 6 7h12a5.99 5.99 0 0 0-2.47-4.84zM10 5H9V4h1v1zm5 0h-1V4h1v1z"/>
                </svg>
                <span>{t.hero.androidCta}</span>
                <ArrowRight className="w-5 h-5 max-[420px]:w-4 max-[420px]:h-4" />
              </a>
              <motion.a
                href={IOS_APP_URL}
                target="_blank"
                rel="noopener noreferrer"
                animate={{ scale: [1, 1.06, 1] }}
                transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
                className="flex-1 flex items-center justify-center gap-2 max-[420px]:gap-1.5 px-6 max-[420px]:px-4 py-4 max-[420px]:py-2.5 text-base max-[420px]:text-sm font-bold text-white bg-brand hover:bg-brand-bright rounded-full shadow-[0_0_25px_color-mix(in_srgb,var(--color-brand)_40%,transparent)]"
              >
                <Apple className="w-5 h-5 max-[420px]:w-4 max-[420px]:h-4" />
                <span>{t.hero.iosCta}</span>
                <ArrowRight className="w-5 h-5 max-[420px]:w-4 max-[420px]:h-4" />
              </motion.a>
            </div>
            <a
              href="#intercambio"
              className="w-full flex items-center justify-center gap-2 max-[420px]:gap-1.5 px-8 max-[420px]:px-4 py-4 max-[420px]:py-2.5 text-base max-[420px]:text-sm font-bold text-brand-dark dark:text-brand-on-dark bg-[var(--color-surface-soft)] border border-[var(--color-surface-border)] hover:bg-brand-soft rounded-full transition-all"
            >
              <QrCode className="w-5 h-5 max-[420px]:w-4 max-[420px]:h-4 text-brand" />
              <span>{t.hero.howQr}</span>
            </a>
            <a
              href="#redes"
              className="w-full flex items-center justify-center gap-2 max-[420px]:gap-1.5 px-8 max-[420px]:px-4 py-4 max-[420px]:py-2.5 text-base max-[420px]:text-sm font-bold text-white bg-brand hover:bg-brand-bright rounded-full transition-all shadow-[0_0_25px_color-mix(in_srgb,var(--color-brand)_40%,transparent)]"
            >
              <Heart className="w-5 h-5 max-[420px]:w-4 max-[420px]:h-4" />
              <span>{t.hero.followUs}</span>
            </a>
          </div>
        </motion.div>

        <HeroCarousel />
      </div>
    </section>
  );
}
