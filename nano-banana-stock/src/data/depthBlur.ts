import { Option } from '../types';

export const DEPTH_BLUR: Option[] = [
  { id:'none',        label:'없음 (전체 선명)',        tags:['everything in sharp focus','deep depth of field','no blur'] },
  { id:'shallow',     label:'얕은 심도 (배경 살짝 블러)', tags:['shallow depth of field','slightly blurred background','subject in focus'] },
  { id:'bokeh_soft',  label:'부드러운 보케',           tags:['soft bokeh background','creamy blur','gentle background defocus'] },
  { id:'bokeh_strong',label:'강한 보케 (크고 둥근 광점)', tags:['strong bokeh','large circular bokeh balls','heavily blurred background','f/1.2 bokeh'] },
  { id:'bokeh_light', label:'빛 보케 (빛점 산란)',      tags:['light bokeh','glowing orbs background','sparkling defocused lights'] },
  { id:'motion_blur', label:'모션 블러 (움직임 잔상)',  tags:['motion blur','movement trail','dynamic motion streak'] },
  { id:'radial',      label:'방사형 블러 (중심 선명)',  tags:['radial blur','zoom burst effect','center sharp edges blurred radially'] },
  { id:'tilt_shift',  label:'틸트시프트 (미니어처 효과)', tags:['tilt-shift blur','miniature effect','selective focus band','toy world look'] },
  { id:'foreground_blur',label:'전경 블러 (앞쪽 흐림)', tags:['foreground out of focus','foreground blur','depth layering','near elements defocused'] },
  { id:'fog_depth',   label:'안개 / 대기 원근감',      tags:['atmospheric perspective','fog depth','distant elements fade to haze','aerial haze'] },
];

