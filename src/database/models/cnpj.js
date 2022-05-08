module.exports = (sequelize, DataTypes) => {
  const Cnpj = sequelize.define(
    "Cnpj",
    {
      id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
      cnpj: DataTypes.STRING,
      companyType: DataTypes.STRING,
    },
    {
      timestamps: true,
      underscored: true,
      tableName: "Cnpjs",
    }
  );

  Cnpj.associate = (models) => {
    Cnpj.belongsTo(models.Sponsors, { foreignKey: "cnpjId" });
    Cnpj.belongsTo(models.Providers, { foreignKey: "cnpjId" });
    Cnpj.belongsTo(models.Orders, { foreignKey: "cnpjId" });
    Cnpj.belongsTo(models.Buyers, { foreignKey: "cnpjId" });
  };

  return Cnpj;
};
