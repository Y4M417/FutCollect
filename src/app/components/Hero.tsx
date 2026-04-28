import { AnimatePresence, motion } from "motion/react";
import { ArrowRight, QrCode, Sparkles, Bell } from "lucide-react";
import { GOOGLE_FORM_URL } from "../config";
import { useTheme } from "../theme/ThemeContext";
import { getHeroImage, getHeroImageKey } from "../theme/heroImages";

export function Hero() {
  const { country, mode } = useTheme();
  const heroSrc = getHeroImage(country, mode);
  const heroKey = getHeroImageKey(country, mode);

  return (
    <section id="top" className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
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

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col gap-6"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand/10 border border-brand/30 w-fit">
            <Sparkles className="w-4 h-4 text-brand" />
            <span className="text-xs font-semibold text-brand-dark dark:text-brand-on-dark tracking-wide uppercase">Próximamente · App en revisión</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-extrabold text-[var(--color-text-strong)] leading-[1.1] tracking-tight">
            El control de tu <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand to-brand-bright">
              álbum del Mundial
            </span> <br/>
            en tu bolsillo.
          </h1>

          <p className="text-lg md:text-xl text-[var(--color-text-muted)] leading-relaxed max-w-xl">
            Registra tus estampas, descubre cuáles te faltan y encuentra el intercambio perfecto con tus amigos en segundos usando tecnología QR. Sin hojas de papel, sin complicaciones.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mt-4">
            <a
              href={GOOGLE_FORM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 px-8 py-4 text-base font-bold text-white bg-brand hover:bg-brand-bright rounded-full transition-all shadow-[0_0_25px_color-mix(in_srgb,var(--color-brand)_40%,transparent)]"
            >
              <Bell className="w-5 h-5" />
              <span>Notifícame al lanzamiento</span>
              <ArrowRight className="w-5 h-5" />
            </a>
            <a
              href="#intercambio"
              className="flex items-center justify-center gap-2 px-8 py-4 text-base font-bold text-brand-dark dark:text-brand-on-dark bg-[var(--color-surface-soft)] border border-[var(--color-surface-border)] hover:bg-brand-soft rounded-full transition-all"
            >
              <QrCode className="w-5 h-5 text-mx-red" />
              <span>Cómo funciona el QR</span>
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          className="relative lg:ml-auto w-full max-w-md mx-auto"
        >
          <div className="relative rounded-[2.5rem] overflow-hidden border-[8px] border-[var(--color-surface-soft)] shadow-2xl shadow-brand/30 aspect-[9/19] bg-[var(--color-surface-soft)]">
            <AnimatePresence mode="wait" initial={false}>
              <motion.img
                key={heroKey}
                src={heroSrc}
                alt="FutCollect App Screenshot"
                initial={{ opacity: 0, scale: 1.04 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.45, ease: "easeOut" }}
                className="absolute inset-0 w-full h-full object-cover"
              />
            </AnimatePresence>
          </div>
          <motion.div
            animate={{ y: [-10, 10, -10] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -right-6 top-20 bg-[var(--color-surface)]/95 backdrop-blur border border-[var(--color-surface-border)] p-4 rounded-2xl shadow-xl hidden md:block"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-brand/15 flex items-center justify-center">
                <QrCode className="w-5 h-5 text-brand" />
              </div>
              <div>
                <p className="text-sm font-bold text-[var(--color-text-strong)]">¡Match encontrado!</p>
                <p className="text-xs text-[var(--color-text-muted)]">12 estampas para cambiar</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
