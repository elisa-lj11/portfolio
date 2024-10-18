// src/pages/LucidDreaming.js
import React, { useState } from 'react';
import PageTemplate from '../components/PageTemplate';

import goProRigImageUrl from '../assets/images/lucid-dreaming/go-pro-rig.png';
import kolorSoftwareImageUrl from '../assets/images/lucid-dreaming/kolor-software.jpg'

const VIDEO_EMBED_URL = 'https://www.youtube.com/embed/YvZp26yt0Uk?si=Lkc-dawIaNcBuq0N';
const VIDEO_URL = 'https://youtu.be/YvZp26yt0Uk?si=USMMEbfPDtPW9916';
const SLEEP_AND_DREAMS_CLASS_URL = 'https://explorecourses.stanford.edu/search?view=catalog&filter-coursestatus-Active=on&page=0&catalog=&q=PSYC+135:+Sleep+and+Dreams&collapse=';
const VHIL_URL = 'https://vhil.stanford.edu/';
const VHIL_LEARNING_URL = 'https://vhil.stanford.edu/publications/learning';
const GO_PRO_HERO_URL = 'https://gopro.com/en/us/news/gopro-introduces-hero4-the-most-powerful-gopro-lineup-ever';
const GO_PRO_RIG_URL = 'https://www.thingiverse.com/thing:1257407';
const KOLOR_URL = 'https://panosociety.com/products/kolor-autopano-video-pro';
const CALYPSO_URL = 'https://web.stanford.edu/group/calypso/cgi-bin/';

const LucidDreaming = () => {
  const [refs, setRefs] = useState([]);

  // Function to be used in PageTemplate and passed down
  const generateRefsFromDOM = (generateRefsFunction) => {
    generateRefsFunction();  // Call the function that scans the DOM and sets the refs
  };

  const isMobile = window.matchMedia('(pointer:none), (pointer:coarse)').matches;

  return (
    <PageTemplate
      refs={refs} 
      setRefs={setRefs} 
      generateRefsFromDOM={generateRefsFromDOM}
    >
      <div className="section" id='overview'>
        <h2 style={{ display: 'none' }}>Overview</h2>
        <h1>"Lucid Dreaming": A 360&deg; Video Experience</h1>
        <div className="video-youtube">
          {/* Overlay div for click handling on 360 videos on mobile*/}
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
          <iframe className="responsive-iframe" src={VIDEO_EMBED_URL} title="Lucid Dreaming 360" frameBorder="0" allow="autoplay; encrypted-media;" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
        </div>
        <br></br>
        <i style={{ display: 'flex', justifyContent: 'center' }}>Drag the video to rotate the viewpoint</i>
        <p>
          "Lucid Dreaming 360" is a quick and interactive guide to lucid dreaming based on sleep study research. The 7-minute video, produced back in 2016, used at-the-time cutting-edge 360-video capture technology to create an immersive experience that used the principles of immersive learning to the practice of lucid dreaming.
        </p>
      </div>
      <br></br>
      <hr className="solid"></hr>
      <br></br>
      <div className="section" id='background'>
        <h2>Background</h2>
        <p>
          As an undergrad at Stanford, I took Stanford's <a target='_blank' rel='noopener noreferrer' href={SLEEP_AND_DREAMS_CLASS_URL}>"Sleep and Dreams"</a> course led by Dr. William Dement and Dr. Rafael Pelayo, both renowned pioneers in sleep medicine research. For our final project, we were tasked with creating an outreach video that creatively communicated some of the key concepts from the class. At the time, I had just begun working at <a target='_blank' rel='noopener noreferrer' href={VHIL_URL}>VHIL</a>, Stanford's virtual reality lab where I was learning about the effectiveness of <a target='_blank' rel='noopener noreferrer' href={VHIL_LEARNING_URL}>immersive learning</a> and how to operate 360&deg; video capture technology. I saw this Sleep Outreach project as a opportunity to experiment with immersive technology and produce an engaging yet informative lesson on lucid dreaming, a concept that has fascinated me ever since I was a kid. I also felt that the immersive nature of a 360&deg;e video would beautifully complement the theme of dreaming, allowing viewers to fully experience the sensation of being inside a dream. 
        </p>
      </div>
      <br></br>
      <hr className="solid"></hr>
      <br></br>
      <div className="section" id='tools'>
        <h2>Tools</h2>
        <img src={goProRigImageUrl} alt='GoPro custom 3D-printed rig' width='60%'/>
        <p>
          For the recording equipment, I mounted six <a target='_blank' rel='noopener noreferrer' href={GO_PRO_HERO_URL}>GoPro HERO4 cameras</a> together using a <a target='_blank' rel='noopener noreferrer' href={GO_PRO_RIG_URL}>custom 3D-printed rig</a>. This technology is obsolete in the wake of today's handleheld single-device 360&deg; cameras, but in 2016, we had to be crafty to take advantage of emerging immersive technology while maintaining high-resolution videos.
        </p>
        <img src={kolorSoftwareImageUrl} alt='Kolor Autopano Video Pro software' width='80%'/>
        <p>
          For the stitching software, I used <a target='_blank' rel='noopener noreferrer' href={KOLOR_URL}>Kolor Autopano Video Pro</a> (now deprecated). To prepare a ready-to-use 360&deg; video for YouTube, I manually synced the six individual video clips, cleaned up the seams between the overlapping GoPro fields of view, and exported and rendered the video in a supported 360&deg; format.
        </p>
      </div>
      <br></br>
      <hr className="solid"></hr>
      <br></br>
      <div className="section" id='filming'>
        <h2>Filming</h2>
        <p>
          I was a member of <a target='_blank' rel='noopener noreferrer' href={CALYPSO_URL}>Cardinal Calypso</a>, Stanford's steel pan band, and they graciously volunteered to perform in my video. To avoid potential pitfalls with stitching together multiple scenes for the video, I wrote the script to be filmed in a single shot. While writing the script and staging the performers, I considered how we could use the 360&deg; field of view by arranging the performers in a circle around the camera, but I also made sure to limit distractions around the main speaker by staging peformers further back.
        </p>
      </div>
      <br></br>
      <hr className="solid"></hr>
      <br></br>
      <div className="section" id='reflections'>
        <h2>Reflections</h2>
        <ul>
          <li>
            <b>The more working parts, the more room for error.</b> With so many moving parts to produce a 360&deg; video in 2016, it was very easy to make mistakes early on that could snowball down the production pipeline. My patience was tested through this production due to fickle technology and lengthy export times, but I was proud that I could publish a working 360&deg; video, even if it took longer than expected.
          </li>
          <li>
            <b>Content is key!</b> Even with the latest technology, the content needed to complement the medium for the learning experience to be truly effective. I dedicated a lot of time revising my script as I encountered new technical challenges in 360-video production (such as lower-than-expected video resolution) that could prevent the material from standing out.
          </li>
        </ul>
      </div>
    </PageTemplate>
  );
};

export default LucidDreaming;