export function Footer() {
  return (
    <footer className="py-6 px-6 border-t border-[var(--color-border)]">
      <div className="max-w-5xl mx-auto flex items-center justify-between">
        <p className="text-xs text-[var(--color-foreground-dim)]">
          &copy; {new Date().getFullYear()} Takenosuke Nagata
        </p>
      </div>
    </footer>
  );
}
