import { motion } from "motion/react";
import { ArrowRight, QrCode, Globe, Apple, Heart } from "lucide-react";
import { WEB_APP_URL, IOS_APP_URL } from "../config";
import { HeroCarousel } from "./HeroCarousel";

export function Hero() {
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
            El control de tu{" "}
            <br className="hidden lg:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand to-brand-bright">
              álbum del Mundial
            </span>{" "}
            <br className="hidden lg:inline" />
            en tu bolsillo.
          </h1>

          <p className="hidden md:block text-lg md:text-xl text-[var(--color-text-muted)] leading-relaxed max-w-xl">
            Registra tus estampas, descubre cuáles te faltan y encuentra el intercambio perfecto con tus amigos en segundos usando tecnología QR. Sin hojas de papel, sin complicaciones.
          </p>

          <div className="flex flex-col gap-3 max-[420px]:gap-2 mt-4 max-[420px]:mt-2">
            <div className="flex flex-col sm:flex-row gap-4 max-[420px]:gap-2">
              <a
                href={WEB_APP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 max-[420px]:gap-1.5 px-6 max-[420px]:px-4 py-4 max-[420px]:py-2.5 text-base max-[420px]:text-sm font-bold text-white bg-brand hover:bg-brand-bright rounded-full transition-all shadow-[0_0_25px_color-mix(in_srgb,var(--color-brand)_40%,transparent)]"
              >
                <Globe className="w-5 h-5 max-[420px]:w-4 max-[420px]:h-4" />
                <span>Ve a la versión web</span>
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
                <span>Ve a la app en iOS</span>
                <ArrowRight className="w-5 h-5 max-[420px]:w-4 max-[420px]:h-4" />
              </motion.a>
            </div>
            <a
              href="#intercambio"
              className="w-full flex items-center justify-center gap-2 max-[420px]:gap-1.5 px-8 max-[420px]:px-4 py-4 max-[420px]:py-2.5 text-base max-[420px]:text-sm font-bold text-brand-dark dark:text-brand-on-dark bg-[var(--color-surface-soft)] border border-[var(--color-surface-border)] hover:bg-brand-soft rounded-full transition-all"
            >
              <QrCode className="w-5 h-5 max-[420px]:w-4 max-[420px]:h-4 text-brand" />
              <span>Cómo funciona el QR</span>
            </a>
            <p className="text-xs font-medium text-[var(--color-text-muted)] sm:px-4 text-center sm:text-left opacity-80">
              * Puedes instalar la versión web como app (PWA) en tu dispositivo.
            </p>
            <a
              href="#redes"
              className="w-full flex items-center justify-center gap-2 max-[420px]:gap-1.5 px-8 max-[420px]:px-4 py-4 max-[420px]:py-2.5 text-base max-[420px]:text-sm font-bold text-white bg-brand hover:bg-brand-bright rounded-full transition-all shadow-[0_0_25px_color-mix(in_srgb,var(--color-brand)_40%,transparent)]"
            >
              <Heart className="w-5 h-5 max-[420px]:w-4 max-[420px]:h-4" />
              <span>Síguenos en redes</span>
            </a>
          </div>
        </motion.div>

        <HeroCarousel />
      </div>
    </section>
  );
}
