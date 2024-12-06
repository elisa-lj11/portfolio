// src/pages/NotFound.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import galaxyImageUrl from '../assets/images/galaxy.png';

// Custom cursor asset generated with ChatGPT
import rocketCursor from '../assets/images/rocketship-cursor.png';

const NotFound = () => {
  const [isHovered, setIsHovered] = useState(false);

  const navigate = useNavigate(); // Hook to programmatically navigate

  const goHome = () => {
    navigate('/'); // Navigate to the home page
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px', height: '100vh', cursor: `url(${rocketCursor}), auto` }}>
      <h1>404 - Page Not Found</h1>
      <p>Oops! The page you are looking for has crossed the event horizon.</p>
      <button 
        onClick={goHome} 
        onMouseEnter={() => setIsHovered(true)} 
        onMouseLeave={() => setIsHovered(false)}
        style={{
          padding: '5px 10px',
          fontSize: '16px',
          cursor: 'pointer',
          marginTop: '20px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          margin: '0 auto',
          height: '50px', // Set button height to be slightly larger than the image
          whiteSpace: 'nowrap', // Prevent text from wrapping
          overflow: 'hidden', // Hide overflow to keep a single line
          maxWidth: '90%', // Limit width to fit better on smaller screens
          border: 'none', // Remove default button border
          backgroundColor: '#2d2d2d', // Set background color
          color: 'white', // Set text color
          borderRadius: '5px', // Add border radius for aesthetics
          fontWeight: isHovered ? 'bold' : 'normal', // Change font weight on hover
          transition: 'font-weight 0.2s' // Smooth transition for font weight change
        }}
      >
        <img 
          src={galaxyImageUrl} 
          style={{
            width: 'auto', // Set a specific width for the image
            height: '40px', // Maintain aspect ratio
            marginRight: '5px' // Add space between the image and text
          }} 
          alt="Galaxy Icon" 
        />
        Go back in time
      </button>
    </div>
  );
};

export default NotFound;
