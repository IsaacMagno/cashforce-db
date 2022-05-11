const { providers } = require("../database/models");

const getProviders = async () => {
  const getProviders = await providers.findAll({ raw: true });

  return getProviders;
};

module.exports = {
  getProviders,
};
