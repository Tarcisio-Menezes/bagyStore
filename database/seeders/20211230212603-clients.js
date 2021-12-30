'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    module.exports = {
      up: async (queryInterface, _Sequelize) => {
        return queryInterface.bulkInsert('Clients',
          [
            {
              fullName: 'Tarcísio Bagy Lover',
              email: 'tarcisioquim@gmail.com',
              cpf: '42993689835',
              birthDate: '13/06/1993',
              street: 'Av. das Hortencias',
              district: 'Centro',
              city: 'Cássia dos Coqueiros',
              state: 'São Paulo',
              country: 'Brasil',
              cep: '14260000',
              number: 134,
            },
            {
              fullName: 'Maria Antonieta de Las Nieves',
              email: 'chiquinha@gmail.com',
              cpf: '20806422009',
              birthDate: '20/06/1973',
              street: 'Av. Chesperito',
              district: 'Jardim da Vila',
              city: 'Acapulco',
              state: 'Guerrero',
              country: 'Mexico',
              cep: '54350757',
              number: 07,
            },
          ],
          {},
        );
      },
    
      down: async (queryInterface, _Sequelize) => {
        return queryInterface.bulkDelete('Clients', null, {});
      },
    };
  },
};
