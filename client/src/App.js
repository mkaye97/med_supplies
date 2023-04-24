import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { useState } from 'react';
import SignIn from './components/SignIn';
import StoreProducts from './components/StoreProducts';
import './App.css';
import SignInSide from './components/SignIn';

function App() {
  const [isSignedIn, setIsSignedIn] = useState(false);

  const handleSignIn = () => {
    setIsSignedIn(true);
  };

  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Navigate to="/signin" />} />
          <Route path="/signin" element={isSignedIn ? <Navigate to="/store-products" /> : <SignIn onSignIn={handleSignIn} />} />
          <Route path="/store-products" element={<StoreProducts />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
