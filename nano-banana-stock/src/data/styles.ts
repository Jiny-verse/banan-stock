import { StyleOption } from '../types';

export const STYLES: StyleOption[] = [
  {
    id:'realistic', label:'Realistic / Photography',
    tags:['RAW photo','photorealistic','highly detailed','sharp focus','8K'],
    camera:true,   // triggers CAMERA section
    upscale:true,  // triggers upscale tags
    autoNeg:['illustration','cartoon','painting','CGI','digital art','3D render','anime']
  },
  {
    id:'cinematic', label:'Cinematic',
    tags:['cinematic photography','anamorphic lens flare','film grain','color graded','35mm film','cinematic lighting','2.35:1'],
    camera:true,
    autoNeg:['flat lighting','overexposed','amateur photo']
  },
  {
    id:'watercolor', label:'Watercolor',
    tags:['watercolor painting','soft washes','paper texture','loose brushwork','translucent layers','artistic'],
    autoNeg:['photo','3D render','digital art','sharp edges','glossy']
  },
  {
    id:'oilpaint', label:'Oil Painting',
    tags:['oil painting','impasto texture','rich colors','canvas texture','old master technique','painterly'],
    autoNeg:['photo','flat design','digital','clean lines']
  },
  {
    id:'digitalart', label:'Digital Art / Concept Art',
    tags:['digital painting','concept art','highly detailed','ArtStation trending','dramatic lighting','fantasy illustration'],
    autoNeg:['photo','simple','flat','low detail']
  },
  {
    id:'flatdesign', label:'Flat Design',
    tags:['flat design','vector style','clean lines','solid colors','geometric shapes','minimal shadows','scalable'],
    autoNeg:['photo','realistic','3D','gradient','texture','noise']
  },
  {
    id:'minimalist', label:'Minimalist',
    tags:['minimalist','negative space','clean composition','few elements','simple palette','elegant'],
    autoNeg:['cluttered','busy','complex','detailed','ornate']
  },
  {
    id:'vintage', label:'Vintage / Retro',
    tags:['vintage aesthetic','retro color palette','aged texture','faded tones','nostalgic','grain overlay','muted colors'],
    autoNeg:['modern','bright neon','clean digital','sharp']
  },
  {
    id:'retrowave', label:'Retrowave / Synthwave',
    tags:['synthwave','retrowave','neon colors','80s aesthetic','grid lines','sunset gradient','cyberpunk vibes','glowing outlines'],
    autoNeg:['natural light','muted','vintage film','watercolor']
  },
  {
    id:'comic', label:'Comic / Manga',
    tags:['comic book style','bold outlines','halftone dots','dynamic pose','speech bubble space','vibrant flat colors'],
    autoNeg:['photo','realistic','subtle','muted']
  },
  {
    id:'anime', label:'Anime / Illustration',
    tags:['anime style','cel shading','clean lineart','vibrant colors','manga-inspired','studio ghibli aesthetic'],
    autoNeg:['realistic','photo','3D render','western comic']
  },
  {
    id:'3drender', label:'3D Render',
    tags:['3D render','octane render','cinema4D','ray tracing','subsurface scattering','global illumination','studio lighting','ultra realistic 3D'],
    autoNeg:['flat','2D','hand drawn','painting','photo']
  },
  {
    id:'isometric', label:'Isometric',
    tags:['isometric view','45 degree angle','3D isometric illustration','clean geometry','flat shading','architectural illustration'],
    autoNeg:['perspective','front view','photo','realistic']
  },
  {
    id:'lineart', label:'Line Art',
    tags:['line art','black and white','clean outlines','minimal shading','pen illustration','technical drawing style'],
    autoNeg:['color','painted','photo','3D','watercolor']
  },
  {
    id:'sketch', label:'Sketch / Pencil',
    tags:['pencil sketch','hand drawn','rough lines','graphite texture','sketchbook style','loose illustration'],
    autoNeg:['color','digital clean','photo','painted']
  },
  {
    id:'pixelart', label:'Pixel Art',
    tags:['pixel art','8-bit style','retro game aesthetic','pixelated','low resolution art','sprite style'],
    autoNeg:['smooth','anti-aliased','realistic','high resolution','photo']
  },
  {
    id:'surreal', label:'Surrealism',
    tags:['surrealist','dreamlike','impossible scene','Salvador Dali inspired','melting reality','metaphysical','uncanny'],
    autoNeg:['realistic','ordinary','simple','mundane']
  },
  {
    id:'impressionist', label:'Impressionism',
    tags:['impressionist painting','loose brushstrokes','plein air','Monet style','dappled light','painterly texture'],
    autoNeg:['sharp','photo','digital','flat','clean lines']
  },
  {
    id:'popart', label:'Pop Art',
    tags:['pop art','Andy Warhol style','bold primary colors','halftone pattern','graphic','high contrast','screened print'],
    autoNeg:['subtle','natural','muted','realistic photo']
  },
  {
    id:'bauhaus', label:'Bauhaus / Geometric',
    tags:['Bauhaus design','primary colors','geometric shapes','grid composition','functional art','typographic influence'],
    autoNeg:['organic','decorative','ornate','photo']
  },
  {
    id:'artnouveau', label:'Art Nouveau',
    tags:['Art Nouveau','organic flowing lines','floral motifs','decorative border','Belle Époque','ornamental'],
    autoNeg:['modern','geometric','minimal','photo','digital']
  },
  {
    id:'cyberpunk', label:'Cyberpunk',
    tags:['cyberpunk','neon lights','rain-slicked streets','dystopian','futuristic city','holographic','tech noir'],
    autoNeg:['natural','daylight','pastoral','watercolor','vintage']
  },
  {
    id:'cottagecore', label:'Cottagecore',
    tags:['cottagecore','soft pastoral','wildflowers','cozy interior','warm light','rustic','nature aesthetic','fairytale'],
    autoNeg:['urban','dark','industrial','neon','futuristic']
  },
  {
    id:'darkfantasy', label:'Dark Fantasy',
    tags:['dark fantasy','gothic atmosphere','dramatic shadows','mythical creatures','moody lighting','epic scale'],
    autoNeg:['bright','cheerful','simple','photo','flat']
  },
  {
    id:'lofi', label:'Lo-Fi / Cozy',
    tags:['lo-fi aesthetic','cozy atmosphere','warm tones','anime study scene','soft glow','night window','rainy day'],
    autoNeg:['harsh lighting','cold','industrial','sharp','photorealistic']
  },
];

