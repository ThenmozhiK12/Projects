// FileUpload.js
import React, { useState } from 'react';

const FileUpload = ({ onFileSelect }) => {
  const [file, setFile] = useState(null);

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    setFile(selectedFile);
    if (onFileSelect) {
      onFileSelect(selectedFile); // Pass the file to the parent component
    }
  };

  return (
    <div className="file-upload">
      <input type="file" accept="image/*" onChange={handleFileChange} />
      {file && (
        <div className="file-preview">
          {file.type.startsWith('image/') ? (
            <img src={URL.createObjectURL(file)} alt="Preview" />
          ) : (
            <p>Unsupported file type</p>
          )}
        </div>
      )}
    </div>
  );
};

export default FileUpload;
