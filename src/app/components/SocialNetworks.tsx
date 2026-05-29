import { motion } from "motion/react";
import { Users } from "lucide-react";

const SOCIAL_LINKS = [
  {
    name: "TikTok",
    url: "https://www.tiktok.com/@futcollectmx?_r=1&_t=ZS-96LU3dcxFUj",
    icon: ({ className }: { className?: string }) => (
      <svg className={className} viewBox="0 0 24 24" fill="currentColor">
        <path d="M12.53.02C13.84 0 15.14.01 16.44 0c.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.12-3.44-3.17-3.64-5.46-.23-2.63.95-5.32 3.11-6.71 1.15-.75 2.52-1.15 3.9-1.16v4.02c-1.17.06-2.31.54-3.11 1.4-.8.85-1.16 2.05-.98 3.2.22 1.48 1.37 2.75 2.82 3.08 1.45.33 3.02-.16 4.04-1.15.93-.9 1.35-2.22 1.32-3.52.05-6.85.02-13.7.04-20.55h4.02z"/>
      </svg>
    ),
    color: "from-[#000000] to-[#252525] dark:from-[#333333] dark:to-[#111111]",
  },
  {
    name: "Instagram",
    url: "https://www.instagram.com/futcollectmx?igsh=MWJpOXdqZXlqam5wdQ==",
    icon: ({ className }: { className?: string }) => (
      <svg className={className} viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.07zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
      </svg>
    ),
    color: "from-[#f09433] via-[#dc2743] to-[#bc1888]",
  },
  {
    name: "Facebook",
    url: "https://www.facebook.com/share/1HkooAmW4N/",
    icon: ({ className }: { className?: string }) => (
      <svg className={className} viewBox="0 0 24 24" fill="currentColor">
        <path d="M9.101 23.691v-7.98H6.627v-3.667h2.474v-1.58c0-4.085 1.848-5.978 5.858-5.978.401 0 .955.042 1.468.103v3.328h-2.328c-2.132 0-2.339.811-2.339 2.34v1.787h4.316l-.583 3.667h-3.733v7.98z"/>
      </svg>
    ),
    color: "from-[#1877F2] to-[#145CB3]",
  },
];

export function SocialNetworks() {
  return (
    <section id="redes" className="py-16 md:py-24 relative overflow-hidden bg-[var(--color-surface-soft)] border-y border-[var(--color-surface-border)]">
      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand/10 border border-brand/30 mb-4">
            <Users className="w-4 h-4 text-brand" />
            <span className="text-xs font-semibold text-brand-dark dark:text-brand-on-dark tracking-wide uppercase">Comunidad</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-[var(--color-text-strong)] tracking-tight">Síguenos en nuestras redes</h2>
          <p className="mt-4 text-[var(--color-text-muted)] text-lg mb-10">
            Mantente al tanto de los próximos lanzamientos, actualizaciones y nuevas dinámicas uniéndote a nuestra comunidad.
          </p>
        </motion.div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
          {SOCIAL_LINKS.map((social, index) => {
            const Icon = social.icon;
            return (
              <motion.a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className={`group flex items-center justify-center gap-3 px-8 py-4 rounded-2xl bg-gradient-to-br ${social.color} text-white shadow-xl shadow-black/10 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 w-full sm:w-48`}
              >
                <Icon className="w-6 h-6 shrink-0" />
                <span className="font-bold text-lg">{social.name}</span>
              </motion.a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
