'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Pais', {
      nomePais: {
        type: Sequelize.STRING,
        primaryKey: true,
      },
      slug: {
        type: Sequelize.STRING
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Pais');
  }
};