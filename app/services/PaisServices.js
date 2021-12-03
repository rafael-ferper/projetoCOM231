const Services = require('./Services');

class PaisServices extends Services{
    constructor(){
        super('Pais')
    }
}

module.exports = new PaisServices