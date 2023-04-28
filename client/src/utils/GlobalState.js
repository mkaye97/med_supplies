//
// 
// useContext is a react hook that 
// lets components accept values from 
// a context created using createContext
// 

import React, { createContext, useContext } from 'react';

// 
// UseProductReducer is a custom react
// hook that uses the useReducer hook
// to return an array of two elements,
// the curent state and the dispatch
// function to upate the state. 
//

import { useProductReducer } from './reducers';

// 
// createContext creates a new Context
// object which shares data between
// components. 
//
// createContext returns an object with
// Provider component and Consumer component
// towards which values can be passed.
//

const StoreContext = createContext();

const { Provider } = StoreContext;

const StoreProvider = ({ value = [], ...props }) => {
  const [state, dispatch] = useProductReducer({
    products: [],
    cart: [],
    cartOpen: false,
    categories: [],
    currentCategory: '',
    rentals: [],
    donations: [],
    charities: []
  });

// 
// Provider is part of the ContextAPI
// it gives child components power to consume
// values provided by context.
// `...props` passes data or objects
// to Provider, then to children.
//
  return <Provider value={[state, dispatch]} {...props} />;
};

// 
// useStoreContext accesses state and dispatch
// provided by StoreContext using createContext.
// This hook simplifies Context.
//
const useStoreContext = () => {
  return useContext(StoreContext);
};

export { StoreProvider, useStoreContext };


//
// ~~~~~~~~~~~ `!!`~~~~~~~~~~~
