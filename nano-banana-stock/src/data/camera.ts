import { Option } from '../types';

export const CAMERA_BODIES: Option[] = [
  { id:'none',     label:'None (auto)',        tags: []},
  { id:'sonyA7',   label:'Sony A7R V',         tags: ['shot on Sony A7R V']},
  { id:'canonR5',  label:'Canon EOS R5',       tags: ['shot on Canon EOS R5']},
  { id:'nikonZ9',  label:'Nikon Z9',           tags: ['shot on Nikon Z9']},
  { id:'fujiXT5',  label:'Fujifilm X-T5',      tags: ['shot on Fujifilm X-T5']},
  { id:'leica',    label:'Leica M11',          tags: ['shot on Leica M11']},
  { id:'hasselblad',label:'Hasselblad X2D',   tags: ['shot on Hasselblad X2D 100C']},
  { id:'phase1',   label:'Phase One IQ4',      tags: ['shot on Phase One IQ4 150MP']},
  { id:'iphone',   label:'iPhone 15 Pro',      tags: ['shot on iPhone 15 Pro']},
  { id:'film35',   label:'35mm Film Camera',   tags: ['35mm film photography']},
  { id:'medium',   label:'Medium Format',      tags: ['medium format photography']},
  { id:'pinhole',  label:'Pinhole Camera',     tags: ['pinhole camera photography','dreamy vignette']},
  { id:'drone',    label:'Drone / Aerial',     tags: ['aerial drone photography','bird\'s eye view']},
];

export const CAMERA_LENSES: Option[] = [
  { id:'none',     label:'None (auto)',         tags: []},
  { id:'35mm',     label:'35mm (Cinematic)',    tags: ['35mm lens']},
  { id:'50mm',     label:'50mm (Natural)',      tags: ['50mm prime lens']},
  { id:'85mm',     label:'85mm (Portrait)',     tags: ['85mm portrait lens','f1.4']},
  { id:'135mm',    label:'135mm (Compressed)',  tags: ['135mm telephoto lens']},
  { id:'24mm',     label:'24mm (Wide)',         tags: ['24mm wide angle lens']},
  { id:'14mm',     label:'14mm (Ultra Wide)',   tags: ['14mm ultra wide lens']},
  { id:'macro',    label:'Macro',               tags: ['macro lens','extreme close-up','1:1 magnification']},
  { id:'fish',     label:'Fisheye',             tags: ['fisheye lens','distorted perspective','180 degree']},
  { id:'tilt',     label:'Tilt-Shift',          tags: ['tilt-shift lens','miniature effect','selective focus']},
];

export const CAMERA_APERTURE: Option[] = [
  { id:'none', label:'None', tags: [] },
  { id:'f1',   label:'f/1.2 (Dreamy blur)',  tags: ['f/1.2','extreme bokeh','creamy background blur']},
  { id:'f14',  label:'f/1.4',               tags: ['f/1.4','shallow depth of field']},
  { id:'f18',  label:'f/1.8',               tags: ['f/1.8']},
  { id:'f28',  label:'f/2.8',               tags: ['f/2.8']},
  { id:'f8',   label:'f/8 (Sharp all)',      tags: ['f/8','deep focus','everything sharp']},
  { id:'f16',  label:'f/16 (Landscape)',     tags: ['f/16','infinite depth of field']},
];

export const UPSCALE_OPTIONS: Option[] = [
  { id:'none',       label:'None', tags: [] },
  { id:'topaz',      label:'Topaz Gigapixel AI',    tags:['upscaled with Topaz Gigapixel AI','enhanced detail'] },
  { id:'real_esrgan',label:'Real-ESRGAN x4',        tags:['4x upscaled','Real-ESRGAN enhanced','high resolution'] },
  { id:'generic',    label:'Generic Upscale Tags',   tags:['AI upscaled','enhanced resolution','8K equivalent','ultra sharp detail'] },
];

