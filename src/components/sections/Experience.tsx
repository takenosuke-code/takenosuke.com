import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { experiences, type Experience as ExperienceType } from "../../data/projects";

export function Experience() {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  const [selectedExp, setSelectedExp] = useState<ExperienceType | null>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header parallax-style reveal
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

      // Cards staggered entrance with scale
      const cards = cardsRef.current?.querySelectorAll(".exp-card");
      if (cards) {
        gsap.fromTo(
          cards,
          { opacity: 0, y: 60, scale: 0.96 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.7,
            stagger: 0.12,
            ease: "power3.out",
            scrollTrigger: { trigger: cardsRef.current, start: "top 80%" },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    if (selectedExp) {
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
    }
  }, [selectedExp]);

  const handleClose = () => {
    gsap.to(overlayRef.current, { opacity: 0, duration: 0.2 });
    gsap.to(modalRef.current, {
      opacity: 0,
      y: 20,
      scale: 0.97,
      duration: 0.2,
      onComplete: () => setSelectedExp(null),
    });
  };

  return (
    <>
      <section ref={sectionRef} id="experience" className="py-12 md:py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <div ref={headerRef} className="mb-8 opacity-0">
            <p className="text-[11px] font-semibold uppercase tracking-widest text-[var(--color-accent)] mb-2">
              Experience
            </p>
            <h2 className="text-2xl md:text-3xl font-bold text-[var(--color-foreground)]">
              Where I've contributed
            </h2>
          </div>

          <div ref={cardsRef} className="space-y-3">
            {experiences.map((exp) => (
              <div
                key={exp.slug}
                onClick={() => setSelectedExp(exp)}
                className="exp-card group cursor-pointer opacity-0 rounded-xl border border-[var(--color-border)] p-5 md:p-6 transition-all duration-300 hover:bg-[var(--color-card-hover)] hover:border-[var(--color-border-hover)] hover:-translate-y-0.5"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
                  <div className="flex-1 min-w-0">
                    {/* Role is the headline */}
                    <h3 className="text-base md:text-lg font-semibold text-[var(--color-foreground)] group-hover:text-[var(--color-accent)] transition-colors">
                      {exp.role}
                    </h3>
                    <p className="text-[13px] text-[var(--color-foreground-muted)] mt-0.5">
                      {exp.company}
                      <span className="mx-1.5 text-[var(--color-foreground-dim)]">&middot;</span>
                      {exp.location}
                    </p>
                    <p className="text-[13px] text-[var(--color-foreground-dim)] mt-2 line-clamp-1">
                      {exp.description}
                    </p>
                  </div>

                  <div className="flex items-center gap-3 shrink-0">
                    <div className="hidden md:flex flex-wrap gap-1.5 justify-end max-w-[240px]">
                      {exp.technologies.slice(0, 3).map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-0.5 text-[11px] font-medium bg-[var(--color-surface)] text-[var(--color-foreground-muted)] rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="w-8 h-8 rounded-full border border-[var(--color-border)] group-hover:border-[var(--color-accent)] group-hover:bg-[var(--color-accent)] flex items-center justify-center transition-all duration-300">
                      <svg
                        className="w-3.5 h-3.5 text-[var(--color-foreground-dim)] group-hover:text-[var(--color-accent-text)] transition-colors duration-300"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal */}
      {selectedExp && (
        <div
          ref={overlayRef}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm overflow-y-auto"
          onClick={handleClose}
          data-lenis-prevent
        >
          <div
            ref={modalRef}
            className="relative w-full max-w-xl my-8 bg-[var(--color-card)] border border-[var(--color-border)] rounded-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
            style={{ overscrollBehavior: "contain" }}
          >
            <div className="p-6 md:p-8">
              <div className="flex items-start justify-between mb-5">
                <div>
                  <h2 className="text-xl font-bold text-[var(--color-foreground)] mb-1">
                    {selectedExp.role}
                  </h2>
                  <p className="text-sm text-[var(--color-foreground-muted)]">
                    {selectedExp.company}
                    <span className="mx-1.5 text-[var(--color-foreground-dim)]">&middot;</span>
                    {selectedExp.location}
                  </p>
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

              <p className="text-sm text-[var(--color-foreground-muted)] leading-relaxed whitespace-pre-line mb-6">
                {selectedExp.longDescription}
              </p>

              <div className="mb-6">
                <p className="text-[11px] font-semibold uppercase tracking-widest text-[var(--color-accent)] mb-3">
                  Tech Stack
                </p>
                <div className="flex flex-wrap gap-2">
                  {selectedExp.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-xs font-medium bg-[var(--color-surface)] text-[var(--color-foreground)] rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {selectedExp.links.length > 0 && (
                <div className="flex flex-wrap gap-2">
                  {selectedExp.links.map((link) => (
                    <a
                      key={link.label}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 bg-[var(--color-accent)] text-[var(--color-accent-text)] text-sm font-semibold rounded-full hover:bg-[var(--color-accent-hover)] transition-colors"
                    >
                      {link.label}
                      <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                      </svg>
                    </a>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
