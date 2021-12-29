module.exports = (sequelize, DataTypes) => {
  const Product = sequelize.define('Product', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: DataTypes.STRING,
    image: DataTypes.STRING,
    description: DataTypes.STRING,
    weight: DataTypes.NUMBER,
    price: DataTypes.DOUBLE,
    quantity: DataTypes.INTEGER,
  },
  {
    timestamps: false,
    tableName: 'Products',
    underscored: true,
  });

  return Product;
};
