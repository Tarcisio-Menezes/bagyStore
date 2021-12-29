/* eslint-disable max-lines-per-function */
module.exports = (sequelize, DataTypes) => {
  const Client = sequelize.define('Client', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    fullName: DataTypes.STRING,
    email: DataTypes.STRING,
    cpf: DataTypes.STRING,
    birthDate: DataTypes.STRING,
    adress: {
      street: { type: DataTypes.STRING },
      district: { type: DataTypes.STRING },
      city: { type: DataTypes.STRING },
      state: { type: DataTypes.STRING },
      country: { type: DataTypes.STRING },
      cep: { type: DataTypes.STRING },
      number: { type: DataTypes.INTEGER },
    },
  },
  {
    timestamps: false,
    tableName: 'Clients',
    underscored: true,
  });

  return Client;
};
