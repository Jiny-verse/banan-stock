export const PLATFORM_SPECS = {
  adobe: {
    minPx: 2000, // ~4MP shortest side equivalent
    maxPx: 10000,
    maxMB: 45,
    formats: ["JPG"],
    colorSpace: "sRGB",
    aiLabel: 'Must check "Generative AI" on upload',
    fictionalLabel:
      'Must check "People and Property are Fictional" if no real subjects',
  },
  miricanvas: {
    minPx: 2500,
    maxPx: 9800,
    maxMB: 50,
    formats: ["JPG", "PNG"],
    colorSpace: "sRGB",
    aiLabel: "Must check AI image option on upload",
  },
  both: {
    minPx: 2500, // intersection: higher floor
    maxPx: 9800, // intersection: lower ceiling
    maxMB: 45, // intersection: lower cap
    formats: ["JPG"], // intersection: common format only
    colorSpace: "sRGB",
    aiLabel: "Both platforms require AI disclosure on upload",
    fictionalLabel: 'Adobe Stock: check "Fictional" if no real subjects',
  },
} as const;

export type PlatformType = keyof typeof PLATFORM_SPECS;
