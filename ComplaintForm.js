// ComplaintForm.js
import React, { useState } from 'react';
import FileUpload from './FileUpload';

const ComplaintForm = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [file, setFile] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (title && description) {
      // Handle the form submission, e.g., save to localStorage or send to backend
      const complaint = {
        id: new Date().toISOString(),
        title,
        description,
        file,
      };

      let complaints = JSON.parse(localStorage.getItem('complaints')) || [];
      complaints.push(complaint);
      localStorage.setItem('complaints', JSON.stringify(complaints));
      alert('Complaint submitted successfully!');
    } else {
      alert('Please fill in all fields.');
    }
  };

  return (
    <div className="complaint-form">
      <h2>Submit a Complaint</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Title:</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Description:</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </div>
        <FileUpload onFileSelect={(selectedFile) => setFile(selectedFile)} />
        <button type="submit">Submit Complaint</button>
      </form>
    </div>
  );
};

export default ComplaintForm;
