const { DiasServices } = require('../services')

class DiasController {
    
    async cadastrarDias(dia){
        try {
            const resultado = await DiasServices.criar(dia)
            if(resultado){
                console.log("\x1b[32m", `Data de ${dia.datas} adicionada com sucesso!`)
            }
        } catch (error){
            console.log("\x1b[31m", `Erro ao criar data de ${dia.datas}`);
            console.log(error);
        }
    }
}

module.exports = new DiasController;