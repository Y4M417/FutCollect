import { motion } from "motion/react";
import { Newspaper } from "lucide-react";
import type { NewsPost } from "../../data/news";
import { NewsCard } from "./NewsCard";
import { useLang } from "../../i18n/LanguageContext";

type Props = {
  posts: NewsPost[];
  activeSlug: string | null;
  onSelect: (post: NewsPost) => void;
};

/** Lista de registros con animación en stagger y estado vacío. */
export function NewsList({ posts, activeSlug, onSelect }: Props) {
  const { t } = useLang();
  if (posts.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center text-center gap-3 py-16 px-6 text-[var(--color-text-muted)]">
        <Newspaper className="w-8 h-8 opacity-50" />
        <p className="text-sm">{t.news.empty}</p>
      </div>
    );
  }

  return (
    <motion.ul
      className="flex flex-col gap-1"
      initial="hidden"
      animate="show"
      variants={{
        hidden: {},
        show: { transition: { staggerChildren: 0.05 } },
      }}
    >
      {posts.map((post) => (
        <motion.li
          key={post.slug}
          variants={{
            hidden: { opacity: 0, y: 12 },
            show: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.3, ease: "easeOut" }}
        >
          <NewsCard post={post} active={post.slug === activeSlug} onClick={() => onSelect(post)} />
        </motion.li>
      ))}
    </motion.ul>
  );
}
