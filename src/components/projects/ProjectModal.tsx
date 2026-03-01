import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import type { Project } from "../../data/projects";

interface ProjectModalProps {
  project: Project;
  onClose: () => void;
}

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  const overlayRef = useRef<HTMLDivElement>(null);
  const modalRef = useRef<HTMLDivElement>(null);

  const allImages = [project.image, ...(project.gallery || [])];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    gsap.fromTo(overlayRef.current, { opacity: 0 }, { opacity: 1, duration: 0.2 });
    gsap.fromTo(modalRef.current, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.3, delay: 0.05 });

    document.body.style.overflow = "hidden";
    const handleEsc = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", handleEsc);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleEsc);
    };
  }, [onClose]);

  useEffect(() => {
    if (allImages.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % allImages.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [allImages.length]);

  const handleClose = () => {
    gsap.to(overlayRef.current, { opacity: 0, duration: 0.15 });
    gsap.to(modalRef.current, { opacity: 0, y: 10, duration: 0.15, onComplete: onClose });
  };

  return (
    <div
      ref={overlayRef}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 overflow-y-auto"
      onClick={handleClose}
      data-lenis-prevent
    >
      <div
        ref={modalRef}
        className="relative w-full max-w-2xl my-8 bg-[var(--color-card)] border border-[var(--color-border)] rounded-2xl"
        onClick={(e) => e.stopPropagation()}
        style={{ overscrollBehavior: 'contain' }}
      >
        {/* Image Carousel */}
        <div className="relative aspect-video overflow-hidden rounded-t-2xl bg-black">
          {allImages.map((img, i) => (
            <img
              key={i}
              src={img}
              alt={`${project.title} ${i + 1}`}
              className={`absolute inset-0 w-full h-full object-contain transition-opacity duration-500 ${
                i === currentIndex ? "opacity-100" : "opacity-0"
              }`}
            />
          ))}
          {allImages.length > 1 && (
            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
              {allImages.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentIndex(i)}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    i === currentIndex ? "bg-white" : "bg-white/40"
                  }`}
                />
              ))}
            </div>
          )}
        </div>

        <div className="p-6">
          {/* Header */}
          <div className="flex items-start justify-between mb-4">
            <div>
              <p className="text-xs text-[var(--color-foreground-muted)] mb-1">{project.company}</p>
              <h2 className="text-xl font-semibold text-[var(--color-foreground)]">
                {project.title}
              </h2>
            </div>
            <button
              onClick={handleClose}
              className="p-1.5 rounded-full hover:bg-[var(--color-background-secondary)] transition-colors"
            >
              <svg className="w-5 h-5 text-[var(--color-foreground-muted)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Description */}
          <p className="text-sm text-[var(--color-foreground-muted)] leading-relaxed whitespace-pre-line mb-5">
            {project.longDescription}
          </p>

          {/* Tech Stack */}
          <div className="mb-5">
            <p className="text-xs font-medium text-[var(--color-foreground-muted)] uppercase tracking-wide mb-2">
              Tech Stack
            </p>
            <div className="flex flex-wrap gap-1.5">
              {project.technologies.map((tech) => (
                <span key={tech} className="px-2.5 py-1 text-xs bg-[var(--color-background-secondary)] text-[var(--color-foreground)] rounded-full">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Skills */}
          {project.softSkills.length > 0 && (
            <div className="mb-6">
              <p className="text-xs font-medium text-[var(--color-foreground-muted)] uppercase tracking-wide mb-2">
                Skills
              </p>
              <div className="flex flex-wrap gap-1.5">
                {project.softSkills.map((skill) => (
                  <span key={skill} className="px-2.5 py-1 text-xs border border-[var(--color-border)] text-[var(--color-foreground-muted)] rounded-full">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* CTA */}
          {project.url && (
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 bg-[var(--color-accent)] text-white text-sm font-medium rounded-lg hover:opacity-90 transition-opacity"
            >
              Visit Website
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
