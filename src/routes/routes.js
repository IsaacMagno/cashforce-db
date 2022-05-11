router = require("express").Router();
const ordersController = require("../controllers/ordersController");
const buyersController = require("../controllers/buyersController");
const providersController = require("../controllers/providersController");

router.get("/orders", ordersController.getOrders);

router.get("/buyers/", buyersController.getBuyers);

router.get("/providers/", providersController.getProviders);

module.exports = router;
