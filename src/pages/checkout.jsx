import React, { useState } from 'react';

const Checkout = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    address: '',
    paymentMethod: 'Credit Card',
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    bsb: '',
    accountNumber: ''
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Here you can implement the logic to process the order and payment
    console.log('Form data submitted:', formData);
  };

  return (
    <div className="checkout-container">
      <h2>Checkout</h2>
      <form className="checkout-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label>First Name:</label>
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Last Name:</label>
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Address:</label>
          <textarea
            name="address"
            value={formData.address}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Payment Method:</label>
          <select
            name="paymentMethod"
            value={formData.paymentMethod}
            onChange={handleInputChange}
          >
            <option value="Credit Card">Credit Card</option>
            <option value="PayPal">PayPal</option>
            <option value="Bank Transfer">Bank Transfer</option>
          </select>
        </div>
        {formData.paymentMethod === 'Credit Card' && (
          <div className="credit-card-info">
            <div className="form-group">
              <label>Card Number:</label>
              <input
                type="text"
                name="cardNumber"
                value={formData.cardNumber}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="form-group">
              <label>Expiry Date:</label>
              <input
                type="text"
                name="expiryDate"
                value={formData.expiryDate}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="form-group">
              <label>CVV:</label>
              <input
                type="text"
                name="cvv"
                value={formData.cvv}
                onChange={handleInputChange}
                required
              />
            </div>
          </div>
        )}
        {formData.paymentMethod === 'Bank Transfer' && (
          <div className="bank-transfer-info">
            <div className="form-group">
              <label>BSB:</label>
              <input
                type="text"
                name="bsb"
                value={formData.bsb}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="form-group">
              <label>Account Number:</label>
              <input
                type="text"
                name="accountNumber"
                value={formData.accountNumber}
                onChange={handleInputChange}
                required
              />
            </div>
          </div>
        )}
        <button type="submit">Place Order</button>
      </form>
    </div>
  );
};

export default Checkout;
