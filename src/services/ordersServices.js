const { orders } = require("../database/models");

const getOrders = async () => {
  const getOrders = await orders.findAll({ raw: true });

  return getOrders;
};

module.exports = {
  getOrders,
};
