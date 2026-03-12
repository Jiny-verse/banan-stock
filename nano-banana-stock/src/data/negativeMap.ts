import { Option } from '../types';

export const BASE_NEGATIVE: string[] = [
  'watermark','text overlay','signature','logo','border','frame',
  'blurry','low quality','pixelated','compression artifacts','jpeg artifacts',
  'oversaturated','overexposed','underexposed',
  'distorted anatomy','extra limbs','fused fingers','malformed hands',
  'ugly','deformed','mutilated','bad proportions',
  'duplicate','tiling artifact','stitching','grid pattern',
  'AI-looking','uncanny valley'
];

export const STYLE_NEGATIVE_MAP: Record<string, string[]> = {
  realistic:  ['illustration','cartoon','painting','CGI','digital art','3D render','anime','flat design'],
  cinematic:  ['flat lighting','overexposed','amateur photo','snapshot'],
  watercolor: ['photo','sharp edges','glossy','3D render','digital clean'],
  oilpaint:   ['photo','flat design','digital','clean lines','CGI'],
  digitalart: ['photo','simple','flat','low detail','amateur'],
  flatdesign: ['photo','realistic','3D','texture','noise','gradient shadow'],
  minimalist: ['cluttered','busy','complex','detailed','ornate','busy background'],
  vintage:    ['modern','bright neon','clean digital','sharp','oversaturated'],
  retrowave:  ['natural light','muted','vintage film','watercolor','realistic'],
  comic:      ['photo','realistic','subtle','muted','painterly'],
  anime:      ['realistic','photo','3D render','western comic style'],
  '3drender': ['flat','2D','hand drawn','painting','photo','watercolor'],
  isometric:  ['perspective distortion','front view','photo','realistic'],
  lineart:    ['color','painted','photo','3D','watercolor','messy'],
  sketch:     ['color','digital clean','photo','painted','perfect lines'],
  pixelart:   ['smooth','anti-aliased','realistic','high resolution photo'],
  surreal:    ['realistic','ordinary','simple','mundane','conventional'],
  impressionist:['sharp','photo','digital','flat','clean lines'],
  popart:     ['subtle','natural','muted','realistic photo','painterly'],
  bauhaus:    ['organic','decorative','ornate','photo','realistic'],
  artnouveau: ['modern','geometric','minimal','photo','digital','flat'],
  cyberpunk:  ['natural','daylight','pastoral','watercolor','vintage','clean'],
  cottagecore:['urban','dark','industrial','neon','futuristic','harsh'],
  darkfantasy:['bright','cheerful','simple','photo','flat','cute'],
  lofi:       ['harsh lighting','cold','industrial','sharp','photorealistic'],
};

