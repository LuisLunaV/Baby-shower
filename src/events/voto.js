export const seleccionarVoto =( id )=>{
    const data = JSON.parse(localStorage.getItem('usuario'));
    if( id === 'button-boy'){
     console.log(data)
      }
    
      if( id === 'button-girl'){
     console.log(data)
       
      }
}