"use client";

import { usePromptStore } from "@/store/promptStore";
import { generatePrompt } from "@/lib/promptEngine";
import { useState } from "react";
import { cn } from "@/lib/utils";
import PlatformChecklist from "./PlatformChecklist";

export default function ResultArea() {
  const state = usePromptStore();
  const [copied, setCopied] = useState(false);

  const { prompt, negativePrompt: negative } = generatePrompt({
    selections: state.selections,
    imageType: state.imageType,
    format: state.format,
  });

  const combinedPrompt = negative ? `${prompt} --no ${negative}` : prompt;

  const handleCopy = async () => {
    if (!combinedPrompt) return;
    await navigator.clipboard.writeText(combinedPrompt);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <>
      <div className="h-48" /> {/* 하단 고정 바가 가리지 않도록 여백 */}
      <div className="fixed bottom-0 left-0 right-0 bg-surface/90 backdrop-blur-xl border-t border-border p-4 shadow-[0_-10px_40px_rgba(0,0,0,0.1)] z-50 transition-all">
        <div className="max-w-4xl mx-auto flex flex-col gap-3">
          
          <div className="flex items-stretch gap-3 w-full">
            {/* 프롬프트 뷰어 (좌측) */}
            <div className="flex-1 flex flex-col gap-2">
              <div className="bg-bg border border-border rounded-lg p-3 relative group">
                <span className="text-[10px] font-bold text-accent absolute -top-1.5 left-3 bg-bg px-1 rounded border border-border">Positive</span>
                <p className="text-sm text-text font-mono break-all max-h-24 overflow-y-auto min-h-[40px] scrollbar-hide pr-2">
                  {prompt || "옵션을 선택하면 프롬프트가 자동 생성됩니다."}
                </p>
              </div>

              {negative && (
                <div className="bg-bg border border-border rounded-lg p-2 relative group opacity-90">
                  <span className="text-[10px] font-bold text-muted-foreground absolute -top-1.5 left-3 bg-bg px-1 rounded border border-border">Negative</span>
                  <p className="text-xs text-muted-foreground font-mono break-all max-h-16 overflow-y-auto scrollbar-hide pr-2">
                    {negative}
                  </p>
                </div>
              )}
            </div>

            {/* 통합 복사 버튼 (우측) */}
            <button
              onClick={handleCopy}
              className={cn(
                "w-28 flex flex-col items-center justify-center rounded-lg font-bold transition-all shadow-sm",
                copied ? "bg-green-500 text-white" : "bg-accent text-black hover:opacity-90 active:scale-95"
              )}
            >
              <span className="text-xl mb-1">{copied ? "✨" : "📋"}</span>
              <span className="text-sm">{copied ? "복사완료!" : "종합 복사"}</span>
            </button>
          </div>
          
          <PlatformChecklist />
        </div>
      </div>
    </>
  );
}
