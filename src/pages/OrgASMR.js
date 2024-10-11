// src/pages/OrgASMR.js
import React, { useState } from 'react';
import PageTemplate from '../components/PageTemplate';

import firstSketchImageUrl from '../assets/images/orgasmr/first-sketch.jpg';
import protoboard1ImageUrl from '../assets/images/orgasmr/protoboard-1.jpg';
import protoboard1VideoUrl from '../assets/images/orgasmr/protoboard-1.mp4';
import protoboard2ImageUrl from '../assets/images/orgasmr/protoboard-2.jpg';
import solderingImageUrl from '../assets/images/orgasmr/soldering.jpg';

const ORGASMR_DEMO_URL = 'https://www.youtube.com/embed/6NVlh2iXAhg?si=TpFMYwpbAOgr7bNq';
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
      title='"orgASMR": A Head-Scratching Musical Interface' 
      refs={refs} 
      setRefs={setRefs} 
      generateRefsFromDOM={generateRefsFromDOM}
    >
      <h3>Completed March 2019</h3>
      <div className="section" id='overview'>
        <h2 style={{ display: 'none' }}>Overview</h2>
        <div className="video">
          <iframe className="responsive-iframe" src={ORGASMR_DEMO_URL} title="orgASMR Demo" frameBorder="0" allow="autoplay; encrypted-media;" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
        </div>
        <br></br>
        <p>
          An adaptation of the popular "Head Scratcher," the "orgASMR" takes ASMR (autonomous sensory meridian response) to the next level. It produces trance-like audio effects by detecting the amount of flex from the head scratcher's legs and the orientation of the handle. It also includes volume control and an on/off button. Combining the simplicity of chord progression with the intricacy of movement, the orgASMR is sure to blow your mind.
        </p>
      </div>
      <br></br>
      <hr className="solid"></hr>
      <br></br>
      <div className="section" id='background'>
        <h2>Background</h2>
        <p>
          In my Senior Winter quarter at Stanford in 2019, I took "<a target='_blank' rel='noopener noreferrer' href={CCRMA_CLASS_URL}>MUSIC 250A</a>: Physical Interaction Design for Music." In this class, we explored how we can physically interact with real-time electronic sound by using and designing sensors, circuits, embedded computers, communication protocols and sound synthesis. For my final project, I designed and built a hybrid musical instrument that integrated both acoustic and electronic components, which I showcased during a final performance alongside other student inventions. I implemented the "orgASMR," which I will describe in more detail in the sections below.
        </p>
      </div>
      <br></br>
      <hr className="solid"></hr>
      <br></br>
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
      <br></br>
      <hr className="solid"></hr>
      <br></br>
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
      <br></br>
      <hr className="solid"></hr>
      <br></br>
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
      <br></br>
      <hr className="solid"></hr>
      <br></br>
      <div className="section" id='modeling'>
        <h2>Modeling</h2>
        <p>
          I aimed to design a sleek handle that would both conceal the functional but less aesthetically pleasing components of the orgASMR and complement the instrument's unique concept. To achieve this, I used <a target='_blank' rel='noopener noreferrer' href={SOLIDWORKS_URL}>SolidWorks</a>, a 3D CAD design software, to design the handle.
        </p>
        
      </div>
      <br></br>
      <hr className="solid"></hr>
      <br></br>
      <div className="section" id='assembly'>
        <h2>Assembly</h2>
        <p>

        </p>
      </div>
      <br></br>
      <hr className="solid"></hr>
      <br></br>
      <div className="section" id='showcase'>
        <h2>Instrument Showcase</h2>
        <p>
          Add more specific content here.
        </p>
      </div>
    </PageTemplate>
  );
};

export default OrgASMR;