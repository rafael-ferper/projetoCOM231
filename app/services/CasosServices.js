const Services = require('./Services');

class CasosServices extends Services{
    constructor(){
        super('Casos')
    }
}

module.exports = new CasosServices