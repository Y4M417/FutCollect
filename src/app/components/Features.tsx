import { motion } from "motion/react";
import { Filter, Calendar, PieChart, Smartphone, RefreshCcw } from "lucide-react";
import { ThemedImage } from "../theme/ThemedImage";
import { PhoneMockup } from "./PhoneMockup";
import {
  QR_SWAP_IMAGES,
  VISUAL_CONTROL_IMAGES,
  CALENDAR_IMAGES,
  CUSTOMIZATION_IMAGES,
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
  return (
    <section id="caracteristicas" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-2xl mx-auto mb-20"
        >
          <h2 className="features-section-title">
            Todo lo que necesitas para completar tu álbum
          </h2>
          <p className="features-section-subtitle mx-auto">
            Olvídate de las listas de papel. Usa nuestras herramientas para saber exactamente qué tienes, qué te falta y cómo conseguirlo más rápido.
          </p>
        </motion.div>

        <div className="features-bento">

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
              <h3>Intercambio Rápido por QR</h3>
              <p>
                Nuestra función estrella. Escanea el código de tu amigo y la app analizará ambas colecciones al instante. Te diremos exactamente qué intercambiar.
              </p>
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
              <h3>Control Visual</h3>
              <p>
                Navega por equipos, marca estampas con un toque y mantén un control de tu avance. Registrar tu progreso nunca ha sido tan fácil y profesional.
              </p>
            </div>
            <div className="feature-card-phone">
              <PhoneMockup glowColor="var(--color-brand-bright)" scale="0.9">
                <div className="relative w-full h-full">
                  <ThemedImage
                    map={VISUAL_CONTROL_IMAGES}
                    alt="Visual Control"
                    className="object-cover"
                  />
                </div>
              </PhoneMockup>
            </div>
          </motion.div>

          <motion.div
            custom={2}
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
              <h3>Filtros Inteligentes</h3>
              <p>
                Obtén listas exactas de las estampas que te faltan y las que tienes repetidas. Filtra por grupo, equipo, o estado para encontrar lo que buscas al instante.
              </p>
            </div>
          </motion.div>

          <motion.div
            custom={3}
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
              <h3>Estadísticas Detalladas</h3>
              <p>
                Consulta tu progreso general, mantén registro de tus estampas faltantes y repetidas, y obtén información precisa de cómo avanza tu colección en cada grupo del álbum mundialista.
              </p>
            </div>
            <div className="feature-card-phone">
              <PhoneMockup glowColor="var(--color-mx-red)" scale="0.95">
                <div className="relative w-full h-full">
                  <ThemedImage
                    map={CUSTOMIZATION_IMAGES}
                    alt="Estadísticas Detalladas"
                    className="object-cover"
                  />
                </div>
              </PhoneMockup>
            </div>
          </motion.div>

          <motion.div
            custom={4}
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
              <h3>Calendario Oficial</h3>
              <p>
                Sigue todos los partidos del mundial con horarios ajustados automáticamente a tu zona local. Nunca más te pierdas un juego — la app te muestra qué equipos juegan, a qué hora y en qué grupo.
              </p>
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
