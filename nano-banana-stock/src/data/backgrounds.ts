import { Option } from '../types';

export const BACKGROUNDS: Option[] = [
  // Nature
  { group:'Nature', id:'forest',    label:'Forest',          tags:['dense forest','sunlight through trees','lush green','misty atmosphere'] },
  { group:'Nature', id:'ocean',     label:'Ocean / Beach',   tags:['ocean waves','sandy beach','turquoise water','horizon line','coastal'] },
  { group:'Nature', id:'mountain',  label:'Mountain',        tags:['mountain landscape','dramatic peaks','alpine scenery','vast sky'] },
  { group:'Nature', id:'sky',       label:'Sky / Clouds',    tags:['open sky','dramatic clouds','atmospheric','wide horizon'] },
  { group:'Nature', id:'desert',    label:'Desert',          tags:['desert dunes','golden sand','vast emptiness','harsh sunlight','arid landscape'] },
  { group:'Nature', id:'snow',      label:'Snow Field',      tags:['snowy landscape','white expanse','frozen ground','soft winter light'] },
  { group:'Nature', id:'meadow',    label:'Meadow / Field',  tags:['open meadow','wildflowers','rolling hills','pastoral','golden hour grass'] },
  { group:'Nature', id:'waterfall', label:'Waterfall',       tags:['cascading waterfall','mist','lush rocks','flowing water','tropical'] },
  { group:'Nature', id:'cave',      label:'Cave / Grotto',   tags:['cave interior','stalactites','mysterious light','underground'] },
  { group:'Nature', id:'underwater',label:'Underwater',      tags:['underwater scene','coral reef','blue light','bubbles','ocean depth'] },
  { group:'Nature', id:'jungle',    label:'Jungle / Tropical',tags:['tropical jungle','dense foliage','humidity','exotic plants','dappled light'] },
  { group:'Nature', id:'lavender',  label:'Lavender Field',  tags:['lavender field','purple haze','Provence France','summer afternoon','floral landscape'] },
  // Urban
  { group:'Urban',  id:'citynight', label:'City Night',      tags:['city at night','neon reflections','urban landscape','skyscrapers','street lights'] },
  { group:'Urban',  id:'alley',     label:'Alley / Street',  tags:['narrow alley','urban texture','brick wall','street atmosphere','ambient light'] },
  { group:'Urban',  id:'cafe',      label:'Café Interior',   tags:['cozy café','warm lighting','wooden tables','coffee atmosphere','window light'] },
  { group:'Urban',  id:'library',   label:'Library',         tags:['library interior','bookshelves','warm reading light','scholarly','quiet atmosphere'] },
  { group:'Urban',  id:'market',    label:'Market / Bazaar', tags:['street market','colorful stalls','busy atmosphere','cultural setting','lanterns'] },
  { group:'Urban',  id:'studio',    label:'Studio / Minimal',tags:['clean studio','white background','professional lighting','minimal set'] },
  { group:'Urban',  id:'rooftop',   label:'Rooftop',         tags:['rooftop view','city panorama','golden hour','urban escape','skyline'] },
  { group:'Urban',  id:'subway',    label:'Subway / Metro',  tags:['subway station','urban transit','fluorescent light','tiled walls','commuter'] },
  // Abstract
  { group:'Abstract',id:'gradient', label:'Gradient',        tags:['smooth gradient background','color transition','soft blend','atmospheric color'] },
  { group:'Abstract',id:'bokeh',    label:'Bokeh',           tags:['bokeh background','defocused lights','shallow depth of field','dreamy blur'] },
  { group:'Abstract',id:'solid',    label:'Solid Color',     tags:['solid color background','clean','minimal','studio style'] },
  { group:'Abstract',id:'geometric',label:'Geometric Pattern',tags:['geometric pattern','repeating shapes','abstract design','graphic background'] },
  { group:'Abstract',id:'space',    label:'Space / Galaxy',  tags:['outer space','galaxy nebula','stars','cosmic','deep space','milky way'] },
  { group:'Abstract',id:'particles',label:'Particles / Dust',tags:['floating particles','dust motes','magical sparkles','ethereal','light beams'] },
  { group:'Abstract',id:'smoke',    label:'Smoke / Fog',     tags:['swirling smoke','fog atmosphere','mysterious','soft edges','ethereal mist'] },
  { group:'Abstract',id:'noisebg',  label:'Noise / Grain Texture',tags:['film grain texture','noise overlay','organic texture','subtle grain','tactile feel'] },
  // Special
  { group:'Special', id:'none',     label:'None / Transparent',tags:[] },
  { group:'Special', id:'white',    label:'Pure White',      tags:['pure white background','clean','isolated','product photo style'] },
  { group:'Special', id:'black',    label:'Pure Black',      tags:['black background','dark','isolated','high contrast'] },
];

