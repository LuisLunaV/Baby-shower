import { enviarVoto } from '../helper/enviar-voto.js';
import { votoRealizado } from '../util/bloquear-voto.js';
export const seleccionarVoto =( id )=>{
    const {usuario:{ Usuario_ID }} = JSON.parse(localStorage.getItem('usuario'));
   
    if( id === 'button-boy'){
      (!votoRealizado())? enviarVoto(Usuario_ID,'nino'): null;       
      };
    
      if( id === 'button-girl'){
      ( !votoRealizado())? enviarVoto(Usuario_ID,'nina'):null;
        };

}
