import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { projects, type Project } from "../../data/projects";
import { ProjectCard } from "../projects/ProjectCard";
import { ProjectModal } from "../projects/ProjectModal";

export function Projects() {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
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

      const cards = gridRef.current?.querySelectorAll(".project-card");
      if (cards) {
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
            scrollTrigger: { trigger: gridRef.current, start: "top 80%" },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <>
      <section ref={sectionRef} id="projects" className="py-12 md:py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <div ref={headerRef} className="mb-8 opacity-0">
            <p className="text-[11px] font-semibold uppercase tracking-widest text-[var(--color-accent)] mb-2">
              Portfolio
            </p>
            <h2 className="text-2xl md:text-3xl font-bold text-[var(--color-foreground)]">
              Selected works
            </h2>
          </div>

          <div
            ref={gridRef}
            className="grid grid-cols-1 md:grid-cols-2 gap-5"
          >
            {projects.map((project, index) => (
              <ProjectCard
                key={project.slug}
                project={project}
                index={index}
                onClick={() => setSelectedProject(project)}
              />
            ))}
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
