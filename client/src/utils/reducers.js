//
// ~~~~~~~~~~~ `Gavin wuz here!!`~~~~~~~~~~
//
// 
//
import React, { createContext, useContext, useReducer } from 'react';

const initialState = {
    categories: [],
    products: [],
    selectedProduct: null,
    cart: [],
    user: null,
    order: null,
    checkout: null,
    charities: [],
    rentals: [],
    donations: [],
    filters: {
        category: '',
        minPrice: 0,
        maxPrice: 0,
      },
    isAuthenticated: false,
  };
  
  const reducer = (state = initialState, action) => {
    switch (action.type) {
      case "SET_CATEGORIES":
        return {
          ...state,
          categories: action.payload,
        };
      case "SET_PRODUCTS":
        return {
          ...state,
          products: action.payload,
        };
      case "SET_SELECTED_PRODUCT":
        return {
          ...state,
          selectedProduct: action.payload,
        };
      case "ADD_TO_CART":
        return {
          ...state,
          cart: [...state.cart, action.payload],
        };
      case "REMOVE_FROM_CART":
        return {
          ...state,
          cart: state.cart.filter((item) => item._id !== action.payload),
        };
      case "SET_USER":
        return {
          ...state,
          user: action.payload,
        };
      case "SET_ORDER":
        return {
          ...state,
          order: action.payload,
        };
      case "SET_CHECKOUT":
        return {
          ...state,
          checkout: action.payload,
        };
      case "SET_CHARITIES":
        return {
          ...state,
          charities: action.payload,
        };
      case "SET_RENTALS":
        return {
          ...state,
          rentals: action.payload,
        };
      case "SET_DONATIONS":
        return {
          ...state,
          donations: action.payload,
        };
      default:
        return state;
    }
  };
  
  export function useProductReducer(initialState) {
  return useReducer(reducer, initialState)
}

//
// ~~~~~~~~~~~ `!!`~~~~~~~~~~~

