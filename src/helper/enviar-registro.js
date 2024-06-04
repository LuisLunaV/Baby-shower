export const guardarNombreUsuario=()=>{
    const registroTxT = document.querySelector('#typewriter-input');

registroTxT.addEventListener('keydown',(e)=>{
    e.preventDefault();
console.log('saludos')
    // const nombre = e.target.value;

    // localStorage.setItem('usuario',JSON.stringify( nombre ))

    // setTimeout(()=>{
    //     window.location.replace('../index.html');
    // },2000)
});
}