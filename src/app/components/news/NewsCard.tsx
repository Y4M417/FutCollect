import { motion } from "motion/react";
import type { NewsPost } from "../../data/news";
import { formatDate, localizeNews } from "../../data/news";
import { useLang } from "../../i18n/LanguageContext";

type Props = {
  post: NewsPost;
  active: boolean;
  onClick: () => void;
};

/** Un registro de la lista: "Tipo: Título" + fecha debajo. */
export function NewsCard({ post, active, onClick }: Props) {
  const { lang, t } = useLang();
  const { title } = localizeNews(post, lang);
  return (
    <motion.button
      type="button"
      onClick={onClick}
      whileTap={{ scale: 0.98 }}
      className={`w-full text-left rounded-2xl px-4 py-3.5 border transition-colors ${
        active
          ? "border-brand bg-brand/10"
          : "border-transparent hover:bg-[var(--color-surface-soft)] hover:border-[var(--color-surface-border)]"
      }`}
    >
      <p className="text-base font-bold leading-snug text-[var(--color-text-strong)]">
        <span className={`mr-1 ${active ? "text-brand" : ""}`}>{t.news.typeLabels[post.type]}:</span>
        {title}
      </p>
      <p className="text-xs text-[var(--color-text-muted)] mt-1">{formatDate(post.publishedAt, lang)}</p>
    </motion.button>
  );
}
