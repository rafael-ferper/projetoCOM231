'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Pais extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Pais.hasOne(models.Dias, {
        through: 'dias',
        foreignKey: 'nomePais',
      })

      Pais.hasOne(models.Casos, {
        through: 'casos',
        foreignKey: 'nomePais',
      })
    }
  };
  Pais.init({
    nomePais: {
      type: DataTypes.STRING,
      primaryKey: true
    }, 
    slug: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Pais',
    timestamps: false
  });
  return Pais;
};