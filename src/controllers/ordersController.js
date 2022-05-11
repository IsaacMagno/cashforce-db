const ordersServices = require("../services/ordersServices");

const getOrders = async (_req, res) => {
  try {
    const orders = await ordersServices.getOrders();

    return res.status(200).json(orders);
  } catch (error) {
    return res.status(500).json({ message: error });
  }
};

module.exports = {
  getOrders,
};
