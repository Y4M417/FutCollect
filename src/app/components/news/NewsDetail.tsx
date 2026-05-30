import { ArrowLeft, CalendarDays } from "lucide-react";
import type { NewsPost } from "../../data/news";
import { NEWS_TYPE_META, formatDate, localizeNews } from "../../data/news";
import { useLang } from "../../i18n/LanguageContext";
import { ImageCarousel } from "./ImageCarousel";
import { NewsBody } from "./NewsBody";

function TypeChip({ post }: { post: NewsPost }) {
  const { t } = useLang();
  const meta = NEWS_TYPE_META[post.type];
  return (
    <span className={`inline-block px-3 py-1 rounded-full text-xs font-bold ${meta.chip}`}>
      {t.news.typeLabels[post.type]}
    </span>
  );
}

function EventDate({ post }: { post: NewsPost }) {
  const { lang } = useLang();
  if (post.type !== "evento" || !post.eventDate) return null;
  return (
    <div className="flex items-center gap-2 text-sm font-semibold text-amber-600 dark:text-amber-300">
      <CalendarDays className="w-4 h-4" />
      <span>{formatDate(post.eventDate, lang)}</span>
    </div>
  );
}

/**
 * Detalle de una noticia.
 * - variant="desktop": encabezado e imágenes fijos, solo el texto hace scroll.
 * - variant="mobile": barra superior con flecha de regreso; toda la vista scrollea.
 */
export function NewsDetail({
  post,
  variant,
  onBack,
}: {
  post: NewsPost;
  variant: "desktop" | "mobile";
  onBack?: () => void;
}) {
  const { lang, t } = useLang();
  const { title, body } = localizeNews(post, lang);

  if (variant === "mobile") {
    return (
      <div className="h-full flex flex-col">
        <div className="flex items-center gap-3 px-5 h-14 shrink-0 border-b border-[var(--color-surface-border)] bg-[var(--color-surface)]/80 backdrop-blur-md">
          <button
            type="button"
            onClick={onBack}
            aria-label={t.news.backAria}
            className="text-[var(--color-text-strong)] hover:text-brand transition-colors"
          >
            <ArrowLeft className="w-6 h-6" />
          </button>
          <span className="text-lg font-bold text-brand-dark dark:text-brand-on-dark">{t.news.title}</span>
        </div>

        <div className="flex-1 min-h-0 overflow-y-auto px-5 py-5 space-y-4">
          <TypeChip post={post} />
          <h1 className="text-2xl font-extrabold leading-tight text-[var(--color-text-strong)]">
            {title}
          </h1>
          <EventDate post={post} />
          {post.images.length > 0 && <ImageCarousel images={post.images} />}
          <NewsBody blocks={body} />
        </div>
      </div>
    );
  }

  // Desktop: encabezado e imagen fijos; el cuerpo scrollea.
  return (
    <div className="h-full flex flex-col min-h-0">
      <div className="shrink-0 space-y-3 pb-5">
        <TypeChip post={post} />
        <h1 className="text-3xl lg:text-4xl font-extrabold leading-tight text-[var(--color-text-strong)]">
          {title}
        </h1>
        <EventDate post={post} />
      </div>

      <div className="flex-1 min-h-0 flex gap-6">
        {post.images.length > 0 && (
          <div className="w-[42%] max-w-md shrink-0 h-full flex items-start justify-center">
            <ImageCarousel images={post.images} />
          </div>
        )}
        <div className="flex-1 min-h-0 overflow-y-auto pr-2">
          <NewsBody blocks={body} />
        </div>
      </div>
    </div>
  );
}
