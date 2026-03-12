"use client";

import { usePromptStore } from "@/store/promptStore";
import { PRESETS } from "@/data/presets";
import { Preset } from "@/types";

export default function PresetList() {
  const { setPlatform, applyPreset, setWidth, setHeight, setFormat, setImageType, resetState } = usePromptStore();

  const handlePresetClick = (preset: Preset) => {
    // 1. 플랫폼 변경
    if (preset.platform !== "both") {
      setPlatform(preset.platform);
    }
    
    // 2. 상태 일괄 적용
    if (preset.state) {
      applyPreset(preset.state);
      
      // 명시적인 상태 변경
      if (preset.state.width) setWidth(preset.state.width as number);
      if (preset.state.height) setHeight(preset.state.height as number);
      if (preset.state.format) setFormat(preset.state.format as "JPG" | "PNG");
      if (preset.state.imageType) setImageType(preset.state.imageType as "Photo" | "Illustration" | "Background Texture" | "Object (PNG)");
    }
    
    // 스크롤 상단으로 이동하여 결과를 바로 볼 수 있게 함
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="flex flex-col gap-3 w-full">
      <div className="flex items-center justify-between px-1 mb-1">
        <h2 className="text-lg font-display font-bold text-text">추천 프리셋 (⚡ Quick Start)</h2>
        <button 
          onClick={resetState}
          className="text-xs font-bold text-muted hover:text-accent border border-border px-3 py-1.5 rounded-lg bg-surface hover:border-accent transition-all flex items-center gap-1 active:scale-95 shadow-sm"
        >
          <span className="text-sm">🔄</span>
          <span>초기화</span>
        </button>
      </div>
      <div className="flex overflow-x-auto gap-4 pb-4 scrollbar-hide snap-x">
        {PRESETS.map((preset) => (
          <button
            key={preset.id}
            onClick={() => handlePresetClick(preset)}
            className="flex flex-col items-start gap-1 min-w-[220px] w-[220px] p-5 bg-surface border border-border rounded-2xl hover:border-accent hover:shadow-[0_0_20px_rgba(255,235,59,0.1)] transition-all text-left snap-start group"
          >
            <div className="flex items-center justify-between w-full">
              <span className="text-4xl group-hover:scale-110 transition-transform origin-bottom-left">{preset.emoji}</span>
              <span className="text-[10px] font-bold text-muted bg-bg px-2 py-1 rounded-full border border-border">{preset.category}</span>
            </div>
            <span className="font-bold text-base mt-3 text-text group-hover:text-accent transition-colors">{preset.label}</span>
            <span className="text-xs text-muted line-clamp-2 mt-1 leading-relaxed">{preset.description}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
