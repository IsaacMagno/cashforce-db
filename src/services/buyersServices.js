const { buyers } = require("../database/models");

const getBuyers = async () => {
  const getBuyers = await buyers.findAll({ raw: true });

  return getBuyers;
};

module.exports = {
  getBuyers,
};
