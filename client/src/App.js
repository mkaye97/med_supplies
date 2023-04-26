import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
// import { useState } from 'react';
import SignIn from './components/SignIn';
// import SignUp from './components/SignUp';
// import Nav from './components/Nav';
// import Charity from './components/Charity';
import StoreProducts from './components/StoreProducts';
import './App.css';
// import SignInSide from './components/SignIn';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

const httpLink = createHttpLink({
  uri: '/graphql',
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  // const [isSignedIn, setIsSignedIn] = useState(false);

  // const handleSignIn = () => {
  //   setIsSignedIn(true);
  // };

  return (
    <ApolloProvider client={client}>
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Navigate to="/signin" />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/store-products" element={<StoreProducts />} />
        </Routes>
      </div>
    </Router>
    </ApolloProvider>
  );
}

export default App;
