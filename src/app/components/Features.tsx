import { motion } from "motion/react";
import { Filter, Calendar, Palette, Smartphone, Globe, RefreshCcw } from "lucide-react";
// Asegúrate de cambiar estas rutas por las de tu proyecto local
import img4 from "../../assets/2.png";
import img3 from "../../assets/3.png";
import imgUntitled from "../../assets/4.png";
import imgDddd from "../../assets/1.png";

export function Features() {
  return (
    <section id="caracteristicas" className="py-24 bg-zinc-950 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight">Todo lo que necesitas para completar tu álbum</h2>
          <p className="text-zinc-400 text-lg">Olvídate de las listas de papel. Usa nuestras herramientas para saber exactamente qué tienes, qué te falta y cómo conseguirlo más rápido.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          <motion.div whileHover={{ y: -5 }} className="md:col-span-2 row-span-2 rounded-[2rem] bg-zinc-900 border border-white/5 overflow-hidden group relative flex flex-col">
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="p-8 md:p-12 z-10 flex-1">
              <div className="w-14 h-14 rounded-2xl bg-emerald-500/20 flex items-center justify-center mb-6">
                <RefreshCcw className="w-7 h-7 text-emerald-400" />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">Intercambio Rápido por QR</h3>
              <p className="text-zinc-400 text-lg max-w-md">
                Nuestra función estrella. Escanea el código de tu amigo y la app analizará ambas colecciones al instante. Te diremos exactamente qué intercambiar.
              </p>
            </div>
            <div className="relative h-64 md:h-96 mt-auto overflow-hidden">
              <img src={imgDddd} alt="QR Swap Feature" className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-transparent to-transparent" />
            </div>
          </motion.div>

          <motion.div whileHover={{ y: -5 }} className="rounded-[2rem] bg-zinc-900 border border-white/5 overflow-hidden group relative flex flex-col">
            <div className="p-8 z-10">
              <div className="w-12 h-12 rounded-xl bg-cyan-500/20 flex items-center justify-center mb-6">
                <Smartphone className="w-6 h-6 text-cyan-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Control Visual</h3>
              <p className="text-zinc-400">Navega por equipos, ve tu progreso circular y marca estampas con un toque.</p>
            </div>
            <div className="relative h-48 mt-auto px-8 overflow-hidden">
              <img src={img4} alt="Visual Control" className="w-full h-full object-cover object-top rounded-t-xl shadow-2xl group-hover:-translate-y-2 transition-transform duration-500" />
            </div>
          </motion.div>

          <motion.div whileHover={{ y: -5 }} className="rounded-[2rem] bg-zinc-900 border border-white/5 overflow-hidden group relative p-8 flex flex-col justify-center">
            <div className="w-12 h-12 rounded-xl bg-purple-500/20 flex items-center justify-center mb-6">
              <Filter className="w-6 h-6 text-purple-400" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Filtros Inteligentes</h3>
            <p className="text-zinc-400">Obtén listas exactas de las estampas que te faltan y las que tienes repetidas.</p>
          </motion.div>

          <motion.div whileHover={{ y: -5 }} className="rounded-[2rem] bg-zinc-900 border border-white/5 overflow-hidden group relative flex flex-col">
            <div className="p-8 z-10">
              <div className="w-12 h-12 rounded-xl bg-orange-500/20 flex items-center justify-center mb-6">
                <Calendar className="w-6 h-6 text-orange-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Calendario Oficial</h3>
              <p className="text-zinc-400">Sigue el mundial. Horarios ajustados automáticamente a tu zona local.</p>
            </div>
            <div className="relative h-48 mt-auto px-8 overflow-hidden">
              <img src={img3} alt="Match Calendar" className="w-full h-full object-cover object-top rounded-t-xl shadow-2xl group-hover:-translate-y-2 transition-transform duration-500" />
            </div>
          </motion.div>

          <motion.div whileHover={{ y: -5 }} className="md:col-span-2 rounded-[2rem] bg-zinc-900 border border-white/5 overflow-hidden group relative flex flex-col sm:flex-row items-center">
            <div className="p-8 md:p-12 z-10 flex-1">
              <div className="w-12 h-12 rounded-xl bg-pink-500/20 flex items-center justify-center mb-6">
                <Palette className="w-6 h-6 text-pink-400" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">Personalización Temática</h3>
              <p className="text-zinc-400">
                Elige los colores de tu país: México, USA o Canadá. Soporte en Español, Inglés y Portugués <Globe className="inline w-4 h-4 ml-1" />.
              </p>
            </div>
            <div className="relative w-full sm:w-1/2 h-64 sm:h-full overflow-hidden">
              <img src={imgUntitled} alt="Customization" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-r from-zinc-900 via-transparent to-transparent hidden sm:block" />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
