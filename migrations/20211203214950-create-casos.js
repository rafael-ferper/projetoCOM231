'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Casos', {
      id: {
        primaryKey: true,
        type: Sequelize.STRING
      },
      nomePais: {
        type: Sequelize.STRING,
        references: { model: 'Pais', key: 'nomePais' },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      dataHoje: {
        type: Sequelize.DATE
      },
      novosConf: {
        type: Sequelize.INTEGER
      },
      totalConf: {
        type: Sequelize.INTEGER
      },
      novasMorte: {
        type: Sequelize.INTEGER
      },
      totalMorte: {
        type: Sequelize.INTEGER
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Casos');
  }
};