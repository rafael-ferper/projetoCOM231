const { DiaServices } = require('../services')

class DiaController {
    
    async cadastrarDia(dia){
        try {
            const resultado = await DiaServices.criar(dia)
            if(resultado){
                console.log("\x1b[32m", `Data de ${dia.data} adicionada com sucesso!`)
            }
        } catch (error){
            console.log("\x1b[31m", `Erro ao criar data de ${dia.data}`);
            console.log(error);
        }
    }

    async associarDiaAoPais(nomePais, data){
        try {

            for (const item of data) {
                const resultado = await dataBase.PaisDia.create({nomePais: nomePais, data:item.data})

                var pais = resultado.get({ plain: true});
                if(resultado){
                    console.log("\x1b[32m", `associação do país ${nomePais} com a data ${item.data} criada com sucesso`)

                    console.log(pais)
                }
            }

        } catch (error) {
            console.log("\x1b[31m", `ERRO ao criar associacao`)
            console.log(error)
        }
    }
}

module.exports = new DiaController;