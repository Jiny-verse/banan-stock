"use client";

import { usePromptStore } from "@/store/promptStore";

export default function PlatformChecklist() {
  const { platform } = usePromptStore();

  if (platform === "both") return null;

  return (
    <div className="mt-3 text-xs text-muted/80 bg-bg p-3 rounded-lg border border-border flex items-start gap-2 shadow-sm">
      <span className="text-blue-400 text-sm mt-0.5">ℹ️</span>
      <p className="leading-snug">
        {platform === "adobe" 
          ? "Adobe Stock에 제출할 때는 반드시 'AI 생성 도구로 제작됨(Created using generative AI tools)' 옵션을 선택해야 합니다."
          : "미리캔버스에 제출할 때는 요소 속성에서 'AI 생성 요소'를 체크하고, 투명 배경(PNG)으로 업로드하는 것을 권장합니다."}
      </p>
    </div>
  );
}
