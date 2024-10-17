// src/pages/WhoAmI.js
// Copy this page to create a new project page using standard formatting
import React, { useState } from 'react';
import PageTemplate from '../components/PageTemplate';

import spacedOutImageUrl from '../assets/images/who-am-i/spaced-out.jpg';

const SYMSYS_URL = 'https://symsys.stanford.edu/';
const HIFI_WIKI_URL = 'https://en.wikipedia.org/wiki/High_Fidelity,_Inc.';

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
        <h1>Who is "Elisa Lupin-Jimenez"?</h1>
        <img src={spacedOutImageUrl} alt='Spaced Out' width='50%'/>
        <br></br>
        <p>
          I'm a bit of a night owl. When I'm not outside gazing at the stars, wondering how we ended up where we are as these little sentient specks on this vast cosmic canvas floating aimlessly in the ether, I'm up late daydreaming of unconventional ways to make sense of our existence.
        </p>
        <p>
          I've dabbled in a lot of things: I'm an engineer, a singer, a designer, a festival-goer, a teacher, a pianist, a petsitter, a student, a gaymer, a writer, a long furby enthusiast; not in any particular order. I ask myself "Who am I?" every day, and I wish I could give you a better answer. I guess, in the most abstract sense, I am whoever I am in this exact moment, and any artifacts that remain from my past are just vestiges of who I used to be. Maybe a better question is "who do I want to become?" Now for this, I can give a relatively short answer:
        </p>
        <h3>
          <b>I want to become a person who makes a positive impact in this slice of spacetime that we concurrently experience.</b>
        </h3>
        <p>
          Anyway, enough armchair philosophizing. Look below to see who I used to be.
        </p>
      </div>
      <br></br>
      <hr className="solid"></hr>
      <br></br>
      <div className="section" id='career'>
        <h2>Career</h2>
        <p>
          I graduated in 2019 from Stanford University with a Bachelor of Science in <a target='_blank' rel='noopener noreferrer' href={SYMSYS_URL}>Symbolic Systems</a>, an interdisciplinary program that branches across computer science, linguistics, philosophy, and psychology. My concentration was "Human-Computer Interaction," where I focused on
        </p>
        <p>
          In between my junior and senior years, I took an opportunity to work full time as a software engineer at <a target='_blank' rel='noopener noreferrer' href={HIFI_WIKI_URL}>High Fidelity</a>, formerly a social virtual reality startup

          <br />
          <br />
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
          I love a good bargain<br />
          I am beholden to my dog Zody and cat Azalea<br />
          Trying to learn anime themes on piano<br />

        </p>
      </div>
      <br></br>
      <hr className="solid"></hr>
      <br></br>
      <div className="section" id='Links'>
        <h2>Links</h2>
        <p>
          LinkedIn<br />
          Resume<br />
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