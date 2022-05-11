const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('cnpjs', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    cnpj: {
      type: DataTypes.STRING(255),
      allowNull: false,
      unique: "cnpj"
    },
    companyType: {
      type: DataTypes.STRING(255),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'cnpjs',
    timestamps: true,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "cnpj",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "cnpj" },
        ]
      },
    ]
  });
};
