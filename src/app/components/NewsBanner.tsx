import { Bell, ChevronRight } from "lucide-react";

export function NewsBanner() {
  return (
    <div id="novedades" className="w-full bg-zinc-900 border-y border-white/5 py-4">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center shrink-0">
              <Bell className="w-4 h-4 text-blue-400" />
            </div>
            <p className="text-sm text-zinc-300 font-medium">
              <strong className="text-white">Novedad:</strong> Ya puedes personalizar la app con los colores de México, Estados Unidos o Canadá.
            </p>
          </div>
          <button className="flex items-center text-sm font-semibold text-cyan-400 hover:text-cyan-300 transition-colors shrink-0">
            Leer más <ChevronRight className="w-4 h-4 ml-1" />
          </button>
        </div>
      </div>
    </div>
  );
}
