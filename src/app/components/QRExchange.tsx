import { motion } from "motion/react";
import { QrCode } from "lucide-react";
import { ThemedImage } from "../theme/ThemedImage";
import { PhoneMockup } from "./PhoneMockup";
import { STEP_1_IMAGES, STEP_2_IMAGES, STEP_3_IMAGES, STEP_4_IMAGES } from "../theme/qrStepImages";
import { useLang } from "../i18n/LanguageContext";

const STEP_IMAGES = [STEP_1_IMAGES, STEP_2_IMAGES, STEP_3_IMAGES, STEP_4_IMAGES];

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.15, ease: [0.25, 0.46, 0.45, 0.94] as const },
  }),
};

export function QRExchange() {
  const { t } = useLang();
  return (
    <section id="intercambio" className="py-20 md:py-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-2xl mx-auto mb-14"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand/10 border border-brand/30 mb-4">
            <QrCode className="w-4 h-4 text-brand" />
            <span className="text-xs font-semibold text-brand-dark dark:text-brand-on-dark tracking-wide uppercase">{t.qr.badge}</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-[var(--color-text-strong)] tracking-tight mb-4">{t.qr.title}</h2>
          <p className="text-[var(--color-text-muted)] text-lg">{t.qr.subtitle}</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {t.qr.steps.map((s, i) => (
            <motion.div
              key={i}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={cardVariants}
              className="feature-card feature-card--side"
            >
              <div className="feature-card-content">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-brand text-white font-extrabold text-lg mb-5 shadow-[0_0_20px_color-mix(in_srgb,var(--color-brand)_40%,transparent)]">
                  {i + 1}
                </div>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
              </div>
              <div className="feature-card-phone">
                <PhoneMockup glowColor="var(--color-brand)" scale="0.85">
                  <div className="relative w-full h-full">
                    <ThemedImage
                      map={STEP_IMAGES[i]}
                      alt={`${t.qr.stepLabel} ${i + 1}: ${s.title}`}
                      className="object-cover"
                    />
                  </div>
                </PhoneMockup>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
