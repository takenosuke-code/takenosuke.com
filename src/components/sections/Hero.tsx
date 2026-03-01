import { useEffect, useState, useRef } from "react";
import { gsap } from "gsap";

export function Hero() {
  const [displayText, setDisplayText] = useState("");
  const [typingDone, setTypingDone] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);

  const fullText = "Hi, I'm Takenosuke Nagata.";

  useEffect(() => {
    let i = 0;
    const typeInterval = setInterval(() => {
      if (i < fullText.length) {
        setDisplayText(fullText.slice(0, i + 1));
        i++;
      } else {
        clearInterval(typeInterval);
        setTypingDone(true);
      }
    }, 70);

    return () => clearInterval(typeInterval);
  }, []);

  useEffect(() => {
    if (typingDone && contentRef.current) {
      gsap.fromTo(
        contentRef.current.children,
        { opacity: 0, y: 10 },
        { opacity: 1, y: 0, duration: 0.4, stagger: 0.1, ease: "power2.out", delay: 0.2 }
      );
    }
  }, [typingDone]);

  const scrollToProjects = () => {
    const el = document.getElementById("projects");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="min-h-[50vh] flex flex-col justify-center px-6 py-16">
      <div className="max-w-2xl mx-auto w-full">
        <h1 className="text-xl md:text-2xl font-medium text-[var(--color-foreground)] mb-4">
          {displayText}
          <span className="typing-cursor" />
        </h1>

        <div ref={contentRef}>
          <p className="text-sm md:text-base text-[var(--color-foreground)] mb-3 opacity-0">
            CS @ UC Berkeley. Passionate about creating software to make people's lives better.
          </p>

          <p className="text-sm text-[var(--color-foreground)] mb-2 opacity-0">
            Previously @ Edwards Lifesciences, Anqa Life (Berkeley SkyDeck Batch 20)
          </p>

          <p className="text-sm text-[var(--color-foreground)] mb-6 opacity-0">
            Interests: Blockchain (L2, DeFi), Kernel Level Programming
          </p>

          <div className="flex flex-wrap items-center gap-4 opacity-0">
            <button
              onClick={scrollToProjects}
              className="inline-flex items-center gap-2 text-[var(--color-accent)] hover:underline text-sm"
            >
              View my portfolio
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </button>
            <a
              href="https://linkedin.com/in/takenagata"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--color-accent)] hover:underline text-sm"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/takenosuke-code"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--color-accent)] hover:underline text-sm"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
