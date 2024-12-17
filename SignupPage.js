import React, { useState } from 'react';
import './SignupPage.css';

const SignupPage = () => {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  const [error, setError] = useState('');

  const handleEmailChange = (e) => setEmail(e.target.value);
  const handleUsernameChange = (e) => setUsername(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);
  const handleRepeatPasswordChange = (e) => setRepeatPassword(e.target.value);

  const handleRegister = (e) => {
    e.preventDefault();
    if (password !== repeatPassword) {
      setError('Passwords do not match');
    } else {
      setError('');
      // Logic for registration
      console.log({ email, username, password, repeatPassword });
    }
  };

  return (
    <div className="signup-container1">
      <div className="signup-box1">
        <div className="logo-container1">
          <img src="https://cdn-icons-png.flaticon.com/128/11246/11246092.png" alt="Logo" className="logo1" />
          <p className="para1">Rural Aid</p>
        </div>
        <div className="close-btn1">&times;</div>
        <div className="signup-section1">
          <form onSubmit={handleRegister}>
            <label>Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={handleEmailChange}
              required
            />
            <label>Username</label>
            <input
              type="text"
              placeholder="Enter your username"
              value={username}
              onChange={handleUsernameChange}
              required
            />
            <label>Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={handlePasswordChange}
              required
            />
            <label>Repeat Password</label>
            <input
              type="password"
              placeholder="Repeat your password"
              value={repeatPassword}
              onChange={handleRepeatPasswordChange}
              required
            />
            {error && <div className="error1">{error}</div>}
            <button type="submit" className="register-btn1">Register</button>
            <p className="login-link1">Already a user? <a href="/login">Log in</a></p>
          </form>
        </div>
        <div className="image-section1">
          <img src="https://scontent.fcjb5-1.fna.fbcdn.net/v/t1.6435-9/119210978_3327711333977673_7668230339616572116_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=7b2446&_nc_ohc=yYXxxIE1CZwQ7kNvgGpL-ZB&_nc_ht=scontent.fcjb5-1.fna&oh=00_AYC-NkcmQhzAFWOpmNAB_ldx2yHZtwZlsQTG-a64YEkmcg&oe=66CB239E" alt="Signup Visual" />
        </div>
      </div>
    </div>
  );
};

export default SignupPage;
