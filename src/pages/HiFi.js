// src/pages/HiFi.js
import React, { useState } from 'react';
import PageTemplate from '../components/PageTemplate';

import PILL_VIDEO_URL from '../assets/images/hifi/pill.mp4';

const HIFI_OVERVIEW_EMBED_URL = 'https://www.youtube.com/embed/3V6Ze7DuF38?si=1MKsHh_zwEaKYXah';
const HIFI_WIKI_URL = 'https://en.wikipedia.org/wiki/High_Fidelity,_Inc.';
const CLARA_EMBED_URL = 'https://www.youtube.com/embed/nT2uGtP_k4A?si=vpE6eWI5AzPgLlUD';
const CLARA_URL = 'https://clara.io/';
const CLARA_SCRIPT_URL = 'https://github.com/elisa-lj11/hifi/blob/aca261af3e4343cb51635963d31ddb7c8d236461/libraries/script-engine/src/FileScriptingInterface.cpp#L5';
const BLOCKS_EMBED_URL = 'https://www.youtube.com/embed/SbPHn4p9g3c?si=J9TiZNbwc8qba_SV';
const BLOCKS_SCRIPT_URL = 'https://github.com/elisa-lj11/hifi/blob/aca261af3e4343cb51635963d31ddb7c8d236461/interface/src/scripting/GooglePolyScriptingInterface.cpp#L5';
const HIFI_CONTENT_SCRIPTS_URL = 'https://github.com/search?q=repo%3Aelisa-lj11%2Fhifi-content+elisa&type=code&p=1';

const HiFi = () => {
  const [refs, setRefs] = useState([]);

  // Function to be used in PageTemplate and passed down
  const generateRefsFromDOM = (generateRefsFunction) => {
    generateRefsFunction();  // Call the function that scans the DOM and sets the refs
  };

  return (
    <PageTemplate
      title="High Fidelity: Content Prototyping" 
      refs={refs} 
      setRefs={setRefs} 
      generateRefsFromDOM={generateRefsFromDOM}
    >
      <h3>Summer 2016, 2017-2018</h3>
      <div className="section" id='overview'>
        <h2 style={{ display: 'none' }}>Overview</h2>
        <div className="video">
          <iframe className="responsive-iframe" src={HIFI_OVERVIEW_EMBED_URL} title="High Fidelity Highlights" frameBorder="0" allow="autoplay; encrypted-media;" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
        </div>
        <br></br>
        <p>
          I worked as an intern and later as a software engineer at <a target='_blank' rel='noopener noreferrer' href={HIFI_WIKI_URL}>High Fidelity</a>, a startup that formerly focused on social virtual reality. I was on the content prototyping team, where we developed new content for our user base
        </p>
      </div>
      <br></br>
      <hr className="solid"></hr>
      <br></br>
      <div className="section" id='clara'>
        <h2>Clara.io Integration</h2>
        <div className="video">
          <iframe className="responsive-iframe" src={CLARA_EMBED_URL} title="Clara.io Integration" frameBorder="0" allow="autoplay; encrypted-media;" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
        </div>
        <p>
          I developed an integration to download 3D entities from an external asset library directly through High Fidelity's interface. My project allows users to access <a target='_blank' rel='noopener noreferrer' href={CLARA_URL}>Clara.io</a> from in-world so that they can pick a model and directly add it to their domain without leaving the application.
        </p>
      </div>
      <br></br>
      <hr className="solid"></hr>
      <br></br>
      <div className="section" id='google-blocks'>
        <h2>Google Blocks Integration</h2>
        <div className="video">
          <iframe className="responsive-iframe" src={BLOCKS_EMBED_URL} title="Google Blocks Integration" frameBorder="0" allow="autoplay; encrypted-media;" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
        </div>
        <i style={{ display: 'flex', justifyContent: 'center' }}>High Fidelity featured at 1:20</i>
        <p>
          I developed an API that surfaced asset import functionality from Google Poly, a 3D object and scene website.
        </p>
      </div>
      <br></br>
      <hr className="solid"></hr>
      <br></br>
      <div className="section" id='other-content'>
        <h2>Other Content</h2>
        <div className="video" style={{ height: '60%' }}>
          <video controls muted>
            <source src={PILL_VIDEO_URL} type="video/mp4" />
          </video>
        </div>
        <p>
          I made virtual pinatas, animated emojis, graphics effect "pills," and other fun things that you may not be able to find in regular reality.
        </p>
        <p>
          All content scripts available on my GitHub <a target='_blank' rel='noopener noreferrer' href={HIFI_CONTENT_SCRIPTS_URL}>here</a>.
        </p>
      </div>
      <br></br>
      <hr className="solid"></hr>
      <br></br>
      <div className="section" id='extras'>
        <h2>Extras</h2>
        <p>
          Add more specific content here.
        </p>
      </div>
      {/* Add more specific content here */}
    </PageTemplate>
  );
};

export default HiFi;