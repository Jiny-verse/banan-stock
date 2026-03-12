export interface Option {
  id: string;
  label: string; // 한글 UI 표시
  tags: string[]; // 영어 프롬프트 태그
  group?: string; // 그룹 분류 (배경·피사체 등)
}

export interface StyleOption extends Option {
  camera?: boolean; // 카메라 섹션 트리거
  upscale?: boolean; // 업스케일 섹션 트리거
  autoNeg?: string[]; // 자동 네거티브 태그
}

export interface UseCaseOption extends Option {
  forceFormat?: "jpg" | "png";
  autoShotTypes?: string[];
  warning?: string;
}

export interface SeasonalEvent extends Option {
  month: string; // "January", "March–April" 등
  emoji: string;
}

export interface ColorTarget {
  id: string;
  label: string; // 한글: "머리카락 색상"
}

export interface PlatformSpec {
  minPx: number;
  maxPx: number;
  maxMB: number;
  formats: ("jpg" | "png")[];
  aiLabel: string;
  fictionalLabel?: string;
}

export type Platform = "adobe" | "miricanvas" | "both";
export type Format = "jpg" | "png";


export interface Preset {
  id: string;
  category: PresetCategory;
  label: string; // 한글 표시명
  description: string; // 한글 한 줄 설명
  emoji: string;
  platform: "adobe" | "miricanvas" | "both";
  state: Record<string, unknown>; // 자동 세팅될 상태값
}

export type PresetCategory =
  | "business" // 비즈니스 / 라이프스타일
  | "nature" // 자연 / 풍경
  | "food" // 음식 / 푸드스타일링
  | "fantasy" // 판타지 / 게임 일러스트
  | "sns" // SNS 감성 / 트렌디
  | "minimal" // 미니멀 / 텍스처 패턴
  | "seasonal" // 시즌·이벤트 특화
  | "tech";
