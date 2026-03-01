import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export function Contact() {
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.fromTo(
      contentRef.current,
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        duration: 0.5,
        ease: "power2.out",
        scrollTrigger: {
          trigger: contentRef.current,
          start: "top 90%",
        },
      }
    );
  }, []);

  return (
    <section className="py-16 md:py-20 px-6 border-t border-[var(--color-border)]">
      <div className="max-w-5xl mx-auto">
        <div ref={contentRef} className="opacity-0">
          <h2 className="text-xl font-semibold text-[var(--color-foreground)] mb-3">
            Let's connect
          </h2>

          <div className="flex flex-wrap gap-4">
            <a
              href="mailto:takenosuke.edu@gmail.com"
              className="text-[var(--color-accent)] hover:underline text-sm"
            >
              takenosuke.edu@gmail.com
            </a>
            <a
              href="https://linkedin.com/in/takenagata"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--color-foreground-muted)] hover:text-[var(--color-foreground)] text-sm transition-colors"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/takenosuke-code"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--color-foreground-muted)] hover:text-[var(--color-foreground)] text-sm transition-colors"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
