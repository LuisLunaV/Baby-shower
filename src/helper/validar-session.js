const validarRegistro =()=>{
    const usuario = localStorage.getItem('usuario');

    if( !usuario ){
        window.location.replace('/html/registro.html');
        return;
    }
};



export{
validarRegistro
}