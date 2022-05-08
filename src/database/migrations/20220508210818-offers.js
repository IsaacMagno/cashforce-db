"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.createTable("Offers", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER(11),
      },
      tax: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      tariff: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      adValorem: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      float: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      iof: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      expiresIn: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      paymentStatusSponsor: {
        type: Sequelize.TINYINT(1),
        defaultValue: 0,
      },
      paymentStatusProvider: {
        type: Sequelize.TINYINT(1),
        defaultValue: 0,
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      orderId: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
        field: "orderId",
        references: {
          model: "Orders",
          key: "id",
        },
      },
      sponsorId: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
        field: "sponsorId",
        references: {
          model: "Sponsors",
          key: "id",
        },
      },
    });
  },

  async down(queryInterface, _Sequelize) {
    return queryInterface.dropTable("Offers");
  },
};
