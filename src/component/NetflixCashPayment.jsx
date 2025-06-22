import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './NetflixCashPayment.css';

const NetflixCashPayment = () => {
  const [details, setDetails] = useState({
    name: '',
    email: '',
    phone: '',
    plan: 'Basic',
  });

  
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate();
  

  const handleChange = (e) => {
    setDetails({ ...details, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, phone } = details;

    if (!name || !email || !phone) {
      setError('All fields are required');
      return;
    }

    setError('');
     setSuccess(true);
    // Optionally send details to backend/server
     localStorage.setItem('isSubscribed', 'true');
        setTimeout(() => {
      navigate("/"); // Step 3: Redirect to homepage ("/")
    }, 3000);

  };

  return (
    <div className="netflix-payment-container">
      <form className="netflix-payment-form" onSubmit={handleSubmit}>
        <h2>Netflix Cash Payment</h2>
        {error && <p className="error">{error}</p>}
        {success ? (
          <p className="success">Subscription initiated! Pay at your doorstep.</p>
        ) : (
          <>
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={details.name}
              onChange={handleChange}
            />
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={details.email}
              onChange={handleChange}
            />
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              value={details.phone}
              onChange={handleChange}
            />
            <select name="plan" value={details.plan} onChange={handleChange}>
              <option value="Basic">Basic - ₹149</option>
              <option value="Standard">Standard - ₹399</option>
              <option value="Premium">Premium - ₹549</option>
            </select>
            <button type="submit">Start Membership</button>
          </>
        )}
        {!success && (
          <p className="disclaimer">
            Note: Payment will be collected at your address before activation.
          </p>
        )}
      </form>
    </div>
  );
};

export default NetflixCashPayment;
