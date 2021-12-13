'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Dias', {
      datas: {
        type: Sequelize.DATE
      },
      nomePais: {
        type: Sequelize.STRING,
        references: { model: 'Pais', key: 'nomePais' },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      numCasos: {
        type: Sequelize.INTEGER
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Dias');
  }
};