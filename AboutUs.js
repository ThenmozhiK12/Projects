import React from 'react';
import './AboutUs.css';  // Ensure this matches your CSS filename and location

const AboutUs = () => {
  return (
    <section className="about-us">
      <div className="about">
        <img src="https://rayofhopetrust.wordpress.com/wp-content/uploads/2016/09/14045757_1424701657546746_4858680319550388400_n.jpg?w=900" className="pic" alt="About Us" />
        <div className="text">
          <h2 className='About-title'>About Us</h2>
          <h5>Empowering Rural Communities</h5>
          <p>
            Rural Aid empowers rural communities by addressing challenges like water scarcity, food shortages, and infrastructure issues. We provide solutions and a platform for the community to voice concerns, track progress, and see the impact of collective efforts.
          </p>
          <p>
            Our vision is to create sustainable and self-reliant rural areas where individuals have access to basic amenities and growth opportunities. Our dedicated team works collaboratively to bring positive change to rural communities.
          </p>
          <p>
            Contact us at:
            <ul>
              <li><strong>Email:</strong> support@ruralaid.org</li>
              <li><strong>Phone:</strong> +91 7603941641</li>
              
            </ul>
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
