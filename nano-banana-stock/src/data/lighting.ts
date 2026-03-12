import { Option } from '../types';

export const LIGHTING: Option[] = [
  { id:'natural',    label:'Natural Light',          tags:['natural light','soft daylight','realistic illumination'] },
  { id:'golden',     label:'🌅 Golden Hour',          tags:['golden hour lighting','warm sunset light','long shadows','orange glow'] },
  { id:'blue',       label:'🌆 Blue Hour / Dusk',     tags:['blue hour lighting','dusk atmosphere','cool tones','twilight glow'] },
  { id:'studio',     label:'📸 Studio Lighting',      tags:['studio lighting','three-point light setup','professional photography lighting','softbox'] },
  { id:'dramatic',   label:'🎭 Dramatic / Chiaroscuro',tags:['dramatic lighting','chiaroscuro','strong shadow contrast','spotlight effect'] },
  { id:'backlit',    label:'🌟 Backlit / Rim Light',  tags:['backlit subject','rim lighting','silhouette effect','light halo'] },
  { id:'neon',       label:'💡 Neon / Artificial',    tags:['neon lighting','artificial glow','colored light','urban artificial light'] },
  { id:'candle',     label:'🕯️ Candlelight / Firelight',tags:['candlelight','warm flickering light','intimate glow','fire light'] },
  { id:'moonlight',  label:'🌙 Moonlight',            tags:['moonlight','cool blue night light','soft shadows','nocturnal glow'] },
  { id:'overcast',   label:'☁️ Overcast / Diffused',  tags:['overcast light','diffused soft shadows','even illumination','cloudy day'] },
  { id:'volumetric', label:'✨ Volumetric / God Rays', tags:['volumetric lighting','god rays','light beams through atmosphere','cinematic rays'] },
  { id:'bioluminescent',label:'🌊 Bioluminescent',    tags:['bioluminescent glow','natural blue-green light','magical underwater or forest light'] },
];

