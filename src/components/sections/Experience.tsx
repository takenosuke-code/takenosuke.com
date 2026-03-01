import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { experiences, type Experience } from "../../data/projects";

export function Experience() {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  const [selectedExp, setSelectedExp] = useState<Experience | null>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        headerRef.current,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          ease: "power2.out",
          scrollTrigger: {
            trigger: headerRef.current,
            start: "top 90%",
          },
        }
      );

      const cards = cardsRef.current?.querySelectorAll(".experience-card");
      if (cards) {
        gsap.fromTo(
          cards,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.5,
            stagger: 0.1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: cardsRef.current,
              start: "top 85%",
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    if (selectedExp) {
      gsap.fromTo(overlayRef.current, { opacity: 0 }, { opacity: 1, duration: 0.2 });
      gsap.fromTo(modalRef.current, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.3, delay: 0.05 });
      document.body.style.overflow = "hidden";

      const handleEsc = (e: KeyboardEvent) => { if (e.key === "Escape") handleClose(); };
      window.addEventListener("keydown", handleEsc);
      return () => {
        document.body.style.overflow = "";
        window.removeEventListener("keydown", handleEsc);
      };
    }
  }, [selectedExp]);

  const handleClose = () => {
    gsap.to(overlayRef.current, { opacity: 0, duration: 0.15 });
    gsap.to(modalRef.current, { opacity: 0, y: 10, duration: 0.15, onComplete: () => setSelectedExp(null) });
  };

  return (
    <>
      <section
        ref={sectionRef}
        id="experience"
        className="py-16 md:py-20 px-6"
      >
        <div className="max-w-5xl mx-auto">
          <div ref={headerRef} className="mb-10 opacity-0">
            <h2 className="text-2xl md:text-3xl font-semibold text-[var(--color-foreground)]">
              Experience
            </h2>
          </div>

          <div
            ref={cardsRef}
            className="grid grid-cols-1 md:grid-cols-2 gap-5"
          >
            {experiences.map((exp) => (
              <div
                key={exp.slug}
                onClick={() => setSelectedExp(exp)}
                className="experience-card cursor-pointer bg-[var(--color-card)] rounded-xl border border-[var(--color-border)] hover:border-[var(--color-foreground-muted)]/50 transition-all duration-200 p-5 group"
              >
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <h3 className="text-base font-semibold text-[var(--color-foreground)]">
                      {exp.company}
                    </h3>
                    <p className="text-xs text-[var(--color-foreground-muted)]">
                      {exp.role} · {exp.location}
                    </p>
                  </div>
                  <svg className="w-4 h-4 text-[var(--color-foreground-muted)] group-hover:text-[var(--color-foreground)] transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
                  </svg>
                </div>

                <p className="text-sm text-[var(--color-foreground-muted)] mb-3">
                  {exp.description}
                </p>

                <div className="flex flex-wrap gap-1.5">
                  {exp.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-0.5 text-xs bg-[var(--color-background-secondary)] text-[var(--color-foreground-muted)] rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {selectedExp && (
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
            <div className="p-6">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h2 className="text-xl font-semibold text-[var(--color-foreground)]">
                    {selectedExp.company}
                  </h2>
                  <p className="text-sm text-[var(--color-foreground-muted)]">
                    {selectedExp.role} · {selectedExp.location}
                  </p>
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

              <p className="text-sm text-[var(--color-foreground-muted)] leading-relaxed whitespace-pre-line mb-5">
                {selectedExp.longDescription}
              </p>

              <div className="mb-5">
                <p className="text-xs font-medium text-[var(--color-foreground-muted)] uppercase tracking-wide mb-2">
                  Tech Stack
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {selectedExp.technologies.map((tech) => (
                    <span key={tech} className="px-2.5 py-1 text-xs bg-[var(--color-background-secondary)] text-[var(--color-foreground)] rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex flex-wrap gap-3">
                {selectedExp.links.map((link) => (
                  <a
                    key={link.label}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-[var(--color-accent)] text-white text-sm font-medium rounded-lg hover:opacity-90 transition-opacity"
                  >
                    {link.label}
                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
