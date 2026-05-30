// ============================================================================
// NOTICIAS — Datos de la sección de Noticias (eventos, anuncios y updates).
//
// Cómo agregar una noticia:
//   1. Si lleva imágenes, ponlas en  src/assets/noticias/  e impórtalas arriba.
//   2. Agrega un objeto al arreglo NEWS de abajo (ver el tipo NewsPost).
//   3. commit + push  → GitHub Actions / Netlify despliega automáticamente.
//
// Notas:
//   - `slug` debe ser único y estable (es la URL: /noticias/<slug>).
//   - `publishedAt` y `eventDate` van en formato ISO "AAAA-MM-DD".
//   - El orden de la lista se calcula solo (más reciente primero).
//   - `body` es un arreglo de bloques: párrafo, subtítulo o lista de viñetas.
// ============================================================================

import carolaBoba from "../../assets/Events/CarolaBoba-29-05.png";

export type NewsType = "update" | "evento" | "anuncio";

export type NewsImage = {
  src: string;
  alt: string;
};

export type NewsBlock =
  | { kind: "parrafo"; text: string }
  | { kind: "subtitulo"; text: string }
  | { kind: "lista"; items: string[] };

export type NewsPost = {
  /** Identificador único y estable. Forma la URL /noticias/<slug>. */
  slug: string;
  type: NewsType;
  title: string;
  /** Fecha de publicación, ISO "AAAA-MM-DD". */
  publishedAt: string;
  /** Solo para eventos: cuándo ocurre el evento. ISO "AAAA-MM-DD". */
  eventDate?: string;
  /** 0, 1 o varias imágenes. Si hay más de una se muestran en carrusel. */
  images: NewsImage[];
  /** Cuerpo de la noticia, en bloques ordenados. */
  body: NewsBlock[];
  /** Traducción al inglés opcional. Si falta, se usa el contenido en español. */
  en?: { title: string; body: NewsBlock[] };
};

// --- Metadatos de cada tipo (color del chip y del pill activo) ---------------
// Las etiquetas de texto (Update/Evento/Anuncio) viven en las traducciones (i18n).

export type NewsTypeMeta = {
  /** Clases Tailwind para el chip/etiqueta (claro + oscuro). */
  chip: string;
  /** Clases del pill cuando está activo. */
  pillActive: string;
};

export const NEWS_TYPE_META: Record<NewsType, NewsTypeMeta> = {
  update: {
    chip: "text-blue-600 dark:text-blue-300 bg-blue-500/10 border border-blue-500/30",
    pillActive: "bg-blue-500 text-white border-blue-500 shadow-[0_0_18px_rgba(59,130,246,0.45)]",
  },
  evento: {
    chip: "text-amber-600 dark:text-amber-300 bg-amber-500/10 border border-amber-500/30",
    pillActive: "bg-amber-500 text-white border-amber-500 shadow-[0_0_18px_rgba(245,158,11,0.45)]",
  },
  anuncio: {
    chip: "text-violet-600 dark:text-violet-300 bg-violet-500/10 border border-violet-500/30",
    pillActive: "bg-violet-500 text-white border-violet-500 shadow-[0_0_18px_rgba(139,92,246,0.45)]",
  },
};

/** Orden en que aparecen los pills de filtro. */
export const NEWS_TYPE_ORDER: NewsType[] = ["update", "evento", "anuncio"];

// --- Utilidades --------------------------------------------------------------

/** Localiza una fecha ISO: ES "29/05/2026", EN "05/29/2026". */
export function formatDate(iso: string, lang: "es" | "en"): string {
  const [y, m, d] = iso.split("-");
  if (!y || !m || !d) return iso;
  return lang === "en" ? `${m}/${d}/${y}` : `${d}/${m}/${y}`;
}

/** Devuelve título y cuerpo en el idioma pedido, con fallback a español. */
export function localizeNews(post: NewsPost, lang: "es" | "en"): { title: string; body: NewsBlock[] } {
  if (lang === "en" && post.en) return { title: post.en.title, body: post.en.body };
  return { title: post.title, body: post.body };
}

/** Lista ordenada de más reciente a más antigua. */
export function sortedNews(): NewsPost[] {
  return [...NEWS].sort((a, b) => b.publishedAt.localeCompare(a.publishedAt));
}

export function findNews(slug: string | undefined): NewsPost | null {
  if (!slug) return null;
  return NEWS.find((p) => p.slug === slug) ?? null;
}

// --- Noticias ----------------------------------------------------------------
// (Ejemplos iniciales — reemplázalos por contenido real.)

export const NEWS: NewsPost[] = [
  {
    slug: "evento-carola-boba-coffee-mayo-2026",
    type: "evento",
    title: "¡Nos vemos en Carola Boba & Coffee!",
    publishedAt: "2026-05-29",
    eventDate: "2026-05-31",
    images: [{ src: carolaBoba, alt: "Evento de FutCollect en Carola Boba & Coffee" }],
    body: [
      {
        kind: "parrafo",
        text: "Primero que nada, ¡muchísimas gracias a toda la gente que respondió a nuestro primer evento! Su energía y entusiasmo nos dejaron con muchas ganas de más, y por eso estamos súper emocionados de anunciar que lo volvemos a hacer, esta vez junto al café Carola Boba & Coffee.",
      },
      {
        kind: "parrafo",
        text: "Los esperamos este domingo para coleccionar, intercambiar y pasar un buen rato entre fans del fútbol. ¡No te lo pierdas!",
      },
      { kind: "subtitulo", text: "¿Cómo participar?" },
      {
        kind: "lista",
        items: [
          "Compra tu bebida en Carola Boba & Coffee y usa FutCollect para hacer un intercambio por código QR: te regalamos un sobre gratis.",
          "Si además llegas con una camiseta de fútbol puesta al participar en la dinámica, te damos otro sobre extra.",
        ],
      },
      {
        kind: "parrafo",
        text: "Te esperamos el domingo en Carola Boba & Coffee. ¡Trae tu álbum, tu camiseta y todas las ganas de intercambiar!",
      },
    ],
    en: {
      title: "See you at Carola Boba & Coffee!",
      body: [
        {
          kind: "parrafo",
          text: "First of all, a huge thank you to everyone who came out to our first event! Your energy and excitement left us wanting more, which is why we're thrilled to announce that we're doing it again — this time together with Carola Boba & Coffee.",
        },
        {
          kind: "parrafo",
          text: "We'll be waiting for you this Sunday to collect, swap, and have a great time among football fans. Don't miss it!",
        },
        { kind: "subtitulo", text: "How to take part" },
        {
          kind: "lista",
          items: [
            "Buy your drink at Carola Boba & Coffee and use FutCollect to make a QR swap: we'll give you a free sticker pack.",
            "And if you show up wearing a football jersey while taking part in the activity, we'll give you another extra pack.",
          ],
        },
        {
          kind: "parrafo",
          text: "See you on Sunday at Carola Boba & Coffee. Bring your album, your jersey, and all your trading spirit!",
        },
      ],
    },
  },
];
