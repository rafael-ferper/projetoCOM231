'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Casos extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Casos.hasOne(models.Pais,{
        foreignKey: 'nomePais',
        through: 'Pais'
      })
    }
  };
  Casos.init({
    id: {
      type: DataTypes.STRING,
      primaryKey: true
    },
    dataHoje: DataTypes.DATE,
    novosConf: DataTypes.INTEGER,
    totalConf: DataTypes.INTEGER,
    novasMorte: DataTypes.INTEGER,
    totalMorte: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Casos',
    timestamps: false
  });
  return Casos;
};