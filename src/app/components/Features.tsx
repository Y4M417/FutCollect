import { motion } from "motion/react";
import { Filter, Calendar, PieChart, Smartphone, RefreshCcw, Globe } from "lucide-react";
import { ThemedImage } from "../theme/ThemedImage";
import { PhoneSlide } from "../theme/SlideImage";
import { PhoneMockup } from "./PhoneMockup";
import { CountrySelector } from "../theme/CountrySelector";
import { useLang } from "../i18n/LanguageContext";
import {
  QR_SWAP_IMAGES,
  VISUAL_CONTROL_IMAGES,
  VISUAL_CONTROL_IMAGES_2,
  WORLD_PROGRESS_IMAGES,
  CALENDAR_IMAGES,
  CUSTOMIZATION_IMAGES,
  CUSTOMIZATION_IMAGES_2,
} from "../theme/featureImages";

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.12, ease: [0.25, 0.46, 0.45, 0.94] as const },
  }),
};

export function Features() {
  const { t } = useLang();
  return (
    <section id="caracteristicas" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-2xl mx-auto mb-10"
        >
          <h2 className="features-section-title">
            {t.features.title}
          </h2>
          <p className="features-section-subtitle mx-auto">
            {t.features.subtitle}
          </p>
        </motion.div>

        <div className="mb-10">
          <CountrySelector />
        </div>

        <div className="features-bento">

          {/* ── QR Swap ── */}
          <motion.div
            custom={0}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={cardVariants}
            className="feature-card feature-card--hero"
          >
            <div className="feature-card-content">
              <div className="feature-icon" style={{ background: "color-mix(in srgb, var(--color-brand) 15%, transparent)" }}>
                <RefreshCcw className="w-7 h-7 text-brand" />
              </div>
              <h3>{t.features.qrSwap.title}</h3>
              <p>{t.features.qrSwap.desc}</p>
            </div>
            <div className="feature-card-phone">
              <PhoneMockup glowColor="var(--color-brand)">
                <div className="relative w-full h-full">
                  <ThemedImage
                    map={QR_SWAP_IMAGES}
                    alt="QR Swap Feature"
                    className="object-cover"
                  />
                </div>
              </PhoneMockup>
            </div>
          </motion.div>

          {/* ── Control Visual (2 slides) ── */}
          <motion.div
            custom={1}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={cardVariants}
            className="feature-card feature-card--side"
          >
            <div className="feature-card-content">
              <div className="feature-icon" style={{ background: "color-mix(in srgb, var(--color-brand-bright) 15%, transparent)" }}>
                <Smartphone className="w-6 h-6 text-brand-bright" />
              </div>
              <h3>{t.features.visualControl.title}</h3>
              <p>{t.features.visualControl.desc}</p>
            </div>
            <div className="feature-card-phone">
              <PhoneSlide
                maps={[VISUAL_CONTROL_IMAGES, VISUAL_CONTROL_IMAGES_2]}
                alt="Control Visual"
                glowColor="var(--color-brand-bright)"
                scale="0.9"
              />
            </div>
          </motion.div>

          {/* ── Progreso Mundial ── */}
          <motion.div
            custom={2}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={cardVariants}
            className="feature-card feature-card--side"
          >
            <div className="feature-card-content">
              <div className="feature-icon" style={{ background: "color-mix(in srgb, var(--color-brand-dark) 15%, transparent)" }}>
                <Globe className="w-6 h-6 text-brand-dark dark:text-brand-on-dark" />
              </div>
              <h3>{t.features.worldProgress.title}</h3>
              <p>{t.features.worldProgress.desc}</p>
            </div>
            <div className="feature-card-phone">
              <PhoneMockup glowColor="var(--color-brand-dark)" scale="0.9">
                <div className="relative w-full h-full">
                  <ThemedImage
                    map={WORLD_PROGRESS_IMAGES}
                    alt="Progreso Mundial"
                    className="object-cover"
                  />
                </div>
              </PhoneMockup>
            </div>
          </motion.div>

          {/* ── Filtros Inteligentes ── */}
          <motion.div
            custom={3}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={cardVariants}
            className="feature-card feature-card--info"
          >
            <div className="feature-card-content">
              <div className="feature-icon" style={{ background: "color-mix(in srgb, var(--color-mx-red) 15%, transparent)" }}>
                <Filter className="w-6 h-6 text-mx-red" />
              </div>
              <h3>{t.features.smartFilters.title}</h3>
              <p>{t.features.smartFilters.desc}</p>
            </div>
          </motion.div>

          {/* ── Estadísticas Detalladas (2 slides) ── */}
          <motion.div
            custom={4}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={cardVariants}
            className="feature-card feature-card--wide"
          >
            <div className="feature-card-content">
              <div className="feature-icon" style={{ background: "color-mix(in srgb, var(--color-mx-red) 15%, transparent)" }}>
                <PieChart className="w-6 h-6 text-mx-red" />
              </div>
              <h3>{t.features.stats.title}</h3>
              <p>{t.features.stats.desc}</p>
            </div>
            <div className="feature-card-phone">
              <PhoneSlide
                maps={[CUSTOMIZATION_IMAGES, CUSTOMIZATION_IMAGES_2]}
                alt="Estadísticas Detalladas"
                glowColor="var(--color-mx-red)"
                scale="0.95"
              />
            </div>
          </motion.div>

          {/* ── Calendario Oficial ── */}
          <motion.div
            custom={5}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={cardVariants}
            className="feature-card feature-card--calendar"
          >
            <div className="feature-card-content">
              <div className="feature-icon" style={{ background: "color-mix(in srgb, var(--color-brand-dark) 15%, transparent)" }}>
                <Calendar className="w-6 h-6 text-brand-dark dark:text-brand-on-dark" />
              </div>
              <h3>{t.features.calendar.title}</h3>
              <p>{t.features.calendar.desc}</p>
            </div>
            <div className="feature-card-phone">
              <PhoneMockup glowColor="var(--color-brand-dark)" scale="0.95">
                <div className="relative w-full h-full">
                  <ThemedImage
                    map={CALENDAR_IMAGES}
                    alt="Match Calendar"
                    className="object-cover"
                  />
                </div>
              </PhoneMockup>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
