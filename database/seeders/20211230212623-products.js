'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    module.exports = {
      up: async (queryInterface, _Sequelize) => {
        return queryInterface.bulkInsert('Products',
          [
            {
              name: 'Notebook Dell Inspiron',
              image: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.mercadolivre.com.br%2Fnotebook-dell-inspiron-5566-preta-156-intel-core-i3-6006u-8gb-de-ram-1tb-hdd-intel-hd-graphics-520-1366x768px-windows-10-home%2Fp%2FMLB15540374&psig=AOvVaw0SoNurRwn43nFwp1ggDt_u&ust=1640986828148000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCOi2hLu-jPUCFQAAAAAdAAAAABAD',
              description: 'note bom demais da conta',
              weight: '1 Kg',
              price: '3500',
              quantity: '30',
            },
            {
              name: 'Árvore de Natal',
              image: 'https://a-static.mlcdn.com.br/618x463/arvore-de-natal-pinheiro-240-m-240-cm-1482-galhos-smsc/giftcenter/4815/933c7132094f2cddb7c2d09434850012.jpg',
              weight: '18 Kg',
              price: '2500',
              quantity: '34',
            },
          ],
          {},
        );
      },
    
      down: async (queryInterface, _Sequelize) => {
        return queryInterface.bulkDelete('Products', null, {});
      },
    };
  },
};
