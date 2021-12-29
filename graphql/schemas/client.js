const { gql } = require('apollo-server-express');

module.exports = gql`

 type Client {
     id: Int!
     fullName: String!
     email: String!
     cpf: String!
     birthDate: String!
     street: String!
     district: String!
     city: String!
     state: String!
     country: String!
     cep: String!
     number: Int!
 }

 extend type Mutation {
     register(input: RegisterInput!): RegisterResponse
 }

 type RegisterResponse {
    id: Int!
    fullName: String!
    email: String!
 }

 input RegisterInput {
  fullName: String!
  email: String!
  cpf: String!
  birthDate: String!
  street: String!
  district: String!
  city: String!
  state: String!
  country: String!
  cep: String!
  number: Int!
 }

`;
