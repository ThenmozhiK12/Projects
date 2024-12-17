import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import './SuccessPopup.css';

const SuccessPopup = () => {
  const navigate = useNavigate(); // Initialize useNavigate

  const handleGoHome = () => {
    navigate('/'); // Navigate to the homepage
     
  };

  return (
    <div className="popup-overlay">
      <div className="popup-container">
        <button className="close-button" onClick={handleGoHome}>x</button>
        <h2>Complaint Raised Successfully!</h2>
        <img src='https://cdn-icons-gif.flaticon.com/7920/7920939.gif' alt='logo' className='tick'  />
        <p className='paraa'>Your complaint has been successfully submitted. You can track its status on the Complaints page.</p>
        <button onClick={handleGoHome} className="home-button">Go to Home</button>
      </div>
    </div>
  );
};

export default SuccessPopup;
