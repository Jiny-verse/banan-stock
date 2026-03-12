"use client";

import { usePromptStore } from "@/store/promptStore";
import { generatePrompt } from "@/lib/promptEngine";
import { useState } from "react";
import { cn } from "@/lib/utils";
import PlatformChecklist from "./PlatformChecklist";

export default function ResultArea() {
  const state = usePromptStore();
  const [copiedP, setCopiedP] = useState(false);
  const [copiedN, setCopiedN] = useState(false);

  const { prompt, negativePrompt: negative } = generatePrompt({
    selections: state.selections,
    imageType: state.imageType,
    format: state.format,
  });

  const handleCopy = async (text: string, type: "prompt" | "negative") => {
    if (!text) return;
    await navigator.clipboard.writeText(text);
    if (type === "prompt") {
      setCopiedP(true);
      setTimeout(() => setCopiedP(false), 2000);
    } else {
      setCopiedN(true);
      setTimeout(() => setCopiedN(false), 2000);
    }
  };

  return (
    <>
      <div className="h-48" /> {/* 하단 고정 바가 가리지 않도록 여백 */}
      <div className="fixed bottom-0 left-0 right-0 bg-surface/90 backdrop-blur-xl border-t border-border p-4 shadow-[0_-10px_40px_rgba(0,0,0,0.1)] z-50 transition-all">
        <div className="max-w-4xl mx-auto flex flex-col gap-3">
          {/* 긍정 프롬프트 영역 */}
          <div className="flex items-start gap-3 w-full">
            <div className="flex-1 bg-bg border border-border rounded-lg p-3 relative group">
              <span className="text-xs font-bold text-accent absolute -top-2 left-3 bg-bg px-1 rounded">Prompt</span>
              <p className="text-sm text-text font-mono break-all line-clamp-2 min-h-[40px]">
                {prompt || "옵션을 선택하면 프롬프트가 자동 생성됩니다."}
              </p>
            </div>
            <button
              onClick={() => handleCopy(prompt, "prompt")}
              className={cn(
                "h-full min-h-[66px] px-6 rounded-lg font-bold transition-all whitespace-nowrap",
                copiedP ? "bg-green-500 text-white" : "bg-accent text-black hover:opacity-90 active:scale-95"
              )}
            >
              {copiedP ? "복사완료!" : "Copy"}
            </button>
          </div>

          {/* 부정 프롬프트 영역 (존재할 때만 표시) */}
          {negative && (
            <div className="flex items-start gap-3 w-full opacity-80 scale-95 origin-left">
              <div className="flex-1 bg-bg border-border rounded-lg p-2 relative group">
                <span className="text-[10px] font-bold text-muted absolute -top-1.5 left-3 bg-bg px-1 rounded border border-border">Negative</span>
                <p className="text-xs text-muted font-mono break-all line-clamp-1">
                  {negative}
                </p>
              </div>
              <button
                onClick={() => handleCopy(negative, "negative")}
                className={cn(
                  "px-4 rounded-lg font-bold text-xs transition-all border",
                  copiedN ? "border-green-500 text-green-500" : "border-border text-muted hover:text-text"
                )}
              >
                {copiedN ? "복사됨!" : "Copy Neg"}
              </button>
            </div>
          )}
          
          <PlatformChecklist />
        </div>
      </div>
    </>
  );
}
