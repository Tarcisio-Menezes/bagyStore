const { gql } = require('apollo-server-express');

module.exports = gql`

 type Order {
     id: Int!
     date: String!
     parcel: Int!
     client: Client!
     products: [Product!]
     status: String!

 }

extend type Query {
    getAllOrders: [Order!]
    getOrderById(orderId: Int!): Order
}

 extend type Mutation {
     createOrder(date: String!, parcel: Int!, client: Client!,
       products: [Product!], status: String!): CreatePostResponse
 }

 type CreateOrderResponse {
    id: Int!
    date: String!
    status: String!
    createdAt: String!
 }

`;
