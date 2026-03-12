"use client";

import { usePromptStore } from "@/store/promptStore";
import SectionToggle from "./SectionToggle";
import OptionGrid from "./OptionGrid";

import { USE_CASES } from "@/data/useCases";
import { STYLES } from "@/data/styles";
import { BACKGROUNDS } from "@/data/backgrounds";
import { CAMERA_BODIES, CAMERA_LENSES, CAMERA_APERTURE } from "@/data/camera";
import { LIGHTING } from "@/data/lighting";
import { MOODS } from "@/data/moods";

export default function PromptBuilder() {
  const { selections } = usePromptStore();

  const getCount = (categories: string[]) => {
    return categories.reduce((sum, cat) => sum + (selections[cat]?.length || 0), 0);
  };

  // 배경 옵션을 group 속성 기준으로 분리
  const bgGroups = BACKGROUNDS.reduce((acc, bg) => {
    const key = bg.group || "기타";
    if (!acc[key]) acc[key] = [];
    acc[key].push(bg);
    return acc;
  }, {} as Record<string, typeof BACKGROUNDS>);

  return (
    <div className="flex flex-col gap-4 w-full">
      <SectionToggle
        id="usecase"
        title="사용 목적 (Use Case)"
        count={getCount(["usecases"])}
        defaultOpen
      >
        <OptionGrid category="usecases" options={USE_CASES} multiSelect={true} />
      </SectionToggle>

      <SectionToggle
        id="style"
        title="스타일 (Style / Aesthetic)"
        count={getCount(["styles"])}
      >
        <OptionGrid category="styles" options={STYLES} multiSelect={true} />
      </SectionToggle>

      <SectionToggle
        id="background"
        title="배경 (Background)"
        count={getCount(["backgrounds"])}
      >
        <div className="flex flex-col gap-6">
          {Object.entries(bgGroups).map(([group, opts]) => (
            <div key={group} className="space-y-2">
              <h4 className="text-sm font-bold text-muted px-1">{group}</h4>
              <OptionGrid category="backgrounds" options={opts} multiSelect={true} />
            </div>
          ))}
        </div>
      </SectionToggle>

      <SectionToggle
        id="camera"
        title="카메라 & 렌즈 (Camera & Lens)"
        count={getCount(["camera_bodies", "camera_lenses", "camera_apertures"])}
      >
        <div className="flex flex-col gap-6">
          <div className="space-y-2">
            <h4 className="text-sm font-bold text-muted px-1">바디 (Body)</h4>
            <OptionGrid category="camera_bodies" options={CAMERA_BODIES} multiSelect={false} />
          </div>
          <div className="space-y-2">
            <h4 className="text-sm font-bold text-muted px-1">렌즈 (Lens)</h4>
            <OptionGrid category="camera_lenses" options={CAMERA_LENSES} multiSelect={false} />
          </div>
          <div className="space-y-2">
            <h4 className="text-sm font-bold text-muted px-1">조리개 (Aperture)</h4>
            <OptionGrid category="camera_apertures" options={CAMERA_APERTURE} multiSelect={false} />
          </div>
        </div>
      </SectionToggle>

      <SectionToggle
        id="lighting"
        title="조명 (Lighting)"
        count={getCount(["lighting"])}
      >
        <OptionGrid category="lighting" options={LIGHTING} multiSelect={true} />
      </SectionToggle>
      
      <SectionToggle
        id="moods"
        title="분위기 (Mood & Emotion)"
        count={getCount(["moods"])}
      >
        <OptionGrid category="moods" options={MOODS} multiSelect={true} />
      </SectionToggle>
    </div>
  );
}
