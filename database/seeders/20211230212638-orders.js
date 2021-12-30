'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    module.exports = {
      up: async (queryInterface, _Sequelize) => {
        return queryInterface.bulkInsert('Products',
          [
            {
              productId: 1,
              date: '30/12/2021',
              parcel: 5,
              clientId: 1,
              status: 'Em transporte',
            },
            {
              productId: 2,
              date: '30/12/2021',
              parcel: 1,
              clientId: 2,
              status: 'Aguardando pagamento',
            },
          ],
          {},
        );
      },
    
      down: async (queryInterface, _Sequelize) => {
        return queryInterface.bulkDelete('Orders', null, {});
      },
    };
  },
};
