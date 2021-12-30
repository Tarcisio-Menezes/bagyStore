const { Order } = require('../../database/models');

module.exports = {
  Mutation: {
    async register(_root, args, _context) {
      const { productId, date, parcel, clientId, status } = args.input;
      return Order.create({ productId, 
        date, 
        parcel, 
        clientId, 
        status,
       });
    },
  },
};
