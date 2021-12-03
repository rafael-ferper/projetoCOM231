const { PaisServices } = require('../services')

class PaisController {
    
    async cadastrarPais(pais){
        try {
            const resultado = await PaisServices.criar(pais)
            if(resultado){
                console.log("\x1b[32m", `Pais ${pais.nomePais} adicionado com sucesso!`)
            }
        } catch (error){
            console.log("\x1b[31m", `Erro ao criar país ${pais.nomePais}`);
            console.log(error);
        }
    }
}

module.exports = new PaisController