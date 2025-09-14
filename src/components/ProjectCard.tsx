// src/components/ProjectCard.tsx
import Image from "next/image";

export default function ProjectCard({
  title,
  stack,
  highlights,
  image,
  link,
}: {
  title: string;
  stack: string[];
  highlights: string[];
  image?: string;
  link?: string;
}) {
  return (
    <div className="card p-5 h-full flex flex-col">
      {image && (
        <div className="relative w-full h-40 mb-4 overflow-hidden rounded-xl border border-gray-200/60 dark:border-gray-800/60">
          <Image
            src={image}
            alt={title}
            fill
            sizes="(min-width: 1024px) 33vw, 100vw"
            className="object-cover"
            priority={false}
          />
        </div>
      )}

      <h3 className="text-xl font-semibold">{title}</h3>

      <div className="mt-2 flex flex-wrap gap-2">
        {stack.map((s) => (
          <span key={s} className="badge">
            {s}
          </span>
        ))}
      </div>

      <ul className="mt-3 list-disc list-inside text-sm text-gray-700 dark:text-gray-300 space-y-1">
        {highlights.map((h, i) => (
          <li key={i}>{h}</li>
        ))}
      </ul>

      {link && (
        <a
          href={link}
          target="_blank"
          rel="noreferrer"
          className="mt-4 inline-block text-sm font-medium"
        >
          View project →
        </a>
      )}
    </div>
  );
}
