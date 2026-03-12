import { Option } from '../types';

export const CHAR_AGES: Option[] = [
  { id:'baby',     label:'아기 / 유아',       tags:['baby','infant','toddler character'] },
  { id:'child',    label:'어린이 (5–10세)',    tags:['young child character','elementary age'] },
  { id:'teen',     label:'청소년 (11–17세)',   tags:['teenager','adolescent character','teen'] },
  { id:'young',    label:'청년 (18–29세)',     tags:['young adult','twenties'] },
  { id:'adult',    label:'성인 (30–49세)',     tags:['adult character','thirties to forties'] },
  { id:'middle',   label:'중년 (50–64세)',     tags:['middle-aged character','fifties'] },
  { id:'elder',    label:'노년 (65세+)',       tags:['elderly character','senior','aged face'] },
];

export const BODY_TYPES: Option[] = [
  { id:'slim',     label:'슬림 / 날씬함',      tags:['slim figure','slender build'] },
  { id:'athletic', label:'근육질 / 탄탄함',     tags:['athletic build','muscular figure','toned body'] },
  { id:'curvy',    label:'글래머 / 곡선형',     tags:['curvy figure','hourglass shape'] },
  { id:'chubby',   label:'통통함 / 귀여운 체형', tags:['chubby figure','round cute body proportions'] },
  { id:'tall',     label:'키 크고 마름',        tags:['tall and slender','long limbs'] },
  { id:'petite',   label:'소녀체형 / 작고 날씬', tags:['petite figure','small and slim'] },
  { id:'chibi',    label:'치비 / SD 비율',      tags:['chibi proportions','super deformed style','2-3 head ratio','cute oversized head'] },
  { id:'buff',     label:'건장함 / 대근육',      tags:['heavily muscular','large build','powerful physique'] },
];

export const FANTASY_TRAITS: Option[] = [
  { id:'none',     label:'없음 (인간)',          tags:[] },
  { id:'elf',      label:'엘프 귀',              tags:['pointed elf ears','long elegant ears','fantasy elf'] },
  { id:'demon',    label:'악마 뿔 / 꼬리',       tags:['demon horns','devil tail','demonic character'] },
  { id:'angel',    label:'천사 날개',            tags:['angel wings','white feathered wings','divine halo'] },
  { id:'beastkin', label:'수인 (짐승 귀·꼬리)',  tags:['beast ears','animal tail','kemonomimi','anthro character'] },
  { id:'dragon',   label:'용인 (비늘·뿔)',       tags:['dragon scales on skin','dragon horns','draconic features'] },
  { id:'fairy',    label:'요정 (작은 날개)',      tags:['fairy wings','tiny translucent wings','fairy character'] },
  { id:'mermaid',  label:'인어',                tags:['mermaid tail','fish scales lower body','underwater creature'] },
  { id:'undead',   label:'언데드 / 뱀파이어',    tags:['undead appearance','pale vampire','dark circles','fang teeth'] },
  { id:'witch',    label:'마법사 / 마녀',        tags:['witch hat','magical girl','sorceress aesthetic'] },
  { id:'robot',    label:'안드로이드 / 사이보그', tags:['android character','cybernetic body parts','robot aesthetic','mechanical joints'] },
  { id:'alien',    label:'외계인',               tags:['alien character','otherworldly features','non-human skin color'] },
];

export const EYE_STYLES: Option[] = [
  { id:'realistic',  label:'실사 눈',              tags:['realistic eyes','detailed iris','natural eye shape'] },
  { id:'anime_big',  label:'크고 반짝이는 애니 눈', tags:['large anime eyes','sparkling eyes','big pupils','shiny highlights in eyes'] },
  { id:'sharp',      label:'샤프 / 날카로운 눈매',  tags:['sharp almond eyes','feline eye shape','intense gaze'] },
  { id:'soft',       label:'부드럽고 동그란 눈',    tags:['soft round eyes','gentle doe eyes','innocent eye shape'] },
  { id:'hetero',     label:'오드아이 (좌우 다른 색)', tags:['heterochromia','two different colored eyes','odd eyes'] },
  { id:'glowing',    label:'빛나는 / 마법 눈',      tags:['glowing eyes','luminous iris','magical eye glow'] },
  { id:'slit',       label:'세로 동공 (고양이·용)',  tags:['slit pupils','cat-like eyes','draconic eye'] },
  { id:'half_closed',label:'반쯤 감긴 졸린 눈',     tags:['half-lidded eyes','sleepy expression','droopy eyes'] },
];

export const HAIR_COLORS: Option[] = [
  { id:'blonde',    label:'Blonde',          tags:['blonde hair'] },
  { id:'platinum',  label:'Platinum / White', tags:['platinum blonde hair','white hair'] },
  { id:'brunette',  label:'Brunette / Brown', tags:['dark brown hair'] },
  { id:'black',     label:'Black',           tags:['black hair'] },
  { id:'red',       label:'Red / Auburn',    tags:['red hair','auburn'] },
  { id:'ginger',    label:'Ginger',          tags:['ginger hair'] },
  { id:'gray',      label:'Gray / Silver',   tags:['silver gray hair'] },
  { id:'blue',      label:'Blue (dyed)',      tags:['blue dyed hair','vivid blue hair'] },
  { id:'pink',      label:'Pink (dyed)',      tags:['pink dyed hair','pastel pink hair'] },
  { id:'purple',    label:'Purple (dyed)',    tags:['purple dyed hair'] },
  { id:'green',     label:'Green (dyed)',     tags:['green dyed hair'] },
  { id:'ombre',     label:'Ombre / Balayage', tags:['ombre hair','balayage','gradient hair color'] },
  { id:'multicolor',label:'Multi-color',      tags:['multicolored hair','rainbow hair'] },
];

export const HAIR_LENGTHS: Option[] = [
  { id:'buzz',       label:'Buzz Cut',       tags:['buzz cut hair','very short hair'] },
  { id:'pixie',      label:'Pixie Cut',      tags:['pixie cut'] },
  { id:'ear',        label:'Ear Length',     tags:['ear-length hair','short hair'] },
  { id:'chin',       label:'Chin Length',    tags:['chin-length hair','bob length'] },
  { id:'shoulder',   label:'Shoulder Length',tags:['shoulder-length hair'] },
  { id:'collarbone', label:'Collarbone',     tags:['collarbone-length hair'] },
  { id:'mid_back',   label:'Mid-Back',       tags:['mid-back length hair'] },
  { id:'waist',      label:'Waist Length',   tags:['waist-length hair','long hair'] },
  { id:'floor',      label:'Very Long / Floor',tags:['extremely long hair','floor-length hair'] },
];

export const HAIR_STYLES: Option[] = [
  { id:'straight',   label:'Straight',       tags:['straight hair','sleek'] },
  { id:'wavy',       label:'Wavy',           tags:['wavy hair','loose waves'] },
  { id:'curly',      label:'Curly',          tags:['curly hair','ringlets'] },
  { id:'coily',      label:'Coily / Afro',   tags:['coily hair','natural afro texture'] },
  { id:'wet_curly',  label:'Wet & Curly',    tags:['wet curly hair','damp hair','moisture on hair strands'] },
  { id:'bun',        label:'Bun',            tags:['hair in a bun','updo bun'] },
  { id:'ponytail',   label:'Ponytail',       tags:['ponytail'] },
  { id:'braid',      label:'Braid / Plait',  tags:['braided hair','plaited hair'] },
  { id:'updo',       label:'Updo / Pinned',  tags:['elegant updo','pinned hair','hair up'] },
  { id:'half_up',    label:'Half-Up Half-Down',tags:['half-up half-down hairstyle'] },
  { id:'messy',      label:'Messy / Tousled',tags:['messy hair','tousled','undone look'] },
  { id:'flowing',    label:'Flowing / Loose', tags:['flowing loose hair','windswept','free-falling hair'] },
  { id:'locs',       label:'Locs / Dreadlocks',tags:['dreadlocks','locs hairstyle'] },
];

export const SKIN_TONES: Option[] = [
  { id:'fair',       label:'Fair / Pale',    tags:['fair skin','pale complexion'] },
  { id:'light',      label:'Light',          tags:['light skin tone'] },
  { id:'medium',     label:'Medium / Olive', tags:['medium skin tone','olive complexion'] },
  { id:'tan',        label:'Tan',            tags:['tan skin','sun-kissed skin'] },
  { id:'brown',      label:'Brown',          tags:['brown skin tone'] },
  { id:'dark',       label:'Dark / Deep',    tags:['dark skin tone','deep complexion'] },
  { id:'ebony',      label:'Ebony',          tags:['ebony skin','rich dark complexion'] },
];

export const SKIN_SPECIALS: Option[] = [
  { id:'none',     label:'없음',                   tags:[] },
  { id:'tattoo',   label:'타투 / 문신',             tags:['tattoo on body','ink design on skin'] },
  { id:'scar',     label:'흉터 / 상처',             tags:['facial scar','battle scar','healed wound mark'] },
  { id:'freckles', label:'주근깨',                  tags:['freckles','cute freckled skin','sun freckles'] },
  { id:'scales',   label:'비늘',                   tags:['reptile scales on skin','iridescent scale texture'] },
  { id:'markings', label:'문양 / 마킹',             tags:['tribal markings','magical runes on skin','body markings'] },
  { id:'glow',     label:'발광하는 피부 / 문양',     tags:['glowing skin markings','bioluminescent patterns on body'] },
  { id:'pale',     label:'창백한 피부 (언데드풍)',   tags:['pale white skin','ghostly complexion','deathly pallor'] },
  { id:'dark_fantasy',label:'판타지 피부색 (파랑·보라 등)', tags:['fantasy skin color','unnatural skin tone','blue purple skin'] },
];

export const MAKEUP_STYLES: Option[] = [
  { id:'none',       label:'No Makeup / Bare',   tags:['no makeup','bare skin','natural bare face'] },
  { id:'natural',    label:'Natural / Soft',     tags:['soft natural makeup','minimal makeup','fresh face'] },
  { id:'glowing',    label:'Glowing / Dewy',     tags:['glowing skin','dewy makeup','radiant complexion'] },
  { id:'bold_lip',   label:'Bold Lip',           tags:['bold red lip','statement lip color'] },
  { id:'smoky',      label:'Smoky Eye',          tags:['smoky eye makeup','dramatic eye makeup'] },
  { id:'glam',       label:'Full Glam',          tags:['full glam makeup','editorial makeup','bold glamorous look'] },
  { id:'editorial',  label:'Editorial / Avant-garde',tags:['avant-garde makeup','editorial fashion makeup','artistic face paint'] },
  { id:'gothic',     label:'Gothic / Dark',      tags:['gothic makeup','dark lip','pale foundation','dramatic dark eye'] },
];

export const EXPRESSIONS: Option[] = [
  { id:'none',       label:'Neutral',            tags:['neutral expression','calm face'] },
  { id:'smile',      label:'Smiling',            tags:['warm smile','happy expression'] },
  { id:'tongue',     label:'Tongue Out / Playful',tags:['tongue out','playful expression','fun carefree smile'] },
  { id:'laugh',      label:'Laughing',           tags:['laughing','joyful open expression'] },
  { id:'serious',    label:'Serious / Intense',  tags:['serious expression','intense gaze','strong look'] },
  { id:'confident',  label:'Confident',          tags:['confident expression','subtle confident look','direct gaze'] },
  { id:'dreamy',     label:'Dreamy / Soft',      tags:['dreamy soft expression','gentle look','eyes slightly downcast'] },
  { id:'fierce',     label:'Fierce / Bold',      tags:['fierce expression','bold attitude','powerful gaze'] },
  { id:'sad',        label:'Melancholic / Sad',  tags:['melancholic expression','sad eyes','wistful look'] },
  { id:'surprised',  label:'Surprised',          tags:['surprised expression','wide eyes','open mouth'] },
  { id:'eyes_closed',label:'Eyes Closed',        tags:['eyes closed','peaceful expression','serene'] },
  { id:'side_gaze',  label:'Looking Away',       tags:['looking away','side gaze','off-camera look','candid expression'] },
];

export const POSES: Option[] = [
  { id:'standing',   label:'Standing',           tags:['standing pose','upright posture'] },
  { id:'sitting',    label:'Sitting / Seated',   tags:['seated pose','sitting casually'] },
  { id:'kneeling',   label:'Kneeling',           tags:['kneeling pose','down on one knee'] },
  { id:'lying',      label:'Lying Down',         tags:['lying down pose','reclining'] },
  { id:'walking',    label:'Walking',            tags:['walking pose','mid-stride','movement'] },
  { id:'running',    label:'Running',            tags:['running pose','dynamic movement'] },
  { id:'leaning',    label:'Leaning',            tags:['leaning against wall','relaxed lean','casual lean'] },
  { id:'arm_table',  label:'Arm on Table',       tags:['one arm resting on table','casual seated pose'] },
  { id:'knee_up',    label:'One Knee Pulled Up', tags:['one knee pulled up','arms wrapped around leg','relaxed seated'] },
  { id:'back_turned',label:'Back to Camera',     tags:['back turned to camera','looking over shoulder'] },
  { id:'looking_up', label:'Looking Up',         tags:['looking upward','face tilted up'] },
  { id:'candid',     label:'Candid / Unposed',   tags:['candid pose','natural unposed moment','caught in motion'] },
  { id:'dynamic',    label:'Dynamic / Action',   tags:['dynamic pose','action shot','energy in movement'] },
  { id:'leaning_window',label:'Leaning Out Window',tags:['leaning out of window','hanging out window frame'] },
];

export const OUTFIT_TOPS: Option[] = [
  { id:'none',       label:'None / Bare',         tags:[] },
  { id:'tshirt',     label:'T-Shirt',             tags:['casual t-shirt'] },
  { id:'mesh_tank',  label:'Mesh Tank Top',       tags:['white mesh tank top','sheer athletic top'] },
  { id:'knit_polo',  label:'Knit Polo',           tags:['knit polo shirt','smart casual top'] },
  { id:'blouse',     label:'Blouse',              tags:['elegant blouse'] },
  { id:'crop',       label:'Crop Top',            tags:['crop top','midriff-baring top'] },
  { id:'hoodie',     label:'Hoodie / Sweatshirt', tags:['cozy hoodie','oversized sweatshirt'] },
  { id:'sweater',    label:'Sweater / Knit',      tags:['knit sweater','cozy knitwear'] },
  { id:'blazer',     label:'Blazer',              tags:['tailored blazer'] },
  { id:'oversized_blazer',label:'Oversized Blazer',tags:['black oversized voluminous blazer','dramatic oversized jacket'] },
  { id:'button_down',label:'Button-Down Shirt',   tags:['button-down shirt'] },
  { id:'corset',     label:'Corset / Bustier',    tags:['corset top','structured bustier'] },
  { id:'armor',      label:'Fantasy Armor Top',   tags:['intricate biomechanical armor','fantasy breastplate','ornate armored top'] },
  { id:'pajama_top', label:'Pajama / Satin Top',  tags:['satin pajama top','silk loungewear'] },
];

export const OUTFIT_BOTTOMS: Option[] = [
  { id:'none',        label:'None',               tags:[] },
  { id:'athletic_shorts',label:'Athletic Shorts', tags:['red athletic shorts','sports shorts'] },
  { id:'jeans',       label:'Jeans / Denim',      tags:['denim jeans'] },
  { id:'slim_trousers',label:'Slim Trousers',     tags:['slim-fit trousers','tailored pants'] },
  { id:'skirt',       label:'Skirt',              tags:['skirt'] },
  { id:'mini_skirt',  label:'Mini Skirt',         tags:['mini skirt','short skirt'] },
  { id:'cargo',       label:'Cargo Pants',        tags:['cargo pants','utility trousers'] },
  { id:'leggings',    label:'Leggings',           tags:['leggings','fitted athletic pants'] },
  { id:'pajama_bottom',label:'Pajama Pants',      tags:['satin pajama pants','silk pajama bottoms'] },
  { id:'armor_skirt', label:'Fantasy Armor Skirt',tags:['armored skirt','fantasy battle skirt','layered armor plates'] },
  { id:'thigh_boots', label:'Thigh-High Boots',   tags:['thigh-high boots','over-the-knee boots'] },
];

export const OUTFIT_FULL: Option[] = [
  { id:'none',        label:'None',               tags:[] },
  { id:'dress_casual',label:'Casual Dress',       tags:['casual sundress','everyday dress'] },
  { id:'dress_elegant',label:'Elegant Dress / Gown',tags:['elegant evening gown','formal dress'] },
  { id:'suit',        label:'Full Suit',          tags:['tailored suit','professional two-piece suit'] },
  { id:'armor_full',  label:'Full Fantasy Armor', tags:['full biomechanical armor dress','gothic fantasy full armor','glowing ember-like cracks','organic armor texture','molten lava details'] },
  { id:'pajamas_full',label:'Full Pajamas / Loungewear',tags:['light beige satin pajamas','subtle pink trim','relaxed pajama set'] },
  { id:'athletic_full',label:'Athletic / Sportswear',tags:['athletic wear set','sportswear outfit'] },
  { id:'traditional', label:'Traditional Costume',tags:['traditional cultural costume','folk dress'] },
];

export const ACCESSORIES: Option[] = [
  { id:'sunglasses',   label:'Sunglasses',         tags:['sunglasses'] },
  { id:'rect_sunglass',label:'Rectangular Sunglasses',tags:['black rectangular sunglasses','angular frames'] },
  { id:'shoulder_bag', label:'Shoulder Bag',       tags:['red shoulder bag','shoulder purse'] },
  { id:'backpack',     label:'Backpack',           tags:['backpack'] },
  { id:'hat',          label:'Hat / Cap',          tags:['hat','cap'] },
  { id:'beanie',       label:'Beanie',             tags:['beanie hat','knit beanie'] },
  { id:'earrings',     label:'Earrings',           tags:['earrings'] },
  { id:'necklace',     label:'Necklace',           tags:['necklace','pendant'] },
  { id:'watch',        label:'Watch',              tags:['wristwatch'] },
  { id:'gloves',       label:'Gloves',             tags:['gloves'] },
  { id:'armor_gloves', label:'Fantasy Armor Gloves',tags:['sculpted armor gloves','fantasy gauntlets'] },
  { id:'sneakers',     label:'Sneakers',           tags:['minimalist sneakers','clean white sneakers'] },
  { id:'heels',        label:'Heels',              tags:['high heels'] },
  { id:'barefoot',     label:'Barefoot',           tags:['barefoot','bare feet'] },
  { id:'chains',       label:'Chains / Jewelry',   tags:['chain jewelry','layered chains','statement jewelry'] },
];

export const TEXTURE_DETAILS: Option[] = [
  { id:'skin_pores',   label:'Skin Pores & Texture',     tags:['visible skin pores','ultra-detailed skin texture','realistic skin micro-detail'] },
  { id:'hair_strand',  label:'Individual Hair Strands',  tags:['individual hair strands','fine hair detail','hair filament sharpness'] },
  { id:'moisture',     label:'Moisture / Wet Skin',      tags:['moisture on skin','water droplets on face','dewy wet look'] },
  { id:'frost',        label:'Frost / Ice on Skin',      tags:['ice crystals on eyelashes','frost on skin','snowflakes on face','frozen hair strands'] },
  { id:'fabric',       label:'Fabric Wrinkles & Weave',  tags:['fabric texture detail','clothing wrinkle detail','textile micro-texture'] },
  { id:'glowing_crack',label:'Glowing Cracks / Fissures',tags:['glowing red fissures','ember-like cracks in surface','bioluminescent texture'] },
  { id:'volumetric',   label:'Volumetric Light & Haze',  tags:['volumetric light rays','atmospheric haze','god rays through air'] },
  { id:'grain',        label:'Film Grain / Noise',       tags:['subtle film grain','organic noise texture','analog grain overlay'] },
  { id:'subsurface',   label:'Subsurface Scattering',    tags:['subsurface scattering on skin','translucent skin glow','inner skin light diffusion'] },
  { id:'eye_detail',   label:'Eye & Iris Detail',        tags:['sharp eye detail','iris texture','catchlight in eyes','piercing gaze detail'] },
  { id:'carpet_fiber', label:'Surface / Object Texture', tags:['fine material surface texture','object fiber detail','tactile texture realism'] },
];

