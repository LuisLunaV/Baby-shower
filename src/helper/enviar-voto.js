import { postVotos } from '../services/api-votos.js';
export const enviarVoto = async(id, genero) =>{
    const resp = await postVotos({
            "Usuario_ID": id,
            "Voto": genero
          });
          console.log(resp)
}