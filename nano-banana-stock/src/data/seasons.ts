import { Option, SeasonalEvent } from '../types';

export const SEASONS: Option[] = [
  { id:'spring', label:'🌸 Spring', tags:['spring season','cherry blossoms','soft pink','pastel tones','warm breeze','new growth'] },
  { id:'summer', label:'☀️ Summer', tags:['summer','bright sunshine','vibrant colors','beach atmosphere','tropical warmth','golden light'] },
  { id:'autumn', label:'🍂 Autumn / Fall', tags:['autumn season','fall foliage','orange and red leaves','warm golden tones','harvest atmosphere'] },
  { id:'winter', label:'❄️ Winter', tags:['winter season','snow','cold blue tones','frost','bare trees','cozy indoor light'] },
];

export const SEASONAL_EVENTS: SeasonalEvent[] = [
  // JANUARY
  { id:'newyear',    month:'January',    emoji:'🎆', label:"New Year's Day",        tags:['new year celebration','fireworks','countdown','midnight','champagne','confetti','gold and silver'] },
  { id:'mlk',        month:'January',    emoji:'✊', label:'MLK Day',                tags:['unity','civil rights','peaceful','community','inspirational'] },
  // FEBRUARY
  { id:'valentine',  month:'February',   emoji:'💘', label:"Valentine's Day",       tags:["Valentine's Day",'romantic','red roses','pink hearts','love','couples','chocolates','soft pink palette'] },
  { id:'galentine',  month:'February',   emoji:'💝', label:"Galentine's Day",       tags:['friendship','pink','flowers','cozy brunch','girl friends','cheerful'] },
  { id:'groundhog',  month:'February',   emoji:'🐿️', label:"Groundhog Day",         tags:['groundhog','shadow','winter vs spring','whimsical','nature'] },
  { id:'lunarnewyear',month:'January–February', emoji:'🏮', label:'Lunar New Year', tags:['lunar new year','red and gold','lanterns','dragon','fireworks','traditional Asian','prosperity'] },
  // MARCH
  { id:'stpatrick',  month:'March',      emoji:'🍀', label:"St. Patrick's Day",     tags:["St. Patrick's Day",'green clover','shamrock','Irish','lucky','pot of gold','rainbow'] },
  { id:'womanday',   month:'March',      emoji:'💜', label:"International Women's Day", tags:['women empowerment','purple and white','floral','equality','feminine strength'] },
  { id:'holi',       month:'March',      emoji:'🎨', label:'Holi',                  tags:['Holi festival','colorful powder','vibrant splashes','Indian festival','spring colors','joyful celebration'] },
  { id:'easter',     month:'March–April',emoji:'🐣', label:'Easter',                tags:['Easter','pastel colors','Easter eggs','bunny','spring flowers','basket','chocolate eggs'] },
  // APRIL
  { id:'earthday',   month:'April',      emoji:'🌍', label:'Earth Day',             tags:['Earth Day','green nature','environmental','eco-friendly','planet','sustainability','clean earth'] },
  { id:'aprilfool',  month:'April',      emoji:'🃏', label:"April Fool's Day",      tags:['playful','whimsical','surprise','colorful chaos','fun','jokes'] },
  // MAY
  { id:'mayday',     month:'May',        emoji:'🌺', label:'May Day / Labor Day',   tags:['spring flowers','maypole','workers','community','floral wreath'] },
  { id:'motherday',  month:'May',        emoji:'💐', label:"Mother's Day",          tags:["Mother's Day",'flowers','pink and white','soft tones','family love','bouquet','warm hug'] },
  { id:'childrenday',month:'May',        emoji:'🎈', label:"Children's Day",        tags:["Children's Day",'colorful balloons','playful','kids','rainbow colors','fun','cartoon elements'] },
  { id:'ramadan',    month:'March–April',emoji:'☪️', label:'Ramadan / Eid',         tags:['Ramadan','crescent moon','lantern','mosque silhouette','golden and teal','Islamic art pattern','Eid celebration'] },
  // JUNE
  { id:'pride',      month:'June',       emoji:'🏳️‍🌈', label:'Pride Month',        tags:['Pride','rainbow colors','celebration','inclusive','vibrant','love is love','diverse'] },
  { id:'fatherday',  month:'June',       emoji:'👔', label:"Father's Day",          tags:["Father's Day",'masculine','blue tones','family','tie and suit','heartfelt','outdoor adventure'] },
  { id:'juneteenth', month:'June',       emoji:'✊', label:'Juneteenth',            tags:['Juneteenth','freedom','red black green','community celebration','heritage','historical'] },
  // JULY
  { id:'july4',      month:'July',       emoji:'🇺🇸', label:'Independence Day (US)',tags:['4th of July','American flag','fireworks','red white blue','patriotic','summer celebration'] },
  { id:'bastille',   month:'July',       emoji:'🇫🇷', label:'Bastille Day',         tags:['French national day','Eiffel Tower','blue white red','Paris','celebration','liberty'] },
  // AUGUST
  { id:'summerfest', month:'August',     emoji:'🏖️', label:'Summer Festival',      tags:['summer festival','outdoor concert','tropical','beach party','golden sunset','carefree'] },
  { id:'obon',       month:'August',     emoji:'🏮', label:'Obon (Japan)',          tags:['Obon festival','Japanese lanterns','dancing','ancestor spirits','summer night','traditional'] },
  // SEPTEMBER
  { id:'chuseok',    month:'September',  emoji:'🌕', label:'Chuseok / Mid-Autumn', tags:['Chuseok','full moon','Korean harvest','hanbok','songpyeon','warm golden tones','family gathering'] },
  { id:'oktoberfest',month:'September–October', emoji:'🍺', label:'Oktoberfest', tags:['Oktoberfest','Bavarian','beer festival','pretzel','dirndl','checkered pattern','German festival'] },
  { id:'backtoschool',month:'September', emoji:'📚', label:'Back to School',       tags:['back to school','pencils','notebooks','apple','classroom','fresh start','colorful stationery'] },
  // OCTOBER
  { id:'halloween',  month:'October',    emoji:'🎃', label:'Halloween',             tags:['Halloween','jack-o-lantern','dark atmosphere','orange and black','spooky','ghosts','witch','bats','haunted house'] },
  { id:'diasmuertos',month:'October–November', emoji:'💀', label:'Día de los Muertos', tags:['Día de los Muertos','sugar skull','marigolds','colorful','Mexican tradition','candles','ofrendas'] },
  { id:'diwali',     month:'October–November', emoji:'🪔', label:'Diwali',         tags:['Diwali','festival of lights','oil lamps','fireworks','rangoli','gold and jewel tones','Hindu festival'] },
  // NOVEMBER
  { id:'thanksgiving',month:'November',  emoji:'🦃', label:'Thanksgiving',          tags:['Thanksgiving','autumn harvest','pumpkin','turkey','golden brown tones','family dinner','gratitude'] },
  { id:'remembrance',month:'November',   emoji:'🌹', label:'Remembrance Day',       tags:['poppy','red flowers','memorial','solemnity','honor','muted tones'] },
  { id:'blackfriday',month:'November',   emoji:'🛍️', label:'Black Friday / Cyber Monday', tags:['shopping sale','black and yellow','bold typography space','deal tags','commercial'] },
  // DECEMBER
  { id:'christmas',  month:'December',   emoji:'🎄', label:'Christmas',             tags:['Christmas','decorated tree','snow','warm indoor glow','red and green','gifts','reindeer','cozy winter'] },
  { id:'hanukkah',   month:'December',   emoji:'🕎', label:'Hanukkah',              tags:['Hanukkah','menorah','blue and silver','Star of David','candles','Jewish festival','holiday glow'] },
  { id:'kwanzaa',    month:'December',   emoji:'🕯️', label:'Kwanzaa',              tags:['Kwanzaa','red black green candles','African heritage','unity','harvest symbols','kinara'] },
  { id:'newyeareve', month:'December',   emoji:'🥂', label:"New Year's Eve",        tags:["New Year's Eve",'countdown','champagne','fireworks burst','midnight glamour','glitter','gold tones'] },
  { id:'wintersolstice',month:'December',emoji:'🌙', label:'Winter Solstice',       tags:['winter solstice','longest night','moon and stars','mystical','deep blue','candles in dark'] },
  // MULTI-MONTH / ONGOING
  { id:'matsuri',    month:'July–August',emoji:'⛩️', label:'Japanese Matsuri',     tags:['Japanese festival','lanterns','fireworks','yukata','street food','shrine gate','summer night'] },
  { id:'carnival',   month:'February–March', emoji:'🎭', label:'Carnival / Mardi Gras', tags:['carnival','masquerade','feathers','purple gold green','festive parade','Rio de Janeiro','vibrant costume'] },
  { id:'songkran',   month:'April',      emoji:'💦', label:'Songkran (Thailand)',   tags:['Songkran','water festival','Thai New Year','celebration','colorful','tropical'] },
  { id:'cherryblossom',month:'March–April',emoji:'🌸',label:'Cherry Blossom Season',tags:['sakura','cherry blossoms','pink petals','Japanese spring','soft light','hanami picnic'] },
];

