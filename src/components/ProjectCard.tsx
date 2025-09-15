// src/components/ProjectCard.tsx
export type Project = {
  title: string;
  stack?: string[];
  highlights?: string[];
  link?: string;
  image?: string; // e.g., "/projects/project-1.png"
};

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="card">
      {project.image && (
        <div className="mb-4 overflow-hidden rounded-xl">
          <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
        </div>
      )}
      <h3 className="text-xl font-semibold">{project.title}</h3>
      {project.stack && (
        <div className="mt-2 flex flex-wrap gap-2">
          {project.stack.map((s) => (
            <span key={s} className="badge">{s}</span>
          ))}
        </div>
      )}
      {project.highlights && (
        <ul className="mt-3 list-disc pl-5 text-sm text-gray-700 dark:text-gray-300">
          {project.highlights.map((h, i) => <li key={i}>{h}</li>)}
        </ul>
      )}
      {project.link && (
        <a className="mt-4 inline-block underline underline-offset-2" href={project.link} target="_blank" rel="noreferrer">
          View project →
        </a>
      )}
    </article>
  );
}
