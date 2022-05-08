module.exports = (sequelize, DataTypes) => {
  const Buyer = sequelize.define(
    "Buyer",
    {
      id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
      name: DataTypes.STRING,
      tradingName: DataTypes.STRING,
      cashforceTax: DataTypes.STRING,
      responsibleName: DataTypes.STRING,
      responsibleEmail: DataTypes.STRING,
      responsiblePosition: DataTypes.STRING,
      responsiblePhone: DataTypes.STRING,
      website: DataTypes.STRING,
      postalCode: DataTypes.STRING,
      address: DataTypes.STRING,
      number: DataTypes.STRING,
      complement: DataTypes.STRING,
      neighborhood: DataTypes.STRING,
      city: DataTypes.STRING,
      state: DataTypes.STRING,
      phoneNumber: DataTypes.STRING,
      situation: DataTypes.STRING,
      situationDate: DataTypes.STRING,
      confirm: DataTypes.TINYINT,
      email: DataTypes.STRING,
    },
    {
      timestamps: true,
      underscored: true,
      tableName: "Buyers",
    }
  );

  Buyer.associate = (models) => {
    Buyer.hasOne(models.Cpnjs);
  };

  return Buyer;
};
