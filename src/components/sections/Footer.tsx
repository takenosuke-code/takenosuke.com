export function Footer() {
  return (
    <footer className="py-6 px-6 text-center">
      <p className="text-xs text-[var(--color-foreground-muted)]">
        &copy; {new Date().getFullYear()} Takenosuke Nagata
      </p>
    </footer>
  );
}
