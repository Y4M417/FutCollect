import { useState } from "react";
import { useNavigate, useParams } from "react-router";
import { AnimatePresence, motion } from "motion/react";
import { Navbar } from "../components/Navbar";
import { ThemeProvider } from "../theme/ThemeContext";
import { LanguageProvider, useLang } from "../i18n/LanguageContext";
import { NewsFilters } from "../components/news/NewsFilters";
import { NewsList } from "../components/news/NewsList";
import { NewsDetail } from "../components/news/NewsDetail";
import { useMediaQuery } from "../hooks/useMediaQuery";
import type { NewsPost, NewsType } from "../data/news";
import { findNews, sortedNews } from "../data/news";

function Sidebar({
  posts,
  activeSlug,
  filter,
  onFilter,
  onSelect,
}: {
  posts: NewsPost[];
  activeSlug: string | null;
  filter: NewsType | null;
  onFilter: (t: NewsType | null) => void;
  onSelect: (p: NewsPost) => void;
}) {
  const { t } = useLang();
  return (
    <div className="h-full flex flex-col min-h-0">
      <h1 className="text-3xl font-extrabold text-[var(--color-text-strong)] mb-4 shrink-0">
        {t.news.title}
      </h1>
      <div className="shrink-0 mb-4">
        <NewsFilters active={filter} onChange={onFilter} />
      </div>
      <div className="flex-1 min-h-0 overflow-y-auto pr-1">
        <NewsList posts={posts} activeSlug={activeSlug} onSelect={onSelect} />
      </div>
    </div>
  );
}

function NewsContent() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const { t } = useLang();
  const isDesktop = useMediaQuery("(min-width: 768px)");
  const [filter, setFilter] = useState<NewsType | null>(null);

  const all = sortedNews();
  const visible = filter ? all.filter((p) => p.type === filter) : all;
  const fromSlug = findNews(slug);

  // Escritorio: si no hay slug, auto-selecciona la más reciente visible.
  const selected = fromSlug ?? (isDesktop ? visible[0] ?? all[0] ?? null : null);

  const goToPost = (post: NewsPost) => navigate(`/noticias/${post.slug}`);
  const goToList = () => navigate("/noticias");

  return (
    <div className="h-screen flex flex-col overflow-hidden font-sans selection:bg-brand/30 selection:text-brand-dark">
      <Navbar />

      {isDesktop ? (
        <div className="flex-1 min-h-0 w-full max-w-7xl mx-auto px-6 py-6 grid grid-cols-[minmax(280px,360px)_1fr] gap-8">
          <aside className="min-h-0 border-r border-[var(--color-surface-border)] pr-6">
            <Sidebar
              posts={visible}
              activeSlug={selected?.slug ?? null}
              filter={filter}
              onFilter={setFilter}
              onSelect={goToPost}
            />
          </aside>
          <section className="min-h-0">
            {selected ? (
              <motion.div
                key={selected.slug}
                initial={{ opacity: 0, x: 16 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="h-full"
              >
                <NewsDetail post={selected} variant="desktop" />
              </motion.div>
            ) : (
              <div className="h-full flex items-center justify-center text-[var(--color-text-muted)]">
                <p>{t.news.selectPrompt}</p>
              </div>
            )}
          </section>
        </div>
      ) : (
        <div className="flex-1 min-h-0 relative overflow-hidden">
          <AnimatePresence initial={false} mode="sync">
            {fromSlug ? (
              <motion.div
                key="detail"
                initial={{ x: "100%" }}
                animate={{ x: 0 }}
                exit={{ x: "100%" }}
                transition={{ type: "spring", stiffness: 320, damping: 34 }}
                className="absolute inset-0 bg-[var(--color-surface)]"
              >
                <NewsDetail post={fromSlug} variant="mobile" onBack={goToList} />
              </motion.div>
            ) : (
              <motion.div
                key="list"
                initial={{ x: "-30%", opacity: 0.6 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: "-30%", opacity: 0.6 }}
                transition={{ type: "spring", stiffness: 320, damping: 34 }}
                className="absolute inset-0 px-5 py-6"
              >
                <Sidebar
                  posts={visible}
                  activeSlug={null}
                  filter={filter}
                  onFilter={setFilter}
                  onSelect={goToPost}
                />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      )}
    </div>
  );
}

export function News() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <NewsContent />
      </LanguageProvider>
    </ThemeProvider>
  );
}
