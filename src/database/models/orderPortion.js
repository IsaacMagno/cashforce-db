module.exports = (sequelize, DataTypes) => {
  const Orderportion = sequelize.define(
    "Orderportion",
    {
      id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
      nDup: DataTypes.STRING,
      dVenc: DataTypes.STRING,
      vDup: DataTypes.STRING,
      availableToMarket: DataTypes.TINYINT,
      orderId: DataTypes.INTEGER,
    },
    {
      timestamps: true,
      underscored: true,
      tableName: "Orderportions",
    }
  );

  Orderportion.associate = (models) => {
    Orderportion.hasOne(models.Orders);
  };

  return Orderportion;
};
