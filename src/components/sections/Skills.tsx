import { useEffect, useRef } from "react";
import { gsap } from "gsap";

const skillGroups = [
  {
    label: "Languages",
    items: ["TypeScript", "Python", "Solidity", "JavaScript", "HTML/CSS"],
  },
  {
    label: "Frameworks",
    items: ["React", "Next.js", "Vue", "FastAPI", "Node.js"],
  },
  {
    label: "Tools & Infra",
    items: ["Docker", "Vercel", "Supabase", "Hardhat", "Git"],
  },
  {
    label: "Domains",
    items: ["Blockchain / DeFi", "Computer Vision", "Full-Stack", "UI/UX"],
  },
];

export function Skills() {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const groups = contentRef.current?.querySelectorAll(".skill-group");
      if (groups) {
        gsap.fromTo(
          groups,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            stagger: 0.1,
            ease: "power2.out",
            scrollTrigger: { trigger: contentRef.current, start: "top 85%" },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="skills"
      className="py-16 md:py-20 px-6 border-t border-[var(--color-border)]"
    >
      <div ref={contentRef} className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-10">
        {skillGroups.map((group) => (
          <div key={group.label} className="skill-group opacity-0">
            <p className="text-[11px] font-semibold uppercase tracking-widest text-[var(--color-accent)] mb-3">
              {group.label}
            </p>
            <ul className="space-y-1.5">
              {group.items.map((item) => (
                <li
                  key={item}
                  className="text-[13px] text-[var(--color-foreground-muted)]"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
