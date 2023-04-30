import { gql } from '@apollo/client';
//
// ~~~~~~~~~~~ `Gavin wuz here!!`~~~~~~~~~~
//
//
// queries for the client side:  
// categories // charities // 
// rentals // donations // 
// products // product  
// user // order // checkout
//
export const GET_CATEGORIES = gql`
  query categories {
    categories {
      _id
      name
    }
  }
`;

export const GET_PRODUCTS = gql`
  query products($category: ID, $name: String) {
    products(category: $category, name: $name) {
      _id
      name
      description
      image
      price
      category {
        _id
        name
      }
    }
  }
`;

export const GET_PRODUCT = gql`
  query product($productId: ID!) {
    product(_id: $productId) {
      _id
      name
      description
      image
      price
      category {
        _id
        name
      }
    }
  }
`;

export const GET_USER = gql`
  query user {
    user {
      _id
      firstName
      lastName
      username
      email
    }
  }
`;

export const GET_ORDER = gql`
  query order($orderId: ID!) {
    order(_id: $orderId) {
      _id
      orderDate
      products {
        _id
        name
        description
        image
        price
      }
    }
  }
`;

export const QUERY_PRODUCTS = gql`
  query getProducts($category: ID) {
    products(category: $category) {
      _id
      name
      description
      price
      quantity
      image
      category {
        _id
        name
      }
    }
  }
`;

export const QUERY_USER = gql`
  {
    user {
      firstName
      lastName
      orders {
        _id
        purchaseDate
        products {
          _id
          name
          description
          price
          quantity
          image
        }
      }
    }
  }
`;

export const QUERY_USERS = gql`
  {
    users {
      firstName
      lastName
      orders {
        _id
        purchaseDate
        products {
          _id
          name
          description
          price
          quantity
          image
        }
      }
    }
  }
`;

export const QUERY_CHECKOUT = gql`
  query getCheckout($products: [ID]!) {
    checkout(products: $products) {
      session
    }
  }
`;

export const GET_CHARITIES = gql`
  query charities {
    charities {
      _id
      name
      description
      image
      website
    }
  }
`;

export const GET_RENTALS = gql`
  query rentals {
    rentals {
      _id
      name
      description
      image
      price
      address
    }
  }
`;

export const QUERY_CATEGORIES = gql`
  {
    categories {
      _id
      name
    }
  }
`;

export const GET_DONATIONS = gql`
  query donations {
    donations {
      _id
      firstName
      lastName
      email
      amount
    }
  }
`;


//
// ~~~~~~~~~~~ `!!`~~~~~~~~~~~

