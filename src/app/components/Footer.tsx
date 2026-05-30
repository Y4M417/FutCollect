import { MessageCircle, Camera, Globe } from "lucide-react";
import { Link } from "react-router";
import logo from "../../assets/Presets/logo-niu.png";
import { useLang } from "../i18n/LanguageContext";

export function Footer() {
  const { t } = useLang();
  return (
    <footer className="bg-gradient-to-b from-brand to-brand-dark border-t border-brand-dark pt-16 pb-8 text-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-8 mb-12">
          <div className="flex flex-col items-center md:items-start max-w-xs text-center md:text-left">
            <div className="flex items-center gap-2 mb-4">
              <img src={logo} alt="FutCollect" className="w-9 h-9 object-contain" />
              <span className="text-2xl font-bold text-white tracking-tight">FutCollect</span>
            </div>
            <p className="text-white/80 text-sm">{t.footer.tagline}</p>
          </div>

          <div className="flex gap-16">
            <div className="flex flex-col gap-3 text-center md:text-left">
              <h4 className="text-white font-semibold mb-2">{t.footer.product}</h4>
              <a href="/#caracteristicas" className="text-white/80 hover:text-white text-sm transition-colors">{t.nav.features}</a>
              <a href="/#intercambio" className="text-white/80 hover:text-white text-sm transition-colors">{t.nav.qrExchange}</a>
            </div>
            <div className="flex flex-col gap-3 text-center md:text-left">
              <h4 className="text-white font-semibold mb-2">{t.footer.support}</h4>
              <a href="/#preguntas" className="text-white/80 hover:text-white text-sm transition-colors">{t.nav.questions}</a>
              <Link to="/noticias" className="text-white/80 hover:text-white text-sm transition-colors">{t.nav.news}</Link>
              <Link to="/privacy" className="text-white/80 hover:text-white text-sm transition-colors">{t.footer.privacy}</Link>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-8 border-t border-white/15">
          <p className="text-white/70 text-sm">{t.footer.rights}</p>
          <div className="flex gap-4">
            <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white/80 hover:text-white hover:bg-mx-red transition-all"><MessageCircle className="w-5 h-5" /></a>
            <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white/80 hover:text-white hover:bg-mx-red transition-all"><Camera className="w-5 h-5" /></a>
            <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white/80 hover:text-white hover:bg-mx-red transition-all"><Globe className="w-5 h-5" /></a>
          </div>
        </div>
      </div>
    </footer>
  );
}
