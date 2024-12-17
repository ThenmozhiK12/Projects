import React from 'react';
import { Link } from 'react-router-dom';
import './ComplaintListPage.css';

const ComplaintListPage = () => {
  const complaints = JSON.parse(localStorage.getItem('complaints')) || [];

  const renderFile = (file) => {
    try {
      if (file.startsWith('data:image/') || file.startsWith('http')) {
        return <img src={file} alt="complaint" />;
      } else {
        return <p>Unsupported file type</p>;
      }
    } catch (error) {
      console.error("Error displaying file:", error);
      return <p>Failed to display file</p>;
    }
  };

  return (
    <div className="complaints-list">
      <div className="complaints-container">
        {complaints.map(complaint => (
          <div key={complaint.id} className="complaint-card">
            {complaint.file && renderFile(complaint.file)}
            <h3>{complaint.title}</h3>
            <p>{complaint.description}</p>
            <Link to={`/complaints/${complaint.id}`}>View Post</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ComplaintListPage;
