const axios = require('axios');

const PaisController = require('./controllers/PaisController');
const CasoController = require('./controllers/CasoController');


async function buscarPaises(){
    try{
        const response = await axios.get('https://api.covid19api.com/countries')
        const paises = response.data['country']

        for (const item of paises){
            await PaisController.cadastrarPais({nomePais: item.Country, slug: item.slug})
        }
    }
    catch (error) {
        console.log('ERRO AO BUSCAR PAÍSES');
        console.log(error);
    }
}

async function buscarCasos(){
    try {
        console.log('CASOS')
        const response = await axios.get('https://api.covid19api.com/summary')
        const casos = response.data['cases']

        for (const item of casos) {
            await CasoController.cadastrarCaso({dataHoje: item.Date, novosConf: item.NewConfirmed, totalConf: item.TotalConfirmed, novasMorte: item.NewDeaths, totalMorte: item.TotalDeaths})
        }
    } catch (error) {
        console.log('ERRO AO BUSCAR CASOS');
        console.log(error);
    }

    }

buscarPaises()
buscarCasos()