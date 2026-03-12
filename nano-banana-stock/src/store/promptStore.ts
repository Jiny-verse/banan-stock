import { create } from 'zustand'
import { PlatformType } from '@/data/platformSpecs'

interface PromptState {
  isInitialized: boolean;
  platform: PlatformType;
  setPlatform: (platform: PlatformType) => void;
}

export const usePromptStore = create<PromptState>((set) => ({
  isInitialized: false,
  platform: 'both',
  setPlatform: (platform) => set({ platform }),
}))
