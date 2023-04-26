//
// ~~~~~~~~~~~ `Gavin wuz here!!`~~~~~~~~~~
//
// 
//
import { useReducer } from 'react';

import {
    UPDATE_PRODUCTS,
    ADD_TO_CART,
    UPDATE_CART_QUANTITY,
    REMOVE_FROM_CART,
    ADD_MULTIPLE_TO_CART,
    UPDATE_CATEGORIES,
    UPDATE_CURRENT_CATEGORY,
    CLEAR_CART,
    TOGGLE_CART,
    SET_CATEGORIES,
    SET_PRODUCTS,
    SET_SELECTED_PRODUCT,
    SET_USER,
    SET_ORDER,
    SET_CHECKOUT,
    SET_CHARITIES,
    SET_RENTALS,
    SET_DONATIONS
  } from "./actions";


  
  const reducer = (state, action) => {
    switch (action.type) {
        case UPDATE_PRODUCTS:
      return {
        ...state,
        products: [...action.products],
      };

    case ADD_TO_CART:
      return {
        ...state,
        cartOpen: true,
        cart: [...state.cart, action.product],
      };

    case ADD_MULTIPLE_TO_CART:
      return {
        ...state,
        cart: [...state.cart, ...action.products],
      };

    case UPDATE_CART_QUANTITY:
      return {
        ...state,
        cartOpen: true,
        cart: state.cart.map(product => {
          if (action._id === product._id) {
            product.purchaseQuantity = action.purchaseQuantity
          }
          return product
        })
      };

    case REMOVE_FROM_CART:
      let newState = state.cart.filter(product => {
        return product._id !== action._id;
      });

      return {
        ...state,
        cartOpen: newState.length > 0,
        cart: newState
      };

    case CLEAR_CART:
      return {
        ...state,
        cartOpen: false,
        cart: []
      };

    case TOGGLE_CART:
      return {
        ...state,
        cartOpen: !state.cartOpen
      };

    case UPDATE_CATEGORIES:
      return {
        ...state,
        categories: [...action.categories],
      };

    case UPDATE_CURRENT_CATEGORY:
      return {
        ...state,
        currentCategory: action.currentCategory
      };
      case SET_CATEGORIES:
        return {
          ...state,
          categories: action.payload,
        };
      case SET_PRODUCTS:
        return {
          ...state,
          products: action.payload,
        };
      case SET_SELECTED_PRODUCT:
        return {
          ...state,
          selectedProduct: action.payload,
        };
      case SET_USER:
        return {
          ...state,
          user: action.payload,
        };
      case SET_ORDER:
        return {
          ...state,
          order: action.payload,
        };
      case SET_CHECKOUT:
        return {
          ...state,
          checkout: action.payload,
        };
      case SET_CHARITIES:
        return {
          ...state,
          charities: action.payload,
        };
      case SET_RENTALS:
        return {
          ...state,
          rentals: action.payload,
        };
      case SET_DONATIONS:
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

