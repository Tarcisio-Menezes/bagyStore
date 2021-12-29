// eslint-disable-next-line max-lines-per-function
module.exports = (sequelize, DataTypes) => {
  const Order = sequelize.define('Order', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    date: DataTypes.STRING,
    parcel: DataTypes.INTEGER,
    status: DataTypes.STRING,
  },
  {
    timestamps: false,
    tableName: 'Orders',
    underscored: true,
  });

  Order.associate = (models) => {
    Order.hasMany(models.product,
      { foreignKey: 'id', as: 'order_id' });
    Order.belongsTo(models.client,
      { foreignKey: 'id', as: 'client_id' });
  };

  return Order;
};
