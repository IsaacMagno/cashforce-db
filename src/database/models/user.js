module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    "User",
    {
      id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
      name: DataTypes.STRING,
      email: DataTypes.STRING,
      phoneNumber: DataTypes.STRING,
      mobile: DataTypes.STRING,
      departament: DataTypes.STRING,
      verificationCode: DataTypes.STRING,
      emailChecked: DataTypes.TINYINT,
      cashforceAdm: DataTypes.TINYINT,
    },
    {
      timestamps: true,
      underscored: true,
      tableName: "Users",
    }
  );

  User.associate = (models) => {
    User.belongsTo(models.Orders, { foreignKey: "userId" });
  };

  return User;
};
