import {  detectarVoto } from './events/buttons.js';
import { loadedComponents } from './util/loader.js';
(()=>{
    loadedComponents();
    detectarVoto();
})();