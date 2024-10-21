// src/pages/_SamplePage.js
// Copy this page to create a new project page using standard formatting
import React, { useState } from 'react';
import PageTemplate from '../components/PageTemplate';

//import sampleImageUrl from '';

const Window = () => {
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
        <h1>"Window": An AR Clothes Shopping App</h1>
        {/*<img src={sampleImageUrl} alt='Sample Image' width='100%'/>*/}
        <br></br>
        <p>
          This is the introduction for Sample Page.
        </p>
      </div>
      <hr className="solid"></hr>
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

export default Window;