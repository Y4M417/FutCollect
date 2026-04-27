import { motion } from "motion/react";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-zinc-950/80 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-emerald-400 to-cyan-500 shadow-[0_0_15px_rgba(52,211,153,0.5)]" />
          <span className="text-xl font-bold text-white tracking-tight">FutCollect</span>
        </div>

        <div className="hidden md:flex items-center gap-8">
          <a href="#novedades" className="text-sm font-medium text-zinc-400 hover:text-white transition-colors">Novedades</a>
          <a href="#caracteristicas" className="text-sm font-medium text-zinc-400 hover:text-white transition-colors">Características</a>
          <a href="#intercambio" className="text-sm font-medium text-zinc-400 hover:text-white transition-colors">Intercambio QR</a>
        </div>

        <div className="hidden md:flex items-center gap-4">
          <button className="px-5 py-2.5 text-sm font-medium text-white bg-white/10 hover:bg-white/20 rounded-full transition-colors">
            Iniciar Sesión
          </button>
          <button className="px-5 py-2.5 text-sm font-bold text-zinc-950 bg-gradient-to-r from-emerald-400 to-cyan-400 hover:from-emerald-300 hover:to-cyan-300 rounded-full transition-all shadow-[0_0_20px_rgba(52,211,153,0.3)]">
            Descargar App
          </button>
        </div>

        <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden absolute top-20 left-0 right-0 bg-zinc-900 border-b border-white/10 p-6 flex flex-col gap-4"
        >
          <a href="#novedades" className="text-base font-medium text-zinc-300">Novedades</a>
          <a href="#caracteristicas" className="text-base font-medium text-zinc-300">Características</a>
          <a href="#intercambio" className="text-base font-medium text-zinc-300">Intercambio QR</a>
          <div className="h-px w-full bg-white/10 my-2" />
          <button className="w-full py-3 text-sm font-bold text-zinc-950 bg-gradient-to-r from-emerald-400 to-cyan-400 rounded-full">
            Descargar App
          </button>
        </motion.div>
      )}
    </nav>
  );
}
