import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const SignUp = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate(); // Link to sign in page

  const handleSubmit = (evt) => {
    evt.preventDefault();
    
    // Checking password match or not
    if (password !== confirmPassword) {
      setMessage("Passwords don't match!");
      return;
    }
    setMessage('Sign-up successful!');
    navigate('/signin'); 
  };

  return (
    <div>
      <h2>Sign Up</h2>
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
        <input
          type="password"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={(evt) => setConfirmPassword(evt.target.value)}
          required
        />
        <button type="submit">Sign Up</button>
      </form>
      <p>{message}</p>
      <p>
        Already have an account?{' '}
        <Link to="/signin">Sign In</Link>
      </p>
    </div>
  );
};

export default SignUp;
