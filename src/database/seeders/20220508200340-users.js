"use strict";

module.exports = {
  async up(queryInterface, _Sequelize) {
    return queryInterface.bulkInsert("Users", [
      {
        id: 1,
        name: "ALLAN SOUZA",
        email: "allan@cashforce.com.br",
        verificationCode: "",
        emailChecked: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
        cashforceAdm: 1,
      },
    ]);
  },

  async down(queryInterface, _Sequelize) {
    return queryInterface.bulkDelete("Users", null, {});
  },
};
