'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Clients', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      fullName: {
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.STRING
      },
      cpf: {
        type: Sequelize.STRING
      },
      birthDate: {
        type: Sequelize.STRING
      },
      adress: {
        street: { type: Sequelize.STRING },
        district: { type: Sequelize.STRING },
        city: { type: Sequelize.STRING },
        state: { type: Sequelize.STRING },
        country: { type: Sequelize.STRING },
        cep: { type: Sequelize.STRING },
        number: { type: Sequelize.NUMBER },
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
  down: async (queryInterface, _Sequelize) => {
    await queryInterface.dropTable('Clients');
  }
};