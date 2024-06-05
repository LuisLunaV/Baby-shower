// js: index.js
import { postRegistro } from '../services/api-post.js';

export const guardarNombreUsuario = () => {
    const form = document.querySelector('#register-form');

    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        const registroTxT = document.querySelector('#typewriter-input');
        const nombre = registroTxT.value;
        console.log(nombre);

        try {
            const resp = await postRegistro({
                "Usuario_Name": nombre
            });

            localStorage.setItem('usuario', JSON.stringify(resp));

            window.location.replace('../index.html');
            // setTimeout(() => {
            // }, 2000);
        } catch (error) {
            console.error('Error:', error);
        }
    });
}

