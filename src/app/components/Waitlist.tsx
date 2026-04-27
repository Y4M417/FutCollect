import { motion } from "motion/react";

export function Waitlist() {
  return (
    <section className="py-24 bg-zinc-950 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-3xl h-[400px] bg-gradient-to-r from-emerald-500/20 to-cyan-500/20 blur-[100px] rounded-full pointer-events-none" />
      
      <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">¿Listo para llenar tu álbum?</h2>
          <p className="text-xl text-zinc-400 mb-10 max-w-2xl mx-auto">
            Únete a la comunidad de coleccionistas más inteligente del mundo. Sé el primero en probar la Beta cerrada de FutCollect.
          </p>
          
          <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto" onSubmit={(e) => e.preventDefault()}>
            <input 
              type="email" 
              placeholder="Tu correo electrónico..." 
              className="flex-1 bg-zinc-900 border border-white/10 rounded-full px-6 py-4 text-white focus:outline-none focus:border-emerald-500 transition-colors"
              required
            />
            <button 
              type="submit" 
              className="px-8 py-4 font-bold text-zinc-950 bg-gradient-to-r from-emerald-400 to-cyan-400 hover:from-emerald-300 hover:to-cyan-300 rounded-full transition-all shadow-[0_0_20px_rgba(52,211,153,0.3)] shrink-0"
            >
              Unirme a la lista
            </button>
          </form>
          <p className="mt-4 text-sm text-zinc-500">Disponible próximamente en iOS y Android.</p>
        </motion.div>
      </div>
    </section>
  );
}
