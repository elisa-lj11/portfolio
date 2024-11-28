// src/pages/Accessible.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PageTemplate from '../components/PageTemplate';

import strivrImageUrl from '../assets/images/accessible/strivr.png';
import spaceshipImageUrl from '../assets/images/accessible/spaceship.jpg';
import localHiveImageUrl from '../assets/images/accessible/local-hive.png';
import hifiImageUrl from '../assets/images/accessible/hifi.png';
import orgasmrImageUrl from '../assets/images/accessible/orgasmr.jpg';
import windowImageUrl from '../assets/images/accessible/window.png';
import immersiveMediaImageUrl from '../assets/images/accessible/rv-vr.png';

const Accessible = () => {
  const [refs, setRefs] = useState([]);
  const navigate = useNavigate(); // Hook to navigate between routes

  // Function to be used in PageTemplate and passed down
  const generateRefsFromDOM = (generateRefsFunction) => {
    generateRefsFunction();  // Call the function that scans the DOM and sets the refs
  };

  // Section data
  const sectionData = [
    { id: 'strivr', title: 'Strivr: "Immersive Lobby" Upgrade', imageUrl: strivrImageUrl },
    { id: 'spaceship', title: '"Scavenger\'s Gain": From Hotel Room to Spaceship Adventure', imageUrl: spaceshipImageUrl },
    { id: 'local-hive', title: '"Local Hive": A Human-Centered AI Project', imageUrl: localHiveImageUrl },
    { id: 'hifi', title: 'High Fidelity: Content Prototyping', imageUrl: hifiImageUrl },
    { id: 'orgasmr', title: '"orgASMR": A Head-Scratching Musical Interface', imageUrl: orgasmrImageUrl },
    { id: 'window', title: '"Window": An AR Clothes Shopping App', imageUrl: windowImageUrl },
    { id: 'immersive-media', title: 'Immersive Media: An Exploration of 360° Video Experiences', imageUrl: immersiveMediaImageUrl },
  ];

  const handleNavigate = (id) => {
    navigate(`/${id}`);
  };

  return (
    <PageTemplate
      refs={refs} 
      setRefs={setRefs} 
      generateRefsFromDOM={generateRefsFromDOM}
    >
      <div className="section" id='overview'>
        <h2 style={{ display: 'none' }}>Overview</h2>
        <h1>You have warped to Elisa's space</h1>
        <h3>(Accessible view)</h3>
        <p>
          A far-out portfolio of my projects from work, school, and leisure. Select a button to get a deeper look. 
        </p>
        <p>
          <span 
            className="span-link"
            onClick={() => handleNavigate('who-am-i')} 
          >
            Who am I?
          </span>
        </p>
      </div>
      <hr className="solid" />
      <div className="grid-container">
        {sectionData.map(section => (
          <div
            key={section.id}
            className="button-accessible"
            onClick={() => handleNavigate(section.id)}
            style={{ cursor: 'pointer' }}
          >
            <div className="button-title" style={{ backgroundImage: `url(${section.imageUrl})` }}>
              <span>{section.title}</span>
            </div>
          </div>
        ))}
      </div>
    </PageTemplate>
  );
};

export default Accessible;