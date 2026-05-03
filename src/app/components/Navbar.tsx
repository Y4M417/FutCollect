import { motion } from "motion/react";
import { Bell, Menu, X } from "lucide-react";
import { useState } from "react";
import logo from "../../assets/logo-niu.png";
import { ThemeSwitcher } from "../theme/ThemeSwitcher";
import { GOOGLE_FORM_URL } from "../config";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="relative bg-[var(--color-surface)]/80 backdrop-blur-md border-b border-[var(--color-surface-border)]">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-2.5">
          <img src={logo} alt="FutCollect" className="w-9 h-9 object-contain" />
          <span className="text-xl font-bold text-brand-dark dark:text-brand-on-dark tracking-tight">FutCollect</span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          <a href="#preguntas" className="text-sm font-medium text-[var(--color-text-muted)] hover:text-brand transition-colors">Preguntas</a>
          <a href="#caracteristicas" className="text-sm font-medium text-[var(--color-text-muted)] hover:text-brand transition-colors">Características</a>
          <a href="#intercambio" className="text-sm font-medium text-[var(--color-text-muted)] hover:text-brand transition-colors">Intercambio QR</a>
        </div>

        <div className="hidden md:flex items-center gap-3">
          <ThemeSwitcher />
          <a
            href={GOOGLE_FORM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-bold text-white bg-brand hover:bg-brand-bright rounded-full transition-all shadow-[0_0_20px_color-mix(in_srgb,var(--color-brand)_35%,transparent)]"
          >
            <Bell className="w-4 h-4" />
            Notifícame
          </a>
        </div>

        <div className="md:hidden flex items-center gap-2">
          <ThemeSwitcher />
          <button className="text-brand-dark dark:text-brand-on-dark" onClick={() => setIsOpen(!isOpen)} aria-label="Menú">
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden absolute top-20 left-0 right-0 bg-[var(--color-surface)] border-b border-[var(--color-surface-border)] p-6 flex flex-col gap-4"
        >
          <a href="#preguntas" className="text-base font-medium text-[var(--color-text-strong)]" onClick={() => setIsOpen(false)}>Preguntas</a>
          <a href="#caracteristicas" className="text-base font-medium text-[var(--color-text-strong)]" onClick={() => setIsOpen(false)}>Características</a>
          <a href="#intercambio" className="text-base font-medium text-[var(--color-text-strong)]" onClick={() => setIsOpen(false)}>Intercambio QR</a>
          <div className="h-px w-full bg-[var(--color-surface-border)] my-2" />
          <a
            href={GOOGLE_FORM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 w-full py-3 text-sm font-bold text-white bg-brand hover:bg-brand-bright rounded-full"
          >
            <Bell className="w-4 h-4" />
            Notifícame
          </a>
        </motion.div>
      )}
    </nav>
  );
}
