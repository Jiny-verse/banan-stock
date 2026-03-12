import { Option } from '../types';

export const SHOT_TYPES: Option[] = [
  { id:'extreme_cu',   label:'Extreme Close-Up',         tags:['extreme close-up shot','fills entire frame','macro detail'] },
  { id:'close_up',     label:'Close-Up',                 tags:['close-up shot','face or subject fills frame'] },
  { id:'medium',       label:'Medium Shot',              tags:['medium shot','waist up framing'] },
  { id:'full_body',    label:'Full Body',                tags:['full body shot','head to toe','full figure'] },
  { id:'wide',         label:'Wide Shot',                tags:['wide shot','subject and full environment visible'] },
  { id:'aerial',       label:'Aerial / Bird\'s Eye',     tags:['aerial view','bird\'s eye shot','top-down perspective'] },
  { id:'low_angle',    label:'Low Angle / Upward',       tags:['dramatic low angle','looking upward','worm\'s eye view','distorted upward perspective'] },
  { id:'high_angle',   label:'High Angle',               tags:['high angle shot','looking down at subject'] },
  { id:'dutch',        label:'Dutch Angle',              tags:['Dutch angle','tilted camera','canted frame'] },
  { id:'over_shoulder',label:'Over-the-Shoulder',        tags:['over-the-shoulder shot','POV adjacent framing'] },
  { id:'silhouette',   label:'Silhouette Shot',          tags:['silhouette framing','subject in shadow against bright background'] },
  { id:'foreground',   label:'Foreground Element',       tags:['foreground object slightly out of focus','layered depth','foreground-background separation'] },
  { id:'candid',       label:'Candid / Lifestyle',       tags:['candid lifestyle shot','unstaged natural moment','editorial candid'] },
  { id:'portrait',     label:'Classic Portrait',         tags:['portrait composition','face centered','clean portrait framing'] },
];

