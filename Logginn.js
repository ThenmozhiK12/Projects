// src/Components/Logginn.js
import React, { useState } from 'react';
import './Logginn.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Logginn = ({ onLogin }) => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post('http://localhost:8080/users/login', {
        username,
        password,
      });

      if (response.status === 200) {
        const isAdmin = username === 'adminnn'; 
        onLogin(username, isAdmin); 
        if (isAdmin) {
          navigate('/admin');
        } else {
          navigate('/'); 
        }
      }
    } catch (error) {
      console.error('Error logging in', error);
      setError('Invalid username or password');
    }
  };

  return (
    <div className="login-wrapper">
      <div className="login-content">
        <br></br>
        <br></br>
        <h1 className="login-title">Log In</h1>
        <form className="login-form" onSubmit={handleLogin}>
          <div className="username-group">
            <label htmlFor="username" className="username-label">Username</label>
            <input type="text" id="username" name="username" className="username-input" required value={username} onChange={(e) => setUsername(e.target.value)} />
          </div>
          <div className="password-group">
            <label htmlFor="password" className="password-label">Password</label>
            <input type="password" id="password" name="password" className="password-input" required value={password} onChange={(e) => setPassword(e.target.value)} />
          </div>
          {error && <p className="error-message">{error}</p>}
          <button type="submit" className="continue-button">Continue</button>
        </form>
        <a href="#" className="forgot-password">Forgot Password?</a>
        <p className="signup-info">
          New to Rural Aid? <Link to="/signup" className='signup3'>Sign up</Link>
        </p>
      </div>
      <div className="login-image-container">
        <img className="login-image" src="https://scontent.fcjb5-1.fna.fbcdn.net/v/t1.6435-9/119210978_3327711333977673_7668230339616572116_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=7b2446&_nc_ohc=yYXxxIE1CZwQ7kNvgGpL-ZB&_nc_ht=scontent.fcjb5-1.fna&oh=00_AYC-NkcmQhzAFWOpmNAB_ldx2yHZtwZlsQTG-a64YEkmcg&oe=66CB239E" alt="Login Visual" />
      </div>
    </div>
  );
};

export default Logginn;
