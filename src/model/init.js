import {  detectarVoto } from '../events/buttons.js';
import { validarRegistro } from '../helper/validar-session.js';
import { guardarNombreUsuario } from '../helper/enviar-registro.js';

import { loadedComponents } from '../util/loader.js';

export const init=()=>{
    const nameWindow = window.location.pathname;
        if( nameWindow === '/html/registro.html'){
            console.log(nameWindow)
           guardarNombreUsuario();
           return;
        }
        if( nameWindow === '/index.html'){
            console.log(nameWindow)
    
            validarRegistro();
            loadedComponents();
            detectarVoto();
            return;
        }
}