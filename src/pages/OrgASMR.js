// src/pages/OrgASMR.js
import React, { useState, Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

import PageTemplate from '../components/PageTemplate';
import STLModel from '../components/STLModel'; // Import the STL model component

import firstSketchImageUrl from '../assets/images/orgasmr/first-sketch.jpg';
import protoboard1ImageUrl from '../assets/images/orgasmr/protoboard-1.jpg';
import protoboard1VideoUrl from '../assets/images/orgasmr/protoboard-1.mp4';
import protoboard2ImageUrl from '../assets/images/orgasmr/protoboard-2.jpg';
import printImageUrl from '../assets/images/orgasmr/print.jpg';
import topBottomImageUrl from '../assets/images/orgasmr/top-bottom.jpg';
import solidworksWireframeImageUrl from '../assets/images/orgasmr/solidworks-wireframe.png';
import solidworksRingsImageUrl from '../assets/images/orgasmr/solidworks-rings.png';
import illustratorRingImageUrl from '../assets/images/orgasmr/illustrator-ring.png';
import laserCutterImageUrl from '../assets/images/orgasmr/laser-cutter.jpg';
import ringsImageUrl from '../assets/images/orgasmr/rings.jpg';
import ringsInHandleImageUrl from '../assets/images/orgasmr/rings-in-handle.jpg';
import solderingImageUrl from '../assets/images/orgasmr/soldering.jpg';
import finalProtoboardImageUrl from '../assets/images/orgasmr/final-protoboard.jpg';
import almostAssembledImageUrl from '../assets/images/orgasmr/almost-assembled.jpg';
import fullyAssembledImageUrl from '../assets/images/orgasmr/fully-assembled.jpg';
import finalFormImageUrl from '../assets/images/orgasmr/final-form.jpg';

import handleModelUrl from '../assets/models/orgasmr-handle.stl';

const ORGASMR_DEMO_EMBED_URL = 'https://www.youtube.com/embed/6NVlh2iXAhg?si=TpFMYwpbAOgr7bNq';
const ORGASMR_DEMO_SHOWCASE_URL = 'https://youtu.be/6NVlh2iXAhg?si=H1KOo8NMJasDySEF&t=76'
const CCRMA_CLASS_URL = 'https://ccrma.stanford.edu/courses/250a-winter-2019/';
const ARDUINO_URL = 'https://www.arduino.cc/en/about';
const FAUST_URL = 'https://faust.grame.fr/';
const ARDUINO_SCRIPT_URL = 'https://github.com/elisa-lj11/orgASMR/blob/main/orgASMR.ino';
const FAUST_SCRIPT_URL = 'https://github.com/elisa-lj11/orgASMR/blob/main/orgASMR.dsp';
const TEENSY_URL = 'https://www.adafruit.com/product/2756';
const SOLIDWORKS_URL = 'https://www.solidworks.com/';

const OrgASMR = () => {
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
        <h1>"orgASMR": A Head-Scratching Musical Interface</h1>
        <div className="video-youtube">
          <iframe className="responsive-iframe" src={ORGASMR_DEMO_EMBED_URL} title="orgASMR Demo" frameBorder="0" allow="autoplay; encrypted-media;" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
        </div>
        <br></br>
        <p>
          An adaptation of the popular "Head Scratcher," the "orgASMR" takes ASMR (autonomous sensory meridian response) to the next level. It produces trance-like audio effects by detecting the amount of flex from the head scratcher's legs and the orientation of the handle. It also includes volume control and an on/off button. Combining the simplicity of chord progression with the intricacy of movement, the orgASMR is sure to blow your mind.
        </p>
      </div>
      <hr className="solid"></hr>
      <div className="section" id='background'>
        <h2>Background</h2>
        <p>
          During my Stanford undergrad, I took "<a target='_blank' rel='noopener noreferrer' href={CCRMA_CLASS_URL}>MUSIC 250A</a>: Physical Interaction Design for Music." In this class, we explored how we can physically interact with real-time electronic sound by using and designing sensors, circuits, embedded computers, communication protocols and sound synthesis. For my final project, I designed and built a hybrid musical instrument that integrated both acoustic and electronic components, which I showcased during a final performance alongside other student inventions. I implemented the "orgASMR," which I will describe in more detail in the sections below.
        </p>
      </div>
      <hr className="solid"></hr>
      <div className="section" id='ideation'>
        <h2>Ideation</h2>
        <img src={firstSketchImageUrl} alt='Sketch of orgASMR' width='80%'/>
        <p>
          I set out to create an instrument that experimented with multiple sensory modalities: sound, kinesthesia, and tactile feedback. I was intrigued by the versatility of the classic "head massager" contraption, which not only required users to move their arm in three dimensions to simulate a head-scratching motion, but also featured flexible arms that adjusted to the shape of the user's head. This added an additional layer of control to modulate the sound produced by the device.
        </p>
        <p>
          To achieve this 4D sound system, I planned to design a custom handle that would attach to the head massager. It would incorporate an accelerometer to capture rotational movement, and a flex sensor (previously sketched as a piezoelectric sensor) to convert physical force into input. A USB-based <a target='_blank' rel='noopener noreferrer' href={TEENSY_URL}>Teensy</a> microcontroller would be embedded in the handle, with the entire setup connected to a computer running a script to process the input and generate sound.
        </p>
        <p>
          In essence, I wanted to produce a device that both gives and receives.
        </p>
      </div>
      <hr className="solid"></hr>
      <div className="section" id='scripting'>
        <h2>Scripting</h2>
        <p>
          I programmed in C++ with <a target='_blank' rel='noopener noreferrer' href={ARDUINO_URL}>Arduino</a>, a programmable, open-source electronics platform that allows users to interact with external hardware devices, to handle sensor feedback from the Teensy microcontroller. I expanded input from the flex sensor and gyroscope/accelerometer to an on/off button and a volume dial to allow the user to adjust the volume (or turn off the darn thing) as desired.
        </p>
        <p>
          Though the Arduino script handled the low-level input processing, I needed another script to add a musical "touch" to the raw input from the Teensy. I used <a target='_blank' rel='noopener noreferrer' href={FAUST_URL}>FAUST</a>, a functional programming language for sound synthesis and audio processing, to script a processing layer that converted the Arduino output into sounds. My FAUST script processed the following four inputs:
        </p>
        <ol>
          <li>
            <b>Accelerometer:</b> The accelerometer produced eight different orientations based on the sensor's rotation. Using music theory to structure chords with three or four notes, my script mapped each orientation to a specific chord type:
            <ul>
              <li>
                Major
              </li>
              <li>
                Minor
              </li>
              <li>
                Diminished
              </li>
              <li>
                Major 7
              </li>
              <li>
                Minor 7
              </li>
              <li>
                Dominant 7
              </li>
              <li>
                Suspended
              </li>
              <li>
                Augmented
              </li>
            </ul>
          </li>
          <li>
            <b>Flex sensor:</b> The sensor's degree of flex was translated into a frequency, with greater flex producing a higher frequency. This allowed the orgASMR to shift up and down musical scales.
          </li>
          <li>
            <b>Potentiometer:</b> Also referred to as the "dial button," the potentiometer output was converted to "gain," which we perceived as the sound volume.
          </li>
          <li>
            <b>Button:</b> The button's output functioned as the sound "gate," controlling the on and off state of the sound.
          </li>
        </ol>
        <span>Full orgASMR scripts below:</span>
        <ul>
          <li>
            <a target='_blank' rel='noopener noreferrer' href={ARDUINO_SCRIPT_URL}>Arduino script</a>
          </li>
          <li>
            <a target='_blank' rel='noopener noreferrer' href={FAUST_SCRIPT_URL}>Faust script</a>
          </li>
        </ul>
        <p>
          Scripting was developed in tandem with wiring since they were both worked on concurrently in order to incrementally test progress on the orgASMR.
        </p>
      </div>
      <hr className="solid"></hr>
      <div className="section" id='wiring'>
        <h2>Wiring</h2>
        <img src={protoboard1ImageUrl} alt='First protoboard iteration' width='40%'/>
        <p>
          I used a protoboard to wire all of the sensors to the Teensy. The video below demonstrates the chord progressions varying with the Teensy's orientation and the frequency changing with the flex sensor movement.
        </p>
        <div className="video-vertical" style={{ height: '60%' }}>
          <video controls>
            <source src={protoboard1VideoUrl} type="video/mp4" />
          </video>
        </div>
        <p>
          Once the orgASMR interactions were thoroughly tested with my first prototype, I moved the components to a smaller protoboard that would fit inside of the custom handle that I would need to make.
        </p>
        <img src={protoboard2ImageUrl} alt='Second protoboard iteration' width='40%'/>
      </div>
      <hr className="solid"></hr>
      <div className="section" id='modeling'>
        <h2>Modeling</h2>
        <p>
          I aimed to design a sleek handle that would both conceal the functional but less aesthetically pleasing components of the orgASMR and complement the instrument's unique concept. To achieve this, I used <a target='_blank' rel='noopener noreferrer' href={SOLIDWORKS_URL}>SolidWorks</a>, a 3D CAD design software, to design the handle. The handle is divided into top and bottom sections, allowing for easy installation of the protoboard, sensors, and Teensy inside.
        </p>
        <p>
          <b>Interact with the model below.</b>
        </p>
        <Canvas 
          camera={{
            position: [5, 5, 5], // Change these values to better see your model
            fov: 50, // Field of view (adjust as necessary)
          }}
          style={{ height: '75vh', width: '100%' }}
          onCreated={({ gl }) => {
            return () => {
              // Dispose WebGL context when Canvas unmounts
              gl.dispose();
            };
          }}
        >
          {/* Ambient light provides soft global illumination */}
          <ambientLight intensity={1} />
          
          {/* Directional light to cast shadows */}
          <directionalLight position={[-5, 5, 5]} intensity={1} />
          
          {/* Load model with a fallback */}
          <Suspense fallback={null}>
            <STLModel 
              modelPath={handleModelUrl} 
              scale={[0.0275, 0.0275, 0.0275]} 
              rotation={[2, 3, 0.5]} 
            />
          </Suspense>
          
          {/* OrbitControls to enable zoom and rotation */}
          <OrbitControls />
        </Canvas>
        <p>
          The SolidWorks design was realized using a 3D printer.
        </p>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', textAlign: 'center' }}>
          <figure>
              <img
              src={printImageUrl}
              alt='3D print in progress'
              style={{ width: '90%', display: 'inline-block', marginRight: '2%' }}
            />
            <figcaption>3D print in progress</figcaption>
          </figure>
          <figure>
            <img
              src={topBottomImageUrl}
              alt='Top and bottom handle parts'
              style={{ width: '90%', display: 'inline-block' }}
            />
            <figcaption>Top and bottom handle parts</figcaption>
          </figure>
        </div>
        <p>
          In addition to the custom 3D-printed handle, I added ring inserts to the top section to securely fasten the head scratcher. Using the SolidWorks model dimensions, I designed two rings in Adobe Illustrator and then used a laser cutter to precisely cut them from a resin board.
        </p>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', textAlign: 'center' }}>
          <figure>
            <img
              src={solidworksWireframeImageUrl}
              alt='SolidWorks wireframe'
              style={{ width: '90%', display: 'inline-block', marginRight: '2%' }}
            />
            <figcaption>SolidWorks wireframe</figcaption>
          </figure>
          <figure>
            <img
              src={solidworksRingsImageUrl}
              alt='Rings in wireframe'
              style={{ width: '90%', display: 'inline-block' }}
            />
            <figcaption>Rings in wireframe</figcaption>
          </figure>
        </div>
        <br></br>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', textAlign: 'center' }}>
          <figure>
            <img
              src={illustratorRingImageUrl}
              alt='Illustrator ring design'
              style={{ width: '70%', display: 'inline-block' }}
            />
            <figcaption>Illustrator ring design</figcaption>
          </figure>
        </div>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', textAlign: 'center' }}>
          <figure>
            <img
              src={laserCutterImageUrl}
              alt='Laser cutter in progress'
              style={{ width: '90%', display: 'inline-block', marginRight: '2%' }}
            />
            <figcaption>Laser cutter in progress</figcaption>
          </figure>
          <figure>
            <img
              src={ringsImageUrl}
              alt='Rings result'
              style={{ width: '90%', display: 'inline-block' }}
            />
            <figcaption>Rings result</figcaption>
          </figure>
        </div>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', textAlign: 'center' }}>
          <figure>
            <img
              src={ringsInHandleImageUrl}
              alt='Rings placed in handle'
              style={{ width: '50%', display: 'inline-block', marginRight: '2%' }}
            />
            <figcaption>Head scratcher secured to handle with rings</figcaption>
          </figure>
        </div>
        <p>
          Up to this point, I had prepared all of the individual physical parts and software. All that remained was to assemble everything together.
        </p>
      </div>
      <hr className="solid"></hr>
      <div className="section" id='assembly'>
        <h2>Assembly</h2>
        <img src={solderingImageUrl} alt='Soldering' width='60%'/>
        <p>
          I only had a bit of soldering left to finish the orgASMR, as the flex sensor was designed to extend from the base and attach to one of the head scratcher's arms.
        </p>
        <p>
          With everything properly connected, I could finally piece the whole instrument together.
        </p>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', textAlign: 'center' }}>
          <figure>
            <img
              src={finalProtoboardImageUrl}
              alt='Finalized protoboard'
              style={{ width: '80%', display: 'inline-block', marginRight: '2%' }}
            />
            <figcaption>Finalized protoboard with Teensy and sensors</figcaption>
          </figure>
        </div>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', textAlign: 'center' }}>
          <figure>
            <img
              src={almostAssembledImageUrl}
              alt='Almost assembled orgASMR'
              style={{ width: '80%', display: 'inline-block', marginRight: '2%' }}
            />
            <figcaption>Functional components ready to be loaded into the handle</figcaption>
          </figure>
          <figure>
            <img
              src={fullyAssembledImageUrl}
              alt='Fully assembled orgASMR'
              style={{ width: '80%', display: 'inline-block', marginRight: '2%' }}
            />
            <figcaption>Fully assembled orgASMR with a final touch of galaxy duct tape</figcaption>
          </figure>
        </div>
      </div>
      <hr className="solid"></hr>
      <div className="section" id='showcase'>
        <h2>Instrument Showcase</h2>
        <img src={finalFormImageUrl} alt='Final form of orgASMR' width='80%'/>
        <p>
          The <a target='_blank' rel='noopener noreferrer' href={ORGASMR_DEMO_SHOWCASE_URL}>final performance</a> (same link as embedded video above but starting at 1:16) took place at Stanford's CCRMA building, where dozens of curious attendees explored the orgASMR alongside 16 other student-designed hybrid instruments. The orgASMR withstood the hands and heads of many users throughout the event. The culmination of my work was performing a musical "piece" in front of the audience to showcase the novelty of my instrument. Even my dad attended, and I think he may have cried with what I only hope were tears of joy.
        </p>
      </div>
      <hr className="solid"></hr>
      <div className="section" id='reflections'>
        <h2>Reflections</h2>
        <ul>
          <li>
            <b>It's okay to get crafty on creative projects.</b> I hadn't originally planned to design rings to secure the head scratcher within the custom handle, but when I noticed that it wobbled too much, I had to improvise. Fortunately, I had plenty of resources available such as a laser cutter, so the wobbles were more of a speed bump than a show stopper.
          </li>
          <li>
            <b>It's also okay to lean into the craziness.</b> I spent many late nights in the product realization lab at CCRMA, which admittedly was not good for my sleep schedule, but perhaps disinhibited me enough to entertain otherwise silly ideas such as using a head scratcher as a musical instrument. With such an open-ended final project, I felt free to explore how far I could push this quirky idea into reality.
          </li>
          <li>
            <b>Feedback is essential along every design iteration step.</b> I was grateful to work alongside such creative, talented, and dedicated students and professors who were forthcoming with their suggestions for improvement. Not only did they lean into the craziness with me, but they helped me see the ways in which I could take the orgASMR to the next level. A great product emerges from a great team.
          </li>
        </ul>
      </div>
    </PageTemplate>
  );
};

export default OrgASMR;