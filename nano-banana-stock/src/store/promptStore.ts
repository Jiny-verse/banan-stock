import { create } from 'zustand'

interface PromptState {
  isInitialized: boolean;
}

export const usePromptStore = create<PromptState>((set) => ({
  isInitialized: false,
}))
