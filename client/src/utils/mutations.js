import { gql } from '@apollo/client';

// 3 mutations:  LOGIN_USER, ADD_USER & ADD_ORDER ... Order includes rentals 
export const LOGIN_USER = gql`
  mutation loginUser($username: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        firstName
        lastName
        username
        email
      }
    }
  }
`;

export const ADD_ORDER = gql`
  mutation addOrder($products: [ID]!, $rentals: [ID]) {
    addOrder(products: $products, rentals: $rentals) {
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
          isRentable
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
          organization
          description
        }
      }
      charities {
        _id
        organization
        description
      }
    }
  }
`;

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
