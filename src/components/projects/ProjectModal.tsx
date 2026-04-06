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
    gsap.fromTo(overlayRef.current, { opacity: 0 }, { opacity: 1, duration: 0.25 });
    gsap.fromTo(
      modalRef.current,
      { opacity: 0, y: 40, scale: 0.95 },
      { opacity: 1, y: 0, scale: 1, duration: 0.4, delay: 0.05, ease: "power3.out" }
    );

    document.body.style.overflow = "hidden";
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") handleClose();
    };
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
    gsap.to(overlayRef.current, { opacity: 0, duration: 0.2 });
    gsap.to(modalRef.current, {
      opacity: 0,
      y: 20,
      scale: 0.97,
      duration: 0.2,
      onComplete: onClose,
    });
  };

  return (
    <div
      ref={overlayRef}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm overflow-y-auto"
      onClick={handleClose}
      data-lenis-prevent
    >
      <div
        ref={modalRef}
        className="relative w-full max-w-2xl my-8 bg-[var(--color-card)] border border-[var(--color-border)] rounded-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
        style={{ overscrollBehavior: "contain" }}
      >
        {/* Image Carousel */}
        <div className="relative aspect-video overflow-hidden bg-black">
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
            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
              {allImages.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentIndex(i)}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    i === currentIndex
                      ? "bg-[var(--color-accent)] w-5"
                      : "bg-white/30 w-1.5"
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
              <p className="text-[11px] font-semibold uppercase tracking-widest text-[var(--color-accent)] mb-1">
                {project.company}
              </p>
              <h2 className="text-xl font-bold text-[var(--color-foreground)]">
                {project.title}
              </h2>
            </div>
            <button
              onClick={handleClose}
              className="p-1.5 rounded-lg hover:bg-[var(--color-surface)] transition-colors text-[var(--color-foreground-muted)] hover:text-[var(--color-foreground)]"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Highlights */}
          {project.highlights.length > 0 && (
            <div className="flex flex-wrap gap-4 mb-5 pb-5 border-b border-[var(--color-border)]">
              {project.highlights.map((h) => (
                <div key={h.label}>
                  <span className="text-xl font-bold text-[var(--color-accent)]">
                    {h.metric}
                  </span>
                  <span className="text-xs text-[var(--color-foreground-muted)] ml-1.5">
                    {h.label}
                  </span>
                </div>
              ))}
            </div>
          )}

          {/* Description */}
          <p className="text-sm text-[var(--color-foreground-muted)] leading-relaxed whitespace-pre-line mb-5">
            {project.longDescription}
          </p>

          {/* Tech Stack */}
          <div className="mb-5">
            <p className="text-[11px] font-semibold uppercase tracking-widest text-[var(--color-accent)] mb-3">
              Tech Stack
            </p>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 text-xs font-medium bg-[var(--color-surface)] text-[var(--color-foreground)] rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Skills */}
          {project.softSkills.length > 0 && (
            <div className="mb-6">
              <p className="text-[11px] font-semibold uppercase tracking-widest text-[var(--color-accent)] mb-3">
                Skills
              </p>
              <div className="flex flex-wrap gap-2">
                {project.softSkills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 text-xs border border-[var(--color-border)] text-[var(--color-foreground-muted)] rounded-full"
                  >
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
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-[var(--color-accent)] text-[var(--color-accent-text)] text-sm font-semibold rounded-full hover:bg-[var(--color-accent-hover)] transition-colors"
            >
              Visit Website
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
              </svg>
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
