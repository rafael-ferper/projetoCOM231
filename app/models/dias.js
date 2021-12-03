'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Dias extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Dias.hasOne(models.Pais,{
        foreignKey: 'nomePais',
      })
    }
  };
  Dias.init({
    data: {
      type: DataTypes.DATE,
      primaryKey: true
    },
    numCasos: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Dias',
    timestamps: false
  });
  return Dias;
};
