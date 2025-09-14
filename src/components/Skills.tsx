// src/components/Skills.tsx
import Section from "@/components/Section";

export default function Skills({ items }: { items: string[] }) {
  return (
    <div>
      <Section title="Skills" />
      <div className="card p-5">
        <div className="flex flex-wrap gap-2">
          {items.map((s) => (
            <span key={s} className="badge">
              {s}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
