import { STYLES } from "@/data/styles";
import { BACKGROUNDS } from "@/data/backgrounds";
import { USE_CASES } from "@/data/useCases";
import { CAMERA_BODIES, CAMERA_LENSES, CAMERA_APERTURE } from "@/data/camera";
import { LIGHTING } from "@/data/lighting";
import { MOODS } from "@/data/moods";

import { Option } from "@/types";

export interface StoreState {
  selections: Record<string, string[]>;
  imageType: string;
  format: string;
}

const CATEGORY_MAP: Record<string, Option[]> = {
  usecases: USE_CASES,
  styles: STYLES,
  backgrounds: BACKGROUNDS,
  camera_bodies: CAMERA_BODIES,
  camera_lenses: CAMERA_LENSES,
  camera_apertures: CAMERA_APERTURE,
  lighting: LIGHTING,
  moods: MOODS,
};

export function generatePrompt(state: StoreState) {
  const { selections, imageType, format } = state;
  const tags: string[] = [];
  const negatives: string[] = [];

  // 1. 기본 이미지 타입 및 포맷
  tags.push(imageType);
  if (format === "PNG") {
    tags.push("transparent background", "isolated object", "clean edges");
  }

  // 2. 선택된 카테고리 태그 취합
  for (const [category, ids] of Object.entries(selections)) {
    const arr = CATEGORY_MAP[category] || [];
    for (const id of ids) {
      const opt = arr.find((o) => o.id === id);
      if (opt && opt.tags) {
        tags.push(...opt.tags);
      }
      
      // 자동 네거티브 태그 (Style 등)
      if (opt && (opt as any).autoNeg) {
        negatives.push(...(opt as any).autoNeg);
      }
    }
  }

  return {
    prompt: Array.from(new Set(tags)).filter(Boolean).join(", "),
    negativePrompt: Array.from(new Set(negatives)).filter(Boolean).join(", "),
  };
}
