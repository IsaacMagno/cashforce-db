module.exports = (sequelize, DataTypes) => {
  const Order = sequelize.define(
    "Order",
    {
      id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
      orderNfId: DataTypes.STRING,
      orderNumber: DataTypes.STRING,
      orderPath: DataTypes.STRING,
      orderFileName: DataTypes.STRING,
      orderOriginalName: DataTypes.STRING,
      emissionDate: DataTypes.STRING,
      pdfFile: DataTypes.STRING,
      emitedTo: DataTypes.STRING,
      nNf: DataTypes.STRING,
      CTE: DataTypes.STRING,
      value: DataTypes.STRING,
      orderStatusBuyer: DataTypes.STRING,
      orderStatusProvider: DataTypes.STRING,
      deliveryReceipt: DataTypes.STRING,
      cargoPackingList: DataTypes.STRING,
      deliveryCtrc: DataTypes.STRING,
    },
    {
      timestamps: true,
      underscored: true,
      tableName: "Orders",
    }
  );

  Order.associate = (models) => {
    Order.hasOne(models.Cpnjs);
    Order.hasOne(models.Buyers);
    Order.hasOne(models.Providers);
    Order.hasOne(models.Users);
    Order.belongsTo(models.Orderportions, { foreignKey: "orderId" });
    Order.belongsTo(models.Offers, { foreignKey: "orderId" });
  };

  return Order;
};
