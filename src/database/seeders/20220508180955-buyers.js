"use strict";

module.exports = {
  async up(queryInterface, _Sequelize) {
    return queryInterface.bulkInsert("Buyers", [
      {
        id: 1,
        name: "SACADO 001",
        tradingName: "SACADO 001 LTDA",
        cashforceTax: "0",
        cnpjId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, _Sequelize) {
    return queryInterface.bulkDelete("Buyers", null, {});
  },
};
