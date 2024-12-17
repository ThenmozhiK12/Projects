import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Signup.css';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Signupp = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [repassword, setRepassword] = useState('');
  const [error, setError] = useState('');

  const handleRegister = async (event) => {
    event.preventDefault(); // Prevent form submission

    if (password !== repassword) {
      setError('Passwords do not match');
      return;
    }

    try {
      const response = await axios.post('http://localhost:8080/users/register', {
        username,
        password,
        repassword,
      });

      if (response.status === 200) {
        navigate('/login'); // Redirect to the login page
      }
    } catch (error) {
      console.error('Error registering user', error);
      setError('An error occurred during registration');
    }
  };

  return (
    <div className="login-wrapper">
      <div className="login-content">
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <h1 className="signup-title">Sign Up</h1>
        <form className="login-form" onSubmit={handleRegister}>
          <div className="username-group">
            <label htmlFor="username" className="username-label">Username</label>
            <input type="text" id="username" name="username" className="username-input" required value={username} onChange={(e) => setUsername(e.target.value)} />
          </div>
          <div className="password-group">
            <label htmlFor="password" className="password-label">Password</label>
            <input type="password" id="password" name="password" className="password-input" required value={password} onChange={(e) => setPassword(e.target.value)} />
          </div>
          <div className="password-group">
            <label htmlFor="repeat-password" className="password-label">Repeat Password</label>
            <input type="password" id="repeat-password" name="repassword" className="password-input" required value={repassword} onChange={(e) => setRepassword(e.target.value)} />
          </div>
          {error && <p className="error-message">{error}</p>}
          <button type="submit" className="continue-button">Register</button>
        </form>
        <p className="signup-info">
          Already a User? <Link to="/login" className='signup-link'>Log In</Link>
        </p>
      </div>
      <div className="login-image-container">
        <img className="login-image" src="https://scontent.fcjb5-1.fna.fbcdn.net/v/t1.6435-9/119210978_3327711333977673_7668230339616572116_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=7b2446&_nc_ohc=yYXxxIE1CZwQ7kNvgGpL-ZB&_nc_ht=scontent.fcjb5-1.fna&oh=00_AYC-NkcmQhzAFWOpmNAB_ldx2yHZtwZlsQTG-a64YEkmcg&oe=66CB239E" alt="Login Visual" />
      </div>
    </div>
  );
};

export default Signupp;
