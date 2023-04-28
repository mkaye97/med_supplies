const { gql } = require('apollo-server-express');

const typeDefs = gql`

  scalar Date

  type Category {
    _id: ID
    name: String
  }

  type Product {
    _id: ID
    name: String
    description: String
    image: String
    quantity: Int
    price: Float
    category: Category
  }

  type Rental {
    _id: ID
    product: Product!
    renter: User!
    rentalDate: String!
    rentalPeriod: Int!
    returnDate: String!
  }

  type Order {
    _id: ID
    purchaseDate: String
    products: [Product]
    rentals: [Rental]
  }

  type User {
    _id: ID
    firstName: String
    lastName: String
    username: String
    email: String
    orders: [Order]
  }

  type Checkout {
    session: ID
  }

  type Auth {
    token: ID
    user: User
  }

  type Query {
    categories: [Category]
    products(category: ID, name: String): [Product]
    product(_id: ID!): Product
    user: User
    order(_id: ID!): Order
    checkout(products: [ID]!): Checkout
    charities: [Charity]
    rentals: [Rental]
    donations: [Donation]
  }

  type Charity {
    _id: ID
    charityName: String
    description: String
  }

 type Donation {
  _id: ID!
  amount: Float!
  user_id: ID!
  charity_id: ID!
}

input DonationInput {
  amount: Float!
  user_id: ID!
  charity_id: ID!
}


type Mutation {
    addUser(firstName: String!, lastName: String!, username: String!, email: String!, password: String!): Auth
    addOrder(products: [ID]!): Order
    updateUser(firstName: String, lastName: String, username: String, email: String, password: String): User
    updateProduct(_id: ID!, quantity: Int!): Product
    login(email: String!, password: String!): Auth
    addDonation(input: DonationInput!): Donation
  }
`;

module.exports = typeDefs;
