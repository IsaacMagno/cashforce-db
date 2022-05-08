"use strict";

module.exports = {
  async up(queryInterface, _Sequelize) {
    return queryInterface.bulkInsert("Providers", [
      {
        id: 1,
        name: "CEDENTE 002",
        tradingName: "CEDENTE 002 LTDA",
        createdAt: new Date(),
        updatedAt: new Date(),
        cnpjId: 2,
      },
    ]);
  },

  async down(queryInterface, _Sequelize) {
    return queryInterface.bulkDelete("Providers", null, {});
  },
};
