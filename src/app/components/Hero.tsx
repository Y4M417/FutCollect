import { motion } from "motion/react";
import { ArrowRight, QrCode, Sparkles } from "lucide-react";
import homeImg from "../../assets/placeholder.svg";

export function Hero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden bg-zinc-950">
      {/* Background glowing orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-emerald-500/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col gap-6"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 w-fit">
            <Sparkles className="w-4 h-4 text-emerald-400" />
            <span className="text-xs font-semibold text-zinc-300 tracking-wide uppercase">La revolución del coleccionismo</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-[1.1] tracking-tight">
            El control de tu <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">
              álbum del Mundial
            </span> <br/>
            en tu bolsillo.
          </h1>
          
          <p className="text-lg md:text-xl text-zinc-400 leading-relaxed max-w-xl">
            Registra tus estampas, descubre cuáles te faltan, y encuentra el intercambio perfecto con tus amigos en segundos usando tecnología QR. Sin hojas de papel, sin complicaciones.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mt-4">
            <button className="flex items-center justify-center gap-2 px-8 py-4 text-base font-bold text-zinc-950 bg-white hover:bg-zinc-200 rounded-full transition-all">
              <span>Descargar ahora</span>
              <ArrowRight className="w-5 h-5" />
            </button>
            <button className="flex items-center justify-center gap-2 px-8 py-4 text-base font-bold text-white bg-white/5 border border-white/10 hover:bg-white/10 rounded-full transition-all">
              <QrCode className="w-5 h-5 text-cyan-400" />
              <span>Probar Intercambio QR</span>
            </button>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          className="relative lg:ml-auto w-full max-w-md mx-auto"
        >
          <div className="relative rounded-[2.5rem] overflow-hidden border-[8px] border-zinc-900 shadow-2xl shadow-emerald-500/20 aspect-[9/19] bg-zinc-900">
            <img 
              src={homeImg} 
              alt="FutCollect App Screenshot" 
              className="w-full h-full object-cover object-top"
            />
          </div>
          {/* Floating elements */}
          <motion.div 
            animate={{ y: [-10, 10, -10] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -right-6 top-20 bg-zinc-900/90 backdrop-blur border border-white/10 p-4 rounded-2xl shadow-xl hidden md:block"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-emerald-500/20 flex items-center justify-center">
                <QrCode className="w-5 h-5 text-emerald-400" />
              </div>
              <div>
                <p className="text-sm font-bold text-white">¡Match encontrado!</p>
                <p className="text-xs text-zinc-400">12 estampas para cambiar</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
