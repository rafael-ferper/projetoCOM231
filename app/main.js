const axios = require('axios');

const PaisController = require('./controllers/PaisController');
const CasosController = require('./controllers/CasosController');
const DiasController = require('./controllers/DiasController');

// const dataBase = require('./models')



async function buscarPaises(){
    try{
        console.log('PAÍSES');
        const { data } = await axios.get('https://api.covid19api.com/countries')
        for (const item of data){
            await PaisController.cadastrarPais({nomePais: item.Country, slug: item.Slug})
        }
        await buscarCasos()
        await buscarDia()
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
        const casos = data['Countries']
        for (const item of casos){
            await CasosController.cadastrarCasos({id: item.ID, nomePais: item.Country, dataHoje: item.Date, novosConf: item.NewConfirmed, totalConf: item.TotalConfirmed, novasMorte: item.NewDeaths, totalMorte: item.TotalDeaths})
        }
    } catch (error) {
        console.log('ERRO AO BUSCAR CASOS');
        console.log(error);
    }
}



async function buscarDia(){
    const slugPais = "united-states"
    try {
        console.log('DIAS');
        const { data } = await axios.get(`https://api.covid19api.com/total/dayone/country/${slugPais}`)
        for (const item of data) {
            await DiasController.cadastrarDias({datas: item.Date, nomePais: item.Country, numCasos: item.Confirmed})
        
        }
        
    }
    catch (error){
        console.log(`ERRO AO BUSCAR DIAS DO(E) ${slugPais}`);
        console.log(error);
    }
}

buscarPaises()