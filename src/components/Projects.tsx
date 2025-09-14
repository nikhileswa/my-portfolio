// src/components/Projects.tsx
import Section from "@/components/Section";
import ProjectCard from "@/components/ProjectCard";

export default function Projects({
  items,
}: {
  items: { title: string; stack: string[]; highlights: string[]; link?: string; image?: string }[];
}) {
  return (
    <div>
      <Section title="Projects" subtitle="Selected work and case studies" />
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((p) => (
          <ProjectCard key={p.title} {...p} />
        ))}
      </div>
    </div>
  );
}
