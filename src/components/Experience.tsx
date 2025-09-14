// src/components/Experience.tsx
import Section from "@/components/Section";

export default function Experience({
  items,
}: {
  items: { company: string; role: string; period: string; bullets: string[] }[];
}) {
  return (
    <div>
      <Section title="Experience" />
      <div className="space-y-4">
        {items.map((e) => (
          <div key={e.company + e.role} className="card p-5">
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <h3 className="text-lg font-semibold">
                {e.role} · {e.company}
              </h3>
              <span className="text-sm text-gray-600 dark:text-gray-400">
                {e.period}
              </span>
            </div>
            <ul className="mt-3 list-disc list-inside text-sm text-gray-700 dark:text-gray-300 space-y-1">
              {e.bullets.map((b, i) => (
                <li key={i}>{b}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
