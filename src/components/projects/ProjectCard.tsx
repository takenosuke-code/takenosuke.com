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
      className="project-card group cursor-pointer rounded-xl border border-[var(--color-border)] overflow-hidden transition-all duration-300 hover:border-[var(--color-border-hover)] hover:-translate-y-1 bg-[var(--color-card)]"
    >
      {/* Image */}
      <div className="relative aspect-video overflow-hidden bg-[var(--color-surface)]">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-card)] via-transparent to-transparent opacity-0 group-hover:opacity-60 transition-opacity duration-300" />
      </div>

      {/* Content */}
      <div className="p-5">
        <div className="flex items-start justify-between mb-2">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-widest text-[var(--color-accent)] mb-1">
              {project.company}
            </p>
            <h3 className="text-base font-semibold text-[var(--color-foreground)] group-hover:text-[var(--color-accent)] transition-colors">
              {project.title}
            </h3>
          </div>
          <div className="w-7 h-7 rounded-full border border-[var(--color-border)] group-hover:border-[var(--color-accent)] group-hover:bg-[var(--color-accent)] flex items-center justify-center transition-all duration-300 shrink-0 mt-1">
            <svg
              className="w-3 h-3 text-[var(--color-foreground-dim)] group-hover:text-[var(--color-accent-text)] transition-colors duration-300"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
            </svg>
          </div>
        </div>

        <p className="text-[13px] text-[var(--color-foreground-muted)] mb-4 line-clamp-2">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-1.5">
          {project.technologies.slice(0, 4).map((tech) => (
            <span
              key={tech}
              className="px-2.5 py-0.5 text-[11px] font-medium bg-[var(--color-surface)] text-[var(--color-foreground-muted)] rounded-full"
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 4 && (
            <span className="px-2.5 py-0.5 text-[11px] text-[var(--color-foreground-dim)]">
              +{project.technologies.length - 4}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
