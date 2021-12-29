const { gql } = require('apollo-server-express');

module.exports = gql`

 type Product {
     id: Int!
     name: String!
     image: String!
     description: String!s
     weight: Number!
     price: Double!
     quantity: Int!
 }

 extend type Mutation {
     register(input: RegisterInput!): RegisterResponse
 }

 type RegisterResponse {
    id: Int!
    name: String!
    quantity: Int!
 }

 input RegisterInput {
  id: Int!
  name: String!
  image: String!
  description: String!s
  weight: Number!
  price: Double!
  quantity: Int!
 }

`;
