"use client";

import { usePromptStore } from "@/store/promptStore";
import { PLATFORM_SPECS } from "@/data/platformSpecs";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";

const RATIOS = [
  { label: "1:1", w: 1, h: 1 },
  { label: "4:3", w: 4, h: 3 },
  { label: "3:4", w: 3, h: 4 },
  { label: "16:9", w: 16, h: 9 },
  { label: "9:16", w: 9, h: 16 },
  { label: "3:2", w: 3, h: 2 },
  { label: "2:3", w: 2, h: 3 },
  { label: "Free", w: 0, h: 0 },
];

const IMAGE_TYPES = [
  "Photo",
  "Illustration",
  "Background Texture",
  "Object (PNG)",
] as const;

export default function SpecSettings() {
  const {
    platform,
    width,
    height,
    setWidth,
    setHeight,
    format,
    setFormat,
    imageType,
    setImageType,
  } = usePromptStore();

  const spec = PLATFORM_SPECS[platform];
  const [ratio, setRatio] = useState<string>("1:1"); // Default to 1:1

  // 플랫폼 변경 시 스펙 보정
  useEffect(() => {
    let newWidth = width;
    let newHeight = height;
    
    if (width < spec.minPx) newWidth = spec.minPx;
    if (width > spec.maxPx) newWidth = spec.maxPx;
    if (height < spec.minPx) newHeight = spec.minPx;
    if (height > spec.maxPx) newHeight = spec.maxPx;
    
    if (newWidth !== width) setWidth(newWidth);
    if (newHeight !== height) setHeight(newHeight);
    
    if (platform === "adobe" && format === "PNG") {
      setFormat("JPG");
    }
  }, [platform, spec.minPx, spec.maxPx, width, height, format, setWidth, setHeight, setFormat]);

  const handleRatioClick = (r: typeof RATIOS[0]) => {
    setRatio(r.label);
    if (r.w === 0) return;

    let targetW: number = spec.maxPx;
    let targetH: number = Math.round((targetW * r.h) / r.w);

    if (targetH > spec.maxPx) {
      targetH = spec.maxPx;
      targetW = Math.round((targetH * r.w) / r.h);
    }
    
    if (targetW < spec.minPx || targetH < spec.minPx) {
      if (r.w > r.h) {
        targetH = spec.minPx;
        targetW = Math.round((targetH * r.w) / r.h);
      } else {
        targetW = spec.minPx;
        targetH = Math.round((targetW * r.h) / r.w);
      }
    }

    setWidth(Math.min(spec.maxPx, Math.max(spec.minPx, targetW)));
    setHeight(Math.min(spec.maxPx, Math.max(spec.minPx, targetH)));
  };

  const handleWidthChange = (val: number) => {
    setWidth(val);
    setRatio("Free");
  };

  const handleHeightChange = (val: number) => {
    setHeight(val);
    setRatio("Free");
  };

  return (
    <div className="flex flex-col gap-6 w-full bg-surface border border-border rounded-xl p-5 shadow-lg">
      <h2 className="text-lg font-display font-bold border-b border-border pb-2">이미지 스펙 설정</h2>
      
      {/* 해상도 섹션 */}
      <div className="space-y-4">
        <label className="text-sm font-bold text-muted-foreground">해상도 & 비율</label>
        
        <div className="flex flex-wrap gap-2">
          {RATIOS.map((r) => (
            <button
              key={r.label}
              onClick={() => handleRatioClick(r)}
              className={cn(
                "px-3 py-1.5 rounded-lg text-sm transition-all font-bold",
                ratio === r.label
                  ? "bg-accent text-black shadow-accent"
                  : "bg-bg text-muted-foreground hover:text-text border border-border"
              )}
            >
              {r.label}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-2 gap-6">
          <div className="flex flex-col gap-2">
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">가로 (Width)</span>
              <span className="font-mono text-accent">{width}px</span>
            </div>
            <input
              type="range"
              min={spec.minPx}
              max={spec.maxPx}
              step={10}
              value={width}
              onChange={(e) => handleWidthChange(Number(e.target.value))}
              className="accent-accent cursor-pointer"
            />
            <input
              type="number"
              min={spec.minPx}
              max={spec.maxPx}
              value={width}
              onChange={(e) => handleWidthChange(Number(e.target.value))}
              className="bg-bg border border-border rounded-lg px-3 py-2 text-sm font-mono focus:border-accent outline-none"
            />
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">세로 (Height)</span>
              <span className="font-mono text-accent">{height}px</span>
            </div>
            <input
              type="range"
              min={spec.minPx}
              max={spec.maxPx}
              step={10}
              value={height}
              onChange={(e) => handleHeightChange(Number(e.target.value))}
              className="accent-accent cursor-pointer"
            />
            <input
              type="number"
              min={spec.minPx}
              max={spec.maxPx}
              value={height}
              onChange={(e) => handleHeightChange(Number(e.target.value))}
              className="bg-bg border border-border rounded-lg px-3 py-2 text-sm font-mono focus:border-accent outline-none"
            />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4 border-t border-border">
        {/* 포맷 섹션 */}
        <div className="space-y-3">
          <label className="text-sm font-bold text-muted-foreground">출력 포맷</label>
          <div className="flex gap-4">
            <label className="flex items-center gap-2 cursor-pointer pr-4">
              <input
                type="radio"
                name="format"
                value="JPG"
                checked={format === "JPG"}
                onChange={() => setFormat("JPG")}
                className="accent-accent w-4 h-4 cursor-pointer"
              />
              <span className="text-sm">JPG</span>
            </label>
            <label
              className={cn(
                "flex items-center gap-2 pr-4 text-sm",
                platform === "adobe" ? "opacity-50 cursor-not-allowed" : "cursor-pointer"
              )}
              title={platform === "adobe" ? "Adobe Stock은 JPG만 지원합니다." : ""}
            >
              <input
                type="radio"
                name="format"
                value="PNG"
                checked={format === "PNG"}
                disabled={platform === "adobe"}
                onChange={() => setFormat("PNG")}
                className="accent-accent w-4 h-4 cursor-pointer"
              />
              <span>PNG (투명 배경)</span>
            </label>
          </div>
        </div>

        {/* 이미지 타입 섹션 */}
        <div className="space-y-3">
          <label className="text-sm font-bold text-muted-foreground">기본 이미지 타입</label>
          <div className="flex flex-col gap-2">
            {IMAGE_TYPES.map((t) => (
              <label key={t} className="flex items-center gap-2 cursor-pointer text-sm">
                <input
                  type="radio"
                  name="imageType"
                  value={t}
                  checked={imageType === t}
                  onChange={() => setImageType(t as "Photo" | "Illustration" | "Background Texture" | "Object (PNG)")}
                  className="accent-accent w-4 h-4 cursor-pointer"
                />
                <span>{t}</span>
              </label>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
