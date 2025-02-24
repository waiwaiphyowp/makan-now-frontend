import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';  // Correctly import useNavigate

const SignIn = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const navigate = useNavigate();  // Use useNavigate hook

  const handleSubmit = (evt) => {
    evt.preventDefault();

    // Check if username and password are entered
    if (username && password) {
      setMessage('Signed in successfully');
      // Navigate to StoreOne page after successful sign-in
      navigate('/store-one');
    } else {
      setMessage('Signin failed');
    }
  };

  return (
    <div>
      <h2>Sign In</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(evt) => setUsername(evt.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(evt) => setPassword(evt.target.value)}
          required
        />
        <button type="submit">Sign In</button>
      </form>
      <p>{message}</p>
      <p>
        Don't have an account? <a href="/signup">Sign Up</a>
      </p>
    </div>
  );
};

export default SignIn;
