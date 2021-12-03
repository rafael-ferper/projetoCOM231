const database = require('../models')

class Services{
    constructor(nomeDoModelo){
        this.nomeDoModelo = nomeDoModelo
        console.log(this.nomeDoModelo);
    }

    async criar(valor){
        console.log(valor);
        return database[this.nomeDoModelo].create(valor)
    }
}

module.exports = Services