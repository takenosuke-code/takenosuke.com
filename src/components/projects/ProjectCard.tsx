import type { Project } from "../../data/projects";

interface ProjectCardProps {
  project: Project;
  index: number;
  onClick: () => void;
}

export function ProjectCard({ project, onClick }: ProjectCardProps) {
  return (
    <div
      onClick={onClick}
      className="project-card cursor-pointer bg-[var(--color-card)] rounded-xl border border-[var(--color-border)] hover:border-[var(--color-foreground-muted)]/50 transition-all duration-200 overflow-hidden group"
    >
      {/* Image */}
      <div className="aspect-video overflow-hidden bg-[var(--color-background-secondary)]">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>

      {/* Content */}
      <div className="p-5">
        <div className="flex items-start justify-between mb-2">
          <div>
            <p className="text-xs text-[var(--color-foreground-muted)] mb-1">{project.company}</p>
            <h3 className="text-base font-semibold text-[var(--color-foreground)]">
              {project.title}
            </h3>
          </div>
          <svg className="w-4 h-4 text-[var(--color-foreground-muted)] group-hover:text-[var(--color-foreground)] transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
          </svg>
        </div>

        <p className="text-sm text-[var(--color-foreground-muted)] mb-3 line-clamp-2">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-1.5">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="px-2 py-0.5 text-xs bg-[var(--color-background-secondary)] text-[var(--color-foreground-muted)] rounded"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
