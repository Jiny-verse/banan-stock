import { create } from 'zustand'
import { PlatformType } from '@/data/platformSpecs'

interface PromptState {
  isInitialized: boolean;
  platform: PlatformType;
  setPlatform: (platform: PlatformType) => void;

  width: number;
  height: number;
  format: "JPG" | "PNG";
  imageType: "Photo" | "Illustration" | "Background Texture" | "Object (PNG)";
  setWidth: (width: number) => void;
  setHeight: (height: number) => void;
  setFormat: (format: "JPG" | "PNG") => void;
  setImageType: (type: "Photo" | "Illustration" | "Background Texture" | "Object (PNG)") => void;

  selections: Record<string, string[]>;
  toggleSelection: (category: string, id: string, multiSelect?: boolean) => void;
  setSelection: (category: string, ids: string[]) => void;
  applyPreset: (presetState: Partial<PromptState>) => void;
  resetState: () => void;
}

export const usePromptStore = create<PromptState>((set) => ({
  isInitialized: false,
  platform: 'both',
  setPlatform: (platform) => set({ platform }),

  width: 2500,
  height: 2500,
  format: "JPG",
  imageType: "Photo",
  setWidth: (width) => set({ width }),
  setHeight: (height) => set({ height }),
  setFormat: (format) => set({ format }),
  setImageType: (type) => set({ imageType: type }),

  selections: {},
  toggleSelection: (category, id, multiSelect = false) => set((state) => {
    const current = state.selections[category] || [];
    if (current.includes(id)) {
      return { selections: { ...state.selections, [category]: current.filter(x => x !== id) } };
    }
    return { selections: { ...state.selections, [category]: multiSelect ? [...current, id] : [id] } };
  }),
  setSelection: (category, ids) => set((state) => ({
    selections: { ...state.selections, [category]: ids }
  })),
  applyPreset: (presetState) => set((state) => {
    const directKeys = ['width', 'height', 'format', 'imageType', 'platform', 'isInitialized'];
    const newSelections = { ...state.selections };
    const newState = { ...state };

    for (const [key, value] of Object.entries(presetState)) {
      if (directKeys.includes(key)) {
        (newState as Record<string, unknown>)[key] = value;
      } else {
        newSelections[key] = value as unknown as string[]; 
      }
    }

    newState.selections = newSelections;
    return newState;
  }),
  resetState: () => set((state) => ({
    ...state,
    width: 2500,
    height: 2500,
    format: "JPG",
    imageType: "Photo",
    selections: {},
  })),
}))
