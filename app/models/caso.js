'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class caso extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      caso.hasOne(models.Pais,{
        foreignKey: 'nomePais',
      })
    }
  };
  caso.init({
    dataHoje: {
      type: DataTypes.DATE,
      primaryKey: true
    },
    novosConf: DataTypes.INTEGER,
    totalConf: DataTypes.INTEGER,
    novasMorte: DataTypes.INTEGER,
    totalMorte: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'caso',
  });
  return caso;
};