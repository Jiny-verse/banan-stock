"use client";

import { usePromptStore } from "@/store/promptStore";
import { Option } from "@/types";
import { cn } from "@/lib/utils";

interface OptionGridProps {
  category: string;
  options: Option[];
  multiSelect?: boolean;
}

export default function OptionGrid({ category, options, multiSelect = false }: OptionGridProps) {
  const { selections, toggleSelection } = usePromptStore();
  const currentSelections = selections[category] || [];

  return (
    <div className="flex flex-wrap gap-2">
      {options.map((opt) => {
        const isSelected = currentSelections.includes(opt.id);
        return (
          <button
            key={opt.id}
            onClick={() => toggleSelection(category, opt.id, multiSelect)}
            className={cn(
              "px-3 py-1.5 rounded-full text-sm font-semibold transition-all border",
              isSelected
                ? "bg-accent border-accent text-black shadow-md shadow-accent/20"
                : "bg-surface border-border text-muted hover:border-accent/50 hover:text-text"
            )}
          >
            {opt.label}
          </button>
        );
      })}
    </div>
  );
}
