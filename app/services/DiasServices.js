const Services = require('./Services');

class DiasServices extends Services{
    constructor(){
        super('Dias')
    }
}

module.exports = new DiasServices