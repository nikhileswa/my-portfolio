// src/components/Education.tsx
import Section from "@/components/Section";

export type EducationItem = {
  school: string;
  degree: string;
  period: string;
  bullets?: string[];
};

export default function Education({ items }: { items: EducationItem[] }) {
  return (
    <div>
      <Section title="Education" subtitle="Academic background" />
      <div className="mt-6 space-y-4">
        {items.map((e, i) => (
          <div key={i} className="card">
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <h3 className="text-lg font-semibold">{e.degree} — {e.school}</h3>
              <span className="text-sm text-gray-500">{e.period}</span>
            </div>
            {e.bullets && (
              <ul className="mt-2 list-disc pl-5 text-sm text-gray-700 dark:text-gray-300">
                {e.bullets.map((b, j) => <li key={j}>{b}</li>)}
              </ul>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
