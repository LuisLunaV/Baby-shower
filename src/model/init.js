import { detectarVoto } from "../events/buttons.js";
import { validarRegistro } from "../helper/validar-session.js";
import { guardarNombreUsuario } from "../helper/enviar-registro.js";

import { loadedComponents } from "../util/loader.js";
import { obtenerVotos } from "../components/contadores.js";

export const init = () => {
  const nameWindow = window.location.pathname;

  if (nameWindow === "/") {
    window.location.replace("/html/registro.html");
    
    return;
  }
  if (nameWindow === "/html/registro.html") {
    loadedComponents();
    guardarNombreUsuario();
    return;
  }
  if (nameWindow === "/index.html") {
    validarRegistro();
    loadedComponents();
    obtenerVotos();
    detectarVoto();
    return;
  }
};
