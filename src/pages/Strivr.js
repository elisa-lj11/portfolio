// src/pages/Strivr.js
import React, { useState } from 'react';
import PageTemplate from '../components/PageTemplate';

import immersiveLobbyThumbnailImageUrl from '../assets/images/strivr/immersive-lobby-thumbnail.png';
import immersiveLobbyVideoUrl from '../assets/images/strivr/immersive-lobby.mp4';
import oldAcclimationImageUrl from '../assets/images/strivr/old-acclimation.png';
import oldLobby1ImageUrl from '../assets/images/strivr/old-lobby-1.png';
import oldButtonImageUrl from '../assets/images/strivr/old-button-interaction.gif'
import experiencePrototypeImage1Url from '../assets/images/strivr/experience-prototype-1.png';
import experiencePrototypeImage2Url from '../assets/images/strivr/experience-prototype-2.png';
import experiencePrototypeImage3Url from '../assets/images/strivr/experience-prototype-3.png';
import newAcclimationEnvironmentImageUrl from '../assets/images/strivr/new-acclimation-environment.png';
import lobbyLayoutImageUrl from '../assets/images/strivr/lobby-layout.png';
import xLayoutImageUrl from '../assets/images/strivr/x-layout.png';
import wireframesImageUrl from '../assets/images/strivr/wireframes.png';
import figmaClickthroughImageUrl from '../assets/images/strivr/figma-clickthrough.png';
import newAcclimationImageUrl from '../assets/images/strivr/new-acclimation.png';
import lobbyMenuToolbarImageUrl from '../assets/images/strivr/lobby-menu-toolbar.png';
import lobbyTeleportHotspot1ImageUrl from '../assets/images/strivr/lobby-teleport-hotspot-1.png';
import lobbyTeleportHotspot2ImageUrl from '../assets/images/strivr/lobby-teleport-hotspot-2.png';
import lobbyTeleportHotspot3ImageUrl from '../assets/images/strivr/lobby-teleport-hotspot-3.png';
import lobbyTeleportHotspot4ImageUrl from '../assets/images/strivr/lobby-teleport-hotspot-4.png';

const STRIVR_URL = 'https://www.strivr.com/';
const STRIVR_REALTIME_DEMO_URL = 'https://app.strivr.com/demo';
const SCRIPTABLE_OBJECT_URL = 'https://docs.unity3d.com/Manual/class-ScriptableObject.html';
const STRIVR_DEMO_VIDEO_URL = 'https://www.youtube.com/embed/_ipX7W_qqlY?si=IoZpJrL_k_sMHjqM&mute=1&end=13';

const Strivr = () => {
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
        <h1>Strivr: "Immersive Lobby" Upgrade</h1>
        <div className="video" style={{ height: 'auto', width: '100%' }}>
          <video controls poster={immersiveLobbyThumbnailImageUrl} style={{ width: 'auto', height: '70vh' }}>
            <source src={immersiveLobbyVideoUrl} type="video/mp4" />
          </video>
        </div>
        <p style={{textAlign: 'center'}}>
          <a target='_blank' rel='noopener noreferrer' href={STRIVR_REALTIME_DEMO_URL}>Interactive "Immersive Lobby" demo</a>
        </p>
        <i>
          <p>A couple notes:</p>
          <ul>
            <li>
              I've included information on this page that Strivr has approved for public sharing, but certain details have been omitted due to their protection as intellectual property.
            </li>
            <li>
              Throughout the development of this feature, there were distinct divisions of labor between product, design, and engineering. While I had many opportunities to provide feedback at various stages of the iterative design process, I may not have "owned" certain aspects as an engineer. Therefore, I will use "we" to refer to the team's collective efforts and "I" to highlight my individual contributions.
            </li>
          </ul>
        </i>
        <p>
          As a software engineer on the Immersive Experiences team at <a target='_blank' rel='noopener noreferrer' href={STRIVR_URL}>Strivr</a>, an extended reality training platform for enterprises, I collaborated closely with designers to deliver best-in-class virtual reality experiences for workers from a diverse set of industries.
        </p>
        <p>
          One of our most ambitious projects was revamping the acclimation flow—the initial set of guiding screens users see when they first put on a VR headset and start the application—and the main menu, which serves as the home screen linking to all training programs, modules, and activities. Our goal was to create a more modern aesthetic that aligned with the immersive "landing lobby" home stage style, now standard in many VR applications.
        </p>
      </div>
      <hr className="solid"></hr>
      <div className="section" id='problem'>
        <h2>The Problem</h2>
        <p>
          At a high level, we wanted to cater our onboarding/landing experience towards our user base, which comprised workers who typically had little to no experience in VR but were excited to learn in VR as opposed to a run-of-the-mill monitor-based application.
        </p>
        <p>
           We noted three major UX issues to address in our old UI system:
        </p>
        <ol type="1">
          <li>
            <b>Floating text and images</b>
            <ul><li>
              Since these were not encapsulated in a neat container, our users lacked visual direction.
            </li></ul>
          </li>
          <li>
            <b>Monotone gray environment throughout the application</b>
            <ul><li>
              The gray environment was not particularly enticing for users who expected to have a more engaging learning experience by using VR.
              </li></ul>
          </li>
          <li>
            <b>Reactive tilt-shifting buttons</b>
            <ul><li>
              This "neat" effect actually served as more of a distraction than an addition to the user experience.
            </li></ul>
          </li>
        </ol>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', textAlign: 'center' }}>
          <figure>
            <img
              src={oldAcclimationImageUrl}
              alt="Old Acclimation"
              style={{ width: '70%', display: 'inline-block'}}
            />
            <figcaption>Floating text and images</figcaption>
          </figure>
        </div>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', textAlign: 'center' }}>
          <figure>
            <img
              src={oldLobby1ImageUrl}
              alt="Old Lobby"
              style={{ width: '70%', display: 'inline-block'}}
            />
            <figcaption>Gray environment throughout platform</figcaption>
          </figure>
        </div>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', textAlign: 'center' }}>
          <figure>
            <img
              src={oldButtonImageUrl}
              alt="Old Button Interaction"
              style={{ width: '60%', display: 'inline-block'}}
            />
            <figcaption>Reactive tilt-shifting buttons</figcaption>
          </figure>
        </div>
        <p>
          Extrapolating outward from these concrete issues, we broke our problem down into three "How might we?" (HMW) statements:
        </p>
        <ol type="1">
          <b>
            <li>
              How might we create an intuitive UI system for users with minimal VR experience?
            </li>
            <li>
              How might we create a clean and effective flow that leads users from the acclimation steps into the home lobby?
            </li>
            <li>
              How might we create an enticing 3D environment for our users?
            </li>
          </b>
        </ol>
        <p>
          From these three HMW statements we developed our problem statement:
        </p>
        <p>
          <b>
            Novice VR users often feel disoriented in a new and unfamiliar virtual environment. This inhibits their ability to feel immersion and makes it harder for them to engage with the training content on our platform.
          </b>
        </p>
      </div>
      <hr className="solid"></hr>
      <div className="section" id='research'>
        <h2>Research</h2>
        <p>
          Before we implemented an acclimation/lobby upgrade, we identified three tenets of a good VR user experience:
        </p>
        <ul>
          <li><b>Trust</b>
            <ul><li>
              We need to establish trust with users, especially if it's their first time using a headset. Ensuring they feel safe with both the device and our VR application will encourage them to return for more training.
            </li></ul>
          </li>
          <li><b>Control</b>
            <ul><li>
              After building trust with our users, we aim to give them a sense of agency, even in a virtual environment. When users feel confident navigating the platform, they're more likely to achieve strong learning outcomes from our training programs.
            </li></ul>
          </li>
          <li><b>Delight</b>
            <ul><li>
              Why stop at trust and control? We want our users to be excited about using our product. By creating a positive link between immersive learning and enjoyment, we can boost user retention and leave a lasting impression on how transformative VR learning technology can be.
            </li></ul>
          </li>
        </ul>
        <p>
          Basing our approach on these three tenets, we investigated the state of landing screen UI/UX in a competitive analysis of 
          similar VR applications with content libraries. Our takeaways from this market research were to implement the following:
        </p>
        <ul>
          <li>
            <b>Floating interactive tablet</b>
            <ul><li>
              Modern menu selection UI in virtual environments is accomplished by rendering an interactive tablet with buttons embedded within its display. This aligns with the real-world expectations of users navigating content on physical touch screens like phones or tablets. This would address our <b>HMW #1</b> and <b>HMW #2</b> statements from our problem assessment above.
            </li></ul>
          </li>
          <li>
            <b>Virtual "home" environment</b>
            <ul><li>
              We discovered that these comfortable virtual spaces—CG representations of a lobby with furniture and decorations—fostered a sense of ease in users who are new to virtual environments. This would address our <b>HMW #3</b> statement from above.
            </li></ul>
          </li>
        </ul>
        <p>
          With these discoveries in mind, we were ready to explore solutions to our problem.
        </p>
      </div>
      <hr className="solid"></hr>
      <div className="section" id='experience-prototypes'>
        <h2>Experience Prototypes</h2>
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', textAlign: 'center' }}>
            <figure>
              <img
                src={experiencePrototypeImage1Url}
                alt="Experience Prototype 1"
                style={{ width: '70%', display: 'inline-block', marginRight: '2%' }}
              />
              <figcaption>Experience Prototype 1: "Free Roam"</figcaption>
            </figure>
            <figure>
              <img
                src={experiencePrototypeImage2Url}
                alt="Experience Prototype 2"
                style={{ width: '70%', display: 'inline-block' }}
              />
              <figcaption>Experience Prototype 2: "Rotate"</figcaption>
            </figure>
          </div>
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', textAlign: 'center' }}>
            <figure>
              <img
                src={experiencePrototypeImage3Url}
                alt="Experience Prototype 3"
                style={{ width: '60%', display: 'inline-block' }}
              />
              <figcaption>Experience Prototype 3: "Teleport"</figcaption>
            </figure>
          </div>
          <p>
            We investigated three experience prototypes for the environment:
          </p>
          <ol type="1">
            <li>
              <b>Free roam</b>
              <ul><li>
                (+) Users can freely roam throughout the environment by translating across the virtual space with their controllers.
              </li></ul>
              <ul><li>
                (-) Encouraging virtual translation can inadvertently cause users to bump into real-world obstacles.
              </li></ul>
            </li>
            <li>
              <b>Rotate</b>
              <ul><li>
                (+) We surround users with content in a 360&deg; circle.
              </li></ul>
              <ul><li>
                (-) Forcing users to rotate their head beyond a 180&deg; field of view may force them to get up from their chair—they would likely be seated for the majority of our immersive experiences—to view all of the interactable content.
              </li></ul>
            </li>
            <li>
              <b>Teleport</b>
              <ul><li>
                (+) There is minimal barrier to entry for new VR users.
              </li></ul>
              <ul><li>
                (-) Freedom of movement is restricted for more advanced VR users.
              </li></ul>
            </li>
          </ol>
          <p>
            Between our options for our new virtual environment, we landed on our <b>Teleport</b> experience prototype. Our rationale was that our users often had little to no experience in VR, so we wanted to prioritize their safety and comfort while reducing friction as much as possible between users putting on the headset and launching their first activity. By not overwhelming users with too much freedom of movement, they would have more bandwidth to focus on the training content while still being able to enjoy the novelty of being in a virtual environment (<b>HMW #3</b>).
          </p>
          <p>
            This design also lent itself to our previous discovery that we should display related content in a single container (<b>HMWs #1 and #2</b>). Since our users would have interactivity constrained to their field of view, the content should be contained to a central "screen" placed in front of users.
        </p>
      </div>
      <hr className="solid"></hr>
      <div className="section" id='lofi-prototypes'>
        <h2>Lo-Fi Prototypes</h2>
        <p>
          We worked on two kinds of prototypes: one for the new UI and the one for the virtual environment.
        </p>
        <h3>New UI</h3>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', textAlign: 'center' }}>
          <figure>
            <img
              src={wireframesImageUrl}
              alt="Wireframes"
              style={{ width: '100%', display: 'inline-block' }}
            />
            <figcaption>UI wireframes</figcaption>
          </figure>
        </div>
        <p>
          We created wireframes of the UI components, which included a new set of buttons, placards, and menu containers to present learning content (<b>HMW #1</b>).
        </p>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', textAlign: 'center' }}>
          <figure>
            <img
              src={figmaClickthroughImageUrl}
              alt="Figma Clickthrough"
              style={{ width: '100%', display: 'inline-block' }}
            />
            <figcaption>Figma clickthrough</figcaption>
          </figure>
        </div>
        <p>
          We also created a Figma clickthrough to test the user flows during the acclimation scene, the home scene, the transitions between both scenes, and the transition into the learning content. We wanted to validate that our users could navigate through the acclimation and the lobby into an activity, all while only using the trigger button on their VR controller (<b>HMW #2</b>).
        </p>
        <h3>Virtual Environment</h3>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', textAlign: 'center' }}>
          <figure>
            <img
              src={newAcclimationEnvironmentImageUrl}
              alt="New Acclimation Environment"
              style={{ width: '50%', display: 'inline-block' }}
            />
            <figcaption>New acclimation environment</figcaption>
          </figure>
        </div>
        <p>
          We imagined our users entering the lobby from the acclimation flow, which would take place in a dark environment so that they are not distracted while receiving important usage instructions (<b>HMW #2</b>).
        </p>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', textAlign: 'center' }}>
          <figure>
            <img
              src={lobbyLayoutImageUrl}
              alt="Lobby Layout Prototype"
              style={{ width: '100%', display: 'inline-block' }}
            />
            <figcaption>Lobby layout prototype</figcaption>
          </figure>
        </div>
        <p>
          Our vision for the virtual lobby environment was a CG-designed home with an open lobby where users can interact with our main menu and content. 
        </p>
        <p>
          Once they completed the acclimation flow, they would enter a warm, inviting space where they could feel relaxed and ready to engage with immersive content. We designed the open layout of the lobby to create the illusion of being in a bigger space. Poorly designed VR can feel constricting, especially with heavy hardware and limited freedom of movement, so we wanted to alleviate that discomfort by bringing users into an open area (<b>HMW #3</b>).
        </p>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', textAlign: 'center' }}>
          <figure>
            <img
              src={xLayoutImageUrl}
              alt="X-shape for lobby"
              style={{ width: '50%', display: 'inline-block' }}
            />
            <figcaption>X-shape for lobby</figcaption>
          </figure>
        </div>
        <p>
          We also designed the layout of the virtual home to have clearly visible and distinct destinations (pinpointed by the pink dots in the "X" diagram from the lobby layout prototype). Each of these areas in the virtual home were designed with a unique ambiance to match the theme of the content that would be accessible to users when they teleport to that hotspot. This would enable us to categorize different information displays within the lobby while leaning into mental models that users already have of compartmentalization by location.
        </p>
        <p>
          After validating our prototypes, we were finally ready to implement the new acclimation and lobby.
        </p>
      </div>
      <hr className="solid"></hr>
      <div className="section" id='implementation'>
        <h2>Engineering Implementation</h2>
        <p>
          The UI upgrade invoked an extra layer of complexity in my work as an engineer: I wasn't just responsible for implementing the design of our new UI system as specified in the prototypes, but I was also tasked with building the UI so that designers could visit a "sandbox" scene in Unity and iterate on existing designs by modifying their sources directly. In essence, I needed to build modular UI components that could be stacked on top of each other to create new UI objects, and these UI components needed to have their visual properties exposed in a way that designers without Unity programming knowledge could easily tweak values to update the appearance of the UI objects.
        </p>
        <p>
          In order to expose a set of properties for a given UI component, I utilized the <a href={SCRIPTABLE_OBJECT_URL}>Scriptable Object</a> class provided by Unity to define a custom set of values to assign to the same set of property fields. By modularizing these property sets, I enabled designers to plug-and-chug a wide variety of aesthetic permutations into the same UI component templates, reducing their design iteration time to one-tenth of what it previously took to test different styles.
        </p>
        <p>
          Development of the modularized component scheme and sandbox proved to be a meta-design challenge within our pre-existing design problem. I needed to ensure the designs were optimized for both our VR users and our internal design team. By keeping our HMW statements in mind as I programmed the functionality for our new UI and environment, I successfully implemented our new acclimation and lobby.
        </p>
      </div>
      <hr className="solid"></hr>
      <div className="section" id='launch'>
        <h2>Feature Launch</h2>
        <div className="video-youtube">
          <iframe className="responsive-iframe" src={STRIVR_DEMO_VIDEO_URL} title="Strivr Lobby Demo" frameBorder="0" allow="autoplay; encrypted-media;" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
        </div>
        <br />
        <i style={{ display: 'flex', justifyContent: 'center' }}>New acclimation and lobby featured in Strivr's "Get Started" demo</i>
        <p>
          Once we finalized development of our new acclimation and lobby, we were able to answer our three HMW statements from before:
        </p>
        <ol>
        <li>
            We created an intuitive UI system for users with minimal VR experience by:
            <ul><li>
              <b>Developing a new UI system that is inspired by everyday real-world screen interactions.</b>
            </li></ul>
          </li>
          <li>
            We created a clean and effective flow that leads users from the acclimation steps into the home lobby by:
            <ul><b>
              <li>
                Leaning on our new UI to provide visual direction for users.
              </li>
              <li>
                Simplifying interactions to one button.
              </li>
              <li>
                Starting users in a minimally distracting environment then moving them to a brighter lobby environment when they are ready to learn.
              </li>
            </b></ul>
          </li>
          <li>
            We created an enticing 3D environment for our users by:
            <ul><li>
              <b>Designing an open-walled virtual lobby that uses environmental cues to direct the users' attention to important interactive elements.</b>
            </li></ul>
          </li>
        </ol>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', textAlign: 'center' }}>
          <figure>
            <img
              src={newAcclimationImageUrl}
              alt="New Acclimation"
              style={{ width: '100%', display: 'inline-block' }}
            />
            <figcaption>New acclimation with encapsulated text and images</figcaption>
          </figure>
        </div>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', textAlign: 'center' }}>
          <figure>
            <img
              src={lobbyMenuToolbarImageUrl}
              alt="Lobby menu and toolbar"
              style={{ width: '100%', display: 'inline-block' }}
            />
            <figcaption>Lobby with encapsulated content menu and toolbar</figcaption>
          </figure>
        </div>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', textAlign: 'center' }}>
          <figure>
            <img
              src={lobbyTeleportHotspot1ImageUrl}
              alt="Lobby teleport hotspot"
              style={{ width: '100%', display: 'inline-block' }}
            />
            <figcaption>Teleport hotspot to the left of the user</figcaption>
          </figure>
        </div>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', textAlign: 'center' }}>
          <figure>
            <img
              src={lobbyTeleportHotspot2ImageUrl}
              alt="Patio hot spot"
              style={{ width: '100%', display: 'inline-block' }}
            />
            <figcaption>Teleport hotspot on the patio</figcaption>
          </figure>
        </div>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', textAlign: 'center' }}>
          <figure>
            <img
              src={lobbyTeleportHotspot3ImageUrl}
              alt="Entryway hotspot"
              style={{ width: '100%', display: 'inline-block' }}
            />
            <figcaption>Teleport hotspot by the entryway</figcaption>
          </figure>
        </div>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', textAlign: 'center' }}>
          <figure>
            <img
              src={lobbyTeleportHotspot4ImageUrl}
              alt="Behind the user hotspot"
              style={{ width: '100%', display: 'inline-block' }}
            />
            <figcaption>Teleport hotspot behind the user</figcaption>
          </figure>
        </div>
        <p>
          In future iterations of our lobby, we would easily be able to instantiate new UI to provide users with even more content diversity in these teleport hotspots, thanks to our intentional design and component-based implementation.
        </p>
      </div>
      <hr className="solid"></hr>
      <div className="section" id='reflections'>
        <h2>Reflections</h2>
        <ul>
          <li>
            <b>Scope creep is real.</b>
            <ul>
              <li>
                As we made significant changes to the functionality and aesthetics of our home page, it was easy to get caught up in various small design tweaks and UX improvements that could be added to our original plans. We had to stay focused and avoid getting sidetracked by "What if we did this instead?" questions, especially with an MVP deadline looming.
              </li>
            </ul>
          </li>
          <li>
            <b>Documentation, documentation, documentation.</b>
            <ul>
              <li>
                For a project of this scale, it was crucial to keep our design and engineering decisions well-organized and easily accessible. With hundreds of different design and engineering specs to manage, we needed to improve efficiency by tracking where files were stored, identifying finalized versus living documents, and clarifying ownership of specific feature subsets.
              </li>
            </ul>
          </li>
          <li>
            <b>Step up beyond the role.</b>
            <ul>
              <li>
                As an engineer at a startup, I often had to take on responsibilities beyond my defined role. When I recognized potential issues with how features might function due to the technical constraints of our virtual environment, it was my responsibility to raise these concerns and suggest design alternatives. This not only contributed to a better final product but also allowed me to think like both a designer and an engineer.
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </PageTemplate>
  );
};

export default Strivr;