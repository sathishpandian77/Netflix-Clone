

import React, { useState } from 'react';
import './Signup-css.css';

const Signup = () => {
  const [form, setForm] = useState({ name: '', email: '', password: '' });
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, email, password } = form;
    if (!name || !email || !password) {
      setError('Please fill in all fields');
      return;
    }

    // Store user data securely (NOT for production)
    const userData = { name, email, password };
    localStorage.setItem('user', JSON.stringify(userData));

    setError('');
    alert(`Welcome, ${name}!`);
  };

  return (
    <>
    <div className="Signup-background">
    <div className="signup-container">
      <form className="signup-form" onSubmit={handleSubmit}>
        <h2>Create Account</h2>
        {error && <p className="error">{error}</p>}
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          value={form.name}
          onChange={handleChange}
        />
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
        <a href="/NetflixCashPayment"><button type="submit">Sign Up</button></a >
        <p className="signin-link">
          Already have an account? <a href="/Login">Login</a>
        </p>
      </form>
    </div>
    </div>

    </>
  );
};

export default Signup;

