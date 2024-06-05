const url = "http://localhost:8080";
const apiVotos = '/api/v1/votos/';
const postVotos = async (data) => {
    try {
      const resp = await fetch(`${url}${apiVotos}${'agregar'}`, {
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

  const getVotos = async(  )=>{
    try {
        const resp = await fetch(`${ url }${ apiVotos }${'contar'}`);
       
        if ( resp.ok ) {
            const data = await resp.json();
            return data;
 
        } else{
            const { errors } = await resp.json();
            throw errors;
        }
        
    } catch (error) {
        throw error;
    }
};

  export{
    postVotos,
    getVotos
  }