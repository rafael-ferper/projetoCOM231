const database = require('../models')

class Services{
    constructor(nomeDoModelo){
        this.nomeDoModelo = nomeDoModelo
        console.log(nomeDoModelo);
    }

    async criar(valor){
        
        return database[this.nomeDoModelo].create(valor)
    }
}

module.exports = Services