'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class dia extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      dia.hasOne(models.Pais,{
        foreignKey: 'nomePais',
      })
    }
  };
  dia.init({
    data: {
      type: DataTypes.DATE,
      primaryKey: true
    },
    numCasos: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'dia',
  });
  return dia;
};