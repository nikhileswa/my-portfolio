// src/components/Education.tsx
import Section from "@/components/Section";

export default function Education({
  items,
}: {
  items: { school: string; degree: string; period: string }[];
}) {
  return (
    <div>
      <Section title="Education" />
      <div className="space-y-4">
        {items.map((e) => (
          <div key={e.school + e.degree} className="card p-5">
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <h3 className="text-lg font-semibold">{e.degree}</h3>
              <span className="text-sm text-gray-600 dark:text-gray-400">
                {e.period}
              </span>
            </div>
            <p className="mt-1 text-sm text-gray-700 dark:text-gray-300">
              {e.school}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
