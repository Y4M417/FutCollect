import { motion } from "motion/react";
import type { NewsType } from "../../data/news";
import { NEWS_TYPE_META, NEWS_TYPE_ORDER } from "../../data/news";
import { useLang } from "../../i18n/LanguageContext";

type Props = {
  active: NewsType | null;
  onChange: (type: NewsType | null) => void;
};

/** Pills de filtro por tipo. Selección única; tocar el activo vuelve a "todas". */
export function NewsFilters({ active, onChange }: Props) {
  const { t } = useLang();
  return (
    <div className="flex flex-wrap gap-2">
      {NEWS_TYPE_ORDER.map((type) => {
        const meta = NEWS_TYPE_META[type];
        const isActive = active === type;
        return (
          <motion.button
            key={type}
            type="button"
            whileTap={{ scale: 0.94 }}
            onClick={() => onChange(isActive ? null : type)}
            aria-pressed={isActive}
            className={`px-4 py-1.5 rounded-full text-sm font-semibold border transition-colors ${
              isActive
                ? meta.pillActive
                : "border-[var(--color-surface-border)] bg-[var(--color-surface-soft)] text-[var(--color-text-muted)] hover:text-[var(--color-text-strong)]"
            }`}
          >
            {t.news.filters[type]}
          </motion.button>
        );
      })}
    </div>
  );
}
