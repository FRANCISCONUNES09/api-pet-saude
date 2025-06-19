'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addColumn('Exames', 'animalfoto', {
      type: Sequelize.STRING,
      allowNull: true,  // Altere conforme necessário (true ou false)
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeColumn('Exames', 'animalfoto');
  }
};
