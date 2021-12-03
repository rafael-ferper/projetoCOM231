const axios = require('axios');

const PaisController = require('./controllers/PaisController');
const CasoController = require('./controllers/CasoController');



async function buscarPaises(){
    try{
        console.log('PAÍSES');
        const { data } = await axios.get('https://api.covid19api.com/countries')
        

        for (const item of data){
            await PaisController.cadastrarPais({nomePais: item.Country, slug: item.Slug})
        }
        buscarCasos()
    }
    catch (error) {
        console.log('ERRO AO BUSCAR PAÍSES');
        console.log(error);
    }
}

async function buscarCasos(){
    try {
        console.log('CASOS')
        const { data } = await axios.get('https://api.covid19api.com/summary')
        console.log(data).limit(5);
        for (const item of data){
            await CasoController.cadastrarCaso({dataHoje: item.Countries.Date, novosConf: item.Countries.NewConfirmed, totalConf: item.Countries.TotalConfirmed, novasMorte: item.Countries.NewDeaths, totalMorte: item.Countries.TotalDeaths})
        }
    } catch (error) {
        console.log('ERRO AO BUSCAR CASOS');
        console.log(error);
    }
}

buscarPaises()
