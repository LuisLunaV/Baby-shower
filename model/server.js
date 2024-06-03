const express = require('express');

class Server{
    constructor(){
        this.app = express();
        this.port = process.env.PORT || "8080";
       
        this.path = {
            usuarios:'api/v1/usuarios'
        };

        this.middleware();
    }

    middleware(){
        this.app.use(express.json());

        this.app.use(express.static('public'));
        this.app.use(express.static('src'));
    }

    router(){
        this.app.use( this.path.usuarios,require())
    }

    listen(){
        this.app.listen(this.port, ()=>{
            console.log('Escuchando desde el puerto: ' + this.port );
        });
    }
}

module.exports = {
    Server
};