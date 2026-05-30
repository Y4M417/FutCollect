import { motion } from "motion/react";
import { Bell, ArrowRight } from "lucide-react";
import { GOOGLE_FORM_URL } from "../config";
import { useLang } from "../i18n/LanguageContext";

export function Waitlist() {
  const { t } = useLang();
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-3xl pointer-events-none">
        <motion.div
          aria-hidden
          className="h-[400px] bg-gradient-to-r from-brand/20 to-brand-bright/20 blur-[100px] rounded-full"
          animate={{
            scale: [1, 1.15, 0.95, 1],
            opacity: [0.7, 1, 0.85, 0.7],
          }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-6xl font-bold text-[var(--color-text-strong)] mb-6 tracking-tight">{t.waitlist.title}</h2>
          <p className="text-xl text-[var(--color-text-muted)] mb-10 max-w-2xl mx-auto">
            {t.waitlist.subtitle}
          </p>

          <motion.a
            href={GOOGLE_FORM_URL}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05, y: -3 }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: "spring", stiffness: 300, damping: 18 }}
            className="group inline-flex items-center justify-center gap-3 px-10 md:px-14 py-5 md:py-6 text-lg md:text-xl font-extrabold text-white bg-brand hover:bg-brand-bright rounded-full shadow-[0_0_40px_color-mix(in_srgb,var(--color-brand)_45%,transparent)]"
          >
            <Bell className="w-6 h-6 transition-transform duration-500 group-hover:rotate-12" />
            <span>{t.waitlist.cta}</span>
            <ArrowRight className="w-6 h-6 transition-transform duration-300 group-hover:translate-x-1" />
          </motion.a>

          <p className="mt-6 text-sm text-[var(--color-text-muted)]">{t.waitlist.note}</p>
        </motion.div>
      </div>
    </section>
  );
}
