// src/pages/_SamplePage.js
// Copy this page to create a new project page using standard formatting
import React, { useState } from 'react';
import PageTemplate from '../components/PageTemplate';

//import sampleImageUrl from "";

const SamplePage = () => {
  const [refs, setRefs] = useState([]);

  // Function to be used in PageTemplate and passed down
  const generateRefsFromDOM = (generateRefsFunction) => {
    generateRefsFunction();  // Call the function that scans the DOM and sets the refs
  };

  return (
    <PageTemplate
      title="Sample Page Title" 
      refs={refs} 
      setRefs={setRefs} 
      generateRefsFromDOM={generateRefsFromDOM}
    >
      <h3>Date completed</h3>
      <div className="section" id='overview'>
        <h2 style={{ display: 'none' }}>Overview</h2>
        {/*<img src={sampleImageUrl} alt='Sample Image' width='100%'/>*/}
        <br></br>
        <p>
          This is the introduction for Sample Page.
        </p>
      </div>
      <br></br>
      <hr className="solid"></hr>
      <br></br>
      <div className="section" id='first-section'>
        <h2>First Section Header</h2>
        <p>
          Add more specific content here.
        </p>
      </div>
      {/* Add more specific content here */}
    </PageTemplate>
  );
};

export default SamplePage;