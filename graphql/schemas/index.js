const { gql } = require('apollo-server-express');
const clientType = require('./client');
const productType = require('./product');
const orderType = require('./order');

const rootType = gql`
 type Query {
     root: String
 }
 type Mutation {
     root: String
 }

`;

module.exports = [rootType, clientType, productType, orderType];
