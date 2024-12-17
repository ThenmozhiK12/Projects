// src/components/Home.js
import React from 'react';
import './Home.css';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <div className="big-container">
        <div>
          <h1>Empowering Rural Communities Together</h1>
          <p>Join us in addressing everyday challenges with collective effort and innovative solutions.</p>
        </div>
      </div>

      <div className="small-containers">
        <div className="small-container">
          <img src="https://cdn-icons-png.flaticon.com/128/2553/2553140.png" alt="Logo 1" />
          <h2>Our Motive</h2>
          <hr />
          <p>We aim to empower rural communities by providing solutions to daily problems such as water scarcity, food scarcity, and infrastructure issues.</p>
        </div>
        <div className="small-container">
          <img src="https://cdn-icons-png.flaticon.com/128/10320/10320358.png" alt="Logo 2" />
          <h2>Our Aim</h2>
          <hr />
          <p>Our aim is to create a transparent platform where community members can raise concerns, track progress, and witness the impact of collective efforts.</p>
        </div>
        <div className="small-container">
          <img src="https://cdn-icons-png.flaticon.com/128/12287/12287146.png" alt="Logo 3" />
          <h2>Our Services</h2>
          <hr />
          <p>We offer services like problem reporting, status tracking, and a platform for community donations to ensure timely and effective solutions.</p>
        </div>
      </div>

      <div className="report-problems-container">
        <div className="report-content">
          <h2 className='third'>Voice Your Concerns...</h2>
          <br></br>
          


<p className='speak'>"Have a problem? Let us know! </p>
<p> If it's not for you, </p>
<p><b>do it for someone who</b> needs it.</p>
 <p>Your voice can bring change."</p>
 <br></br>
 <Link to="/raise-complaint" className="btn-raise-complaint">Raise a Complaint</Link>
        </div>
        <div className="report-image">
          <img src="https://www.unicef.org/rosa/sites/unicef.org.rosa/files/styles/hero_desktop/public/UNI407404.jpg.webp?itok=yOzPYJ7l" alt="Report Problems" className='img1'/>
          <img src="https://m.economictimes.com/thumb/msid-73618318,width-1200,height-900,resizemode-4,imgsize-112191/1-agencies.jpg" alt="Report Problems" className='img2' />
          <img src="https://cdn.dnaindia.com/sites/default/files/styles/full/public/2018/03/06/657902-nmmcschool.jpg" alt="Report Problems" className='img3' />
        </div>
      </div>
    </div>
  );
};

export default Home;
