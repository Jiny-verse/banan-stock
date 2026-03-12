"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

interface SectionToggleProps {
  id: string;
  title: string;
  count?: number; // 선택된 옵션 개수
  children: React.ReactNode;
  defaultOpen?: boolean;
}

export default function SectionToggle({ id, title, count = 0, children, defaultOpen = false }: SectionToggleProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div id={id} className="border border-border rounded-xl bg-surface overflow-hidden shadow-sm">
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-4 hover:bg-bg transition-colors"
      >
        <div className="flex items-center gap-3">
          <h3 className="font-display font-bold text-lg">{title}</h3>
          {count > 0 && (
            <span className="flex items-center justify-center bg-accent text-black text-xs font-bold min-w-[24px] h-[24px] px-2 rounded-full">
              {count}
            </span>
          )}
        </div>
        <div className={cn("transition-transform duration-300 text-muted-foreground", isOpen ? "rotate-180" : "rotate-0")}>
          ▼
        </div>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="p-4 border-t border-border bg-bg/50">
              {children}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
