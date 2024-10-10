// src/pages/OrgASMR.js
import React, { useState } from 'react';
import PageTemplate from '../components/PageTemplate';

import firstSketchImageUrl from '../assets/images/orgasmr/first-sketch.jpg'

const ORGASMR_DEMO_URL = 'https://www.youtube.com/embed/6NVlh2iXAhg?si=TpFMYwpbAOgr7bNq';
const CCRMA_CLASS_URL = 'https://ccrma.stanford.edu/courses/250a-winter-2019/';

const OrgASMR = () => {
  const [refs, setRefs] = useState([]);

  // Function to be used in PageTemplate and passed down
  const generateRefsFromDOM = (generateRefsFunction) => {
    generateRefsFunction();  // Call the function that scans the DOM and sets the refs
  };

  return (
    <PageTemplate
      title='"orgASMR": A Head-Scratching Musical Interface' 
      refs={refs} 
      setRefs={setRefs} 
      generateRefsFromDOM={generateRefsFromDOM}
    >
      <h3>Completed March 2019</h3>
      <div className="video">
        <iframe className="responsive-iframe" src={ORGASMR_DEMO_URL} title="orgASMR Demo" frameBorder="0" allow="autoplay; encrypted-media;" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
      </div>
      <br></br>
      <p>
        This is the introduction for Sample Page.
      </p>
      <br></br>
      <hr className="solid"></hr>
      <br></br>
      <div className="section" id='ideation'>
        <h2>Ideation</h2>
        <p>
          Add more specific content here.
        </p>
        <img src={firstSketchImageUrl} alt='Sketch of orgASMR' width='100%'/>
      </div>
    </PageTemplate>
  );
};

export default OrgASMR;