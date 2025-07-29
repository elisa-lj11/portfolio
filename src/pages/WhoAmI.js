// src/pages/WhoAmI.js
// Copy this page to create a new project page using standard formatting
import React, { useState } from 'react';
import PageTemplate from '../components/PageTemplate';

// Social media icons sourced from https://www.cleanpng.com/
import linkedInIconUrl from '../assets/images/who-am-i/linkedin-logo.png';
import gitHubIconUrl from '../assets/images/who-am-i/github-logo.png';
import resumeIconUrl from '../assets/images/who-am-i/resume-icon.png';
import emailIconUrl from '../assets/images/who-am-i/email-icon.png';
import soundCloudIconUrl from '../assets/images/who-am-i/soundcloud-logo.png';
import spotifyIconUrl from '../assets/images/who-am-i/spotify-logo.png';

import spacedOutImageUrl from '../assets/images/who-am-i/spaced-out.jpg';
import spacePetsImageUrl from '../assets/images/who-am-i/space-pets.jpg';
import panamaFarmImageUrl from '../assets/images/who-am-i/panama-farm.jpeg';
import spaceGradImageUrl from '../assets/images/who-am-i/space-grad.png';

const LINKEDIN_URL = 'https://www.linkedin.com/in/elisa-lupin/';
const GITHUB_URL = 'https://github.com/elisa-lj11';
const RESUME_URL = 'https://drive.google.com/file/d/1yRedX4BKhU3c8ZpC5FHdRXyVhrszH0rw/view?usp=sharing';
const EMAIL_LINK = 'mailto:elisa.lupinj@gmail.com';
const SOUNDCLOUD_URL = 'https://soundcloud.com/djbudgiebeats';
const SPOTIFY_URL = 'https://open.spotify.com/user/5eakug67hyf80pi6igg30qmcg?si=0c3213f09cad4704';

const FUTURAMA_QUOTE_VIDEO_EMBED_URL ='https://www.youtube.com/embed/VofkquwmT40?si=pWm2IUDGlIcW0Ilw&amp;start=34';
const WWOOF_URL = 'https://wwoof.net/';
const STARDEW_URL = 'https://www.stardewvalley.net/';
const EXPLORATORIUM_URL ='https://www.exploratorium.edu/';
const STRIVR_URL = 'https://www.strivr.com/';
const STRIVR_PAGE_RELATIVE_PATH = '#/strivr';
const TIER_URL = 'https://english.tier.org.tw/';
const JOURNALISM_URL = 'https://navigator.stanford.edu/classes/1246/29611';
const IMMERSIVE_MEDIA_PAGE_RELATIVE_PATH = '#/immersive-media';
const HIFI_WIKI_URL = 'https://en.wikipedia.org/wiki/High_Fidelity,_Inc.';
const HIFI_PAGE_RELATIVE_PATH = '#/hifi';
const VHIL_URL = 'https://vhil.stanford.edu/';
const EMPATHY_VHIL_URL = 'https://vhil.stanford.edu/projects/2020/empathy-and-perspective-taking';
const BERKELEY_URL = 'https://www.berkeley.edu/';
const MDES_URL = 'https://design.berkeley.edu/about-mdes';
const STANFORD_URL = 'https://www.stanford.edu/';
const SYMSYS_URL = 'https://symsys.stanford.edu/';

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
          I'm a bit of a night owl. When I'm not outside gazing at the stars, wondering how we ended up as these little sentient specks on this vast cosmic canvas floating aimlessly in the ether, I'm up late daydreaming of unconventional ways to make sense of our existence.
        </p>
        <p>
          I've dabbled in a lot of things: I'm an engineer, a singer, a designer, a festival-goer, a teacher, a pianist, a petsitter, a student, a gaymer, a writer, a long furby enthusiast (not in any particular order). I ask myself "Who am I?" every day, and I wish I could give you a better answer. I guess, in the most abstract sense, I am whoever I am at this exact moment, and any artifacts that remain from my past are just echoes of who I used to be. Maybe a better question is "Who do I want to become?" Now for this, I can give a relatively short answer:
        </p>
        <h3>
          <b>I want to become a person who makes a positive impact in this slice of spacetime that we concurrently experience.</b>
        </h3>
        <p>
          Anyway, enough armchair philosophizing. Look below to see who I used to be.
        </p>
      </div>
      <hr className="solid"></hr>
      <div className="section" id='Links'>
        <h2>Links</h2>
        <div className='social-media-container'>
          <a className='social-media' target='_blank' rel='noopener noreferrer' href={LINKEDIN_URL}>
            <img className='social-media' src={linkedInIconUrl} />
            LinkedIn
          </a>
          <a className='social-media' target='_blank' rel='noopener noreferrer' href={GITHUB_URL}>
            <img className='social-media' src={gitHubIconUrl} />
            GitHub
          </a>
          <a className='social-media' target='_blank' rel='noopener noreferrer' href={RESUME_URL}>
            <img className='social-media' src={resumeIconUrl} />
            Resume
          </a>
          <a className='social-media' href={EMAIL_LINK}>
            <img className='social-media' src={emailIconUrl} />
            Email
          </a>
          <a className='social-media' target='_blank' rel='noopener noreferrer' href={SOUNDCLOUD_URL}>
            <img className='social-media' src={soundCloudIconUrl} />
            SoundCloud
          </a>
          <a className='social-media' target='_blank' rel='noopener noreferrer' href={SPOTIFY_URL}>
            <img className='social-media' src={spotifyIconUrl} />
            Spotify Playlists
          </a>
        </div>
      </div>
      <hr className="solid"></hr>
      <div className="section" id='values'>
        <h2>Values</h2>
        <ol>
          <li>
            <b style={{fontWeight: 'bold'}}>Curiosity</b>
            <ul>
              <li>
                I approach new problems with an open mind and a beginner's mentality. When stepping into unfamiliar domains, I've found that I learn best by asking many questions early and often (not sparing the dumb ones). Pairing the humility to admit what I don't know with the curiosity to seek out answers has led me to discover fascinating insights I didn't even realize I was missing.
              </li>
            </ul>
          </li>
          <li>
            <b style={{fontWeight: 'bold'}}>Creativity</b>
            <ul>
              <li>
                Why remake something for the thousandth time when we can create work that is novel and engaging? Foundational knowledge is essential for building functionality, but I challenge myself to find new ways to fulfill the original purpose of a design while infusing it with nontraditional methods that make the result not only useful, but delightful.
              </li>
            </ul>
          </li>
          <li>
            <b style={{fontWeight: 'bold'}}>Community</b>
            <ul>
              <li>
                In a world increasingly shaped by technology and individualism, it's easy to lose sight of our collective roots. We're inherently wired to thrive in community settings, which is why I believe it's crucial to prioritize people in technology design. Technology should foster our connections, not hinder them.
              </li>
            </ul>
          </li>
        </ol>
        <p>
          A little bit of inspiration for my website (and perhaps my life):
        </p>
        <div className="video-youtube">
          <iframe className="responsive-iframe" src={FUTURAMA_QUOTE_VIDEO_EMBED_URL} title="Futurama Quote" frameBorder="0" allow="autoplay; encrypted-media;" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
        </div>
      </div>
      <hr className="solid"></hr>
      <div className="section" id='personal'>
        <h2>Personal</h2>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', textAlign: 'center' }}>
          <figure>
            <img src={spacePetsImageUrl} alt='Space Pets' width='80%' style={{display: 'inline-block'}}/>
            <figcaption>Obligatory pet pics</figcaption>
          </figure>
        </div>
        <p>
          I am devoted to my tuxedo cat, Azalea (and dearly miss my labradoodle, Zody). We love going for walks—Azalea rides in her "astronaut" cat backpack—and we often enjoy warm afternoon naps in the sun. When I'm not catering to Azalea's whims, I am:
        </p>
        <ul>
          <li>
            Learning anime and other TV theme songs on the piano
          </li>
          <li>
            Playing cozy video games
          </li>
          <li>
            Planning remote camping/backpacking trips
          </li>
          <li>
            Scuba diving and hiking in new countries
          </li>
          <li>
            Finding cheap hole-in-the-wall restaurants
          </li>
        </ul>
      </div>
      <hr className="solid"></hr>
      <div className="section" id='education'>
        <h2>Education</h2>
        <h3>University of California, Berkeley</h3>
        <i>August 2025 - December 2026 (expected)</i>
        <p>
          I am a master's student at the <a target='_blank' rel='noopener noreferrer' href={BERKELEY_URL}>University of California, Berkeley</a> in the <a target='_blank' rel='noopener noreferrer' href={MDES_URL}>Master of Design</a> program, which emphasizes a critical approach to design and social practice to address the new realities of emerging technologies. Through this program, I aim to explore human-centered design, human-computer interaction, and user interface design, with a focus on creating innovative physical-digital interfaces that facilitate interpersonal connections.
        </p>
        <br />
        <br />
        <h3>Stanford University</h3>
        <i>September 2014 - June 2019</i>
        <img src={spaceGradImageUrl} alt='Space Grad' width='50%'/>
        <p>
          I graduated from <a target='_blank' rel='noopener noreferrer' href={STANFORD_URL}>Stanford University</a> with a Bachelor of Science in <a target='_blank' rel='noopener noreferrer' href={SYMSYS_URL}>Symbolic Systems</a>, an interdisciplinary program that branches across computer science, linguistics, philosophy, and psychology. My concentration was "Human-Computer Interaction," where I focused on the design, usability, and evaluation of interactive systems, exploring how technology can be better integrated with human needs and behaviors.
        </p>
      </div>
      <hr className="solid"></hr>
      <div className="section" id='experience'>
        <h2>Experience</h2>
        <h3>Funemployment</h3>
        <i>February 2024 - July 2025</i>
        <br/>
        <br/>
        <img src={panamaFarmImageUrl} alt='Farming in Panamá' width='80%'/>
        <p>
          I left Strivr in January 2024 to explore my dream of living remotely on a farm in Panamá through the volunteer program <a target='_blank' rel='noopener noreferrer' href={WWOOF_URL}>WWOOF</a>. Motivated to connect to my Panamanian roots by learning Spanish, and inspired by my video game experience with virtual farming in <a target='_blank' rel='noopener noreferrer' href={STARDEW_URL}>Stardew Valley</a>, I moved to Boquete, a mountainous region famous for its coffee. Four months of real-life farming later, I realized it was, unsurprisingly, more fun in a video game, so I returned to California to figure out my next steps. 
        </p>
        <p>
          After a period of soul-searching, I decided to apply to graduate school and was accepted into UC Berkeley's Master of Design program for emerging technology. In the meantime, I worked as a barista to learn both the craft of coffee-making and the art of small talk, volunteered at the <a target='_blank' rel='noopener noreferrer' href={EXPLORATORIUM_URL}>Exploratorium</a> (a public learning laboratory blending science and art), and traveled through Europe with family.
        </p>
        <br />
        <br />
        <h3>Strivr</h3>
        <i>April 2020 - January 2024</i>
        <p>
          After returning from Asia, I joined <a target='_blank' rel='noopener noreferrer' href={STRIVR_URL}>Strivr</a>, an end-to-end immersive learning platform for enterprise training, as a software engineer on the Immersive Experiences team, where we developed user-facing interactions in virtual reality to facilitate immersive learning and enable a world-class, intuitive experience for users of varying VR familiarity. I discuss my work in more detail on my <a target='_blank' rel='noopener noreferrer' href={`${process.env.PUBLIC_PATH}${STRIVR_PAGE_RELATIVE_PATH}`}>Strivr project page</a>.
        </p>
        <br />
        <br />
        <h3>Taiwan Institute of Economic Research</h3>
        <i>June 2019 - August 2019</i>
        <p>
          I moved abroad to Taiwan to work as a Natural Language Processing Software Engineering intern at the <a target='_blank' rel='noopener noreferrer' href={TIER_URL}>Taiwan Institute of Economic Research</a> (TIER), where I created and refined NLP analysis programs to parse information about XR technology updates from relevant databases for TIER's industry analysis.
        </p>
        <br />
        <br />
        <h3>Stanford Immersive Journalism</h3>
        <i>January 2019 - March 2019<br />January 2016 - March 2016</i>
        <p>
          In my sophomore and senior years, I was a lab assistant for Stanford's course <a target='_blank' rel='noopener noreferrer' href={JOURNALISM_URL}>"Immersive (VR/AR) Journalism in the Public Sphere"</a>, where I contributed to curriculum development and taught best practices and methods in 360° video production and postproduction. A journalistic piece I produced from this class is featured on my <a target='_blank' rel='noopener noreferrer' href={`${process.env.PUBLIC_PATH}${IMMERSIVE_MEDIA_PAGE_RELATIVE_PATH}`}>Immersive Media project page</a>.
        </p>
        <br />
        <br />
        <h3>High Fidelity</h3>
        <i>November 2017 - June 2018</i>
        <p>
          In between my junior and senior years, I took an opportunity to work full-time as a software engineer at <a target='_blank' rel='noopener noreferrer' href={HIFI_WIKI_URL}>High Fidelity</a>, formerly a social virtual reality startup based in San Francisco. I was part of the Content Prototyping team, where we developed innovative content to showcase our platform's potential, engage users, and inspire developers and content creators to push creative boundaries. I discuss my work in more detail on my <a target='_blank' rel='noopener noreferrer' href={`${process.env.PUBLIC_PATH}${HIFI_PAGE_RELATIVE_PATH}`}>High Fidelity project page</a>.
        </p>
        <br />
        <br />
        <h3>Stanford Virtual Human Interaction Lab</h3>
        <i>March 2019 - June 2019<br />September 2015 - December 2016</i>
        <p>
          During my undergraduate studies at Stanford, I worked in the <a target='_blank' rel='noopener noreferrer' href={VHIL_URL}>Virtual Human Interaction Lab</a>, where research focuses on studying the psychological and behavioral effects of Virtual Reality (VR) and Augmented Reality (AR). I initially joined as a programmer to build immersive components for experimental designs such as the <a target='_blank' rel='noopener noreferrer' href={EMPATHY_VHIL_URL}>"Empathy at Scale"</a> project. I later returned as a lab assistant to help facilitate experimental studies.
        </p>
        <br />
        <br />
        <h3>Miscellaneous</h3>
        <p>
          I began teaching piano and tutoring in math and writing as a kid and continued through college. I also took on side jobs like dog washing and dog walking.
        </p>
      </div>
    </PageTemplate>
  );
};

export default WhoAmI;