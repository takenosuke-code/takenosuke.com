import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { projects, type Project } from "../../data/projects";
import { ProjectCard } from "../projects/ProjectCard";
import { ProjectModal } from "../projects/ProjectModal";

const groups: { key: Project["category"]; eyebrow: string; title: string }[] = [
  { key: "ai-ml", eyebrow: "AI / ML", title: "AI & ML projects" },
  { key: "fullstack", eyebrow: "Full Stack", title: "Full stack solutions" },
];

export function Projects() {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const groupsRef = useRef<HTMLDivElement>(null);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        headerRef.current,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          ease: "power3.out",
          scrollTrigger: { trigger: headerRef.current, start: "top 85%" },
        }
      );

      groupsRef.current?.querySelectorAll<HTMLElement>(".project-group").forEach((group) => {
        const heading = group.querySelector(".project-group-heading");
        if (heading) {
          gsap.fromTo(
            heading,
            { opacity: 0, y: 24 },
            {
              opacity: 1,
              y: 0,
              duration: 0.6,
              ease: "power3.out",
              scrollTrigger: { trigger: heading, start: "top 88%" },
            }
          );
        }
        const cards = group.querySelectorAll(".project-card");
        if (cards.length) {
          gsap.fromTo(
            cards,
            { opacity: 0, y: 60, scale: 0.95 },
            {
              opacity: 1,
              y: 0,
              scale: 1,
              duration: 0.7,
              stagger: 0.1,
              ease: "power3.out",
              scrollTrigger: { trigger: group, start: "top 80%" },
            }
          );
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <>
      <section ref={sectionRef} id="projects" className="py-12 md:py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <div ref={headerRef} className="mb-10 opacity-0">
            <p className="text-[11px] font-semibold uppercase tracking-widest text-[var(--color-accent)] mb-2">
              Portfolio
            </p>
            <h2 className="text-2xl md:text-3xl font-bold text-[var(--color-foreground)]">
              Selected works
            </h2>
          </div>

          <div ref={groupsRef} className="space-y-12">
            {groups.map((group) => {
              const items = projects.filter((p) => p.category === group.key);
              if (items.length === 0) return null;
              return (
                <div key={group.key} className="project-group">
                  <div className="project-group-heading flex items-center gap-3 mb-5 opacity-0">
                    <span className="text-[11px] font-semibold uppercase tracking-widest text-[var(--color-accent)]">
                      {group.eyebrow}
                    </span>
                    <span className="h-px flex-1 bg-[var(--color-border)]" />
                    <span className="text-[11px] text-[var(--color-foreground-dim)]">
                      {items.length} {items.length === 1 ? "project" : "projects"}
                    </span>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    {items.map((project, index) => (
                      <ProjectCard
                        key={project.slug}
                        project={project}
                        index={index}
                        onClick={() => setSelectedProject(project)}
                      />
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </>
  );
}
