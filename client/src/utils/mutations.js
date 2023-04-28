import { gql } from '@apollo/client';

//
// ~~~~~~~~~~~ `Gavin wuz here!!`~~~~~~~~~~
//
//
// Mutations for the client side:  
// ADD_USER // ADD_ORDER // 
// UPDATE_USER // UPDATE_PRODUCT // 
// LOGIN // ADD DONATION 
//
//

export const ADD_USER = gql`
  mutation addUser(
    $username: String!
    $firstName: String!
    $lastName: String!
    $email: String!
    $password: String!
  ) {
    addUser(
      username: $username
      firstName: $firstName
      lastName: $lastName
      email: $email
      password: $password
    ) {
      token
      user {
        _id
      }
    }
  }
`;

export const ADD_ORDER = gql`
  mutation addOrder($products: [ID]!, $rentals: [ID], $donations:[ID], $charities: [ID]) {
    addOrder(products: $products, rentals: $rentals, donations: $donations, charities: $charities) {
      purchaseDate
      products {
        _id
        name
        description
        price
        quantity
        category {
          name
        }
        isRentable
      }
      rentals {
        _id
        product {
          _id
          name
          description
          price
          quantity
          category {
            _id
            name
          }
        }
        renter {
          _id
          firstName
          lastName
          username
          email
        }
        rentalDate
        rentalPeriod
        returnDate
      }
      donations {
        _id
        amount
        charity {
          _id
          charityName
          description
        }
      }
      charities {
        _id
        charityName
        description
      }
    }
  }
`;

export const UPDATE_USER = gql`
  mutation updateUser($firstName: String, $lastName: String, $username: String, $email: String, $password: String) {
    updateUser(firstName: $firstName, lastName: $lastName, username: $username, email: $email, password: $password) {
      _id
      firstName
      lastName
      username
      email
    }
  }
`;

export const UPDATE_PRODUCT = gql`
  mutation updateProduct($_id: ID!, $quantity: Int!) {
    updateProduct(_id: $_id, quantity: $quantity) {
      _id
      name
      description
      price
      quantity
      category {
        name
      }
      image
    }
  }
`;

export const LOGIN = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
      }
    }
  }
`;

export const ADD_DONATION = gql`
  mutation addDonation($input: DonationInput!) {
    addDonation(input: $input) {
      _id
      name
      email
      message
      amount
      createdAt
    }
  }
`;

//
// ~~~~~~~~~~~ `!!`~~~~~~~~~~~

