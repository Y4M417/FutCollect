import { MessageCircle, Camera, Globe } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-zinc-950 border-t border-white/10 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-8 mb-12">
          <div className="flex flex-col items-center md:items-start max-w-xs text-center md:text-left">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-emerald-400 to-cyan-500" />
              <span className="text-2xl font-bold text-white tracking-tight">FutCollect</span>
            </div>
            <p className="text-zinc-400 text-sm">El compañero digital perfecto para coleccionistas. Intercambia, organiza y completa tu álbum más rápido.</p>
          </div>

          <div className="flex gap-16">
            <div className="flex flex-col gap-3 text-center md:text-left">
              <h4 className="text-white font-semibold mb-2">Producto</h4>
              <a href="#" className="text-zinc-400 hover:text-white text-sm transition-colors">Características</a>
              <a href="#" className="text-zinc-400 hover:text-white text-sm transition-colors">Descargar</a>
            </div>
            <div className="flex flex-col gap-3 text-center md:text-left">
              <h4 className="text-white font-semibold mb-2">Soporte</h4>
              <a href="#" className="text-zinc-400 hover:text-white text-sm transition-colors">Contacto</a>
              <a href="#" className="text-zinc-400 hover:text-white text-sm transition-colors">Privacidad</a>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-8 border-t border-white/5">
          <p className="text-zinc-500 text-sm">© 2026 FutCollect. Todos los derechos reservados.</p>
          <div className="flex gap-4">
            <a href="#" className="w-10 h-10 rounded-full bg-zinc-900 flex items-center justify-center text-zinc-400 hover:text-white hover:bg-zinc-800 transition-all"><MessageCircle className="w-5 h-5" /></a>
            <a href="#" className="w-10 h-10 rounded-full bg-zinc-900 flex items-center justify-center text-zinc-400 hover:text-white hover:bg-zinc-800 transition-all"><Camera className="w-5 h-5" /></a>
            <a href="#" className="w-10 h-10 rounded-full bg-zinc-900 flex items-center justify-center text-zinc-400 hover:text-white hover:bg-zinc-800 transition-all"><Globe className="w-5 h-5" /></a>
          </div>
        </div>
      </div>
    </footer>
  );
}
