"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert("Cnpjs", [
      {
        id: 1,
        cnpj: "00000000000001",
        companyType: "2",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 2,
        cnpj: "00000000000002",
        companyType: "1",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete("Cnpjs", null, {});
  },
};
