// src/pages/RVVR.js
import React, { useState } from 'react';
import PageTemplate from '../components/PageTemplate';

import ricohImageUrl from '../assets/images/rv-vr/ricoh-theta-s.jpg';

const VIDEO_EMBED_URL = 'https://www.youtube.com/embed/oDeCHxmh2_8?si=UX632hSjpJd3nykh';
const VIDEO_URL = 'https://youtu.be/oDeCHxmh2_8?si=joE0MeWDsj4K6VbB';
const ARTICLE_URL = 'https://peninsulapress.com/2019/03/19/the-bay-areas-housing-crisis-in-360-video/';
const COMM_CLASS_URL = 'https://explorecourses.stanford.edu/search?q=COMM+280%3a+Virtual+Reality+Journalism+in+the+Public+Sphere&view=catalog&page=0&filter-coursestatus-Active=on&collapse=&academicYear=20182019';
const RICOH_URL = 'https://us.ricoh-imaging.com/product/theta-s/';
const PREMIERE_PRO_URL = 'https://helpx.adobe.com/premiere-pro/using/VRSupport.html';
const LUCID_DREAMING_RELATIVE_URL = '/#/lucid-dreaming';

const RVVR = () => {
  const [refs, setRefs] = useState([]);

  // Function to be used in PageTemplate and passed down
  const generateRefsFromDOM = (generateRefsFunction) => {
    generateRefsFunction();  // Call the function that scans the DOM and sets the refs
  };

  const isMobile = window.matchMedia('(pointer:none), (pointer:coarse)').matches;

  return (
    <PageTemplate
      title='"RV VR": An Immersive Perspective on the Bay Area Housing Crisis'
      refs={refs} 
      setRefs={setRefs} 
      generateRefsFromDOM={generateRefsFromDOM}
    >
      <h3>Completed March 2019</h3>
      <div className="section" id='overview'>
        <h2 style={{ display: 'none' }}>Overview</h2>
        <div className="video">
          {/* Overlay div for click handling */}
          {isMobile && (
            <a
              href={VIDEO_URL}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                zIndex: 1, // Ensure this is on top of the iframe
                textDecoration: 'none', // Remove underline
                color: 'transparent', // Hide text if any
              }}
            >
            </a>
          )}
          <iframe className="responsive-iframe" src={VIDEO_EMBED_URL} title="RV VR" frameBorder="0" allow="autoplay; encrypted-media;" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
        </div>
        <br></br>
        <i style={{ display: 'flex', justifyContent: 'center' }}>Drag the video to rotate the viewpoint</i>
        <p>
          RV VR is an immersive experience that allows viewers to see first-hand what transient life in a recreational vehicle is like in Silicon Valley. Published in 2019 alongside this <a target='_blank' rel='noopener noreferrer' href={ARTICLE_URL}>Peninsula Press article</a>, the six-and-a-half-minute video harnesses immersive technology to create an experience that captures the realities of the Bay Area housing crisis in their rawest form.
        </p>
      </div>
      <br></br>
      <hr className="solid"></hr>
      <br></br>
      <div className="section" id='background'>
        <h2>Background</h2>
        <p>
          In my Senior Winter quarter at Stanford, I was enrolled in "<a target='_blank' rel='noopener noreferrer' href={COMM_CLASS_URL}>COMM 280</a>: Virtual Reality Journalism in the Public Sphere." We formed groups of three to report on local issues, using 360&deg; video technology to engage audiences in a fresh and innovative way. Our goal was to shed light on these issues in a way that traditional journalism doesn't fully do justice. My group chose to report on the Bay Area housing crisis, believing that immersive media could help viewers better empathize with the cramped living conditions that many Bay Area residents face.
        </p>
      </div>
      <br></br>
      <hr className="solid"></hr>
      <br></br>
      <div className="section" id='tools'>
        <h2>Tools</h2>
        <img src={ricohImageUrl} alt='Ricoh Theta S' width='40%'/>
        <p>
          We used the <a target='_blank' rel='noopener noreferrer' href={RICOH_URL}>Ricoh Theta S</a> (discontinued) to film our mini-documentary. This camera featured two fish-eye lenses, one for each side of the device, to create full 360&deg; videos with minimal intervention. It also included remote recording and live previews through their app, enabling us to effortlessly capture moments and assess the quality of our takes in real time.
        </p>
        <p>
          Since the Ricoh Theta S automatically synced and stitched the video clips upon export, we were able to rely solely on Adobe's <a target='_blank' rel='noopener noreferrer' href={PREMIERE_PRO_URL}>Premiere Pro</a> video editing software for post-production.
        </p>
      </div>
      <br></br>
      <hr className="solid"></hr>
      <br></br>
      <div className="section" id='learnings'>
        <h2>Learnings</h2>
        <ul>
          <li>
            <b>360&deg; video capture technology has come a long way!</b> Back when I produced my <a target='_blank' rel='noopener noreferrer' href={LUCID_DREAMING_RELATIVE_URL}>"Lucid Dreaming 360" video</a>, I had to rely on numerous technical hacks to make the video look good. In just three years, the technology had advanced significantly, which was exciting to witness, especially as someone deeply immersed in the virtual reality industry. It was reassuring to see such progress being made toward technological advancement and wider public access.
          </li>
          <li>
            <b>Great immersive storytelling comes with great responsibility.</b> While we were enthusiastic about using an immersive medium to tell this story, we had to exercise careful judgment in selecting which parts of interviews to include and how much of our interviewees' lives to reveal. A home is a personal space, and given the privilege of sharing their stories, we needed to respect their agency and privacy.
          </li>
        </ul>
      </div>
    </PageTemplate>
  );
};

export default RVVR;