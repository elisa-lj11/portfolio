// src/pages/NotFound.js
import React, { useState} from 'react';
import { useNavigate } from 'react-router-dom';
import '../assets/style/NotFound.css'; // Import the CSS file

import galaxyImageUrl from '../assets/images/galaxy.png';

const NotFound = () => {
  const [isHovered, setIsHovered] = useState(false);

  const navigate = useNavigate(); // Hook to programmatically navigate

  const goHome = () => {
    navigate('/'); // Navigate to the home page
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px', height: '100vh' }}>
      <h1>404 - Page Not Found</h1>
      <p>Oops! The page you are looking for has crossed the event horizon.</p>
      <button 
        onClick={goHome} 
        onMouseEnter={() => setIsHovered(true)} 
        onMouseLeave={() => setIsHovered(false)}
        style={{
          fontWeight: isHovered ? 'bold' : 'normal', // Change font weight on hover
        }}
      >
        <img 
          src={galaxyImageUrl} 
          alt="Galaxy Icon" 
        />
        Go back in time
      </button>
    </div>
  );
};

export default NotFound;
