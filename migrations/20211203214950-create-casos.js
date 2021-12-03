'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Casos', {
      id: {
        primaryKey: true,
        type: Sequelize.STRING
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
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Casos');
  }
};