import React from 'react';
import backgroundImage from '../BlockProfileBacground.jpg'; // Import the image file

const AboutPage = () => {
  const pageStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '100vh',
    padding: '20px',
    boxSizing: 'border-box',
    textAlign: 'center',
    backgroundImage: `url(${backgroundImage})`, // Use the imported image
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  };

  const cardStyle = {
    backgroundColor: '#f5f5f5',
    borderRadius: '8px',
    padding: '20px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    maxWidth: '600px',
    width: '100%',
  };

  const headingStyle = {
    fontSize: '24px',
    marginBottom: '20px',
  };

  const paragraphStyle = {
    fontSize: '16px',
    marginBottom: '10px',
  };

  return (
    <div style={pageStyle}>
      <div style={cardStyle}>
        <h2 style={headingStyle}>About Us</h2>
        <p style={paragraphStyle}>
          Welcome to our website! We are a dedicated team of professionals
          passionate about providing high-quality services to our clients.
          With years of experience in the industry, we strive to deliver
          innovative solutions tailored to meet your specific needs.
        </p>
        <p style={paragraphStyle}>
          Our mission is to create exceptional products that enhance the
          lives of our users. We believe in the power of technology to
          transform businesses and make a positive impact on society.
        </p>
        <p style={paragraphStyle}>
          At our company, we value collaboration, creativity, and customer
          satisfaction. We work closely with our clients to understand their
          requirements and deliver solutions that exceed their expectations.
          Our talented team of designers, developers, and strategists are
          dedicated to providing outstanding results.
        </p>
        <p style={paragraphStyle}>
          Whether you're a small startup or a large enterprise, we are here
          to help you succeed. Contact us today to discuss how we can assist
          you with your next project. We look forward to working with you!
        </p>
      </div>
    </div>
  );
};

export default AboutPage;
