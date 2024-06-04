import {  detectarVoto } from './events/buttons.js';
import { validarRegistro } from './helper/validar-session.js';
import { loadedComponents } from './util/loader.js';
(()=>{
    validarRegistro();
    loadedComponents();
    detectarVoto();
})();