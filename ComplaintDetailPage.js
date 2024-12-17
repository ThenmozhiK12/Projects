import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './ComplaintDetailPage.css';

const ComplaintDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate(); 
  const complaints = JSON.parse(localStorage.getItem('complaints')) || [];
  const complaint = complaints.find(c => c.id === parseInt(id));

  if (!complaint) {
    return <p className="not-found">Complaint not found!</p>;
  }
  
  const handleDonateClick = () => {
    navigate('/donate'); // Navigate to the donation page
  };
  return (
    <div className="complaint-detail">
      
      <div className="detail-container">
      <img
        src='https://cdn-icons-png.flaticon.com/128/9121/9121686.png'
        alt="Back"
        className="back-button"
        onClick={() => window.history.back()}
      />
        <h1 className="complaint-title">{complaint.title}</h1>
        {complaint.file && (
          <img src={complaint.file} alt="complaint" className="detail-image" />
        )}
        <button className='donate-buttonn' onClick={handleDonateClick}>Donate</button>
        <div className="details">
          <p><strong>Description:</strong> {complaint.description}</p>
          <p><strong>Complainer Name:</strong> {complaint.complainerName}</p>
          <p><strong>Contact Number:</strong> {complaint.contactNumber}</p>
          <p><strong>State:</strong> {complaint.state}</p>
          <p><strong>City:</strong> {complaint.city}</p>
          <p><strong>Address:</strong> {complaint.address}</p>
          <p><strong>Pincode:</strong> {complaint.pincode}</p>
          <p><strong>Urgency:</strong> {complaint.urgency}</p>
        </div>
        
      </div>
    </div>
  );
};

export default ComplaintDetailPage;
