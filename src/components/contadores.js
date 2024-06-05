import { getVotos } from '../services/api-votos.js';
const textBoy =document.querySelector('#contador-text-boy');
const textGirl =document.querySelector('#contador-text-girl');

const htmlContadorNino=({niño})=>{
        textBoy.innerText = niño;
}
const htmlContadorNina=( {niña} )=>{
    textGirl.innerText = niña;
}

export const obtenerVotos = async()=>{
   const resp = await getVotos();
   htmlContadorNino(resp);
   htmlContadorNina(resp);
}