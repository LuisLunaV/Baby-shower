const validarRegistro =()=>{
    const usuario = sessionStorage.getItem('usuario');

    if( !usuario ){
        window.location.replace('/html/registro.html');
    }
};



export{
validarRegistro
}