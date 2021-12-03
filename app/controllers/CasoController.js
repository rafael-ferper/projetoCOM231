const { CasoServices } = require('../services')
const dataBase = require('../models')

class CasoController {

    async cadastrarCaso(caso){
        try {
            const resultado = await CasoServices.criar(caso)
            if(resultado){
                console.log("\x1b[32m", `Casos de ${caso.dataHoje} adicionados com sucesso!`)
            }
        } catch (error){
            console.log("\x1b[31m", `Erro ao criar caso da data de ${caso.dataHoje}`);
            console.log(error);
        }
    }
    async associarCasoAoPais(nomePais, dataHoje){
        try {

            for (const item of dataHoje) {
                const resultado = await dataBase.PaisCaso.create({nomePais: nomePais, dataHoje:item.dataHoje})

                var pais = resultado.get({ plain: true});
                if(resultado){
                    console.log("\x1b[32m", `associação do país ${nomePais} com o caso de ${item.dataHoje} criada com sucesso`)

                    console.log(pais)
                }
            }

        } catch (error) {
            console.log("\x1b[31m", `ERRO ao criar associacao`)
            console.log(error)
        }
    }
}

module.exports = new CasoController