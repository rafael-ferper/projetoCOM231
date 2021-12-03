const Services = require('./Services');

class CasoServices extends Services{
    constructor(){
        super('Caso')
    }
}

module.exports = new CasoServices