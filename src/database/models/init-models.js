var DataTypes = require("sequelize").DataTypes;
var _buyers = require("./buyers");
var _cnpjs = require("./cnpjs");
var _offers = require("./offers");
var _orderportions = require("./orderportions");
var _orders = require("./orders");
var _providers = require("./providers");
var _sponsors = require("./sponsors");
var _users = require("./users");

function initModels(sequelize) {
  var buyers = _buyers(sequelize, DataTypes);
  var cnpjs = _cnpjs(sequelize, DataTypes);
  var offers = _offers(sequelize, DataTypes);
  var orderportions = _orderportions(sequelize, DataTypes);
  var orders = _orders(sequelize, DataTypes);
  var providers = _providers(sequelize, DataTypes);
  var sponsors = _sponsors(sequelize, DataTypes);
  var users = _users(sequelize, DataTypes);

  orders.belongsTo(buyers, { as: "buyer", foreignKey: "buyerId"});
  buyers.hasMany(orders, { as: "orders", foreignKey: "buyerId"});
  buyers.belongsTo(cnpjs, { as: "cnpj", foreignKey: "cnpjId"});
  cnpjs.hasMany(buyers, { as: "buyers", foreignKey: "cnpjId"});
  orders.belongsTo(cnpjs, { as: "cnpj", foreignKey: "cnpjId"});
  cnpjs.hasMany(orders, { as: "orders", foreignKey: "cnpjId"});
  providers.belongsTo(cnpjs, { as: "cnpj", foreignKey: "cnpjId"});
  cnpjs.hasMany(providers, { as: "providers", foreignKey: "cnpjId"});
  sponsors.belongsTo(cnpjs, { as: "cnpj", foreignKey: "cnpjId"});
  cnpjs.hasMany(sponsors, { as: "sponsors", foreignKey: "cnpjId"});
  offers.belongsTo(orders, { as: "order", foreignKey: "orderId"});
  orders.hasMany(offers, { as: "offers", foreignKey: "orderId"});
  orderportions.belongsTo(orders, { as: "order", foreignKey: "orderId"});
  orders.hasMany(orderportions, { as: "orderportions", foreignKey: "orderId"});
  orders.belongsTo(providers, { as: "provider", foreignKey: "providerId"});
  providers.hasMany(orders, { as: "orders", foreignKey: "providerId"});
  offers.belongsTo(sponsors, { as: "sponsor", foreignKey: "sponsorId"});
  sponsors.hasMany(offers, { as: "offers", foreignKey: "sponsorId"});
  orders.belongsTo(users, { as: "user", foreignKey: "userId"});
  users.hasMany(orders, { as: "orders", foreignKey: "userId"});

  return {
    buyers,
    cnpjs,
    offers,
    orderportions,
    orders,
    providers,
    sponsors,
    users,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
