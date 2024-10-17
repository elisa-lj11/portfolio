// src/pages/WhoAmI.js
// Copy this page to create a new project page using standard formatting
import React, { useState } from 'react';
import PageTemplate from '../components/PageTemplate';

import spacedOutImageUrl from '../assets/images/who-am-i/spaced-out.jpg';

const WhoAmI = () => {
  const [refs, setRefs] = useState([]);

  // Function to be used in PageTemplate and passed down
  const generateRefsFromDOM = (generateRefsFunction) => {
    generateRefsFunction();  // Call the function that scans the DOM and sets the refs
  };

  return (
    <PageTemplate
      refs={refs} 
      setRefs={setRefs} 
      generateRefsFromDOM={generateRefsFromDOM}
    >
      <div className="section" id='overview'>
        <h2 style={{ display: 'none' }}>Overview</h2>
        <h1>Who am I?</h1>
        <img src={spacedOutImageUrl} alt='Spaced Out' width='60%'/>
        <br></br>
        <p>
          I'm a bit of a night owl. When I'm not outside staring up at the stars, wondering how we ended up where we are as these little sentient specks on this cosmic quilt floating aimlessly in the ether, I'm up late imagining creative ways to make sense of our existence.
        </p>
        <p>

        </p>
      </div>
      <br></br>
      <hr className="solid"></hr>
      <br></br>
      <div className="section" id='career'>
        <h2>Career</h2>
        <p>
          Stanford<br />
          High Fidelity<br />
          TIER<br />
          Strivr<br />
          Piano Teacher<br />
          Tutor<br />
          Dog Washer<br />
        </p>
      </div>
      <br></br>
      <hr className="solid"></hr>
      <br></br>
      <div className="section" id='personal'>
        <h2>Personal</h2>
        <p>
          Add more specific content here.
        </p>
      </div>
      <br></br>
      <hr className="solid"></hr>
      <br></br>
      <div className="section" id='Links'>
        <h2>Links</h2>
        <p>
          LinkedIn<br />
          GitHub<br />
          Email<br />
          SoundCloud<br />
          Spotify Playlists<br />
        </p>
      </div>
    </PageTemplate>
  );
};

export default WhoAmI;