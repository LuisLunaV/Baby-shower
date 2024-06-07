import { postVotos } from "../services/api-votos.js";
export const enviarVoto = async (id, genero) => {
  const { voto:{Usuario_ID, Fecha_Voto, Voto } } = await postVotos({
    Usuario_ID: id,
    Voto: genero,
  });

  const {
    usuario: { Usuario_Name },
  } = JSON.parse(localStorage.getItem("usuario"));

  localStorage.setItem("voto",JSON.stringify({
    Usuario_Name,
    Usuario_ID,
    Voto,
    Fecha_Voto
  }));
};
