const { Client } = require('../../database/models');

module.exports = {
  Mutation: {
    async register(_root, args, _context) {
      const { fullName, email, cpf, birthDate, street, district,
        city, state, country, cep, number } = args.input;
      return Client.create({ fullName, 
        email, 
        cpf, 
        birthDate, 
        street, 
        district,
        city, 
        state, 
        country, 
        cep, 
        number,
       });
    },
  },
};
