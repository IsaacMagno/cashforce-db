module.exports = (sequelize, DataTypes) => {
  const Offer = sequelize.define(
    "Offer",
    {
      id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
      tax: DataTypes.STRING,
      tariff: DataTypes.STRING,
      adValorem: DataTypes.STRING,
      float: DataTypes.STRING,
      iof: DataTypes.STRING,
      expiresIn: DataTypes.DATETIME,
      paymentStatusSponsor: DataTypes.TINYINT,
      paymentStatusProvider: DataTypes.TINYINT,
    },
    {
      timestamps: true,
      underscored: true,
      tableName: "Offers",
    }
  );

  Offer.associate = (models) => {
    Offer.hasOne(models.Orders);
    Offer.hasOne(models.Sponsors);
  };

  return Offer;
};
