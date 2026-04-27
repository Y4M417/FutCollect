import { AnimatePresence, motion } from "motion/react";
import { HelpCircle, Plus } from "lucide-react";
import { useState } from "react";

const FAQS: { q: string; a: string }[] = [
  {
    q: "¿Para qué sirve FutCollect?",
    a: "FutCollect es tu álbum digital del Mundial: registra las estampas que tienes, descubre cuáles te faltan o tienes repetidas, y encuentra intercambios con otros coleccionistas escaneando un código QR. Todo desde tu celular, sin hojas de papel.",
  },
  {
    q: "¿Necesito internet para usar la app?",
    a: "Sí para registrarte, sincronizar tu colección entre dispositivos y para usar la función de Intercambio QR (porque ambos celulares deben validar la información). Una vez sincronizado, puedes consultar tu álbum sin conexión.",
  },
  {
    q: "¿En qué dispositivos estará disponible?",
    a: "FutCollect llegará a iOS y Android. La primera versión saldrá en iOS y, poco después, lanzaremos la versión para Android. Suscríbete con tu correo para enterarte el día exacto del lanzamiento.",
  },
  {
    q: "¿Cuánto cuesta la aplicación?",
    a: "La descarga y las funciones principales (registrar tu colección, ver faltantes, intercambiar por QR) son completamente gratuitas. Más adelante podríamos ofrecer extras opcionales, pero no son necesarios para disfrutar la app.",
  },
  {
    q: "¿Cómo funciona el Intercambio por QR?",
    a: "Cada usuario tiene un QR personal con su lista de repetidas y faltantes. Al escanearse mutuamente, la app cruza ambas colecciones y te muestra exactamente qué estampas pueden cambiar entre ustedes. Más abajo en esta página verás los 3 pasos.",
  },
];

function Item({ q, a, open, onToggle }: { q: string; a: string; open: boolean; onToggle: () => void }) {
  return (
    <div className="rounded-2xl border border-[var(--color-surface-border)] bg-[var(--color-surface)] overflow-hidden">
      <button
        type="button"
        onClick={onToggle}
        className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
        aria-expanded={open}
      >
        <span className="text-base md:text-lg font-semibold text-[var(--color-text-strong)]">{q}</span>
        <motion.span
          animate={{ rotate: open ? 45 : 0 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          className="shrink-0 w-9 h-9 rounded-full bg-brand/10 text-brand flex items-center justify-center"
        >
          <Plus className="w-5 h-5" />
        </motion.span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="overflow-hidden"
          >
            <p className="px-6 pb-6 text-[var(--color-text-muted)] leading-relaxed">{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="preguntas" className="py-20 md:py-24 relative">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand/10 border border-brand/30 mb-4">
            <HelpCircle className="w-4 h-4 text-brand" />
            <span className="text-xs font-semibold text-brand-dark dark:text-brand-on-dark tracking-wide uppercase">Preguntas frecuentes</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-[var(--color-text-strong)] tracking-tight">¿Tienes dudas?</h2>
          <p className="mt-4 text-[var(--color-text-muted)] text-lg">Las preguntas que más nos hacen sobre FutCollect.</p>
        </div>

        <div className="flex flex-col gap-3">
          {FAQS.map((item, i) => (
            <Item
              key={item.q}
              q={item.q}
              a={item.a}
              open={openIndex === i}
              onToggle={() => setOpenIndex(openIndex === i ? null : i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
