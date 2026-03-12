import { Option } from '../types';

export const WEATHER: Option[] = [
  { id:'clear',    label:'맑음',                   tags:['clear sky','bright sunny weather','cloudless'] },
  { id:'partly',   label:'부분 구름',               tags:['partly cloudy','scattered clouds','mixed sun and clouds'] },
  { id:'overcast', label:'흐림',                   tags:['overcast sky','heavy clouds','diffused light'] },
  { id:'rain',     label:'비',                     tags:['rain','wet ground','rainfall','puddles','rainy atmosphere'] },
  { id:'drizzle',  label:'이슬비 / 보슬비',         tags:['light drizzle','misty rain','soft rainfall'] },
  { id:'storm',    label:'폭풍 / 천둥번개',          tags:['storm clouds','lightning bolt','dramatic thunderstorm'] },
  { id:'snow',     label:'눈',                     tags:['snowfall','falling snow','snow-covered ground'] },
  { id:'blizzard', label:'눈보라',                  tags:['blizzard','heavy snowstorm','whiteout conditions'] },
  { id:'fog',      label:'안개',                   tags:['thick fog','misty atmosphere','low visibility','foggy'] },
  { id:'haze',     label:'연무 / 아지랑이',          tags:['atmospheric haze','heat shimmer','dusty haze'] },
  { id:'wind',     label:'강풍 (나뭇잎·먼지 날림)',  tags:['strong wind','leaves blowing','dynamic wind effect'] },
  { id:'aurora',   label:'오로라',                  tags:['aurora borealis','northern lights','colorful night sky aurora'] },
  { id:'rainbow',  label:'무지개',                  tags:['rainbow after rain','colorful arc in sky'] },
];

export const TIME_OF_DAY: Option[] = [
  { id:'dawn',     label:'새벽 (4–6시)',             tags:['pre-dawn atmosphere','early morning twilight','first light'] },
  { id:'sunrise',  label:'일출 (6–7시)',             tags:['sunrise','golden morning light','horizon glow'] },
  { id:'morning',  label:'아침 (7–11시)',            tags:['morning light','soft daytime','fresh morning atmosphere'] },
  { id:'noon',     label:'한낮 (11–14시)',           tags:['midday sun','harsh overhead light','high noon'] },
  { id:'afternoon',label:'오후 (14–17시)',           tags:['afternoon light','warm daytime','gentle sunlight'] },
  { id:'golden',   label:'황금 시간대 (17–19시)',     tags:['golden hour','warm sunset side-light','long shadows'] },
  { id:'sunset',   label:'일몰 (19–20시)',           tags:['sunset','red orange sky','dusk horizon'] },
  { id:'dusk',     label:'해질 무렵 (20–21시)',       tags:['dusk','blue hour beginning','twilight fading light'] },
  { id:'night',    label:'밤 (21–24시)',             tags:['night scene','dark sky','artificial lights','nighttime'] },
  { id:'midnight', label:'자정 (0–3시)',             tags:['midnight','deep night','dark silent atmosphere','moonlit night'] },
];

