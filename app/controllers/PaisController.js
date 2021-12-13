const { PaisServices } = require('../services')
const dataBase = require('../models');


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

    async associarDiaAoPais(nomePais, datas){
        try {

            for (const item of datas) {
                const resultado = await dataBase.Dias.create({nomePais: nomePais})

                var pais = resultado.get({ plain: true});
                if(resultado){
                    console.log("\x1b[32m", `associação do país ${nomePais} com a data ${item.datas} criada com sucesso`)

                    console.log(pais)
                }
            }

        } catch (error) {
            console.log("\x1b[31m", `ERRO ao criar associacao`)
            console.log(error)
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

module.exports = new PaisController