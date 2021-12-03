'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('dia', {
      data: {
        primaryKey: true,
        type: Sequelize.DATE
      },
      numCasos: {
        type: Sequelize.INTEGER
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('dia');
  }
};