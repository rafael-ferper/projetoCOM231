const { CasosServices } = require('../services')
const dataBase = require('../models')

class CasosController {

    async cadastrarCasos(caso){
        try {
            const resultado = await CasosServices.criar(caso)
            if(resultado){
                console.log("\x1b[32m", `Casos de ${caso.id} adicionados com sucesso!`)
            }
        } catch (error){
            console.log("\x1b[31m", `Erro ao criar caso da data de ${caso.id}`);
            console.log(error);
        }
    }
    
}

module.exports = new CasosController