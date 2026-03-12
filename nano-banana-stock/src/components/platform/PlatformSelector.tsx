"use client";

import { usePromptStore } from "@/store/promptStore";
import { PLATFORM_SPECS, PlatformType } from "@/data/platformSpecs";
import { cn } from "@/lib/utils";

const PLATFORMS: { id: PlatformType; label: string }[] = [
  { id: "adobe", label: "Adobe Stock" },
  { id: "miricanvas", label: "Miricanvas" },
  { id: "both", label: "Both" },
];

export default function PlatformSelector() {
  const { platform, setPlatform } = usePromptStore();
  const spec = PLATFORM_SPECS[platform];

  return (
    <div className="flex flex-col gap-4 w-full">
      <div className="grid grid-cols-3 gap-3">
        {PLATFORMS.map((p) => (
          <button
            key={p.id}
            onClick={() => setPlatform(p.id)}
            className={cn(
              "p-4 rounded-xl border-2 text-center transition-all font-bold",
              platform === p.id
                ? "border-accent bg-accent text-black shadow-accent"
                : "border-border bg-surface text-text hover:border-muted"
            )}
          >
            {p.label}
          </button>
        ))}
      </div>
      
      <div className="flex flex-wrap gap-2 text-xs text-muted-foreground bg-surface p-3 rounded-lg border border-border">
        <span className="px-2 py-1 bg-bg rounded-md">📐 {spec.minPx}–{spec.maxPx}px</span>
        <span className="px-2 py-1 bg-bg rounded-md">💾 Max {spec.maxMB}MB</span>
        <span className="px-2 py-1 bg-bg rounded-md">🖼 {spec.formats.join("/")}</span>
        <span className="px-2 py-1 bg-bg rounded-md">🎨 {spec.colorSpace}</span>
        <span className="px-2 py-1 bg-bg rounded-md text-accent/80">⚠️ {spec.aiLabel}</span>
      </div>
    </div>
  );
}
