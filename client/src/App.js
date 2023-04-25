import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
// import { useState } from 'react';
import SignIn from './components/SignIn';
// import SignUp from './components/SignUp';
// import Nav from './components/Nav';
// import Charity from './components/Charity';
import StoreProducts from './components/StoreProducts';
import './App.css';
// import SignInSide from './components/SignIn';

function App() {
  // const [isSignedIn, setIsSignedIn] = useState(false);

  // const handleSignIn = () => {
  //   setIsSignedIn(true);
  // };

  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Navigate to="/signin" />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/store-products" element={<StoreProducts />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
