import React, { useState, useEffect } from 'react';
import './Payment.css';
import { useNavigate } from 'react-router';

const Payment = () => {
  const [latestAmount, setLatestAmount] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    // Retrieve stored entries from local storage
    const storedEntries = JSON.parse(localStorage.getItem('donationEntries')) || [];
    // Set the latest entry amount
    if (storedEntries.length > 0) {
      const latestEntry = storedEntries[storedEntries.length - 1];
      setLatestAmount(latestEntry.amount);
    }
  }, []);

  const goback = () => {
    navigate('/details');
  };

  return (
    <div className="donation-wrapper">
      <div className="left-panel">
        <div className="image-container">
          <img
            src="https://media.istockphoto.com/id/468861698/photo/life-in-rural-india.jpg?s=612x612&w=0&k=20&c=tL_-l5aiDO8Liwke7xoRP_tUGUaPlKtzajAJJi4Dxww="
            alt="Donation"
            className="imageda"
          />
        </div>
        <div className="text-container">
          <p className="highlight-text">
            <b>You Will Make a Difference</b>
          </p>
          <p>Make a difference by supporting to our cause.</p>
          <p className="sub-text">Your donation supports meaningful change</p>
          <p className="additional-text">and empowers communities in need.</p>
        </div>
      </div>

      <div className="right-panel">
        <div className="donation-head">
          <img
            src="https://cdn-icons-png.flaticon.com/128/9053/9053061.png"
            alt="Logo"
            className="donation-logo1"
            onClick={goback}
          />
          <h2 className="headingline">You Pay</h2>
        </div>
        <div>
          <p className='slogan'>"Your donation means the world."</p>
        </div>
        <div className="amount-display">
          {latestAmount ? (
            <p>
              <span className="rupee-symbol">₹</span>
              <span className="amount">{latestAmount}</span>
            </p>
          ) : (
            <p>No donations yet.</p>
          )}
        </div>

        <div className="payment-buttons">
          <button className="credit-card-button">
            <img src="https://cdn-icons-png.flaticon.com/128/10468/10468543.png" alt="Credit/Debit Card" />
            Credit/Debit card
          </button>
          <button className="gpay-button">
            <img src="https://cdn-icons-png.flaticon.com/128/300/300221.png" alt="GPay" />
            Pay
          </button>
        </div>
      </div>
    </div>
  );
};

export default Payment;
