const buyersServices = require("../services/buyersServices");

const getBuyers = async (req, res) => {
  try {
    const buyers = await buyersServices.getBuyers();

    return res.status(200).json(buyers);
  } catch (error) {
    return res.status(500).json({ message: error });
  }
};

module.exports = {
  getBuyers,
};
