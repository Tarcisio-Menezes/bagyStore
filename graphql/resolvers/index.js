const clientResolvers = require('./client');
const productResolvers = require('./product');
const orderResolvers = require('./order');

module.exports = [clientResolvers, productResolvers, orderResolvers];
