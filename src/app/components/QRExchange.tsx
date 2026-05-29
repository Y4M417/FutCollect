import { motion } from "motion/react";
import { QrCode } from "lucide-react";
import { ThemedImage } from "../theme/ThemedImage";
import type { ThemedImageMap } from "../theme/ThemedImage";
import { PhoneMockup } from "./PhoneMockup";
import { STEP_1_IMAGES, STEP_2_IMAGES, STEP_3_IMAGES, STEP_4_IMAGES } from "../theme/qrStepImages";

const STEPS: { n: number; title: string; desc: string; imgMap: ThemedImageMap }[] = [
  {
    n: 1,
    title: "Registra tus estampas",
    desc: "Abre FutCollect y selecciona tu álbum. Navega por equipos y marca qué estampas ya tienes y cuáles tienes repetidas. Así la app sabe exactamente con qué cuentas para intercambiar.",
    imgMap: STEP_1_IMAGES,
  },
  {
    n: 2,
    title: "Genera o escanea el QR",
    desc: "Ve a la sección de Intercambio QR y genera tu código personal, o escanea el de tu amigo. En segundos, la app cruza ambas colecciones y detecta qué le sobra a cada quien.",
    imgMap: STEP_2_IMAGES,
  },
  {
    n: 3,
    title: "Elige qué intercambiar",
    desc: "La app te muestra cuáles de tus repetidas le sirven a tu amigo, y cuáles de las suyas te sirven a ti. Solo ve seleccionando las estampas que van a intercambiar — sin adivinar, sin errores.",
    imgMap: STEP_3_IMAGES,
  },
  {
    n: 4,
    title: "Confirma y listo",
    desc: "Una vez que ambos se pongan de acuerdo, da clic en Guardar. La app te muestra una vista previa del intercambio. Presiona Confirmar y los cambios se reflejan de inmediato en tu álbum.",
    imgMap: STEP_4_IMAGES,
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.15, ease: [0.25, 0.46, 0.45, 0.94] as const },
  }),
};

export function QRExchange() {
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
            <span className="text-xs font-semibold text-brand-dark dark:text-brand-on-dark tracking-wide uppercase">Intercambio QR</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-[var(--color-text-strong)] tracking-tight mb-4">Cambia estampas en 4 pasos</h2>
          <p className="text-[var(--color-text-muted)] text-lg">Olvídate de comparar listas a mano. La app hace el match por ti.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {STEPS.map((s) => (
            <motion.div
              key={s.n}
              custom={s.n - 1}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={cardVariants}
              className="feature-card feature-card--side"
            >
              <div className="feature-card-content">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-brand text-white font-extrabold text-lg mb-5 shadow-[0_0_20px_color-mix(in_srgb,var(--color-brand)_40%,transparent)]">
                  {s.n}
                </div>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
              </div>
              <div className="feature-card-phone">
                <PhoneMockup glowColor="var(--color-brand)" scale="0.85">
                  <div className="relative w-full h-full">
                    <ThemedImage
                      map={s.imgMap}
                      alt={`Paso ${s.n}: ${s.title}`}
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
