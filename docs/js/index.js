import {  detectarVoto } from './events/buttons.js';
import { loadedComponents } from './util/loader.js';
export const init = ()=>{
    loadedComponents();
    detectarVoto();
}