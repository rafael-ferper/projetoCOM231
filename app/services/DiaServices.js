const Services = require('./Services');

class DiaServices extends Services{
    constructor(){
        super('Dia')
    }
}

module.exports = new DiaServices