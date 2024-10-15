// src/pages/Accessible.js
import React, { useState } from 'react';
import PageTemplate from '../components/PageTemplate';

import newLobbyImageUrl from '../assets/images/new-lobby.png';

const Accessible = () => {
  const [refs, setRefs] = useState([]);

  // Function to be used in PageTemplate and passed down
  const generateRefsFromDOM = (generateRefsFunction) => {
    generateRefsFunction();  // Call the function that scans the DOM and sets the refs
  };

  return (
    <PageTemplate
      title="You have warped to Elisa's space" 
      refs={refs} 
      setRefs={setRefs} 
      generateRefsFromDOM={generateRefsFromDOM}
    >
      <div className="section" id='overview'>
        <h2 style={{ display: 'none' }}>Overview</h2>
        <h3>(Accessible view)</h3>
        <p>
          A far-out portfolio of my projects from work, school, and leisure. Select a section to get a deeper look. 
        </p>
      </div>
      <br></br>
      <hr className="solid"></hr>
      <br></br>
      <a href='/#/strivr' style={{ textDecoration: 'none', color: 'inherit' }}>
        <div className="section-accessible">
          <div className="section" id='strivr'>
            <h2>Strivr</h2>
            <h3>"Immersive Lobby" Upgrade</h3>
            <img src={newLobbyImageUrl} alt='Sample Image' width='100%'/>
            <p>
              Add more specific content here.
            </p>
          </div>
        </div>
      </a>
      <br></br>
      <hr className="solid"></hr>
      <br></br>
      <a href='/#/local-hive' style={{ textDecoration: 'none', color: 'inherit' }}>
        <div className="section-accessible">
          <div className="section" id='local-hive'>
            <h2>"Local Hive"</h2>
            <h3>A Human-Centered AI Project</h3>
            <p>
              Add more specific content here.
            </p>
          </div>
        </div>
      </a>
      <br></br>
      <hr className="solid"></hr>
      <br></br>
      <a href='/#/orgasmr' style={{ textDecoration: 'none', color: 'inherit' }}>
        <div className="section-accessible">
          <div className="section" id='orgasmr'>
            <h2>"orgASMR"</h2>
            <h3>A Head-Scratching Musical Interface</h3>
            <p>
              Add more specific content here.
            </p>
          </div>
        </div>
      </a>
      <br></br>
      <hr className="solid"></hr>
      <br></br>
      <a href='/#/hifi' style={{ textDecoration: 'none', color: 'inherit' }}>
        <div className="section-accessible">
          <div className="section" id='hifi'>
            <h2>High Fidelity</h2>
            <h3>Content Prototyping</h3>
            <p>
              Add more specific content here.
            </p>
          </div>
        </div>
      </a>
      <br></br>
      <hr className="solid"></hr>
      <br></br>
      <a href='/#/rv-vr' style={{ textDecoration: 'none', color: 'inherit' }}>
        <div className="section-accessible">
          <div className="section" id='rv-vr'>
            <h2>"RV VR"</h2>
            <h3>An Immersive Perspective on the Bay Area Housing Crisis</h3>
            <p>
              Add more specific content here.
            </p>
          </div>
        </div>
      </a>
      <br></br>
      <hr className="solid"></hr>
      <br></br>
      <a href='/#/lucid-dreaming' style={{ textDecoration: 'none', color: 'inherit' }}>
        <div className="section-accessible">
          <div className="section" id='lucid-dreaming'>
            <h2>"Lucid Dreaming"</h2>
            <h3>A 360° Video Experience</h3>
            <p>
              Add more specific content here.
            </p>
          </div>
        </div>
      </a>
    </PageTemplate>
  );
};

export default Accessible;