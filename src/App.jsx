import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignIn from './components/SignIn/SignIn';
import SignUp from './components/SignUp/SignUp';
import StoreOne from './components/StallList/StoreOne/StoreOne';

const App = () => {
  return (
    <Router>
      <div>
        <h1>Makan Now</h1>
        <Routes>
          <Route path="/" element={<SignIn />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/store-one" element={<StoreOne />} /> {/* Ensure the route matches the navigate path */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;
