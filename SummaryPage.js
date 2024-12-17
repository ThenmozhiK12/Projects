import React, { useEffect, useState } from 'react';
import './SummaryPage.css';

const SummaryPage = () => {
  const [entries, setEntries] = useState([]);

  useEffect(() => {
    // Retrieve stored entries from local storage
    const storedEntries = JSON.parse(localStorage.getItem('donationEntries')) || [];
    setEntries(storedEntries);

    // Automatically send the data to the backend
    storedEntries.forEach(entry => {
      fetch('/api/donations/postt', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(entry),
      })
      .then(response => response.json())
      .then(data => {
        console.log('Success:', data);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
    });

    // Clear local storage after sending the data
  //  localStorage.removeItem('donationEntries');

  }, []);

  return (
    <div className="summary-container">
      <h2>Donation Summary</h2>
      <div className="entries-container">
        {entries.length === 0 ? (
          <p>No donations yet.</p>
        ) : (
          entries.map((entry, index) => (
            <div key={index} className="entry">
              <p><strong>First Name:</strong> {entry.firstName}</p>
              <p><strong>Last Name:</strong> {entry.lastName}</p>
              <p><strong>Email:</strong> {entry.email}</p>
              <p><strong>Mobile No.:</strong> {entry.mobile}</p>
              <p><strong>Amount:</strong> ₹{entry.amount}</p>
              <p><strong>Honoree Name:</strong> {entry.honoree}</p>
              <p><strong>Organization:</strong> {entry.organization}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default SummaryPage;
