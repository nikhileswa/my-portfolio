// src/components/Projects.tsx
import Section from "@/components/Section";
import ProjectCard, { Project } from "@/components/ProjectCard";

export default function Projects({ items }: { items: Project[] }) {
  return (
    <div>
      <Section title="Projects" subtitle="Selected work & case studies" />
      <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((p, i) => <ProjectCard key={i} project={p} />)}
      </div>
    </div>
  );
}
