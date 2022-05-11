const providersServices = require("../services/providersServices");

const getProviders = async (req, res) => {
  try {
    const providers = await providersServices.getProviders();

    return res.status(200).json(providers);
  } catch (error) {
    return res.status(500).json({ message: error });
  }
};

module.exports = {
  getProviders,
};
