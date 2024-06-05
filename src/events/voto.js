import { enviarVoto } from '../helper/enviar-voto.js';
export const seleccionarVoto =( id )=>{
    const {usuario:{ Usuario_ID }} = JSON.parse(localStorage.getItem('usuario'));
    if( id === 'button-boy'){
     enviarVoto(Usuario_ID,'nino')
      }
    
      if( id === 'button-girl'){
        enviarVoto(Usuario_ID,'nina')
       
      }
}