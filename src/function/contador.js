const textBoy =document.querySelector('#contador-text-boy');
const textGirl =document.querySelector('#contador-text-girl');

let boy = 1;
let girl = 1;

export const contador =( voto )=>{
    if( voto === 'boy'){
        textBoy.innerText = boy++;
    }else textGirl.innerText = girl++;
}