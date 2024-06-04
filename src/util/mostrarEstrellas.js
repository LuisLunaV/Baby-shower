import { contador } from '../function/contador.js';


export const mostrarEstrellas =( id )=>{
  const divContainerStarsBoy  =  document.querySelector('#div-cont-boy'),
      divContainerStarsGirl =  document.querySelector('#div-cont-girl');

const boyImgs = divContainerStarsBoy.querySelectorAll('.img-rotate'),
      girlImgs = divContainerStarsGirl.querySelectorAll('.img-rotate');  
      
  if( id === 'button-boy'){
    agregarEfecto( boyImgs )
    contador('boy')
    return;
  }

  if( id === 'button-girl'){
    agregarEfecto( girlImgs )
    contador('girl')
    return;
  }
}

const agregarEfecto=( opcion )=>{
  opcion.forEach(( elemnts)=>{
    switch(elemnts.id){
     case 'img-1':
     elemnts.classList.add('slide-top-left')
     
     setTimeout(()=>{
       elemnts.classList.add('opacity-0');  
     },500)

     setTimeout(()=>{
      elemnts.classList.remove('slide-top-left');
      elemnts.classList.remove('opacity-0');  
    },1000)
       break; 

     case 'img-2':
     elemnts.classList.add('slide-top')

     setTimeout(()=>{
      elemnts.classList.add('opacity-0');  
    },500)


     setTimeout(()=>{
       elemnts.classList.remove('slide-top');
      elemnts.classList.remove('opacity-0');  

     },1000)
       break; 
     case 'img-3':
     elemnts.classList.add('slide-top-right')

     setTimeout(()=>{
      elemnts.classList.add('opacity-0');  
    },500)

     setTimeout(()=>{
       elemnts.classList.remove('slide-top-right');
      elemnts.classList.remove('opacity-0');  

     },1000)
       break; 
    }
   });
}