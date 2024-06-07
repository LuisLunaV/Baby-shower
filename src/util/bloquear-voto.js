export const votoRealizado = () => {
    try {
      const votoString = localStorage.getItem("voto");
      if (!votoString) return false;
  
      const voto = JSON.parse(votoString);
  
      const usuarioString = localStorage.getItem("usuario");
      if (!usuarioString) return false;
  
      const { usuario } = JSON.parse(usuarioString);
      
      if (usuario.Usuario_ID === voto.Usuario_ID) return true;
      return false;
    } catch (error) {
      console.error('Error al recuperar o parsear datos de localStorage:', error);
      return false;
    }
  };
  