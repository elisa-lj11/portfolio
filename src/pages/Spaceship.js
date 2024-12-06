// src/pages/Spaceship.js
import React, { Suspense, useEffect, useRef, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { useErrorBoundary } from 'use-error-boundary';

import STLModel from '../components/STLModel';
import PageTemplate from '../components/PageTemplate';

import fullCommandSetupThumbnailImageUrl from '../assets/images/spaceship/full-command-setup-thumbnail.png';
import fullCommandSetupVideoUrl from '../assets/images/spaceship/full-command-setup.mp4';
import environmentIdeationImageUrl from '../assets/images/spaceship/environment-ideation.png';
import roomWireframeImageUrl from '../assets/images/spaceship/room-wireframe.png';
import roomInteractionsWireframeImageUrl from '../assets/images/spaceship/room-interactions-wireframe.png';
import commandDeckWireframeImageUrl from '../assets/images/spaceship/command-deck-wireframe.png';
import commandDeckConceptImageUrl from '../assets/images/spaceship/command-deck-concept.jpeg';
import unityYokeTestThumbnailImageUrl from '../assets/images/spaceship/unity-yoke-test.png';
import unityYokeTestVideoUrl from '../assets/images/spaceship/unity-yoke-test.mp4';
import commandDeckLabelsImageUrl from '../assets/images/spaceship/command-deck-labels.png';
import componentListImageUrl from '../assets/images/spaceship/component-list.png';
import commandDeckLowFiPrototypeImageUrl from '../assets/images/spaceship/command-deck-low-fi-prototype.jpg';
import commandDeckCadModelImageUrl from '../assets/images/spaceship/command-deck-cad-model.png';
import commandDeckLaserCutImageUrl from '../assets/images/spaceship/command-deck-laser-cut.jpeg';
import commandDeckAcrylicImageUrl from '../assets/images/spaceship/command-deck-acrylic.png';
import orbArduinoImageUrl from '../assets/images/spaceship/orb-arduino.jpg';
import orbDockImageUrl from '../assets/images/spaceship/orb-dock.jpg';
import solderImageUrl from '../assets/images/spaceship/solder.png';
import componentPlacementImageUrl from '../assets/images/spaceship/component-placement.png';
import teensyWiringImageUrl from '../assets/images/spaceship/teensy-wiring.png';
import lightStripThumbnailImageUrl from '../assets/images/spaceship/light-strip-thumbnail.png';
import lightStripVideoUrl from '../assets/images/spaceship/light-strip.mp4';
import roomSetupImageUrl from '../assets/images/spaceship/room-setup.jpg';
import fullCommandDeckImageUrl from '../assets/images/spaceship/full-command-deck.jpg';
import fullCommandDeckLitImageUrl from '../assets/images/spaceship/full-command-deck-lit.jpg';
import roomPlacardImageUrl from '../assets/images/spaceship/room-placard.png';
import flightInActionThumbnailImageUrl from '../assets/images/spaceship/flight-in-action-thumbnail.png';
import flightInActionVideoUrl from '../assets/images/spaceship/flight-in-action.mp4';

import commandDeckModelUrl from '../assets/models/sg-command-deck.stl';

const UNITY_RUNTHROUGH_EMBED_URL = 'https://www.youtube.com/embed/agH22ejwzK4?si=c_UQcTQsZM8kMmQ6';
const ALIEN_PLANET_ASSETS_URL = 'https://assetstore.unity.com/packages/3d/environments/sci-fi/alien-planet-fantasy-environment-jungle-plants-258132';
const LIMITLESS_ASSET_URL = 'https://assetstore.unity.com/packages/vfx/shaders/fullscreen-camera-effects/limitless-glitch-effects-148376';
const CONTROLLED_FLIGHT_ASSET_URL = 'https://assetstore.unity.com/packages/tools/physics/controlled-flight-177439';

const Spaceship = () => {
  const [refs, setRefs] = useState([]);
  const canvasRef = useRef();
  const { ErrorBoundary, didCatch, error } = useErrorBoundary();

  useEffect(() => {
    const handleContextLost = (event) => {
      event.preventDefault();
      console.warn('WebGL context lost');
      const canvas = canvasRef.current;
      if (canvas) {
        canvas.removeEventListener('webglcontextlost', handleContextLost);
      }
      window.location.reload();
    };
  
    const canvas = canvasRef.current;
    if (canvas) {
      canvas.addEventListener('webglcontextlost', handleContextLost);
    }
  
    return () => {
      if (canvas) {
        canvas.removeEventListener('webglcontextlost', handleContextLost);
      }
    };
  }, []);

  const cadModelFallbackImage = (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', textAlign: 'center' }}>
      <figure>
        <img
          src={commandDeckCadModelImageUrl}
          alt='Command deck CAD model'
          style={{ width: '100%', display: 'inline-block' }}
        />
        <figcaption>Command deck CAD model</figcaption>
      </figure>
    </div>
  );

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
        <h1>"Scavenger's Gain": From Hotel Room to Spaceship Adventure</h1>
        <div className="video" style={{ height: 'auto', width: '100%' }}>
          <video controls poster={fullCommandSetupThumbnailImageUrl} muted className="responsive-video">
            <source src={fullCommandSetupVideoUrl} type="video/mp4" />
          </video>
        </div>
        <p>
          "Scavenger's Gain" is a physically immersive experience that transports visitors from an ordinary hotel room to a magical alien planet they crash-landed on in their spaceship. The experience features a full command deck and an interactable Unity-based program that projects the "view" of the planet just outside the cockpit. The experience was developed over eight weeks and culminated in a weekend installation, attracting thousands of delighted visitors. The installation captivated our "scavengers," offering them an unforgettable adventure that seamlessly blended physical interaction with a vividly immersive alien world.
        </p>
        <p>
          I collaborated with one other teammate to design and implement the Unity program that powered the virtual viewport experience, and I contributed to the design and development of the physical command deck that fed input into the Unity program.
        </p>
      </div>
      <hr className="solid"></hr>
      <div className="section" id='background'>
        <h2>Background</h2>
        <p>
          Inspired by themes of climate change and sustainability, our team of 25 makers received a grant for a private event to create a surreal mixed-reality experience that could engage visitors while also encouraging them to consider the real-world impact of waste production on our environment. We were given a standard hotel room as a "blank canvas," and it was up to us to decide how we wanted to transform the space. Since we would only have access to the hotel room when the experience was ready to be installed, we had to carefully plan and prototype our ideas to ensure everything would fit and work as intended.
        </p>
      </div>
      <hr className="solid"></hr>
      <div className="section" id='ideation'>
        <h2>Ideation</h2>
        <img src={environmentIdeationImageUrl} alt='Environment ideation' width='80%'/>
        <p>
          In our experience storyboard sessions, we brainstormed ideas that could incorporate the sustainability theme while also providing a fun and memorable experience for visitors. We landed on the concept of an alien planet expedition since it would allow us to create a visually stunning environment that starkly contrasts with a traditional hotel room, repurpose old junk to appear "extraterrestrial," and, on a more personal note for the lead artist and crew, propel our vision for the sci-fi future as a place where queer and BIPOC folx can express themselves freely and power innovation. We crafted the following story as the backdrop to the experience:
        </p>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <i style={{ marginLeft: '10%', marginRight: '10%', textAlign: 'justify' }}>
            You are an intergalactic scavenger who has crash-landed on a toxic alien planet. Your spaceship is low on fuel, and you need to alchemize the planet's (and your own) toxicity into energy that will power your spaceship to return home.
          </i>
        </div>
        <p>
          Since the hotel room we were assigned was quite large, we divided the room into nine different sections (see wireframes below), each with its own "toxicity alchemization" tasks.
        </p>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', textAlign: 'center' }}>
          <figure>
            <img
              src={roomWireframeImageUrl}
              alt='Hotel room blueprint'
              style={{ width: '90%', display: 'inline-block' }}
            />
            <figcaption>Hotel room blueprint</figcaption>
          </figure>
        </div>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', textAlign: 'center' }}>
          <figure>
            <img
              src={roomInteractionsWireframeImageUrl}
              alt='Interactions wireframe'
              style={{ width: '75%', display: 'inline-block' }}
            />
            <figcaption>Interactions wireframe</figcaption>
          </figure>
        </div>
        <p>
          We then split into smaller teams to focus on each section, with the command deck (team of 7) and Unity program (team of 2) being the two areas I worked on.
        </p>
        <h3>Command Deck Ideation</h3>
        <p>
          We planned to use the living room as the primary space for our spaceship experience, as it was the largest and most open area that would permit multiple visitors to interact concurrently with our command deck. Then, we identified the components that our spaceship would need to operate—a control console, an inner hull, a backdrop material, and a projector—and mapped them to the physical space of the living room.
        </p>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', textAlign: 'center' }}>
          <figure>
            <img
              src={commandDeckWireframeImageUrl}
              alt='Command deck wireframe'
              style={{ width: '90%', display: 'inline-block' }}
            />
            <figcaption>Command deck wireframe</figcaption>
          </figure>
        </div>
        <p>
          We then sketched out the command deck, which would be the primary interface for visitors to interact with our spaceship. The command deck would feature a plane yoke to control the spaceship's pitch and roll, embedded screens to display the ship's status, a projector to display the virtual alien planet that would eventually be rendered by the Unity program, and a series of buttons to change the appearance of the alien environment. We designed the command deck to wrap slightly around the pilot so that multiple visitors could be in the cockpit at once and introduce an element of chaos by smashing random buttons to see what would happen.
        </p>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', textAlign: 'center' }}>
          <figure>
            <img
              src={commandDeckConceptImageUrl}
              alt='Command deck wireframe'
              style={{ width: '90%', display: 'inline-block' }}
            />
            <figcaption>Command deck concept</figcaption>
          </figure>
        </div>
        <h3>Unity Program Ideation</h3>
        <p>
          Since we expected to have hundreds of visitors pass through our room each day, we decided to constrain the spaceship-flying experience to around two minutes. We also wanted to promote the storyline that we needed to escape the planet, so we broke the flying experience into four stages:
        </p>
        <ol>
          <li>
            <b>Pre-Launch</b>
            <ul>
              <li>
                The spaceship is grounded on the alien planet and awaiting launch.
              </li>
            </ul>
          </li>
          <li>
            <b>Launch</b>
            <ul>
              <li>
                The spaceship enters autopilot mode and takes off (10 seconds).
              </li>
            </ul>
          </li>
          <li>
            <b>Manual Flight</b>
            <ul>
              <li>
                The spaceship hits a maximum altitude before visitors encounter a "Low on Fuel" warning then starts descending slowly, and the pilot must manually fly the spaceship to crash-land (2 minutes).
              </li>
            </ul>
          </li>
          <li>
            <b>Crash</b>
            <ul>
              <li>
                The spaceship crashes after the time-out, and the experience restarts at the "Pre-Launch" stage (5 seconds).
              </li>
            </ul>
          </li>
        </ol>
        <p>
          We identified our MVP for the Unity program as a looping spaceflight experience that would receive input from an externally connected plane yoke. We also came up with a list of cool environmental effects that we could add to the program: 
        </p>
        <ul>
          <li>
            Weather manipulation (e.g., lightning, ocean turbulence, etc.)
          </li>
          <li>
            Daylight control/sun positioning
          </li>
          <li>
            Terrain alterations (e.g., removing mountains, plants, etc.)
          </li>
          <li>
            Visual glitch effect overlays
          </li>
          <li>
            Trash dumps from the sky
          </li>
          <li>
            Sound effects
          </li>
        </ul>
      </div>
      <hr className="solid"></hr>
      <div className="section" id='unity-dev'>
        <h2>Unity Development</h2>
        <div className="video-youtube">
          <iframe className="responsive-iframe" src={UNITY_RUNTHROUGH_EMBED_URL} title="Unity Flight Experience" frameBorder="0" allow="autoplay; encrypted-media;" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
        </div>
        <br />
        <i style={{ display: 'flex', justifyContent: 'center' }}>
          Unity flight experience run-through
        </i>
        <p>
          We purchased the <a target='_blank' rel='noopener noreferrer' href={ALIEN_PLANET_ASSETS_URL}>"Alien Planet" asset bundle</a> from the Unity Asset Store. The bundle included the alien planet's environment, terrain, plants, mountains, and lighting. Because many properties of the environment were easily accessible via script (e.g., the sun's position, groups of objects, colors, etc.), we could map these customizable components to the buttons on the command deck, allowing visitors to change the environment in real time.
        </p>
        <p>
          To add visual glitch effects to the experience, we used the <a target='_blank' rel='noopener noreferrer' href={LIMITLESS_ASSET_URL}>"Limitless Glitch Effects" asset</a>, which provided us with dozens of post-processing effects that we could apply to the rendered scene.
        </p>
        <p>
          To power the "Autopilot Launch" stage of the experience, we used the <a target='_blank' rel='noopener noreferrer' href={CONTROLLED_FLIGHT_ASSET_URL}>"Controlled Flight" asset</a> which provided us with guided missile scripts that we applied to our in-scene camera to guide it along custom-specified waypoints that spiral upwards into the sky.
        </p>
        <p>
          To enable "Manual Flight" mode, we used a custom script to translate input from the plane yoke into pitch and roll values that we applied to the camera. We simulated the spaceship's descent by applying a constant downward speed to the camera until the flight timed out.
        </p>
        <div className="video" style={{ height: 'auto', width: '100%' }}>
          <video controls poster={unityYokeTestThumbnailImageUrl} muted className="responsive-video">
            <source src={unityYokeTestVideoUrl} type="video/mp4" />
          </video>
        </div>
        <p>
          We also used Unity's Input System to process button and potentiometer/slider inputs from the command deck and trigger the various environmental effects we had planned. For testing purposes, we mapped the flight controls and effects to a keyboard and mouse, which allowed us to quickly iterate on the experience while the physical components were still being built.
        </p>
        <p>
          We controlled the sequence of stages through a custom script that transitioned between the "Pre-Launch," "Launch," "Manual Flight," and "Crash" stages based on user input and experience timing. If visitors drop below a certain altitude during the "Manual Flight" stage, the experience will automatically transition to the "Crash" stage (this is possible if they accidentally engage the "Gravity" toggle switch).
        </p>
        <p>
          We created a custom text overlay that cued visitors to the current stage of the experience. Additionally, we added a jungle-like background soundtrack and triggerable sound effects to enhance immersion.
        </p>
        <p>
          Once we were ready to test the Unity program with the physical command deck, we built it into an executable application and ran it on a desktop connected to the projector and the command deck.
        </p>
      </div>
      <hr className="solid"></hr>
      <div className="section" id='deck-prototypes'>
        <h2>Command Deck Prototypes</h2>
        <h3>Low-Fidelity Prototype</h3>
        <p>
          We took our initial command deck sketch and modified it to include various components we wanted to incorporate into the final design. Below is a partial list of components that we wanted to match to the diagram of the command deck. We picked out components that we thought would be fun to interact with and straightforward to process through a Teensy microcontroller or MIDI input.   
        </p>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', textAlign: 'center' }}>
          <figure>
            <img
              src={commandDeckLabelsImageUrl}
              alt='Labeled command deck'
              style={{ width: '100%', display: 'inline-block' }}
            />
            <figcaption>Command deck diagram</figcaption>
          </figure>
        </div>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', textAlign: 'center' }}>
          <figure>
            <img
              src={componentListImageUrl}
              alt='Component list'
              style={{ width: '100%', display: 'inline-block' }}
            />
            <figcaption>Partial list of components to match to labels</figcaption>
          </figure>
        </div>
        <p>
          From this schematic, we built a low-fidelity prototype of the command deck with cardboard. This prototype allowed us to test the deck's ergonomics and adjust the design before moving on to the high-fidelity prototype.
        </p>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', textAlign: 'center' }}>
          <figure>
            <img
              src={commandDeckLowFiPrototypeImageUrl}
              alt='Command deck low-fidelity prototype'
              style={{ width: '100%', display: 'inline-block' }}
            />
            <figcaption>Command deck low-fidelity prototype</figcaption>
          </figure>
        </div>
        <h3>High-Fidelity Prototype</h3>
        <p>
          Once we verified our low-fidelity prototype could accommodate all of our components, we moved on to building the high-fidelity prototype. We modeled the command deck in Fusion 360, laser-cut the panels out of half-inch plywood, and surfaced the deck with a white vinyl wrap and laser-cut acrylic.
        </p>
        {didCatch ? (
          cadModelFallbackImage
        ) : (
          <>
            <div className='interaction-instructions'>
              Drag and zoom to interact with the model below
            </div>
            <div style={{ border: '2px solid #706EF5', padding: '10px', borderRadius: '5px', margin: '20px 0' }}>
              <ErrorBoundary>
                <Canvas 
                  ref={canvasRef}
                  camera={{
                    position: [5, 5, 5], // Change these values to better see your model
                    fov: 50, // Field of view (adjust as necessary)
                  }}
                  style={{ height: '50vh', width: '100%' }}
                  gl={{ antialias: true, powerPreference: 'high-performance' }}
                  fallback={cadModelFallbackImage}
                  onCreated={({ gl }) => {
                    gl.setPixelRatio(window.devicePixelRatio);

                    return () => {
                      // Dispose the scene and resources when the Canvas unmounts
                      scene.traverse((obj) => {
                        if (obj.geometry) obj.geometry.dispose();
                        if (obj.material) {
                          if (Array.isArray(obj.material)) {
                            obj.material.forEach((mat) => mat.dispose());
                          } else {
                            obj.material.dispose();
                          }
                        }
                      });
                      gl.dispose();
                    };
                  }}
                >
                  {/* Ambient light provides soft global illumination */}
                  <ambientLight intensity={1} />
                  
                  {/* Directional light to cast shadows */}
                  <directionalLight position={[3, 5, 0]} intensity={1} />
                  
                  {/* Load model */}
                  <Suspense fallback={null}>
                    <STLModel 
                      modelPath={commandDeckModelUrl} 
                      scale={[1, 1, 1]} 
                      rotation={[0, -0.75, 2]}
                    />
                  </Suspense>
                  {/* OrbitControls to enable zoom and rotation */}
                  <OrbitControls />
                </Canvas>
              </ErrorBoundary>
            </div>
          </>
        )}
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', textAlign: 'center' }}>
          <figure>
            <img
              src={commandDeckLaserCutImageUrl}
              alt='Laser-cut command deck based on model'
              style={{ width: '100%', display: 'inline-block' }}
            />
            <figcaption>Laser-cut command deck based on model</figcaption>
          </figure>
        </div>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', textAlign: 'center' }}>
          <figure>
            <img
              src={commandDeckAcrylicImageUrl}
              alt='Acrylic surface on the command deck'
              style={{ width: '100%', display: 'inline-block' }}
            />
            <figcaption>Vinyl wrap and acrylic surface on the command deck</figcaption>
          </figure>
        </div>
        <p>
          When the command deck frame was assembled, we placed the components into their corresponding slots. We used the following components in the final design:
        </p>
        <ul>
          <li>
            Plane yoke
          </li>
          <li>
            MIDI controller
          </li>
          <li>
            Toggle switches
          </li>
          <li>
            Sliders
          </li>
          <li>
            Buttons
          </li>
          <li>
            Dials
          </li>
          <li>
            Jog wheels
          </li>
          <li>
            Lever
          </li>
          <li>
            NeoTrellis
          </li>
          <li>
            Programmable LED strips
          </li>
          <li>
            Custom 3D-printed orb and orb dock
          </li>
        </ul>
        <p>
          The orb dock component was custom-designed to initiate the spaceship's launch sequence when an orb was placed in the dock. The orb and the dock were 3D-printed and fitted with Arduinos, NeoPixel LED rings, and near-field communication transmitters.
        </p>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', textAlign: 'center' }}>
          <figure>
            <img
              src={orbArduinoImageUrl}
              alt='Orb with Arduinos'
              style={{ width: '90%', display: 'inline-block', marginRight: '2%' }}
            />
            <figcaption>Orb with Arduinos</figcaption>
          </figure>
          <figure>
            <img
              src={orbDockImageUrl}
              alt='Orb with dock'
              style={{ width: '90%', display: 'inline-block' }}
            />
            <figcaption>Orb with dock</figcaption>
          </figure>
        </div>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', textAlign: 'center' }}>
          <figure>
            <img
              src={solderImageUrl}
              alt='Soldering components together'
              style={{ width: '40%', display: 'inline-block' }}
            />
            <figcaption>Soldering components together</figcaption>
          </figure>
        </div>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', textAlign: 'center' }}>
          <figure>
            <img
              src={componentPlacementImageUrl}
              alt='Component placement'
              style={{ width: '100%', display: 'inline-block' }}
            />
            <figcaption>Component placement</figcaption>
          </figure>
        </div>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', textAlign: 'center' }}>
          <figure>
            <img
              src={teensyWiringImageUrl}
              alt='Teensy wiring'
              style={{ width: '100%', display: 'inline-block' }}
            />
            <figcaption>Teensy wiring</figcaption>
          </figure>
        </div>
        <p>
          We powered the components using a multiplexer hooked into a 5-volt power supply. We processed the analog input through three Teensy microcontrollers (one for each command deck section) connected to the desktop running the Unity program. Some components (e.g., LED strips, NeoTrellis, and sliders) were directly processed by the Teensy, which had Arduino code flashed onto it to handle more of the simple input processing.
        </p>
        <div className="video" style={{ height: 'auto', width: '100%' }}>
          <video controls poster={lightStripThumbnailImageUrl} muted className="responsive-video">
            <source src={lightStripVideoUrl} type="video/mp4" />
          </video>
        </div>
        <br />
        <i style={{ display: 'flex', justifyContent: 'center' }}>Light strip controlled by sliders</i>
        <p>
          For the components that would be processed within the Unity program, such as the jog wheels, we converted the analog signals into digital signals through the Teensy, then we passed those signals along to Unity as human interface device (HID) inputs (e.g., keyboard, mouse, and joystick). We initially wanted to set up these components to send MIDI signals. Due to unexpected platform compatibility issues and time constraints, we opted for the alternative HID input method via USB. The Unity program had mappings for each Teensy input, which allowed us to trigger the various environmental effects within the experience.
        </p>
      </div>
      <hr className="solid"></hr>
      <div className="section" id='installation'>
        <h2>Installation</h2>
        <p>
          The setup of "Scavenger's Gain" took place over three days. The experience remained open for three more days, during which we had a constant stream of visitors eager to try out the spaceship experience among other "toxicity alchemization" activities.
        </p>
        <div className="video" style={{ height: 'auto', width: '100%' }}>
          <video controls poster={flightInActionThumbnailImageUrl} className="responsive-video">
            <source src={flightInActionVideoUrl} type="video/mp4" />
          </video>
        </div>
        <br />
        <i style={{ display: 'flex', justifyContent: 'center' }}>Flight in action!</i>
        <br />
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', textAlign: 'center' }}>
          <figure>
            <img
              src={roomSetupImageUrl}
              alt='Full experience setup'
              style={{ width: '100%', display: 'inline-block' }}
            />
            <figcaption>Full experience setup</figcaption>
          </figure>
        </div>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', textAlign: 'center' }}>
          <figure>
            <img
              src={fullCommandDeckImageUrl}
              alt='Full command deck setup'
              style={{ width: '100%', display: 'inline-block' }}
            />
            <figcaption>Full command deck setup</figcaption>
          </figure>
        </div>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', textAlign: 'center' }}>
          <figure>
            <img
              src={fullCommandDeckLitImageUrl}
              alt='Full command deck setup (low lighting)'
              style={{ width: '100%', display: 'inline-block' }}
            />
            <figcaption>Full command deck setup (low lighting)</figcaption>
          </figure>
        </div>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', textAlign: 'center' }}>
          <figure>
            <img
              src={roomPlacardImageUrl}
              alt='Experience placard'
              style={{ width: '90%', display: 'inline-block' }}
            />
            <figcaption>Experience placard</figcaption>
          </figure>
        </div>
      </div>
      <hr className="solid"></hr>
      <div className="section" id='reflections'>
        <h2>Reflections</h2>
        <ul>
          <li>
            <b>Aim for the moon, settle for the skies.</b>
            <ul>
              <li>
                We were extremely ambitious with our project, so it was essential that we prioritized our MVP features, such as the flying functionality within Unity, and then built out additional features as time allowed. By focusing on the core experience first, we ensured we would have a fun, working experience even if we ran out of time to implement all of our stretch goals.
              </li>
            </ul>
          </li>
          <li>
            <b>Improvisation is part of the creative process.</b>
            <ul>
              <li>
                We stumbled over many roadblocks during the creation of this experience, such as platform compatibility issues, component failures, and model measurement discrepancies. By being flexible and keeping morale high, we could quickly pivot and find alternative solutions to our problems (e.g., using keyboard inputs instead of MIDI inputs, hot-gluing sensors onto jog wheels, and drilling our laser-cut plywood). This allowed us to stay on track and deliver a successful experience.
              </li>
            </ul>
          </li>
          <li>
            <b>Experimenting is half the fun.</b>
            <ul>
              <li>
                One of the best parts of working on a huge art project with a large team is that I got to experiment with so many different technologies that I had not worked with professionally, such as the hardware components used in the command deck. I learned a lot from my teammates who all brought different areas of expertise to the project, and I was grateful to contribute my knowledge as a resident Unity expert.
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </PageTemplate>
  );
};

export default Spaceship;