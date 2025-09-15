// src/components/Skills.tsx
import Section from "@/components/Section";

export default function Skills({ items }: { items: string[] }) {
  return (
    <div>
      <Section title="Skills" subtitle="Tools, languages & platforms" />
      <div className="mt-6 flex flex-wrap gap-2">
        {items.map((s) => <span key={s} className="badge">{s}</span>)}
      </div>
    </div>
  );
}
