"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.createTable("Orders", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER(11),
      },
      orderNfId: {
        allowNull: false,
        type: Sequelize.STRING,
        unique: true,
      },
      orderNumber: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      orderPath: {
        type: Sequelize.STRING,
        unique: true,
      },
      orderFileName: {
        type: Sequelize.STRING,
        unique: true,
      },
      orderOriginalName: {
        type: Sequelize.STRING,
        unique: true,
      },
      emissionDate: {
        type: Sequelize.STRING,
      },
      pdfFile: {
        type: Sequelize.STRING,
      },
      emitedTo: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      nNf: {
        type: Sequelize.STRING,
      },
      CTE: {
        type: Sequelize.STRING,
      },
      value: {
        type: Sequelize.STRING,
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      cnpjId: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
        field: "cnpjId",
        references: {
          model: "Cnpjs",
          key: "id",
        },
      },
      userId: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
        field: "userId",
        references: {
          model: "Users",
          key: "id",
        },
      },
      buyerId: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
        field: "buyerId",
        references: {
          model: "Buyers",
          key: "id",
        },
      },
      providerId: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
        field: "providerId",
        references: {
          model: "Providers",
          key: "id",
        },
      },
      orderStatusBuyer: {
        type: Sequelize.STRING,
        defaultValue: "0",
      },
      orderStatusProvider: {
        type: Sequelize.STRING,
        defaultValue: "0",
      },
      deliveryReceipt: {
        type: Sequelize.STRING,
      },
      cargoPackingList: {
        type: Sequelize.STRING,
      },
      deliveryCtrc: {
        type: Sequelize.STRING,
      },
    });
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.dropTable("Orders");
  },
};
