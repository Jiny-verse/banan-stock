import { Option } from '../types';

export const PERSPECTIVE: Option[] = [
  { id:'1point',   label:'1점 투시',                tags:['one-point perspective','vanishing point centered','linear depth'] },
  { id:'2point',   label:'2점 투시',                tags:['two-point perspective','architectural perspective','diagonal depth'] },
  { id:'3point',   label:'3점 투시',                tags:['three-point perspective','dramatic vertical depth'] },
  { id:'isometric',label:'등각 투시 (아이소메트릭)', tags:['isometric perspective','no vanishing point','equal angle view'] },
  { id:'flat',     label:'평면 / 정면',             tags:['flat front view','no perspective','orthographic view'] },
  { id:'aerial',   label:'항공뷰 / 탑다운',          tags:['aerial top-down view','bird\'s eye perspective','overhead shot'] },
  { id:'worm',     label:'웜아이뷰 (아래에서 위)',    tags:['worm\'s eye view','dramatic upward perspective','low camera angle'] },
  { id:'panorama', label:'파노라마 / 와이드',         tags:['panoramic view','ultra-wide composition','sweeping landscape'] },
];

export const ENVIRONMENT_STYLES: Option[] = [
  { id:'none',      label:'없음',                   tags:[] },
  { id:'fantasy',   label:'판타지 성 / 마법 왕국',   tags:['fantasy castle','magical kingdom','fairytale architecture','towering spires'] },
  { id:'medieval',  label:'중세 유럽',               tags:['medieval European architecture','stone fortress','cobblestone streets','gothic arches'] },
  { id:'japanese',  label:'일본 전통',               tags:['traditional Japanese architecture','torii gate','pagoda','Edo period buildings'] },
  { id:'chinese',   label:'중국 전통',               tags:['traditional Chinese architecture','red pavilion','Chinese garden','ornate roof tiles'] },
  { id:'modernist', label:'현대 미니멀리즘',          tags:['modern minimalist architecture','glass and steel','clean geometric building'] },
  { id:'futurist',  label:'미래 도시 / SF',          tags:['futuristic city','sci-fi skyline','neon-lit megastructure','cyberpunk urban'] },
  { id:'tropical',  label:'열대 / 동남아',            tags:['tropical architecture','bamboo structure','open-air pavilion','lush vegetation'] },
  { id:'nordic',    label:'북유럽 / 스칸디나비아',    tags:['Scandinavian architecture','wooden cottage','Nordic landscape','fjord setting'] },
  { id:'ruins',     label:'폐허 / 유적',             tags:['ancient ruins','crumbling architecture','overgrown stone','lost civilization'] },
  { id:'underground',label:'지하 / 동굴 도시',       tags:['underground cavern city','cave dwelling','subterranean architecture'] },
  { id:'floating',  label:'공중 섬 / 하늘 성',       tags:['floating island','sky castle','aerial architecture','clouds around structure'] },
  { id:'underwater_city',label:'해저 도시',          tags:['underwater city','submerged architecture','bioluminescent ocean city'] },
];

export const TILING_OPTIONS: Option[] = [
  { id:'none',     label:'없음 (일반 장면)',          tags:[] },
  { id:'seamless', label:'심리스 타일 (반복 가능)',   tags:['seamless tileable pattern','repeating texture','no visible seam at edges'] },
  { id:'half_drop',label:'하프드롭 패턴',            tags:['half-drop repeat pattern','offset tile'] },
  { id:'brick',    label:'벽돌 배열 패턴',           tags:['brick repeat layout','staggered tile pattern'] },
  { id:'single',   label:'단일 장면 (타일 없음)',     tags:['single scene composition','non-repeating artwork'] },
];

