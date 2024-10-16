// src/pages/HiFi.js
import React, { useState } from 'react';
import PageTemplate from '../components/PageTemplate';

import PILL_VIDEO_URL from '../assets/images/hifi/pill.mp4';

const HIFI_OVERVIEW_EMBED_URL = 'https://www.youtube.com/embed/3V6Ze7DuF38?si=1MKsHh_zwEaKYXah';
const HIFI_WIKI_URL = 'https://en.wikipedia.org/wiki/High_Fidelity,_Inc.';
const CLARA_EMBED_URL = 'https://www.youtube.com/embed/nT2uGtP_k4A?si=vpE6eWI5AzPgLlUD';
const CLARA_URL = 'https://clara.io/';
const CLARA_SCRIPT_URL = 'https://github.com/elisa-lj11/hifi/blob/aca261af3e4343cb51635963d31ddb7c8d236461/libraries/script-engine/src/FileScriptingInterface.cpp#L5';
const POLY_EMBED_URL = 'https://www.youtube.com/embed/SbPHn4p9g3c?si=J9TiZNbwc8qba_SV';
const POLY_URL = 'https://blog.google/products/google-ar-vr/poly-browse-discover-and-download-3d-objects-and-scenes/';
const POLY_SCRIPT_URL = 'https://github.com/elisa-lj11/hifi/blob/aca261af3e4343cb51635963d31ddb7c8d236461/interface/src/scripting/GooglePolyScriptingInterface.cpp#L5';
const HIFI_CONTENT_SCRIPTS_URL = 'https://github.com/search?q=repo%3Aelisa-lj11%2Fhifi-content+Elisa+Lupin&type=code&p=1';

const HiFi = () => {
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
        <h1>High Fidelity: Content Prototyping</h1>
        <h3>Summer 2016, 2017-2018</h3>
        <div className="video-youtube">
          <iframe className="responsive-iframe" src={HIFI_OVERVIEW_EMBED_URL} title="High Fidelity Highlights" frameBorder="0" allow="autoplay; encrypted-media;" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
        </div>
        <br></br>
        <p>
          I worked as an intern and later as a software engineer at <a target='_blank' rel='noopener noreferrer' href={HIFI_WIKI_URL}>High Fidelity</a>, a startup that formerly focused on social virtual reality. I was part of the content prototyping team, where we created new experiences to showcase the potential of the metaverse. Our goal was to inspire users with engaging content while empowering developers through accessible APIs that allowed them to easily integrate their own creations.
        </p>
        <p>
          I've included a selection of my projects below.
        </p>
      </div>
      <br></br>
      <hr className="solid"></hr>
      <br></br>
      <div className="section" id='clara'>
        <h2>Clara.io Integration</h2>
        <div className="video-youtube">
          <iframe className="responsive-iframe" src={CLARA_EMBED_URL} title="Clara.io Integration" frameBorder="0" allow="autoplay; encrypted-media;" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
        </div>
        <p>
          I developed an integration to download 3D entities from an external asset library directly through High Fidelity's interface. My project allows users to access <a target='_blank' rel='noopener noreferrer' href={CLARA_URL}>Clara.io</a> from in-world so that they can pick a model and directly add it to their domain without leaving the application.
        </p>
        <h3>Background</h3>
        <p>
          During my onboarding at High Fidelity, I noticed the friction that users experienced when trying to upload 3D assets into the metaverse. For an application so reliant on content, this process should have been seamless.
        </p>
        <p>
          I took initiative in addressing this area for improvement and proposed a solution: an asset database accessible directly within the application. By reducing the time required for asset search, download, and import, users would be empowered to create a more dynamic and vibrant virtual world.
        </p>
        <h3>Development</h3>
        <p>
          After researching what asset databases were widely available, I decided to move forward with a Clara.io integration because they maintained a wide variety of 3D assets while enforcing certain texture and model format requirements that meshed well with High Fidelity's system.
        </p>
        <p>
          The development of this feature posed several challenges:
        </p>
        <ul>
          <li>
            Formatting the Clara.io page within High Fidelity to only show actions that our users could take
          </li>
          <li>
            Streamlining the process of downloading a zip folder with 3D assets, unzipping the assets, and uploading the contents of the asset folder into High Fidelity
          </li>
          <li>
            Building in an automatic quality control on models (i.e., preventing users from uploading models that aren't supported in High Fidelity)
          </li>
        </ul>
        <p>
          I navigated these challenges by breaking down the development process into milestones and thoroughly documenting each step. I designed the system to be scalable with other asset databases, with the intention that the Clara.io integration would serve as a proof of concept for a more streamlined asset upload process that could host multiple databases.
        </p>
        <h3>Use Case</h3>
        <ol>
          <li>
            Launch High Fidelity and enter the virtual world
          </li>
          <li>
            Open "Marketplace" within High Fidelity
          </li>
          <li>
            Use status bar to switch between Marketplace and Clara.io via the “marketplace” of marketplaces
          </li>
          <li>
            Log onto Clara.io within High Fidelity
          </li>
          <li>
            Select a featured model or search for a specific model through Clara's interface
          </li>
          <li>
            Download the .fbx format of the model
          </li>
          <li>
            Save with a specific filename to High Fidelity's built-in Asset Browser
          </li>
          <li>
            Upload to the virtual world from the Asset Browser
          </li>
        </ol>
        <p>
          The Clara.io integration script is available on my <a target='_blank' rel='noopener noreferrer' href={CLARA_SCRIPT_URL}>GitHub</a>.
        </p>
      </div>
      <br></br>
      <hr className="solid"></hr>
      <br></br>
      <div className="section" id='google-blocks'>
        <h2>Google Blocks Integration</h2>
        <div className="video-youtube">
          <iframe className="responsive-iframe" src={POLY_EMBED_URL} title="Google Blocks Integration" frameBorder="0" allow="autoplay; encrypted-media;" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
        </div>
        <br></br>
        <i style={{ display: 'flex', justifyContent: 'center' }}>High Fidelity featured at 1:20</i>
        <p>
          After the success of the Clara.io integration, I integrated an API that surfaced asset import functionality from <a target='_blank' rel='noopener noreferrer' href={POLY_URL}>Google Poly</a>, a 3D object and scene website. Integrating this asset library to High Fidelity was significantly streamlined by the foundation established through the Clara.io integration. With direct access to Google Poly's extensive collection of user-generated models, High Fidelity users could create a wide variety of environments and virtual worlds to share.
        </p>
        <p>
          The Google Poly integration script is available on my <a target='_blank' rel='noopener noreferrer' href={POLY_SCRIPT_URL}>GitHub</a>.
        </p>
      </div>
      <br></br>
      <hr className="solid"></hr>
      <br></br>
      <div className="section" id='other-content'>
        <h2>Other Content</h2>
        <div className="video" style={{ height: '10%' }}>
          <video controls muted>
            <source src={PILL_VIDEO_URL} type="video/mp4" />
          </video>
        </div>
        <br></br>
        <i style={{ display: 'flex', justifyContent: 'center' }}>"FX Pill" demo</i>
        <p>
          I scripted virtual pinatas, animated emojis, graphics effect "pills," music visualizers, and other playful content that you may not be able to find in the real world. This content was available on High Fidelity's "Marketplace," allowing users to freely download and incorporate it in their own virtual spaces. The scripts for this content were also open-source, giving other developers the opportunity to experiment with and build upon them.
        </p>
        <p>
          All content scripts are available on my <a target='_blank' rel='noopener noreferrer' href={HIFI_CONTENT_SCRIPTS_URL}>GitHub</a>.
        </p>
      </div>
      <br></br>
      <hr className="solid"></hr>
      <br></br>
      <div className="section" id='extras'>
        <h2>Reflections</h2>
        <ul>
          <li>
            <b>In the startup world, agility is essential.</b> High Fidelity was my first full-time developer role, providing valuable insight into how quickly a small startup can pivot between projects, features, and requirements. I learned to be a versatile developer, ready to wear multiple hats to meet the company's evolving needs.
          </li>
          <li>
            <b>Push for your ideas!</b> In the same breath, working at a small startup allowed me to passionately advocate for ideas that I really believed in, providing me with the freedom to implement them effectively.
          </li>
          <li>
            <b>The more you engage with users, the better you can serve them.</b> I was fortunate to work on a product that allowed us to virtually share space with our users. Thanks to High Fidelity's social networking model, I had the opportunity to converse with dozens of users while developing, testing, and iterating on content. Though formal user testing is crucial for product growth, my direct exposure to user feedback made me more effective in my role as a content/prototype developer, as it deepened my empathy for our users.
          </li>
        </ul>
      </div>
    </PageTemplate>
  );
};

export default HiFi;