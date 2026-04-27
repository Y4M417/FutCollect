import { motion } from "motion/react";
import { QrCode } from "lucide-react";
import step1 from "../../assets/6.png";
import step2 from "../../assets/7.png";
import step3 from "../../assets/8.png";

const STEPS = [
  {
    n: 1,
    title: "Genera tu QR",
    desc: "Abre FutCollect y entra a Intercambio QR. La app crea un código único con tus estampas repetidas y faltantes.",
    img: step1,
  },
  {
    n: 2,
    title: "Escanea el de tu amigo",
    desc: "Apunta tu cámara al QR de la otra persona. La app cruza ambas colecciones al instante para encontrar coincidencias.",
    img: step2,
  },
  {
    n: 3,
    title: "Intercambien y listo",
    desc: "Verás la lista exacta de estampas que pueden cambiar entre ustedes. Confirma el intercambio y se actualizan en sus álbumes.",
    img: step3,
  },
];

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
          <h2 className="text-3xl md:text-5xl font-bold text-[var(--color-text-strong)] tracking-tight mb-4">Cambia estampas en 3 pasos</h2>
          <p className="text-[var(--color-text-muted)] text-lg">Olvídate de comparar listas a mano. La app hace el match por ti.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {STEPS.map((s) => (
            <motion.div
              key={s.n}
              whileHover={{ y: -5 }}
              className="rounded-[2rem] bg-[var(--color-surface-soft)] border border-[var(--color-surface-border)] overflow-hidden group relative flex flex-col"
            >
              <div className="p-8 z-10">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-brand text-white font-extrabold text-lg mb-5 shadow-[0_0_20px_color-mix(in_srgb,var(--color-brand)_40%,transparent)]">
                  {s.n}
                </div>
                <h3 className="text-xl font-bold text-[var(--color-text-strong)] mb-3">{s.title}</h3>
                <p className="text-[var(--color-text-muted)] leading-relaxed">{s.desc}</p>
              </div>
              <div className="relative h-64 px-8 pt-2 pb-8 overflow-hidden flex items-start justify-center">
                <img
                  src={s.img}
                  alt={`Paso ${s.n}: ${s.title}`}
                  className="w-full h-full object-contain object-top group-hover:-translate-y-1 transition-transform duration-500"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
