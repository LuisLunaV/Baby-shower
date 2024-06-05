const url = 'https://baby-shower-production-7994.up.railway.app';
// const url = "http://localhost:8080";
const apiPost = '/api/v1/usuarios/agregar';
const postRegistro = async (data) => {
    try {
      const resp = await fetch(`${url}${apiPost}`, {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        }
      });
  
      if (resp.ok) {
        const data = await resp.json();
        return data;
      } else{
        const error = await resp.json();
        throw error;
      } 
    } catch (error) {
      throw error;
    }
  };

  export{
    postRegistro
  }