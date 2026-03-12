import { Option } from '../types';

export const SUBJECTS: Option[] = [
  { group:'No Subject', id:'none',     label:'None / Background only', tags:[] },
  // People
  { group:'People',  id:'person_f',   label:'Woman (fictional)',    tags:['fictional woman','imaginary person','no real person'] },
  { group:'People',  id:'person_m',   label:'Man (fictional)',      tags:['fictional man','imaginary person','no real person'] },
  { group:'People',  id:'child',      label:'Child (fictional)',    tags:['fictional child','imaginary character','no real person'] },
  { group:'People',  id:'group',      label:'Group of People',     tags:['group of fictional people','crowd','diverse characters'] },
  { group:'People',  id:'silhouette', label:'Silhouette',          tags:['person silhouette','backlit','anonymous figure','dark outline'] },
  // Animals
  { group:'Animals', id:'cat',        label:'Cat',                 tags:['cat','feline'] },
  { group:'Animals', id:'dog',        label:'Dog',                 tags:['dog','canine'] },
  { group:'Animals', id:'bird',       label:'Bird',                tags:['bird','avian','feathers'] },
  { group:'Animals', id:'fox',        label:'Fox',                 tags:['fox','orange fur'] },
  { group:'Animals', id:'rabbit',     label:'Rabbit',              tags:['rabbit','bunny','long ears'] },
  { group:'Animals', id:'bear',       label:'Bear',                tags:['bear','forest animal'] },
  { group:'Animals', id:'deer',       label:'Deer',                tags:['deer','graceful','forest'] },
  { group:'Animals', id:'wolf',       label:'Wolf',                tags:['wolf','wild','pack animal'] },
  { group:'Animals', id:'owl',        label:'Owl',                 tags:['owl','nocturnal','wise'] },
  { group:'Animals', id:'lion',       label:'Lion',                tags:['lion','mane','majestic'] },
  { group:'Animals', id:'elephant',   label:'Elephant',            tags:['elephant','large','trunk'] },
  { group:'Animals', id:'horse',      label:'Horse',               tags:['horse','equine','mane'] },
  { group:'Animals', id:'whale',      label:'Whale',               tags:['whale','ocean creature','massive'] },
  { group:'Animals', id:'dragon',     label:'Dragon (Fantasy)',     tags:['fantasy dragon','scales','wings','mythical creature'] },
  { group:'Animals', id:'phoenix',    label:'Phoenix (Fantasy)',    tags:['phoenix','fire bird','mythical','rebirth'] },
  { group:'Animals', id:'unicorn',    label:'Unicorn (Fantasy)',    tags:['unicorn','horn','magical horse','rainbow mane'] },
  // Objects / Products
  { group:'Objects', id:'food',       label:'Food & Beverage',     tags:['food photography','gourmet','styled plating','appetizing'] },
  { group:'Objects', id:'flower',     label:'Flower / Botanical',  tags:['botanical illustration','flower close-up','petal detail','natural beauty'] },
  { group:'Objects', id:'product',    label:'Product / Packaging',  tags:['product photography','clean background','commercial','packshot'] },
  { group:'Objects', id:'building',   label:'Architecture',        tags:['architectural photography','building exterior','structural design'] },
  { group:'Objects', id:'vehicle',    label:'Vehicle / Transport', tags:['vehicle','transportation','motion blur or static'] },
  { group:'Objects', id:'tech',       label:'Technology / Gadget', tags:['technology product','sleek design','modern gadget','clean surface'] },
  { group:'Objects', id:'crystal',    label:'Crystal / Gem',       tags:['crystal','gemstone','translucent','light refraction','mineral'] },
  { group:'Objects', id:'potion',     label:'Potion / Bottle',     tags:['magic potion','glowing liquid','glass bottle','mysterious'] },
];

