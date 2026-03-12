"use client";

export default function Header() {
  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur-xl bg-bg/80 border-b border-border shadow-sm">
      <div className="container mx-auto max-w-4xl h-14 flex items-center justify-between px-4">
        <h1 className="font-display font-black text-xl tracking-tight flex items-center gap-2">
          <span className="text-2xl">🍌</span>
          <span className="text-accent drop-shadow-sm">Banana</span>
          <span className="text-text">Stock</span>
        </h1>
        <div className="flex items-center gap-3">
          <a
            href="https://github.com/Jiny-verse/banan-stock"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-mono text-muted border border-border px-3 py-1 rounded-full bg-surface hover:text-accent hover:border-accent transition-colors"
          >
            v1.0.0
          </a>
        </div>
      </div>
    </header>
  );
}
