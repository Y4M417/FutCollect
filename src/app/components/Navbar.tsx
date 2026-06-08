import { motion } from "motion/react";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router";
import logo from "../../assets/Presets/logo-niu.png";
import { ThemeSwitcher } from "../theme/ThemeSwitcher";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { useLang } from "../i18n/LanguageContext";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useLang();

  return (
    <nav className="relative z-50 bg-[var(--color-surface)]/80 backdrop-blur-md border-b border-[var(--color-surface-border)]">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3">
          <motion.img
            src={logo}
            alt="FutCollect"
            className="w-14 h-14 object-contain drop-shadow-[0_0_8px_color-mix(in_srgb,var(--color-brand)_70%,transparent)]"
            animate={{ scale: [1, 1.08, 1] }}
            transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
          />
          <span className="text-xl font-bold text-brand-dark dark:text-brand-on-dark tracking-tight">FutCollect</span>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          <a href="/#preguntas" className="text-sm font-medium text-[var(--color-text-muted)] hover:text-brand transition-colors">{t.nav.questions}</a>
          <a href="/#caracteristicas" className="text-sm font-medium text-[var(--color-text-muted)] hover:text-brand transition-colors">{t.nav.features}</a>
          <a href="/#intercambio" className="text-sm font-medium text-[var(--color-text-muted)] hover:text-brand transition-colors">{t.nav.qrExchange}</a>
          <Link to="/noticias" className="text-sm font-medium text-[var(--color-text-muted)] hover:text-brand transition-colors">{t.nav.news}</Link>
        </div>

        <div className="hidden md:flex items-center gap-3">
          <ThemeSwitcher />
          <LanguageSwitcher />
        </div>

        <div className="md:hidden flex items-center gap-2">
          <ThemeSwitcher />
          <LanguageSwitcher />
          <button className="text-brand-dark dark:text-brand-on-dark" onClick={() => setIsOpen(!isOpen)} aria-label={t.nav.menu}>
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden absolute top-20 left-0 right-0 z-50 bg-[var(--color-surface)] border-b border-[var(--color-surface-border)] shadow-xl p-6 flex flex-col gap-4"
        >
          <a href="/#preguntas" className="text-base font-medium text-[var(--color-text-strong)]" onClick={() => setIsOpen(false)}>{t.nav.questions}</a>
          <a href="/#caracteristicas" className="text-base font-medium text-[var(--color-text-strong)]" onClick={() => setIsOpen(false)}>{t.nav.features}</a>
          <a href="/#intercambio" className="text-base font-medium text-[var(--color-text-strong)]" onClick={() => setIsOpen(false)}>{t.nav.qrExchange}</a>
          <Link to="/noticias" className="text-base font-medium text-[var(--color-text-strong)]" onClick={() => setIsOpen(false)}>{t.nav.news}</Link>
        </motion.div>
      )}
    </nav>
  );
}
