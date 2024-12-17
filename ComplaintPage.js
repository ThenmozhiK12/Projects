import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import SuccessPopup from './SuccessPopup';
import axios from 'axios';

const statesAndCities = {
  AndhraPradesh: ["Visakhapatnam", "Vijayawada", "Guntur", "Tirupati", "Kakinada"],
  ArunachalPradesh: ["Itanagar", "Tawang", "Naharlagun", "Bomdila", "Ziro"],
  Assam: ["Guwahati", "Silchar", "Dibrugarh", "Jorhat", "Tezpur"],
  Bihar: ["Patna", "Gaya", "Bhagalpur", "Muzaffarpur", "Darbhanga"],
  Chhattisgarh: ["Raipur", "Bilaspur", "Durg", "Korba", "Jagdalpur"],
  Goa: ["Panaji", "Margao", "Vasco da Gama", "Ponda", "Mapusa"],
  Gujarat: ["Ahmedabad", "Vadodara", "Surat", "Rajkot", "Gandhinagar"],
  Haryana: ["Chandigarh", "Gurugram", "Faridabad", "Ambala", "Hisar"],
  HimachalPradesh: ["Shimla", "Manali", "Dharamshala", "Kullu", "Mandi"],
  Jharkhand: ["Ranchi", "Jamshedpur", "Dhanbad", "Hazaribagh", "Deoghar"],
  Karnataka: ["Bangalore", "Mysore", "Mangalore", "Hubli", "Belgaum"],
  Kerala: ["Thiruvananthapuram", "Kochi", "Kozhikode", "Alleppey", "Palakkad"],
  MadhyaPradesh: ["Bhopal", "Indore", "Gwalior", "Jabalpur", "Ujjain"],
  Maharashtra: ["Mumbai", "Pune", "Nagpur", "Aurangabad", "Nashik"],
  Manipur: ["Imphal", "Thoubal", "Churachandpur", "Ukhrul", "Bishnupur"],
  Meghalaya: ["Shillong", "Tura", "Jowai", "Nongpoh", "Williamnagar"],
  Mizoram: ["Aizawl", "Lunglei", "Saiha", "Champhai", "Kolasib"],
  Nagaland: ["Kohima", "Dimapur", "Wokha", "Mokokchung", "Mon"],
  Odisha: ["Bhubaneswar", "Cuttack", "Rourkela", "Sambalpur", "Berhampur"],
  Punjab: ["Chandigarh", "Amritsar", "Ludhiana", "Jalandhar", "Patiala"],
  Rajasthan: ["Jaipur", "Udaipur", "Jodhpur", "Kota", "Bikaner"],
  Sikkim: ["Gangtok", "Namchi", "Pelling", "Gyalshing", "Mangan"],
  TamilNadu: [
    "Chennai", "Coimbatore", "Madurai", "Tiruchirappalli", "Salem",
    "Erode", "Tirunelveli", "Vellore", "Tanjore", "Karur",
    "Dindigul", "Nagercoil", "Kanchipuram", "Dharmapuri", "Namakkal",
    "Pollachi", "Cuddalore", "Kumbakonam", "Theni", "Arakkonam",
    "Vellakoil", "Tiruvarur", "Tirupur", "Ramanathapuram", "Sivakasi"
  ],
  Telangana: ["Hyderabad", "Warangal", "Nizamabad", "Karimnagar", "Khammam"],
  Tripura: ["Agartala", "Udaipur", "Ambassa", "Dharmanagar", "Kailashahar"],
  UttarPradesh: ["Lucknow", "Kanpur", "Agra", "Varanasi", "Meerut"],
  Uttarakhand: ["Dehradun", "Haridwar", "Nainital", "Rudrapur", "Roorkee"],
  WestBengal: ["Kolkata", "Howrah", "Siliguri", "Durgapur", "Asansol"],
};

const ComplaintPage = () => {
  const [state, setState] = useState('');
  const [cities, setCities] = useState([]);
  const [city, setCity] = useState('');
  const [complainerName, setComplainerName] = useState('');
  const [contactNumber, setContactNumber] = useState('');
  const [urgency, setUrgency] = useState('');
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const fileInputRef = useRef(null);
  const navigate = useNavigate();

  const handleStateChange = (event) => {
    setState(event.target.value);
    setCities(statesAndCities[event.target.value] || []);
    setCity('');
  };

  const handleSubmit = async(event) => {
    event.preventDefault();

    const formData = new FormData(event.target); // Create a new FormData object
    const file = formData.get('file');

    let fileURL = '';
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        fileURL = reader.result;
        submitComplaint(fileURL);
      };
      reader.readAsDataURL(file);
    } else {
      submitComplaint('');
    }
  };

  const submitComplaint = async(fileURL) => {
    const newComplaint = {
      id: Date.now(),
      complainerName,
      contactNumber,
      state,
      city,
      urgency,
      title: document.querySelector('input[name="title"]').value,
      description: document.querySelector('textarea[name="description"]').value,
      address: document.querySelector('input[name="address1"]').value,
      pincode: document.querySelector('input[name="pincode"]').value,
      file: fileURL
    };
    
      // Store the complaint in local storage
      const complaints = JSON.parse(localStorage.getItem('complaints')) || [];
      complaints.push(newComplaint);
      localStorage.setItem('complaints', JSON.stringify(complaints));
  
      // Show the popup
      setIsPopupVisible(true);
    
    

    
  };

  const handlePopupClose = () => {
    setIsPopupVisible(false);
    navigate('/'); // Redirect to home page
  };

  return (
    <div className="complaint-page">
      <h2 className='heading'>File a Complaint</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-section">
          <div className="left-side">
            <label>
              Complaint ID:
              <input type="text" value="Auto-generated ID" readOnly />
            </label>
            <label>
              Subject:
              <input type="text" name="title" required />
            </label>
            <label>
              Description:
              <textarea name="description" className='description' required />
            </label>
            <label>
              Complainer Name:
              <input
                type="text"
                name="complainerName"
                required
                value={complainerName}
                onChange={(e) => setComplainerName(e.target.value)}
              />
            </label>
            <label>
              Contact Number:
              <input
                type="text"
                name="contactNumber"
                required
                value={contactNumber}
                onChange={(e) => setContactNumber(e.target.value)}
              />
            </label>
          </div>
          <div className="right-side">
            <label>
              State:
              <select value={state} onChange={handleStateChange}>
                <option value="">Select State</option>
                {Object.keys(statesAndCities).map((state) => (
                  <option key={state} value={state}>
                    {state}
                  </option>
                ))}
              </select>
            </label>
            <label className='city'>
              City:
              <select value={city} onChange={(e) => setCity(e.target.value)}>
                <option value="">Select City</option>
                {cities.map((city) => (
                  <option key={city} value={city}>
                    {city}
                  </option>
                ))}
              </select>
            </label>
            <label className='add'>
              Address:
              <input type="text" name="address1" required />
            </label>
            <label>
              Pincode:
              <input type="text" name="pincode" required />
            </label>
            <label>
              Urgency Level:
              <select value={urgency} onChange={(e) => setUrgency(e.target.value)}>
                <option value="">Select Urgency</option>
                <option value="high">High</option>
                <option value="medium">Medium</option>
                <option value="low">Low</option>
              </select>
            </label>
            <label className="file-upload">
              Choose a file:
              <input type="file" name="file" accept="application/pdf, image/jpeg, image/png, image/jpg" ref={fileInputRef} />
            </label>
            
            <button type="submit" className='submit-button'>Submit</button>
          </div>
        </div>
      </form>
      {isPopupVisible && <SuccessPopup onClose={handlePopupClose} />}
    </div>
  );
};

export default ComplaintPage;
