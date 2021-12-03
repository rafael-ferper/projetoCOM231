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
    async associarCasoAoPais(nomePais, id){
        try {

            for (const item of id) {
                const resultado = await dataBase.create({nomePais: nomePais, id:item.id})

                var pais = resultado.get({ plain: true});
                if(resultado){
                    console.log("\x1b[32m", `associação do país ${nomePais} com o caso de ${item.id} criada com sucesso`)

                    console.log(pais)
                }
            }

        } catch (error) {
            console.log("\x1b[31m", `ERRO ao criar associacao`)
            console.log(error)
        }
    }
}

module.exports = new CasosController