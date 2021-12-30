const { Product } = require('../../database/models');

module.exports = {
  Mutation: {
    async register(_root, args, _context) {
      const { name, image, description, weight, price, quantity } = args.input;
      return Product.create({ name, 
        image, 
        description, 
        weight, 
        price, 
        quantity,
       });
    },
  },
};
