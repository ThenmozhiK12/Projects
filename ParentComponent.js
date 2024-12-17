import React, { useEffect, useState } from 'react';
import ComplaintListPage from './ComplaintListPage';

const ParentComponent = () => {
  const [complaints, setComplaints] = useState([]);

  useEffect(() => {
    // Load complaints from localStorage
    const loadedComplaints = JSON.parse(localStorage.getItem('complaints')) || [];
    setComplaints(loadedComplaints);
  }, []); // Empty dependency array means this runs once when the component mounts

  return <ComplaintListPage complaints={complaints} />;
};

export default ParentComponent;
