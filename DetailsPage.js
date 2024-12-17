import React, { useState, useEffect } from 'react';
import './DetailsPage.css';
import { useNavigate } from 'react-router';

const DetailsPage = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');
  const [organization, setOrganization] = useState('');
  const [isDedicated, setIsDedicated] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const honoree = localStorage.getItem('honoree');
   // setIsDedicated(honoree !== 'No'); // Set dedication status based on honoree
    //setOrganization(honoree !== 'No' ? honoree : ''); // Set organization name based on honoree
  }, []);

  const handleCheckboxChange = () => {
    setIsDedicated(!isDedicated);
  };

  const goback = () => {
    navigate('/donate');
  };

  const handleDonateClick = () => {
    const newEntry = {
      firstName,
      lastName,
      email,
      mobile,
      amount: localStorage.getItem('amount'), // Retrieve amount
      honoree: localStorage.getItem('honoree'), // Retrieve honoree
      organization: isDedicated ? organization : 'No'
    };

    const entries = JSON.parse(localStorage.getItem('donationEntries')) || [];
    entries.push(newEntry);
    localStorage.setItem('donationEntries', JSON.stringify(entries));

    // Clear input fields
    setFirstName('');
    setLastName('');
    setEmail('');
    setMobile('');
    setIsDedicated(false);
    setOrganization('');

    navigate('/pay');
  };

  return (
    <div className="donation-wrapper">
      <div className="left-panel">
        <div className="image-container">
          <img src="https://media.istockphoto.com/id/468861698/photo/life-in-rural-india.jpg?s=612x612&w=0&k=20&c=tL_-l5aiDO8Liwke7xoRP_tUGUaPlKtzajAJJi4Dxww=" alt="Donation" className='imageda' />
        </div>
        <div className="text-container">
          <p className='highlight-text'><b>You Will Make a Difference</b></p>
          <p>Make a difference by supporting to our cause.</p>
          <p className='sub-text'>Your donation supports meaningful change</p>
          <p className='additional-text'>and empowers communities in need.</p>
        </div>
      </div>

      <div className="right-panel">
        <div className="donation-head2">
          <img src="https://cdn-icons-png.flaticon.com/128/9053/9053061.png" alt="Logo" className="donation-logo1" onClick={goback} />
          <h2 className='headingline'>Enter Your Details</h2>
        </div>
        
        <div className="amount-input-group">
          <input
            type="text"
            placeholder="First Name"
            className="amount-input1"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </div>
        <div className="amount-input-group">
          <input
            type="text"
            placeholder="Last Name"
            className="amount-input2"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>
        <div className="amount-input-group">
          <input
            type="text"
            placeholder="Email"
            className="amount-input3"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="amount-input-group">
          <input
            type="text"
            placeholder="Mobile No."
            className="amount-input4"
            value={mobile}
            onChange={(e) => setMobile(e.target.value)}
          />
        </div>
        <div className="dedication-checkbox">
          <input
            type="checkbox"
            id="dedicate"
            checked={isDedicated}
            onChange={handleCheckboxChange}
          />
          <label htmlFor="dedicate">Donate as an Organization</label>
        </div>
        {isDedicated && (
          <input
            type="tel"
            placeholder="Organization Name"
            className="honoree-input"
            value={organization}
            onChange={(e) => setOrganization(e.target.value)}
          />
        )}
        <div className="dedication-checkbox">
          <input
            type="checkbox"
            id="anonymous"
          />
          <label htmlFor="anonymous">Donate Anonymously</label>
        </div>
        <button className="donate-button" onClick={handleDonateClick}>Continue</button>
      </div>
    </div>
  );
};

export default DetailsPage;
