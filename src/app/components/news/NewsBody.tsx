import type { NewsBlock } from "../../data/news";

/** Renderiza el cuerpo de una noticia (párrafos, subtítulos y listas). */
export function NewsBody({ blocks }: { blocks: NewsBlock[] }) {
  return (
    <div className="space-y-4">
      {blocks.map((block, i) => {
        if (block.kind === "subtitulo") {
          return (
            <h2
              key={i}
              className="text-lg font-bold text-[var(--color-text-strong)] pt-2"
            >
              {block.text}
            </h2>
          );
        }
        if (block.kind === "lista") {
          return (
            <ul key={i} className="space-y-2.5">
              {block.items.map((item, j) => (
                <li key={j} className="flex gap-3 items-start">
                  <span className="mt-2 w-1.5 h-1.5 rounded-full bg-brand shrink-0" />
                  <span className="text-[var(--color-text-muted)] leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          );
        }
        return (
          <p key={i} className="text-[var(--color-text-muted)] leading-relaxed">
            {block.text}
          </p>
        );
      })}
    </div>
  );
}
