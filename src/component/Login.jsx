import React, { useState } from 'react';
import './Login-css.css';

import { Navigate, useNavigate } from 'react-router-dom';

const Login = () => {
  const [form, setForm] = useState({ email: '', password: '' });
  const [error, setError] = useState('');

  const navigate = useNavigate()

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { email, password } = form;
    if (!email || !password) {
      setError('Email and password are required.');
      return;
    }

    // Retrieve user data
    const storedUser = JSON.parse(localStorage.getItem('user'));
    if (
      storedUser &&
      storedUser.email === email &&
      storedUser.password === password
    ) {
      setError('');
       navigate("/NetflixCashPayment")
      // alert(`Welcome back, ${storedUser.name || email}`);
    } else {
      setError('Invalid credentials.');
    }
  };

  return (
    <>
    <div className="Login-background">
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <h2>Login</h2>
        {error && <p className="error">{error}</p>}
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={form.password}
          onChange={handleChange}
        />
        <button type="submit">Login</button>
        <p className="signup-link">
          Don't have an account? <a href="/Signup">Sign Up</a>
        </p>
      </form>
    </div>
    </div>
    </>
  );
};

export default Login;
