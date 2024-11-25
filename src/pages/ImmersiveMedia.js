// src/pages/ImmersiveMedia.js
import React, { useState } from 'react';
import PageTemplate from '../components/PageTemplate';

import stanfordCardboardVRImageUrl from '../assets/images/immersive-media/stanford-cardboard-vr.jpg';
import ricohImageUrl from '../assets/images/immersive-media/ricoh-theta-s.jpg';
import goProRigImageUrl from '../assets/images/immersive-media/go-pro-rig.png';
import kolorSoftwareImageUrl from '../assets/images/immersive-media/kolor-software.jpg'

const RVVR_VIDEO_URL = 'https://youtu.be/oDeCHxmh2_8?si=joE0MeWDsj4K6VbB';
const RVVR_VIDEO_EMBED_URL = 'https://www.youtube.com/embed/oDeCHxmh2_8?si=UX632hSjpJd3nykh';
const ARTICLE_URL = 'https://peninsulapress.com/2019/03/19/the-bay-areas-housing-crisis-in-360-video/';
const COMM_CLASS_URL = 'https://explorecourses.stanford.edu/search?q=COMM+280%3a+Virtual+Reality+Journalism+in+the+Public+Sphere&view=catalog&page=0&filter-coursestatus-Active=on&collapse=&academicYear=20182019';
const RICOH_URL = 'https://us.ricoh-imaging.com/product/theta-s/';
const PREMIERE_PRO_URL = 'https://helpx.adobe.com/premiere-pro/using/VRSupport.html';
const LUCID_VIDEO_URL = 'https://youtu.be/YvZp26yt0Uk?si=USMMEbfPDtPW9916';
const LUCID_VIDEO_EMBED_URL = 'https://www.youtube.com/embed/YvZp26yt0Uk?si=Lkc-dawIaNcBuq0N';
const SLEEP_AND_DREAMS_CLASS_URL = 'https://explorecourses.stanford.edu/search?view=catalog&filter-coursestatus-Active=on&page=0&catalog=&q=PSYC+135:+Sleep+and+Dreams&collapse=';
const VHIL_URL = 'https://vhil.stanford.edu/';
const VHIL_LEARNING_URL = 'https://vhil.stanford.edu/publications/learning';
const GO_PRO_HERO_URL = 'https://gopro.com/en/us/news/gopro-introduces-hero4-the-most-powerful-gopro-lineup-ever';
const GO_PRO_RIG_URL = 'https://www.thingiverse.com/thing:1257407';
const KOLOR_URL = 'https://panosociety.com/products/kolor-autopano-video-pro';
const CALYPSO_URL = 'https://web.stanford.edu/group/calypso/cgi-bin/';

const ImmersiveMedia = () => {
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
        <h1>Immersive Media: An Exploration of 360&deg; Video Experiences</h1>
        <img src={stanfordCardboardVRImageUrl} alt='Stanford Cardboard VR' width='40%'/>
        <br />
        <p>
          While I was a student at Stanford University, I produced an assortment of 360&deg; video experiences that are detailed below.
        </p>
      </div>
      <hr className="solid"></hr>
      <div className="section" id='rv-vr'>
        <h2>"RV VR": A Look into the Housing Crisis</h2>
        <div className='interaction-instructions'>
          Drag the video to rotate the viewpoint
        </div>
        <br></br>
        <div className="video-youtube">
          {/* Overlay div for click handling on 360 videos on mobile*/}
          {isMobile && (
            <a
              href={RVVR_VIDEO_URL}
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
          <iframe className="responsive-iframe" src={RVVR_VIDEO_EMBED_URL} title="RV VR" frameBorder="0" allow="autoplay; encrypted-media;" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
        </div>
        <p>
          "RV VR" is an immersive experience that allows viewers to see first-hand what transient life in a recreational vehicle is like in Silicon Valley. Published alongside this <a target='_blank' rel='noopener noreferrer' href={ARTICLE_URL}>Peninsula Press article</a>, the six-and-a-half-minute video harnesses immersive technology to create an experience that captures the realities of the Bay Area housing crisis in their rawest form.
        </p>
        <h3>Background</h3>
        <p>
          I took the course "<a target='_blank' rel='noopener noreferrer' href={COMM_CLASS_URL}>COMM 280</a>: Virtual Reality Journalism in the Public Sphere," where we formed groups of three to report on local issues, using 360&deg; video technology to engage audiences in a fresh and innovative way. Our goal was to shed light on these issues in a way that traditional journalism doesn't fully do justice. My group chose to report on the Bay Area housing crisis, believing that immersive media could help viewers better empathize with the cramped conditions in which many Bay Area RV community residents live.
        </p>
        <p>
          We discovered through our research to prepare this piece that local governments have struggled to balance public safety with providing support for these RV communities, implementing regulations like reduced parking times and pursuing limited affordable housing projects. Yet, there is no clear solution, and residents of RV communities, like our two interviewees featured in the video, face daily challenges of survival and stability. We hoped to bring their stories to light in a highly impactful yet ethical way.
        </p>
        <h3>Tools</h3>
        <img src={ricohImageUrl} alt='Ricoh Theta S' width='30%'/>
        <p>
          We used the <a target='_blank' rel='noopener noreferrer' href={RICOH_URL}>Ricoh Theta S</a> (discontinued) to film our mini-documentary. This camera featured two fish-eye lenses, one for each side of the device, to create full 360&deg; videos with minimal intervention. It also included remote recording and live previews through their app, enabling us to effortlessly capture moments and assess the quality of our takes in real time.
        </p>
        <p>
          Since the Ricoh Theta S automatically synced and stitched the video clips upon export, we were able to rely solely on Adobe's <a target='_blank' rel='noopener noreferrer' href={PREMIERE_PRO_URL}>Premiere Pro</a> video editing software for post-production.
        </p>
        <h3>Filming</h3>
        <p>
          Even though the Ricoh Theta S was easy to mount to a tripod and activate remotely, we had to carefully stage our scenes and plan our interview questions to minimize cuts that could be jarring to immersed viewers. In scenes where we conducted interviews, we stood around the camera to take advantage of the 360&deg; capture. To respect the privacy of our interviewees, we instructed them on how to set up the camera within their RVs, and we gave them talking points beforehand since we would be unable to interact with them from outside while a recording was in progress. Throughout our production, we checked in with our interviewees to get their feedback on content, and we received their consent to publish their stories.
        </p>
      </div>
      <hr className="solid"></hr>
      <div className="section" id='lucid-dreaming'>
        <h2>"Lucid Dreaming 360": A How-To Video</h2>
        <div className='interaction-instructions'>
          Drag the video to rotate the viewpoint
        </div>
        <br></br>
        <div className="video-youtube">
          {/* Overlay div for click handling on 360 videos on mobile*/}
          {isMobile && (
            <a
              href={LUCID_VIDEO_URL}
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
          <iframe className="responsive-iframe" src={LUCID_VIDEO_EMBED_URL} title="Lucid Dreaming 360" frameBorder="0" allow="autoplay; encrypted-media;" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
        </div>
        <p>
          "Lucid Dreaming 360" is a quick and interactive guide to lucid dreaming based on sleep study research. The 7-minute video, produced back in 2016, used at-the-time cutting-edge 360-video capture technology to create an immersive experience that used the principles of immersive learning to the practice of lucid dreaming.
        </p>
        <h3>Background</h3>
        <p>
          I took the <a target='_blank' rel='noopener noreferrer' href={SLEEP_AND_DREAMS_CLASS_URL}>"Sleep and Dreams"</a> course led by Dr. William Dement and Dr. Rafael Pelayo, both renowned pioneers in sleep medicine research. For our final project, we were tasked with creating an outreach video that creatively communicated some of the key concepts from the class. At the time, I had just begun working at <a target='_blank' rel='noopener noreferrer' href={VHIL_URL}>VHIL</a>, Stanford's virtual reality lab where I was learning about the effectiveness of <a target='_blank' rel='noopener noreferrer' href={VHIL_LEARNING_URL}>immersive learning</a> and how to operate 360&deg; video capture technology. I saw this Sleep Outreach project as a opportunity to experiment with immersive technology and produce an engaging yet informative lesson on lucid dreaming, a concept that has fascinated me ever since I was a kid. I also felt that the immersive nature of a 360&deg; video would beautifully complement the theme of dreaming, allowing viewers to fully experience the sensation of being inside a dream. 
        </p>
        <h3>Tools</h3>
        <img src={goProRigImageUrl} alt='GoPro custom 3D-printed rig' width='40%'/>
        <p>
          For the recording equipment, I mounted six <a target='_blank' rel='noopener noreferrer' href={GO_PRO_HERO_URL}>GoPro HERO4 cameras</a> together using a <a target='_blank' rel='noopener noreferrer' href={GO_PRO_RIG_URL}>custom 3D-printed rig</a>. This technology is obsolete in the wake of today's handleheld single-device 360&deg; cameras, but in 2016, we had to be crafty to take advantage of emerging immersive technology while maintaining high-resolution videos.
        </p>
        <img src={kolorSoftwareImageUrl} alt='Kolor Autopano Video Pro software' width='80%'/>
        <p>
          For the stitching software, I used <a target='_blank' rel='noopener noreferrer' href={KOLOR_URL}>Kolor Autopano Video Pro</a> (now deprecated). To prepare a ready-to-use 360&deg; video for YouTube, I manually synced the six individual video clips, cleaned up the seams between the overlapping GoPro fields of view, and exported and rendered the video in a supported 360&deg; format.
        </p>
        <h3>Filming</h3>
        <p>
          I was a member of <a target='_blank' rel='noopener noreferrer' href={CALYPSO_URL}>Cardinal Calypso</a>, Stanford's steel pan band, and they graciously volunteered to perform in my video. To avoid potential pitfalls with stitching together multiple scenes for the video, I wrote the script to be filmed in a single shot. While writing the script and staging the performers, I considered how we could use the 360&deg; field of view by arranging the performers in a circle around the camera, but I also made sure to limit distractions around the main speaker by staging peformers further back.
        </p>
      </div>
      <hr className="solid"></hr>
      <div className="section" id='reflections'>
        <h2>Reflections</h2>
        <ul>
          <li>
            <b>360&deg; video capture technology has come a long way!</b>
            <ul>
              <li>
                Back when I produced my "Lucid Dreaming 360" video, I had to rely on numerous technical hacks to make the video look good, and my patience was tested by fickle technology and lengthy export times. In just three years between producing "Lucid Dreaming 360" and "RV VR", 360&deg; filming technology had advanced significantly and facilitated wider public access.
              </li>
            </ul>
          </li>
          <li>
            <b>Great immersive storytelling comes with great responsibility.</b>
            <ul>
              <li>
                While we were enthusiastic about using an immersive medium to tell the "RV VR" story, we had to exercise careful judgment in selecting which parts of interviews to include and how much of our interviewees' lives to reveal. A home is a personal space, and given the privilege of sharing their stories, we needed to respect their agency and privacy.
              </li>
            </ul>
          </li>
          <li>
            <b>Content is key.</b>
            <ul>
              <li>
                Even with the latest technology, the content has to complement the medium for the immersive experience to be truly effective. I spent a lot of time revising the scripts for each video as I encountered new technical challenges in 360&deg; video production (such as lower-than-expected video resolution) that could prevent important material from standing out.
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </PageTemplate>
  );
};

export default ImmersiveMedia;