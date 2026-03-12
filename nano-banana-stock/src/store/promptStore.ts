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
}))
